import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ContextualDropdown from '../components/ContextualDropdown'


const Pathfinder = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/home'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#link'>Link</Nav.Link>
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
  )
}

export default Pathfinder
