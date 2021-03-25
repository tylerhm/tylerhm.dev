import PropTypes from 'prop-types'
import GridCell from './GridCell'
import Colors from '../utils/ColorScheme'

// Manage all possible wall states
const states = {
  Empty: Colors.lightest,
  Wall: Colors.darkest,
  Start: Colors.accent1,
  End: Colors.accent2,
  Frontier: Colors.accent3,
  Visited: Colors.accent1,
  Path: Colors.accent2,
}

const PathfindingGrid = ({ gridState, cellSize, cellClicked, style }) => {

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