import './Homepage.scss'
import CardGroup from '../components/CardGroup'
import ReactTypingEffect from 'react-typing-effect'

function Homepage() {
  // Renderable cards
  const cardData = {
    'Groov': {
      image: 'https://imgur.com/QwXe6X5l.png',
      body: 'A music based social media that brings freestyle to the pubic. For this project, I took the role of Project Manager and Mobile Developer.',
      page: 'groov',
    },
    'Custom Portfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio',
    },
    'Pathfinder': {
      image: 'https://imgur.com/qc0Q9Hyl.png',
      body: 'Awesome pathfinding visualization, written entirely in Javascript!',
      page: 'pathfinder',
    },
    'VR Molecule Builder': {
      image: 'https://imgur.com/kQ2i8cal.png',
      body: 'VR application that allows the user to build organic molecules. Build in an effort to improve stereochemistry education materials.',
      page: 'molecule-builder',
    },
  }

  return (
    <div className='HomeLayout'>
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
      <CardGroup cardData={cardData}/>
    </div>
  )
}

export default Homepage