export const getBlankGrid = () => {
  const grid = []

  for (let i = 0; i < 7; i++) {
    grid.push([])
    for (let j = 0; j < 6; j++) {
      grid[i].push({
        char: null,
        status: 3
      })
    }
  }

  return grid
}

export const getBlankKeys = () => {
  const keys = []
  
  for (let i = 0; i < 26; i++) {
    keys.push({
      char: String.fromCharCode('A'.charCodeAt(0) + i),
      status: 3
    })
  }

  return keys
}