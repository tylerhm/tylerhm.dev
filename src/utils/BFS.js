import PointSet from './PointSet'

class BreadthFirstSearch {
  constructor(gridState, cellsX, cellsY) {

    // Metadata for search
    this.walls = []
    this.start = {}
    this.end = {}

    // Retrieve important metadata from gridState
    for (let y = 0; y < cellsY; y++)
      for (let x = 0; x < cellsX; x++)
        switch (gridState[y][x]) {
        case 'WALL':
          this.walls.push({x: x, y: y})
          break
        case 'START':
          this.start.x = x
          this.start.y = y
          break
        case 'END':
          this.end.x = x
          this.end.y = y
          break 
        }

    // Populate all obstacles
    this.obstacles = new PointSet()
    this.walls.forEach(wall => {
      this.obstacles.add(wall)
    })

    // Holds the furthest frontier of our BFS
    this.frontier = [ this.start ]

    // Map of all visited nodes. Prevents infinite rescursion
    this.visited = new PointSet()
    this.visited.add(this.start)

    // Holds the y and x maximum bounds
    this.maxX = cellsX
    this.maxY = cellsY

    // Movement iterator
    this.dx = [1, -1, 0, 0]
    this.dy = [0, 0, 1, -1]

    this.done = false
  }

  // Returns whether a new coord is valid
  valid(coord) {
    return (
      coord.x >= 0               && 
      coord.x < this.maxX        && 
      coord.y >= 0               && 
      coord.y < this.maxY        &&
      !this.obstacles.has(coord) &&
      !this.visited.has(coord)
    )
  }

  isEnd(coord) {
    return coord.x === this.end.x && coord.y === this.end.y
  }

  clock() {
    // Create deep copy of the frontier
    const frontierCopy = [...this.frontier]

    // Empty the frontier, so we can poplate it with new values
    this.frontier = []

    // For every value in the frontier
    frontierCopy.forEach((coordinate) => {
      for (let i = 0; i < 4; i++) {
        const newCoord = {
          x: coordinate.x + this.dx[i],
          y: coordinate.y + this.dy[i],
        }

        // If the value we are currently looking at can be added, do it
        if (this.valid(newCoord)) {
          this.frontier.push(newCoord)
          this.visited.add(newCoord)

          if (this.isEnd(newCoord))
            this.done = true
        }
      }
    })
  }
}

export default BreadthFirstSearch