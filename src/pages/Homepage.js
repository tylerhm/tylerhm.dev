import './Homepage.scss'
import CardGroup from '../components/CardGroup'
import ReactTypingEffect from 'react-typing-effect'

function Homepage() {
  // Renderable cards
  const cardData = {
    'Groov': {
      image: 'https://imgur.com/QwXe6X5l.png',
      body: 'A music based social media that brings freestyle to the pubic.',
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
  }

  return (
    <div className='HomeLayout'>
      <div className='Header'>
        <h3>
          Hi :) I&apos;m
        </h3>
        <h1>
          Tyler Hostler-Mathis,
        </h1>
        <h3>
          <ReactTypingEffect
            className='Typer'
            text={[
              'a developer 👨‍💻',
              'a student 📚',
              'an intern 🌎',
              'a streamer 🔴',
              'a gamer 🎮',
            ]}
            speed={50}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={2500}
          />
          come checkout my work!
        </h3>
      </div>
      <CardGroup cardData={cardData}/>
    </div>
  )
}

export default Homepage