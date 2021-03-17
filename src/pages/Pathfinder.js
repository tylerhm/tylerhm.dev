import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Pathfinder = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/home'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#link'>Link</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Breadth-First Search</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Depth-First Search</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Greedy Depth-First Search</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>Dijkstra&apos;s Algorithm</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Pathfinder
