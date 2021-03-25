import './Pathfinder.css'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ContextualDropdown from '../components/ContextualDropdown'
import PathfindingGrid from '../components/PathfindingGrid.js'
import useWindowDimensions from '../utils/WindowDimensions'
import Colors from '../utils/ColorScheme'

// Algorithms implemented by the Pathfinding grid
const algorithms = [
  'Breadth-First Search',
  'Depth-First Search',
  'Greedy Depth-First Search',
  'Dijkstra\'s Algorithm'
]

// Get the next button state
const nextState = (state) => {
  switch (state) {
  case 'EMPTY': return 'WALL'
  case 'WALL': return 'START'
  case 'START': return 'END'
  case 'END': return 'EMPTY'
  }
}

const Pathfinder = () => {


  // Currently selected algorithm is stateful
  const [algorithm, setAlgorithm] = useState(0)

  const updateSelected = (algorithmIndex) => {
    setAlgorithm(algorithmIndex)
  }

  // Retrieve window dimensions
  const { height, width } = useWindowDimensions()

  // Calculate necessary dimensions for pathfinding grid
  const cellSize = Math.round(Math.min(height, width) / 25)
  const cellsX = Math.round(width / cellSize) - 4
  const cellsY = Math.round(height / cellSize) - 4

  // Thickness of grid border
  const borderWidth = 3
  
  // Grid style
  const styles = {
    gridContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      minWidth: cellSize * cellsX + 2 * borderWidth,
      width: cellSize * cellsX + 2 * borderWidth,
      backgroundColor: Colors.darkest,
      borderWidth: borderWidth,
      borderStyle: 'solid',
      borderColor: Colors.darkest,
    },
  }

  // 2D grid of Cells
  const initialGridState = []

  // Construct the gridState object
  for (let y = 0; y < cellsY; y++) {
    initialGridState.push([])
    for (let x = 0; x < cellsX; x++)
      initialGridState[y].push('EMPTY')
  }

  // Gride state is.......... stateful.... lol
  const [gridState, setGridState] = useState(initialGridState)

  // Update a cell to the cyclic next state
  const cellClicked = (y, x) => {
    console.log('clicked')
    const stateCopy = [...gridState]
    stateCopy[y][x] = nextState(stateCopy[y][x])
    setGridState(stateCopy)
  }

  return (
    <div className='layout'>

      
      <Navbar
        className='nav'
        bg='light'
        expand='lg'>
        <Navbar.Brand href='/home'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <ContextualDropdown
              id='Pathfinding algorithm selector'
              items={algorithms}
              defaultSelected={algorithms[algorithm]}
              updateSelected={updateSelected}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className='content'>
        <PathfindingGrid 
          style={styles.gridContainer}
          gridState={gridState}
          cellSize={cellSize}
          cellClicked={cellClicked}
        />
      </div>


    </div>
  )
}

export default Pathfinder
