import './GridCell.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

// All colors
const colors = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  BLUE: '#0000FF',
  PURPLE: '#FF00FF',
}

// Manage all possible wall states
const states = {
  EMPTY: colors.WHITE,
  WALL: colors.BLACK,
  START: colors.BLUE,
  END: colors.PURPLE,
}

// Get the next button state
const nextState = (state) => {
  switch (state) {
  case states.EMPTY: return states.WALL
  case states.WALL: return states.START
  case states.START: return states.END
  case states.END: return states.EMPTY
  }
}

const GridCell = ({ size }) => {
  // State is.... stateful
  const [state, setState] = useState(states.EMPTY)

  // Cell specific styles
  const styles = {
    cell: {
      width: size,
      height: size,
      backgroundColor: state,
      borderRadius: 5,
    }
  }

  // Cyclic state updater
  const updateState = () => {
    setState(nextState(state))
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
  size: PropTypes.number,
}

export default GridCell
