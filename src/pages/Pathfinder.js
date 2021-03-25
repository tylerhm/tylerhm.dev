import './Pathfinder.css'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ContextualDropdown from '../components/ContextualDropdown'
import PathfindingGrid from '../components/PathfindingGrid'
import useWindowDimensions from '../utils/WindowDimensions'

const Pathfinder = () => {
  // Algorithms implemented by the Pathfinding grid
  const algorithms = [
    'Breadth-First Search',
    'Depth-First Search',
    'Greedy Depth-First Search',
    'Dijkstra\'s Algorithm'
  ]

  // Currently selected algorithm is stateful
  const [algorithm, setAlgorithm] = useState(0)

  const updateSelected = (algorithmIndex) => {
    setAlgorithm(algorithmIndex)
  }

  // Retrieve window dimentions
  const { height, width } = useWindowDimensions()

  // Calculate necessary dimensions for pathfinding grid
  const cellSize = Math.round(Math.min(height, width) / 25)
  const cellsX = Math.round(width / cellSize) - 4
  const cellsY = Math.round(height / cellSize) - 4

  // 2D grid of Cells
  const initialGridState = []

  // Construct the gridState object
  for (let y = 0; y < cellsY; y++) {
    initialGridState.push([])
    for (let x = 0; x < cellsX; x++)
      initialGridState[y].push('EMPTY')
  }

  initialGridState[0][0] = 'START'

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
          dimensions={{
            width: cellsX,
            height: cellsY,
            cellSize: cellSize,
          }}
          initialGridState={initialGridState}
          selectedAlgorithm={algorithm}
        />
      </div>
    </div>
  )
}

export default Pathfinder
