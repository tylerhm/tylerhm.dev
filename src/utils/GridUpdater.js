import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const constructGridState = (cellSize) => {
  // Get those dimensions!
  const { width, height } = getWindowDimensions()

  // Calculate necessary dimensions for pathfinding grid
  let cellsY = Math.round((height - 200) / cellSize)
  let cellsX = Math.round((width - 100) / cellSize)

  // These numbers must be odd to facilitate maze generation
  if (!(cellsY & 1)) cellsY--
  if (!(cellsX & 1)) cellsX--

  // 2D grid of Cells
  const gridState = []

  // Construct the gridState object
  for (let y = 0; y < cellsY; y++) {
    gridState.push([])
    for (let x = 0; x < cellsX; x++)
      gridState[y].push('Empty')
  }

  return gridState
}

const useGridState = (cellSize) => {
  const [gridState, setGridState] = useState(constructGridState(cellSize))

  const resetGridState = () => setGridState(constructGridState(cellSize))

  useEffect(() => {
    resetGridState()

    window.addEventListener('resize', resetGridState)
    return () => window.removeEventListener('resize', resetGridState)
  }, [])

  return { gridState, setGridState, resetGridState }
}

export default useGridState