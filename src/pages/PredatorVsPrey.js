import './Sketch.scss'
import { useEffect } from 'react'
import {
  Navbar,
  Nav,
} from 'react-bootstrap'
import Sketch from 'react-p5'
import {
  setup,
  draw,
} from '../utils/p5scripts/PredatorVsPrey'

const PredatorVsPrey = () => {

  // Scroll back up
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const dimensions = {
    width: window.innerWidth - 200,
    height: window.innerHeight - 200,
  }

  return (
    <div className='Sketch'>
      <Navbar
        className='nav'
        bg='dark'
        variant='dark'
        expand='lg'>
        <Navbar.Brand href='/home'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div className='Content'>
        <Sketch setup={(p5, canvasParentRef) => setup(p5, canvasParentRef, dimensions)} draw={draw} />
      </div>

    </div>
  )
}

export default PredatorVsPrey