import './Banner.scss'
import { useState } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { IoIosArrowDown } from 'react-icons/io'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Banner = () => {

  // Handle the style that should be applied to our scroll indicator
  const [scrollIndicatorStyle, setScrollIndicatorStyle] = useState({
    transition: 'all 200ms ease-in'
  })

  // Fade in when the user is scrolled all the way up
  useScrollPosition(({ currPos }) => {
    const isVisible = currPos.y >= 0

    const hiddenStyle = {
      visibility: isVisible ? 'visible' : 'hidden',
      transition: 'all 200ms ease-in-out',
      opacity: isVisible ? '100%' : '0%',
    }

    if (JSON.stringify(hiddenStyle) === JSON.stringify(scrollIndicatorStyle)) return

    setScrollIndicatorStyle(hiddenStyle)
  }, [scrollIndicatorStyle])

  return (
    <div className='Banner'>
      <div className='Header'>
        <div className='Sub'>
          Hi :) I&apos;m
        </div>
        <div>
          Tyler Hostler-Mathis,
        </div>
        <div className='Sub'>
          come checkout my work!
          <ReactTypingEffect
            className='Typer'
            text={[
              'a developer 👨‍💻',
              'a student 📚',
              'an intern 🌎',
              'a streamer 🔴',
            ]}
            speed={50}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={2500}
          />
        </div>
      </div>
      <div className='ScrollIndicatorContainer' style={scrollIndicatorStyle}>
        <IoIosArrowDown className='ScrollIndicator' />
      </div>
    </div>
  )
}

export default Banner