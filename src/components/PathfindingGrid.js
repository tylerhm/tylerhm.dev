import { useState } from 'react'
import PropTypes from 'prop-types'
import GridCell from './GridCell'
import Colors from '../utils/ColorScheme'

// Manage all possible wall states
const states = {
  EMPTY: Colors.lightest,
  WALL: Colors.darkest,
  START: Colors.accent1,
  END: Colors.accent2,
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

const constructGridState = (cellsY, cellsX) => {
  // 2D grid of Cells
  const gridState = []

  // Construct the gridState object
  for (let y = 0; y < cellsY; y++) {
    gridState.push([])
    for (let x = 0; x < cellsX; x++)
      gridState[y].push('EMPTY')
  }

  return gridState
}

const PathfindingGrid = ({ dimensions }) => {
  // Parse the cellsX and Y from dimensions
  const [cellsX, cellsY] = [dimensions.width, dimensions.height]
  const cellSize = dimensions.cellSize
  
  // Calculate the boardwidth
  const styles = {
    grid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      minWidth: cellSize * cellsX + 6,
      width: cellSize * cellsX + 6,
      backgroundColor: Colors.darkest,
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: Colors.darkest,
    },
  }

  // Current grid status is stateful
  const [gridState, setGridState] = useState(constructGridState(cellsY, cellsX))

  const updateGridState = (xLoc, yLoc) => {
    // Copy grid state
    const curGridState = [...gridState]
    curGridState[yLoc][xLoc] = nextState(curGridState[yLoc][xLoc])
    setGridState(curGridState)
  }

  const grid = []
  for (let y = 0; y < cellsY; y++) {
    grid.push([])
    for (let x = 0; x < cellsX; x++) {
      grid[y].push(
        <GridCell
          key={y.toString()+','+x.toString()}
          color={states[gridState[y][x]]}
          size={cellSize}
          xLoc={x}
          yLoc={y}
          notifyClick={updateGridState}
        />
      )
    }
  }

  return (
    <div style={styles.grid}>
      {grid}
    </div>
  )
}

PathfindingGrid.propTypes = {
  dimensions: PropTypes.object,
}

export default PathfindingGrid