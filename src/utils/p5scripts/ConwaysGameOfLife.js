let cellSize

let width, height
let cellsX, cellsY
let cells, cellsBuffer

let percentChanceWhite

let buffer, bufferDelay
let running = false

let paintedCellX, paintedCellY

function setup(p5, canvasParentRef, dimensions) {
  width = dimensions.width
  height = dimensions.height
  p5.createCanvas(width, height).parent(canvasParentRef)
  p5.background(0)

  cellSize = 20

  percentChanceWhite = 20

  buffer = 400
  bufferDelay = 100

  cellsX = Math.floor(width / cellSize)
  cellsY = Math.floor(height / cellSize)

  paintedCellX = 0
  paintedCellY = 0

  cells = makeArr(cellsX, cellsY)
  cellsBuffer = makeArr(cellsX, cellsY)

  const play = p5.createButton('Go')
  play.position(150, 150)
  play.mouseClicked(() => {
    running = true
  })

  populateCells()
  drawCells(p5)
}

function makeArr(rows, cols) {
  return Array(rows)
    .fill()
    .map(() => Array(cols).fill(0))
}

function draw(p5) {
  if (p5.millis() > buffer) {
    if (running == true) {
      drawCells(p5)
      calculateCells()
      buffer = p5.millis() + bufferDelay
    }
  }
}

function mousePressed(p5) {
  if (running == true) running = false

  paintedCellX = Math.floor(p5.mouseX / cellSize)
  paintedCellY = Math.floor(p5.mouseY / cellSize)

  if (paintedCellY < height / cellSize - 5) {
    paintCell(paintedCellX, paintedCellY, p5)
  }
}

function paintCell(indexX, indexY, p5) {
  if (cells[indexX][indexY] == 0) {
    cells[indexX][indexY] = 1
    p5.fill(250, 100, 200)
    p5.rect(indexX * cellSize, indexY * cellSize, cellSize, cellSize)
  } else {
    cells[indexX][indexY] = 0
    p5.fill(0)
    p5.rect(indexX * cellSize, indexY * cellSize, cellSize, cellSize)
  }
}

function populateCells() {
  for (let i = 0; i < cellsX; i++) {
    for (let j = 0; j < cellsY; j++) {
      const rand = Math.floor(Math.random() * 100)
      if (rand < percentChanceWhite) {
        cells[i][j] = 1
      } else {
        cells[i][j] = 0
      }
    }
  }
}

function drawCells(p5) {
  for (let i = 0; i < cellsX; i++) {
    for (let j = 0; j < cellsY; j++) {
      if (cells[i][j] == 1) {
        p5.fill(255, 100, 200)
      } else {
        p5.fill(0)
      }
      p5.rect(i * cellSize, j * cellSize, cellSize, cellSize)
    }
  }
}

function calculateCells() {
  for (let i = 0; i < cellsX; i++) {
    for (let j = 0; j < cellsY; j++) {
      const neighbors = checkNeighbors(i, j)

      if (cells[i][j] == 1) {
        if (neighbors < 2 || neighbors > 3) {
          cellsBuffer[i][j] = 0
        } else {
          cellsBuffer[i][j] = 1
        }
      } else {
        if (neighbors == 3) {
          cellsBuffer[i][j] = 1
        } else {
          cellsBuffer[i][j] = 0
        }
      }
    }
  }
  transferBuffer()
}

function checkNeighbors(x, y) {
  let neighbors = 0
  for (let dx = x - 1; dx <= x + 1; dx++) {
    for (let dy = y - 1; dy <= y + 1; dy++) {
      if (
        dx >= 0 &&
        dx < cellsX &&
        dy >= 0 &&
        dy < cellsY &&
        !(dx == x && dy == y)
      ) {
        if (cells[dx][dy] == 1) {
          neighbors++
        }
      }
    }
  }
  return neighbors
}

function transferBuffer() {
  for (let i = 0; i < cellsX; i++) {
    for (let j = 0; j < cellsY; j++) {
      cells[i][j] = cellsBuffer[i][j]
    }
  }
}

export { setup, draw, mousePressed }
