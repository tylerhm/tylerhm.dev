import './GridCell.css'
import PropTypes from 'prop-types'

const GridCell = ({ color, size, cellClicked }) => {
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
    <a
      onClick={cellClicked}>
      <div
        className='cell'
        style={styles.cell} />
    </a>
  )
}

GridCell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  cellClicked: PropTypes.func,
}

export default GridCell
