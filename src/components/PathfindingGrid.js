import { useState } from 'react'
import PropTypes from 'prop-types'
import GridCell from './GridCell'
import Colors from '../utils/ColorScheme'
import Algorithms from '../utils/Algorithms'
import Button from 'react-bootstrap/Button'


const useForceUpdate = () => {
  const [value, setValue] = useState(0)
  return () => setValue(value => value + 1)
}

// Manage all possible wall states
const states = {
  EMPTY: Colors.lightest,
  WALL: Colors.darkest,
  START: Colors.accent1,
  END: Colors.accent2,
  FRONTIER: Colors.accent3,
  VISITED: Colors.accent1,
}

// Get the next button state
const nextState = (state) => {
  switch (state) {
  case 'EMPTY': return 'WALL'
  case 'WALL': return 'START'
  case 'START': return 'END'
  case 'END': return 'EMPTY'
  }
}

const PathfindingGrid = ({ dimensions, initialGridState, selectedAlgorithm }) => {
  // Force the update
  const forceUpdate = useForceUpdate()

  // Parse the cellsX and Y from dimensions
  const [cellsX, cellsY] = [dimensions.width, dimensions.height]
  const cellSize = dimensions.cellSize

  const [startCell, setStartCell] = useState({x: 0, y: 0})

  // Thickness of grid border
  const borderWidth = 3
  
  // Calculate the boardwidth
  const styles = {
    grid: {
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

  // Current grid status is stateful
  const gridState = initialGridState

  // Updates the grid state, and notifies for re-render
  const propogateGridState = (xLoc, yLoc) => {
    gridState[yLoc][xLoc] = nextState(gridState[yLoc][xLoc])
    if (gridState[yLoc][xLoc] === 'START') {
      gridState[startCell.y][startCell.x] = 'EMPTY'
      setStartCell({x: xLoc, y: yLoc})
    }
    forceUpdate()
  }

  const setFrontier = (points) => {
    points.forEach(point => {
      gridState[point.y][point.x] = 'FRONTIER'
    })
    forceUpdate()
  }

  const setVisited = (points) => {
    points.forEach(point => {
      gridState[point.y][point.x] = 'VISITED'
    })
    forceUpdate()
  }

  // Construct the grid
  const grid = []
  for (let y = 0; y < cellsY; y++) {
    grid.push([])
    for (let x = 0; x < cellsX; x++) {
      grid[y].push(
        <GridCell
          key={y.toString() + ',' + x.toString()}
          color={states[gridState[y][x]]}
          size={cellSize}
          xLoc={x}
          yLoc={y}
          notifyClick={propogateGridState}
        />
      )
    }
  }

  const getWalls = () => {
    const walls = []
    for (let y = 0; y < cellsY; y++)
      for (let x = 0; x < cellsX; x++)
        if (gridState[y][x] === 'WALL')
          walls.push({x: x, y: y})
    return walls
  }

  // Main Pathfinding object
  const pathfinder = new Algorithms(selectedAlgorithm)
  let clocker = undefined

  // Starts a pathfinding session
  const startPathfinding = () => {
    const walls = getWalls()
    pathfinder.prepareController(startCell, walls, cellsX, cellsY)
    clocker = setInterval(() => {

      // Remove the old frontier
      setVisited(pathfinder.frontier)

      // Clock the current pathfinder session
      pathfinder.clock()

      // If we don't have anything to update, then stop the pathfinding
      if (pathfinder.frontier.length === 0)
        stopPathfinding()

      // Update the new frontier
      setFrontier(pathfinder.frontier)
    }, 100)
  }

  // Clears the pathfinding interval
  const stopPathfinding = () => {
    clearInterval(clocker)
  }

  return (
    <div>
      <Button
        style={{margin: 5}}
        variant='primary'
        onClick={startPathfinding}
      >
        Pathfind!
      </Button>
      <Button
        style={{margin: 5}}
        variant='danger'
        onClick={stopPathfinding}
      >
        Stop
      </Button>
      <div style={styles.grid}>
        {grid}
      </div>
    </div>
  )
}

PathfindingGrid.propTypes = {
  dimensions: PropTypes.object,
  initialGridState: PropTypes.array,
  selectedAlgorithm: PropTypes.number,
}

export default PathfindingGrid