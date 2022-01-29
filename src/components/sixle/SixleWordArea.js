import './SixleWordArea.scss'
import { useState, useEffect } from 'react'
import ColorScheme from '../../utils/ColorScheme'
import { getBlankGrid, getBlankKeys } from '../../utils/sixle/BlankGridGen'
import getGuessResponse, { getRandomWord } from '../../utils/sixle/getGuessResponse'
import { PropTypes } from 'prop-types'

export const STATUS = {
  'WRONG': 0,
  'ALMOST': 1,
  'RIGHT': 2,
  'NONE': 3
}

export const COLORS = {
  [STATUS.WRONG]: '#292f3688',
  [STATUS.ALMOST]: ColorScheme.accent3,
  [STATUS.RIGHT]: ColorScheme.green,
  [STATUS.NONE]: ColorScheme.darkest,
}

const SixleWordArea = ({ keys, setKeys, lastKey }) => {
  const [grid, setGrid] = useState(getBlankGrid())
  const [gridIdx, setGridIdx] = useState(0)
  const [wordIdx, setWordIdx] = useState(0)

  const checkWord = (word) => {    
    const response = getGuessResponse(word)
    if (response == null) return false

    const newKeys = [...keys]
    for (let i = 0; i < 6; i++) {
      grid[gridIdx][i].status = response[i]
      
      const charIdx = word.charCodeAt(i) - 'A'.charCodeAt(0)
      if (response[i] === STATUS.RIGHT ||
        (response[i] === STATUS.ALMOST && (keys[charIdx].status === STATUS.NONE || keys[charIdx].status === STATUS.WRONG)) ||
        (response[i] === STATUS.WRONG && (keys[charIdx].status === STATUS.NONE)))
        newKeys[charIdx].status = response[i]
    }
    setKeys(newKeys)

    return true
  }

  const handleSubmit = () => {
    if (wordIdx < 6) return
    const word = grid[gridIdx].reduce((curWord, stat) => curWord + stat.char, '')
    
    if (word === 'ZZZZZZ') {
      setGrid(getBlankGrid())
      setKeys(getBlankKeys())
      setWordIdx(0)
      setGridIdx(0)
      getRandomWord()
      return false
    }

    if (!checkWord(word)) return
    setGridIdx(gridIdx + 1)
    setWordIdx(0)
  }

  const handleKeyDown = (event) => {
    // Enter
    if (event.keyCode == 13) {
      handleSubmit()
      return
    }

    // Backspace
    if (event.keyCode == 8) {
      if (wordIdx > 0) {
        const newWordIndex = wordIdx - 1
        grid[gridIdx][newWordIndex] = {
          char: null,
          status: STATUS.NONE
        }
        setWordIdx(newWordIndex)
      }
      return
    }

    // Not allowed
    if (event.keyCode < 65 || event.keyCode > 90) return
    if (wordIdx >= 6) return

    // Change the letter
    const letter = String.fromCharCode('A'.charCodeAt(0) + event.keyCode - 65)
    
    // Make the update
    const gridCopy = [...grid]
    gridCopy[gridIdx][wordIdx].char = letter
    setWordIdx(wordIdx + 1)
    setGrid(gridCopy)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, handleSubmit, grid, wordIdx, gridIdx])

  useEffect(() => {
    if (lastKey != null) {
      if (lastKey.charAt(lastKey.length - 1) === '$')
        lastKey = lastKey.substring(0, lastKey.length - 1)
      let event = {
        keyCode: -1
      }
      if (lastKey === 'backspace')
        event.keyCode = 8
      else if (lastKey === 'return')
        event.keyCode = 13
      else event.keyCode = lastKey.charCodeAt(0) - 'A'.charCodeAt(0) + 65
      handleKeyDown(event)
    }
  }, [lastKey])

  return (
    <div className="Grid">
      {
        grid.map((word, gIdx) =>
          <div className="Word" key={word.reduce((prev, stat) => prev + stat.char, '') + gIdx}>
            {
              word.map((stat, wIdx) => 
                <div className="Char" key={wIdx} style={{
                  backgroundColor: gIdx == gridIdx && wIdx == wordIdx ? '#292f36CC' : COLORS[stat.status],
                }}>
                  {stat.char}
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

SixleWordArea.propTypes = {
  keys: PropTypes.array,
  setKeys: PropTypes.func,
  lastKey: PropTypes.string
}

export default SixleWordArea
