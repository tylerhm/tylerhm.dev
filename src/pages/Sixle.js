import './Sixle.scss'
import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SixleWordArea from '../components/sixle/SixleWordArea'
import SixleKeyArea from '../components/sixle/SixleKeyArea'
import { getBlankKeys } from '../utils/sixle/BlankGridGen'

const Sixle = () => {
  const [keys, setKeys] = useState(getBlankKeys())
  const [lastKey, setLastKey] = useState(null)

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
        <div className="WordArea">
          <SixleWordArea keys={keys} setKeys={setKeys} lastKey={lastKey} />
        </div>
        <div className="KeysArea">
          <SixleKeyArea keys={keys} lastKey={lastKey} setLastKey={setLastKey} />
        </div>
      </div>
    </div>
  )
}

export default Sixle