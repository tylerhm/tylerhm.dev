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

  prepareController(startCoord, cellsX, cellsY) {
    switch (this.algorithm) {
    case this.algorithms[0]:
      this.controller = new BFS(startCoord, cellsX, cellsY)
      break
    }
  }

  // Getter method for current frontier
  get frontier() {
    return this.controller.frontier
  }

  // Clocks the selected algorithm
  clock() {
    this.controller.clock()
  }
}

export default Algorithms