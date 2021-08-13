import PropTypes from 'prop-types'
import Colors from '../../utils/ColorScheme'
import './MouseContext.scss'

const blocks = {
  Wall: Colors.darkest,
  Start: Colors.accent1,
  End: Colors.accent2,
}

const MouseContext = ({ mousePos, block }) => {
  const style = {
    left: mousePos.x + 10,
    top: mousePos.y - 10,
    backgroundColor: blocks[block],
  }

  return <div className='context' style={style}></div>
}

MouseContext.propTypes = {
  mousePos: PropTypes.object.isRequired,
  block: PropTypes.string.isRequired,
}

export default MouseContext
