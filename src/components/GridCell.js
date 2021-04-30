import './GridCell.scss'
import PropTypes from 'prop-types'

const GridCell = ({ color, size, cellClicked, mouseDown }) => {
  // Styles for a grid cell
  const styles = {
    cell: {
      width: size,
      height: size,
      borderRadius: 5,
      backgroundColor: color,
    }
  }

  return (
    <div
      onMouseDown={cellClicked}
      onMouseEnter={mouseDown ? cellClicked : undefined}
      onDragStart={e => e.preventDefault()}
    >
      <div className='cell' style={styles.cell} />
    </div>
  )
}

GridCell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  cellClicked: PropTypes.func,
  mouseDown: PropTypes.bool
}

export default GridCell
