import './Banner.scss'
import ReactTypingEffect from 'react-typing-effect'
import { IoIosArrowDown } from 'react-icons/io'

const Banner = () => {
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
      <div className='ScrollIndicatorContainer'>
        <IoIosArrowDown className='ScrollIndicator' />
      </div>
    </div>
  )
}

export default Banner