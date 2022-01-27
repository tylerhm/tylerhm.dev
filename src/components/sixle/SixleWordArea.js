import './SixleWordArea.scss'
import { useState, useEffect } from 'react'
import ColorScheme from '../../utils/ColorScheme'
import getBlankGrid from '../../utils/sixle/BlankGridGen'

const STATUS = {
  'WRONG': 0,
  'ALMOST': 1,
  'RIGHT': 2,
  'NONE': 3
}

const COLORS = {
  [STATUS.WRONG]: ColorScheme.accent1,
  [STATUS.ALMOST]: ColorScheme.accent2,
  [STATUS.RIGHT]: ColorScheme.accent3,
  [STATUS.NONE]: ColorScheme.lightest
}

const SixleWordArea = () => {
  const [grid, setGrid] = useState(getBlankGrid())
  const [gridIdx, setGridIdx] = useState(0)
  const [wordIdx, setWordIdx] = useState(0)

  const checkWord = (index) => {
    console.log(index)
  }

  const handleSubmit = () => {
    if (wordIdx < 6) return
    checkWord(gridIdx)
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
          type: 4
        }
        setWordIdx(newWordIndex)
      }
      return
    }

    // Not allowed
    if (event.keyCode < 65 || event.keyCode > 90) return
    if (wordIdx >= 6) return

    // Change the letter
    const letter = String.fromCharCode('a'.charCodeAt(0) + event.keyCode - 65)
    
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

  return (
    <div className="Grid">
      {
        grid.map((word, wordIdx) =>
          <div className="Word" key={word.reduce((prev, stat) => prev + stat.char, '') + wordIdx}>
            {
              word.map((stat, idx) => 
                <div className="Char" key={idx} style={{
                  backgroundColor: COLORS[stat.status]
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

export default SixleWordArea
