import knownWords from './knownWords.js'
import validAnswers from './validAnswers.js'

const getCurrentDay = () => {
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2022, 1, 1)
  const secondDate = new Date()

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
  return diffDays
}

const currentDay = getCurrentDay()

const getGuessResponse = (guess) => {
  if(!knownWords.includes(guess)) return null
  const target = validAnswers[currentDay % validAnswers.length]
  const res = [0, 0, 0, 0, 0, 0]
  const targFreq = []
  for (let i = 0; i < 26; i++)
    targFreq.push(0)

  for (let i = 0; i < 6; i++) {
    if (guess[i] == target[i])
      res[i] = 2
    else
      targFreq[target[i].charCodeAt(0) - 'A'.charCodeAt(0)]++
  }
  for (let i = 0; i < 6; i++) {
    if (guess[i] != target[i])
      if (targFreq[guess[i].charCodeAt(0) - 'A'.charCodeAt(0)] > 0) {
        targFreq[guess[i].charCodeAt(0) - 'A'.charCodeAt(0)]--
        res[i] = 1
      }
  }
  return res
}

export default getGuessResponse