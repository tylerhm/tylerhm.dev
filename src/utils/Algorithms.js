import BFS from './BFS'

// Clockable algorithm handler
class Algorithms {

  constructor(selectedIndex) {
    this.algorithms = [
      'BFS', // Breadth-First Search
      'DFS', // Depth-First Search
      'GDFS', // Greedy Depth-First Search
      'DA', // Dijkstra's Algorithm
    ]

    this.algorithm = this.algorithms[selectedIndex]
  }

  // Prepares the pathfinding controller
  prepareController(startCoord, walls, cellsX, cellsY) {
    switch (this.algorithm) {
    case this.algorithms[0]:
      this.controller = new BFS(startCoord, walls, cellsX, cellsY)
      break
    }
  }

  // Getter method for current frontier
  get visited() {
    return this.controller.visited
  }

  // Getter method for status
  get done() {
    return this.controller.done
  }

  // Getter method for path
  get path() {
    return this.controller.path
  }

  // Clocks the selected algorithm
  clock() {
    this.controller.clock()
  }
}

export default Algorithms