import './Pathfinder.scss'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ContextualDropdown from '../components/ContextualDropdown'
import PathfindingGrid from '../components/PathfindingGrid.js'
// import useWindowDimensions from '../utils/WindowDimensions'
import Colors from '../utils/ColorScheme'
import useGridUpdater from '../utils/GridUpdater'
import Algorithms from '../utils/Algorithms'

// Algorithms implemented by the Pathfinder
const algorithms = [
  'Breadth-First Search',
  'Depth-First Search',
  // 'Greedy Depth-First Search',
  // 'Dijkstra\'s Algorithm',
]

// Placeable block types
const blockTypes = [
  'Wall',
  'Start',
  'End',
]

const clockSpeed = 50

const Pathfinder = () => {

  // Currently selected algorithm and block type is stateful
  const [algorithm, setAlgorithm] = useState(0)
  const [blockType, setBlockType] = useState(0)

  // Updates the algorithm by index
  const updateSelectedAlgorithm = (algorithmIndex) => {
    setAlgorithm(algorithmIndex)
  }

  // Updates the block type by index
  const updateSelectedBlockType = (blockTypeIndex) => {
    setBlockType(blockTypeIndex)
  }

  const cellSize = 50

  // gridState is updated when window size changes
  const { gridState, setGridState, resetGridState } = useGridUpdater(cellSize)

  // Calculate necessary dimensions for pathfinding grid
  const cellsY = gridState.length
  const cellsX = cellsY > 0 ? gridState[0].length : 0

  // Thickness of grid border
  const borderWidth = 3
  
  // Grid style
  const styles = {
    gridContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      minWidth: cellSize * cellsX + 2 * borderWidth,
      width: cellSize * cellsX + 2 * borderWidth,
      backgroundColor: Colors.darkest,
      borderWidth: borderWidth,
      borderStyle: 'solid',
      borderColor: Colors.darkest,
    },
  }

  // Will be true when done pathing
  const [pathing, setPathing] = useState(false)

  // Will be true when pathing just finished
  const [pathDisplayed, setPathDisplayed] = useState(false)

  // Maintain the current location of the start node
  const [startPoint, setStartPoint] = useState({
    x: undefined,
    y: undefined,
  })
  
  const validStart = () => {
    return startPoint.y !== undefined && startPoint.x !== undefined
  }

  const updateStartPoint = (y, x) => {
    const startPointCopy = JSON.parse(JSON.stringify(startPoint))
    startPointCopy.y = y
    startPointCopy.x = x
    setStartPoint(startPointCopy)
  }
  // Removes data from the startPoint
  const clearStartPoint = () => {
    updateStartPoint(undefined, undefined)
  }

  // Update a cell to the cyclic next state
  const cellClicked = (y, x) => {

    if (pathing)
      return

    // Clear the fontier if necessary
    if (pathDisplayed) {
      clearVisitedAndPath()
      setPathDisplayed(false)
    }

    // Shallow copy the gridState
    const gridStateCopy = [...gridState]

    // Check the status of the current block
    const clickedCellState = gridStateCopy[y][x]

    // Are we erasing?
    const erase = clickedCellState === blockTypes[blockType]

    if (erase) {
      // If the cell was start, then remove the tracking on start node.
      if (clickedCellState === 'Start')
        clearStartPoint()

      // Empty the cell
      gridStateCopy[y][x] = 'Empty'
    }
    else {
      // If we are placing a start, update the start location
      if (blockTypes[blockType] === 'Start') {
        if (validStart())
          gridStateCopy[startPoint.y][startPoint.x] = 'Empty'
        updateStartPoint(y, x)
      }

      gridStateCopy[y][x] = blockTypes[blockType]
    }

    setGridState(gridStateCopy)
  }

  // Sets all points in the points array to visited
  const setGridStateFromPoints = (points, newState) => {
    const gridStateCopy = [...gridState]
    points.forEach(point => {
      if (gridStateCopy[point.y][point.x] !== 'Start' && 
          gridStateCopy[point.y][point.x] !== 'End')
        gridStateCopy[point.y][point.x] = newState
    })
    setGridState(gridStateCopy)
  }

  const clearVisitedAndPath = () => {
    const gridStateCopy = [...gridState]
    for (let y = 0; y < cellsY; y++)
      for (let x = 0; x < cellsX; x++)
        if (gridStateCopy[y][x] === 'Visited' ||
            gridStateCopy[y][x] === 'Path')
          gridStateCopy[y][x] = 'Empty'
    setGridState(gridStateCopy)
  }

  // Main Pathfinding object
  const pathfinder = new Algorithms(algorithm)
  let clocker = undefined

  // Starts a pathfinding session
  const startPathfinding = () => {

    // If there is no start node, then don't start pathfinding
    // Alert the user
    if (!validStart() || pathing)
      return

    // If the path is still displayed, clear it.
    if (pathDisplayed) {
      clearVisitedAndPath()
      setPathDisplayed(false)
    }

    // First prepare the controller
    pathfinder.prepareController(gridState, cellsX, cellsY)

    setPathing(true)

    // Then, clock it on an interval
    clocker = setInterval(() => {

      // Clock the current pathfinder session
      pathfinder.clock()

      // We found the goal!
      if (pathfinder.done) {
        setGridStateFromPoints(pathfinder.path, 'Path')
        setPathDisplayed(true)
        setPathing(false)
        stopPathfinding()
      }
      else
        // Update the new frontier
        setGridStateFromPoints(pathfinder.visited, 'Visited')

    }, clockSpeed)
  }

  // Clears the pathfinding interval
  const stopPathfinding = () => {
    clearInterval(clocker)
  }

  return (
    <div className='layout'>
      <Navbar
        className='nav'
        bg='dark'
        variant='dark'
        expand='lg'>
        <Navbar.Brand href='/home'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <ContextualDropdown
              id='Pathfinding algorithm selector'
              items={algorithms}
              defaultSelected={algorithms[algorithm]}
              updateSelected={updateSelectedAlgorithm}
            />
            <ContextualDropdown
              id='Block type selector'
              items={blockTypes}
              defaultSelected={blockTypes[blockType]}
              updateSelected={updateSelectedBlockType}
            />
          </Nav>
          <Button
            style={{margin: 5}}
            variant="outline-light"
            onClick={startPathfinding}
          >
            Pathfind!
          </Button>
          <Button
            style={{margin: 5}}
            variant="outline-light"
            onClick={resetGridState}
          >
            Clear Grid
          </Button>
        </Navbar.Collapse>
      </Navbar>
      
      <div className='content'>
        <PathfindingGrid 
          style={styles.gridContainer}
          gridState={gridState}
          cellSize={cellSize}
          cellClicked={cellClicked}
        />
      </div>


    </div>
  )
}

export default Pathfinder
