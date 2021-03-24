import './GridCell.css'
import PropTypes from 'prop-types'

const GridCell = ({ color, size, xLoc, yLoc, notifyClick }) => {
  // Styles for a grid cell
  const styles = {
    cell: {
      width: size,
      height: size,
      borderRadius: 5,
      backgroundColor: color,
    }
  }

  // Cyclic state updater
  const updateState = () => {
    notifyClick(xLoc, yLoc)
  }

  return (
    <a
      onClick={updateState}>
      <div
        className='cell'
        style={styles.cell} />
    </a>
  )
}

GridCell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  xLoc: PropTypes.number,
  yLoc: PropTypes.number,
  notifyClick: PropTypes.func,
}

export default GridCell
