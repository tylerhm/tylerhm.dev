import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright'>© 2021 by Tyler Hostler-Mathis.</div>
      <div className='socials'>
        <a href='https://www.github.com/TylerMathis' target='__blank'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/TylerHostlerMathis' target='__blank'>
          <FaLinkedin />
        </a>
        <a href='mailto:tylerhm.dev@gmail.com' target='__blank'>
          <MdMail />
        </a>
      </div>
    </div>
  )
}

export default Footer