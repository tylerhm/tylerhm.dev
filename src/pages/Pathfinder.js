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
  const [algorithm, setAlgorithm] = useState(algorithms[0])

  const updateSelected = (algorithmIndex) => {
    setAlgorithm(algorithms[algorithmIndex])
  }

  // Retrieve window dimentions
  const { height, width } = useWindowDimensions()

  // Calculate necessary dimensions for pathfinding grid
  const cellSize = Math.min(height, width) / 25
  const cellsX = Math.round(width / cellSize) - 4
  const cellsY = Math.round(height / cellSize) - 4

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
              defaultSelected={algorithm}
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
          selectedAlgorithm={0}
        />
      </div>
    </div>
  )
}

export default Pathfinder
