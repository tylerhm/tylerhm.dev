import p5Types from 'p5'

let width, height
let cellSize, cellsX, cellsY
let percentDispData, dataPixelWidth, cellsPixelWidth
let predatorCells, preyCells
let predatorCellsBuffer, preyCellsBuffer
let predatorHealth, preyHealth
let predatorHealthBuffer, preyHealthBuffer
let predatorChance, preyChance
let predatorMaxHealth, preyMaxHealth
let maxSpeciesCount, dataCap
let timeDelay, timeBuffer
let preyCount, predatorCount
let preyDataHeight, predatorDataHeight

function setup(p5, canvasParentRef, dimensions) {
  
  width = dimensions.width
  height = dimensions.height

  p5.createCanvas(width, height).parent(canvasParentRef)

  cellSize = 10
  preyChance = 0.05
  predatorChance = 0.05
  predatorMaxHealth = 25
  preyMaxHealth = 25

  percentDispData = 0.2
  dataPixelWidth = Math.floor(percentDispData * width)
  cellsPixelWidth = width - dataPixelWidth
  
  cellsX = Math.floor(cellsPixelWidth / cellSize)
  cellsY = Math.floor(height / cellSize)
  
  predatorCells = makeArr(cellsY, cellsX)
  preyCells = makeArr(cellsY, cellsX)
  
  predatorCellsBuffer = makeArr(cellsY, cellsX)
  preyCellsBuffer = makeArr(cellsY, cellsX)
  predatorHealth = makeArr(cellsY, cellsX)
  preyHealth = makeArr(cellsY, cellsX)
  
  predatorHealthBuffer = makeArr(cellsY, cellsX)
  preyHealthBuffer = makeArr(cellsY, cellsX)

  maxSpeciesCount = cellsX * cellsY
  dataCap = Math.floor(maxSpeciesCount / 4)

  timeDelay = 0
  timeBuffer = 500

  initializeCells()
}

function draw(p5) {
  if (p5.millis() > timeBuffer) {
    calculateCells()
    drawCells(p5)
    drawData(p5)
    timeBuffer += timeDelay
  }
}

function makeArr(rows, cols) { return Array(rows).fill().map(() => Array(cols).fill(0)) }

function initializeCells() {
  for(let y = 0; y < cellsY; y++) {
    for(let x = 0; x < cellsX; x++) {
      const randomNum = Math.random()
      
      if (randomNum <= predatorChance) {
        predatorCells[y][x] = 1
        predatorHealth[y][x] = predatorMaxHealth
      } else if (randomNum > predatorChance && randomNum <= preyChance + predatorChance) {
        preyCells[y][x] = 1
        preyHealth[y][x] = 0
      }
    }
  }
}

function calculateCells() {
  for(let y = 0; y < cellsY; y++) {
    for(let x = 0; x < cellsX; x++) {
      
      // logic if ONLY predator exists
      if(predatorCells[y][x] === 1 && preyCells[y][x] === 0) {
        const newCoord = moveCell(y, x)
        
        const newX = newCoord.x
        const newY = newCoord.y
        
        if(predatorCellsBuffer[newY][newX] !== 1) {
          predatorCellsBuffer[newY][newX] = 1
          predatorCellsBuffer[y][x] = 0
          predatorHealthBuffer[newY][newX] = predatorHealth[y][x]
          predatorHealthBuffer[y][x] = 0
        } else {
          predatorCellsBuffer[y][x] = 1
          predatorHealthBuffer[y][x] = predatorHealth[y][x]
        }
      }
      
      // logic if ONLY prey exists
      if(preyCells[y][x] === 1 && predatorCells[y][x] === 0) {
        const newCoord = moveCell(y, x)
        
        const newX = newCoord.x
        const newY = newCoord.y
  
        if(preyCellsBuffer[newY][newX] !== 1) {
          preyCellsBuffer[newY][newX] = 1
          preyCellsBuffer[y][x] = 0
          preyHealthBuffer[newY][newX] = preyHealth[y][x]
          preyHealthBuffer[y][x] = 0
        } else {
          preyCellsBuffer[y][x] = 1
          preyHealthBuffer[y][x] = preyHealth[y][x]
        }
      }
    } 
  }
  for(let y = 0; y < cellsY; y++) {
    for(let x = 0; x < cellsX; x++) {
      
      // logic if predator AND prey exist AFTER they move
      if(preyCellsBuffer[y][x] === 1 && predatorCellsBuffer[y][x] === 1) {
        preyCellsBuffer[y][x] = 0
        
        predatorHealthBuffer[y][x] += preyHealthBuffer[y][x]
        if(predatorHealthBuffer[y][x] > predatorMaxHealth)
          predatorHealthBuffer[y][x] = predatorMaxHealth
        
        const newCoord = moveCell(y, x)
        
        const newX = newCoord.x
        const newY = newCoord.y
        
        predatorCellsBuffer[newY][newX] = 1
        predatorHealthBuffer[newY][newX] = predatorHealthBuffer[y][x]
        preyHealthBuffer[y][x] = 0
      }
      
      // duplicate prey if heatlh max
      if(preyHealthBuffer[y][x] === preyMaxHealth) {
        const newCoord = moveCell(y, x)
        
        const newX = newCoord.x
        const newY = newCoord.y
        
        preyCellsBuffer[newY][newX] = 1
        preyHealthBuffer[newY][newX] = 1
      }
      
      // update main array to match buffer
      predatorCells[y][x] = predatorCellsBuffer[y][x]
      preyCells[y][x] = preyCellsBuffer[y][x]
      
      predatorHealth[y][x] = predatorHealthBuffer[y][x]
      preyHealth[y][x] = preyHealthBuffer[y][x]
      
      if(predatorHealth[y][x] === 0)
        predatorCellsBuffer[y][x] = 0
        
      if(predatorHealth[y][x] > 0)
        predatorHealth[y][x]--
        
      if(preyHealth[y][x] < preyMaxHealth)
        preyHealth[y][x]++
    }
  }
}

function randomInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }

function moveCell(y, x) {
  let newY = randomInclusive(y - 1, y + 1)
  let newX = randomInclusive(x - 1, x + 1)
  
  if (newY < 0 || newY >= cellsY) newY = y
  if (newX < 0 || newX >= cellsX) newX = x

  return {
    y: newY,
    x: newX,
  }
}

function drawCells(p5) {
  for(let y = 0; y < cellsY; y++) {
    for(let x = 0; x < cellsX; x++) {
      if (predatorCells[y][x] == 1) {
        p5.fill(255, 0, 0, predatorHealth[y][x] * 10 + 5)
        predatorCount++
      }
      else if (preyCells[y][x] == 1) {
        p5.fill(0, 255, 0, preyHealth[y][x] * 5 + 5)
        preyCount++
      }
      else
        p5.fill(0)
      p5.rect(x * cellSize, y * cellSize, cellSize, cellSize)
    }
  }
}

function drawData(p5) {
  p5.fill(0)
  p5.rect(cellsPixelWidth, 0, dataPixelWidth, height)
  const percentPredator = predatorCount / dataCap
  predatorDataHeight = -(percentPredator * height)
  p5.fill(255, 0, 0)
  p5.rect(cellsPixelWidth, height, dataPixelWidth / 2, predatorDataHeight)
  const percentPrey = preyCount / dataCap
  preyDataHeight = -(percentPrey * height)
  p5.fill(0, 255, 0)
  p5.rect(cellsPixelWidth + dataPixelWidth / 2, height, dataPixelWidth / 2, preyDataHeight)
  predatorCount = 0
  preyCount = 0
}

export {
  setup,
  draw,
}