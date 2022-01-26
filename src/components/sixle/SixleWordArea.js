import { useState, useEffect } from 'react'

const STATUS = {
  'WRONG': 0,
  'ALMOST': 1,
  'RIGHT': 2,
}

const SixleWordArea = () => {
  const [history, setHistory] = useState([])
  const [word, setWord] = useState('')

  const handleSubmit = () => {
    if (word.length !== 6) return
    history.push([
      STATUS.RIGHT,
      STATUS.RIGHT,
      STATUS.RIGHT,
      STATUS.RIGHT,
      STATUS.RIGHT,
      STATUS.RIGHT,
    ])
    setHistory(history)
  }
  
  const handleKeyDown = (event) => {
    // Enter
    if (event.keyCode == 13) {
      handleSubmit()
      return
    }

    // backspace
    if (event.keyCode == 8) {
      if (word.length > 0)
        setWord(word.substr(0, word.length - 1))
      return
    }

    if (event.keyCode < 65 || event.keyCode > 90) return
    if (word.length === 6) return

    const letter = String.fromCharCode('a'.charCodeAt(0) + event.keyCode - 65)
    setWord(word + letter)
  }
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, handleSubmit, word, setWord])

  return (
    <div className="Grid">
      {
        history.map((row) => {
          
        })
      }
    </div>
  )
}

export default SixleWordArea