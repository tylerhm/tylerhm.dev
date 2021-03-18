import PropTypes from 'prop-types'
import GridCell from './GridCell'

const PathfindingGrid = ({ dimensions }) => {
  // Parse the cellsX and Y from dimensions
  const [cellsX, cellsY] = [dimensions.width, dimensions.height]
  const cellSize = dimensions.cellSize
  
  // Calculate the boardwidth
  const style = {
    grid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      minWidth: cellSize*cellsX,
      width: cellSize*cellsX,
      backgroundColor: 'cyan',
    }
  }

  // Hold all of the grid items to be rendered
  const gridItems = []

  for (let cell = 0; cell < cellsX * cellsY; cell++) {
    gridItems.push(
      <GridCell size={cellSize}/>
    )
  }

  return (
    <div style={style.grid}>
      {gridItems}
    </div>
  )
}

PathfindingGrid.propTypes = {
  dimensions: PropTypes.object
}

export default PathfindingGrid