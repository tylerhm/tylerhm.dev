import knownWords from './knownWords.js'
import validAnswers from './validAnswers.js'

const getCurrentDay = () => {
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2022, 1, 1)
  const secondDate = new Date()

  const diffDays = Math.floor(Math.abs((firstDate - secondDate) / oneDay))
  return diffDays
}

const dayChaotisizer = (day) => {
  return day*day*7 + day*37 + 21
}

let wordIndex = dayChaotisizer(getCurrentDay())

const getGuessResponse = (guess) => {
  if (!knownWords.includes(guess)) return null
  const target = validAnswers[wordIndex % validAnswers.length]
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

export const getRandomWord = () => {
  wordIndex = Math.floor(Math.random() * 10000)
}

export default getGuessResponse