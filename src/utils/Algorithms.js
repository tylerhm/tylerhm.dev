import BFS from './BFS'

// Clockable algorithm handler
class Algorithms {

  constructor(selectedIndex) {
    this.algorithms = {
      'BFS': BFS, // Breadth-First Search
      'DFS': BFS, // Depth-First Search
      'GDFS': BFS, // Greedy Depth-First Search
      'DA': BFS, // Dijkstra's Algorithm
    }
    this.selectedAlgorithm = 0
    this.selectAlgorithm = selectedIndex
  }

  // Getter for current algorithm
  get getSelectedAlgorithm() {
    return this.selectedAlgorithm
  }

  // Setter method for selectedAlgorithm
  set selectAlgorithm(algorithmIndex) {
    this.selectedAlgorithm = this.algorithms[algorithmIndex]
  }
}

export default Algorithms