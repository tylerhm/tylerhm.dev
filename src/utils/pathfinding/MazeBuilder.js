import Stack from './Stack'
import PointSet from './PointSet'

// Generates a maze with a DFS backtracking algorithm
class MazeBuilder {
  constructor(cellsX, cellsY) {    
    // Generate starting position between [1, c - 2], must be odd
    // Can acheive by generating a number between [0, (c - 3) / 2], then doing *2+1
    const startY = Math.floor(Math.random() * ((cellsY - 3) / 2) + 1) * 2 + 1
    const startX = Math.floor(Math.random() * ((cellsX - 3) / 2) + 1) * 2 + 1
    this.currentPoint = { x: startX, y: startY }

    // Generate the stack
    this.stack = new Stack()
    this.stack.push(this.currentPoint)

    // Track all visited nodes, fast lookup
    this.visitedSet = new PointSet()

    // Array of generated movements
    this.empty = []

    // Holds the y and x maximum bounds
    this.maxX = cellsX
    this.maxY = cellsY

    // Movement iterator
    this.dx = [-2, 0, 2, 0]
    this.dy = [0, -2, 0, 2]

    // Flag for finishing the pathing
    this.done = false
  }

  // Returns whether a new coord is valid
  valid(coord) {
    return (
      coord.x >= 0               && 
      coord.x < this.maxX        && 
      coord.y >= 0               && 
      coord.y < this.maxY        &&
      !this.visitedSet.has(coord)
    )
  }

  // Returns whether a new coord has any unvisited neighbors
  hasNeighbors(coord) {
    for (let i = 0; i < 4; i++) {
      const adjNode = {
        x: coord.x + this.dx[i],
        y: coord.y + this.dy[i],
      }

      if (this.valid(adjNode)) return true
    }
    return false
  }

  // Get all unvisited neighbors
  getNeighbors(coord) {
    const neighbors = []
    for (let i = 0; i < 4; i++) {
      const adjNode = {
        x: coord.x + this.dx[i],
        y: coord.y + this.dy[i],
      }

      if (this.valid(adjNode)) neighbors.push(adjNode)
    }
    return neighbors
  }

  // Builds a three long path from startpoint to end point
  makePath(start, end) {
    const xDiff = end.x - start.x
    const yDiff = end.y - start.y
    
    const middlePoint = {x: start.x + xDiff / 2, y: start.y + yDiff / 2}

    return [start, middlePoint, end]
  }

  clock() {
    // If there is nothing left to search, stop
    if (this.stack.isEmpty()) {
      this.done = true
      this.path = []
    }

    // We are done, don't clock
    if (this.done) {
      console.error('Clocked a finished maze generator, aborting...')
      return
    }

    // Clear the current visited array for visualization
    this.visited = []

    // Get current working node
    let node = this.stack.pop()
    
    // Find first node with neighbors
    while (!this.hasNeighbors(node)) {
      if (this.stack.isEmpty()) {
        this.done = true
        return
      }
      node = this.stack.pop()
    }
    
    // Push it onto the stack
    this.stack.push(node)

    // Get random neighbor
    const neighbors = this.getNeighbors(node)
    const randomIndex = Math.floor(Math.random() * neighbors.length)
    const chosenNode = neighbors[randomIndex]

    // Mark as visited
    this.visitedSet.add(chosenNode)
    this.empty.push(...this.makePath(node, chosenNode))
    
    // Push onto stack
    this.stack.push(chosenNode)
  }
}

export default MazeBuilder