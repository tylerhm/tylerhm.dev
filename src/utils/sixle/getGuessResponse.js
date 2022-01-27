import knownWords from "./knownWords.js"
import validAnswers from "./validAnswers.js"

const getCurrentDay = () => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2022, 1, 1);
    const secondDate = new Date();

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log(diffDays)
    return diffDays
}

const getGuessResponse = (guess) => {
    if(!knownWords.includes(guess)) return null
    target = validAnswers[getCurrentDay%validAnswers.length]
    res = "000000"
    targFreq = []
    for (let i = 0; i < 26; i++) {
        targFreq.push(0)
    }
    for (let i = 0; i < 6; i++) {
        if (guess[i] == target[i]){
            res[i] = '2'
        } else {
            targFreq[target[i].charCodeAt(0)-'A'.charCodeAt(0)]++
        }
    }
    for (let i = 0; i < 6; i++){
        if (guess[i] != target[i]) {
            if(targFreq[guess[i].charCodeAt(0)-'A'.charCodeAt(0)] > 0){
                targFreq[guess[i].charCodeAt(0)-'A'.charCodeAt(0)]--
                res[i] = '1'
            }
        }
    }
    return res
}

export default getGuessResponse