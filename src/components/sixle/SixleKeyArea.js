import './SixleKeyArea.scss'
import { COLORS } from './SixleWordArea'
import { PropTypes } from 'prop-types'
import { IoBackspace, IoReturnDownBack } from 'react-icons/io5'
import useWindowDimensions from '../../utils/useWindowDimensions'

const getCharIndex = (char) => {
  return char.charCodeAt(0) - 'A'.charCodeAt(0)
}

const getChar = (index) => {
  return String.fromCharCode('A'.charCodeAt(0) + index)
}

const keyOrder = {
  0: getCharIndex('Q'),
  1: getCharIndex('W'),
  2: getCharIndex('E'),
  3: getCharIndex('R'),
  4: getCharIndex('T'),
  5: getCharIndex('Y'),
  6: getCharIndex('U'),
  7: getCharIndex('I'),
  8: getCharIndex('O'),
  9: getCharIndex('P'),
  10: getCharIndex('A'),
  11: getCharIndex('S'),
  12: getCharIndex('D'),
  13: getCharIndex('F'),
  14: getCharIndex('G'),
  15: getCharIndex('H'),
  16: getCharIndex('J'),
  17: getCharIndex('K'),
  18: getCharIndex('L'),
  19: getCharIndex('Z'),
  20: getCharIndex('X'),
  21: getCharIndex('C'),
  22: getCharIndex('V'),
  23: getCharIndex('B'),
  24: getCharIndex('N'),
  25: getCharIndex('M'),
}

const SixleKeyArea = ({ keys, lastKey, setLastKey }) => {
  const { width, height } = useWindowDimensions()
  const rowOne = [], rowTwo = [], rowThree = []

  const broadcastKey = (type) => {
    if (lastKey == null || lastKey.charAt(lastKey.length - 1) === '$')
      setLastKey(type)
    else setLastKey(type + '$')
  }

  for (let i = 0; i < 10; i++)
    rowOne.push(
      <button className="Key" key={keyOrder[i]} style={{
        backgroundColor: COLORS[keys[keyOrder[i]].status]
      }} onClick={() => broadcastKey(getChar(keyOrder[i]))}>
        {getChar(keyOrder[i])}
      </button>
    )

  for (let i = 10; i < 19; i++)
    rowTwo.push(
      <button className="Key" key={keyOrder[i]} style={{
        backgroundColor: COLORS[keys[keyOrder[i]].status]
      }} onClick={() => broadcastKey(getChar(keyOrder[i]))}>
        {getChar(keyOrder[i])}
      </button>
    )
  
  rowThree.push(
    <button className="Backspace" key="backspace" onClick={() => broadcastKey('backspace')}>
      <IoBackspace size={Math.min(width / 8, height / 12)} />
    </button>
  )
  for (let i = 19; i < 26; i++)
    rowThree.push(
      <button className="Key" key={keyOrder[i]} style={{
        backgroundColor: COLORS[keys[keyOrder[i]].status]
      }} onClick={() => broadcastKey(getChar(keyOrder[i]))}>
        {getChar(keyOrder[i])}
      </button>
    )
  rowThree.push(
    <button className="Return" key="return" onClick={() => broadcastKey('return')}>
      <IoReturnDownBack size={Math.min(width / 14, height / 18)} color="white" />
    </button>
  )

  return <div className="Keyboard">
    <div className="Row">{rowOne}</div>
    <div className="Row">{rowTwo}</div>
    <div className="Row">{rowThree}</div>
  </div>
}

SixleKeyArea.propTypes = {
  keys: PropTypes.array,
  lastKey: PropTypes.string,
  setLastKey: PropTypes.func
}

export default SixleKeyArea