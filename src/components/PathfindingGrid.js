import { useState } from 'react'
import PropTypes from 'prop-types'
import GridCell from './GridCell'
import Colors from '../utils/ColorScheme'

// Manage all possible wall states
const states = {
  Empty: 'white',
  Wall: Colors.darkest,
  Start: Colors.accent1,
  End: Colors.accent2,
  Visited: Colors.accent3,
  Path: Colors.path,
}

const PathfindingGrid = ({ gridState, cellSize, cellClicked, style }) => {

  const [mouseDown, setMouseDown] = useState(false)

  document.body.onmousedown = () => setMouseDown(true)
  document.body.onmouseup = () => setMouseDown(false)

  // Construct the grid
  const grid = []
  for (let y = 0; y < gridState.length; y++) {
    grid.push([])
    for (let x = 0; x < gridState[y].length; x++) {
      grid[y].push(
        <GridCell
          key={y.toString() + ',' + x.toString()}
          color={states[gridState[y][x]]}
          size={cellSize}
          cellClicked={() => cellClicked(y, x)}
          mouseDown={mouseDown}
        />
      )
    }
  }

  return (
    <div style={style}>
      {grid}
    </div>
  )
}

PathfindingGrid.propTypes = {
  gridState: PropTypes.array,
  cellSize: PropTypes.number,
  cellClicked: PropTypes.func,
  style: PropTypes.object
}

export default PathfindingGrid