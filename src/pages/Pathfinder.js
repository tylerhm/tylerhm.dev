import './Pathfinder.css'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ContextualDropdown from '../components/ContextualDropdown'
import PathfindingGrid from '../components/PathfindingGrid'
import useWindowDimensions from '../utils/WindowDimensions'
import Algorithms from '../utils/Algorithms'

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

  // Main Pathfinding object
  const pathfinder = new Algorithms(algorithm)
  let clocker = undefined

  const startPathfinding = () => {
    pathfinder.prepareController({x: 5, y: 5}, 50, 50)
    clocker = setInterval(() => {
      pathfinder.clock()
      console.log(pathfinder.frontier)
    }, 1000)
  }

  const stopPathfinding = () => {
    clearInterval(clocker)
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
              defaultSelected={algorithms[algorithm]}
              updateSelected={updateSelected}
            />
            <Button
              style={{margin: 5}}
              variant='primary'
              onClick={startPathfinding}
            >
              Pathfind!
            </Button>
            <Button
              style={{margin: 5}}
              variant='danger'
              onClick={stopPathfinding}
            >
              Stop
            </Button>
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
