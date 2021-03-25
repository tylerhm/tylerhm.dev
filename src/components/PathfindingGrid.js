import PropTypes from 'prop-types'
import GridCell from './GridCell'
import Colors from '../utils/ColorScheme'

// Manage all possible wall states
const states = {
  EMPTY: Colors.lightest,
  WALL: Colors.darkest,
  START: Colors.accent1,
  END: Colors.accent2,
  FRONTIER: Colors.accent3,
  VISITED: Colors.accent1,
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

  console.log(grid)

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