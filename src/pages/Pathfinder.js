import './Pathfinder.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ContextualDropdown from '../components/ContextualDropdown'
import PathfindingGrid from '../components/PathfindingGrid'

const Pathfinder = () => {
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
              items={[
                'Breadth-First Search',
                'Depth-First Search',
                'Greedy Depth-First Search',
                'Dijkstra\'s Algorithm'
              ]}
              defaultSelected='Breadth-First Search'
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content'>
        <PathfindingGrid dimensions={{
          width: 50,
          height: 25,
          cellSize: 25,
        }}/>
      </div>
    </div>
  )
}

export default Pathfinder
