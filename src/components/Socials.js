import './Socials.scss'
import { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaCloudDownloadAlt,
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import resume from '../downloads/TylerHostlerMathis_RESUME.pdf'

const Socials = () => {

  // Handle the style that should be applied to our scroll indicator
  const [socialStyles, setSocialStyles] = useState({
    gap: '40px',
    opacity: '100%',
  })

  // Fade in when the user is scrolled all the way up
  useScrollPosition(({ currPos }) => {

    const progress = -currPos.y / window.innerHeight
    const gap = 40 + progress * 500
    const opacity = 1 - progress * 2

    const newStyle = {
      gap: `${gap}px`,
      opacity: `${opacity}`,
    }

    if (JSON.stringify(newStyle) === JSON.stringify(socialStyles)) return

    setSocialStyles(newStyle)
  }, [socialStyles])

  return (
    <div className='Socials' style={socialStyles}>
      <a className='GitHub' href='https://github.com/TylerMathis' target='__blank'>
        <FaGithub />
      </a>
      <a className='LinkedIn' href='https://linkedin.com/in/TylerHostlerMathis' target='__blank'>
        <FaLinkedin />
      </a>
      <a className='Mail' href='mailto:tylerhm.dev@gmail.com' target='__blank'>
        <MdMail />
      </a>
      <a className='Resume' href={resume} download>
        <FaCloudDownloadAlt  />
      </a>
    </div>
  )
}

export default Socials