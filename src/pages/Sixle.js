import './Sixle.scss'
import { Navbar, Nav } from 'react-bootstrap'
import SixleWordArea from '../components/sixle/SixleWordArea'

const Sixle = () => {
  return (
    <div className="Layout">
      <Navbar className='nav' bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='/home'>Home</Navbar.Brand>
        <Navbar.Brand>Sixle</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'></Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="Content">
        <SixleWordArea />
      </div>
    </div>
  )
}

export default Sixle