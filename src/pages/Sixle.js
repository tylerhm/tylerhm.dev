import './Sixle.scss'
import { Navbar, Nav } from 'react-bootstrap'
import SixleWordArea from '../components/SixleWordArea'

const Sixle = () => {
  return (
    <div className="Layout">
      <Navbar className='nav' bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='/home'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'></Nav>
        </Navbar.Collapse>
      </Navbar>
      <SixleWordArea className="Content" />
    </div>
  )
}

export default Sixle