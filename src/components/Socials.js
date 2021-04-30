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

  // Handle the style that should be applied to our social buttons
  const [socialStyles, setSocialStyles] = useState({
    marginLeft: '20px',
    marginRight: '20px',
    opacity: '100%',
  })

  // Fade out and widen as the user scrolls down
  useScrollPosition(({ currPos }) => {

    const progress = -currPos.y / window.innerHeight
    const gap = 40 + progress * 500
    const opacity = 1 - progress * 2

    const newStyle = {
      marginLeft: `${gap / 2}px`,
      marginRight: `${gap / 2}px`,
      opacity: `${opacity}`,
    }

    if (JSON.stringify(newStyle) === JSON.stringify(socialStyles)) return

    setSocialStyles(newStyle)
  }, [socialStyles])

  return (
    <div className='Socials'>
      <a
        className='GitHub'
        href='https://github.com/TylerMathis'
        target='__blank'
        style={socialStyles}
      >
        <FaGithub />
      </a>
      <a
        className='LinkedIn'
        href='https://linkedin.com/in/TylerHostlerMathis'
        target='__blank'
        style={socialStyles}
      >
        <FaLinkedin />
      </a>
      <a
        className='Mail'
        href='mailto:tylerhm.dev@gmail.com'
        target='__blank'
        style={socialStyles}
      >
        <MdMail />
      </a>
      <a
        className='Resume'
        href={resume}
        download
        style={socialStyles}
      >
        <FaCloudDownloadAlt  />
      </a>
    </div>
  )
}

export default Socials