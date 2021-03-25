import './Pathfinder.css'
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
  'Greedy Depth-First Search',
  'Dijkstra\'s Algorithm',
]

// Placeable block types
const blockTypes = [
  'Wall',
  'Start',
  'End',
]

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
  const { gridState, setGridState } = useGridUpdater(cellSize)

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

    // Shallow copy the gridState
    const stateCopy = [...gridState]

    // Clear start if we are replacing it, or adding a new one
    if (validStart() && (stateCopy[y][x] === 'Start' || blockTypes[blockType] === 'Start')) {
      stateCopy[startPoint.y][startPoint.x] = 'Empty'
      clearStartPoint()
    }

    // If we are adding a start, remove the old one first
    if (blockTypes[blockType] === 'Start') {
      updateStartPoint(y, x)
    }

    stateCopy[y][x] = blockTypes[blockType]
    setGridState(stateCopy)
  }

  // Sets all points in the points array to visited
  const setState = (points, newState) => {
    const gridStateCopy = [...gridState]
    points.forEach(point => {
      gridStateCopy[point.y][point.x] = newState
    })
    setGridState(gridStateCopy)
  }

  // Main Pathfinding object
  const pathfinder = new Algorithms(algorithm)
  let clocker = undefined

  // Starts a pathfinding session
  const startPathfinding = () => {
    // First prepare the controller
    pathfinder.prepareController(gridState, cellsX, cellsY)

    // Then, clock it on an interval
    clocker = setInterval(() => {

      // Mark the old frontier as visited
      setState(pathfinder.frontier, 'Visited')

      // Clock the current pathfinder session
      pathfinder.clock()

      // If we don't have anything to update, then stop the pathfinding
      if (pathfinder.frontier.length === 0)
        stopPathfinding()

      // Update the new frontier
      setState(pathfinder.frontier, 'Frontier')

      // We found the goal!
      if (pathfinder.done) {
        // setState(pathfinder.frontier, 'Path')
        stopPathfinding()
      }

    }, 100)
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
            variant="outline-light"
            onClick={startPathfinding}
          >
            Pathfind!
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
