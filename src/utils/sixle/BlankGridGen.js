const getBlankGrid = () => {
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

export default getBlankGrid