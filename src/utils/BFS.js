import PointSet from './PointSet'

class BreadthFirstSearch {
  constructor(startCoord, cellsX, cellsY) {
    // Holds the furthest frontier of our BFS
    this.frontier = [ startCoord ]

    // Map of all visited nodes. Prevents infinite rescursion
    this.visited = new PointSet()
    this.visited.add(startCoord)

    // Holds the y and x maximum bounds
    this.maxX = cellsX
    this.maxY = cellsY

    // Movement iterator
    this.dx = [1, -1, 0, 0]
    this.dy = [0, 0, 1, -1]
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
        if (!this.visited.has(newCoord)) {
          this.frontier.push(newCoord)
          this.visited.add(newCoord)
        }
      }
    })
  }
}

export default BreadthFirstSearch