import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardGroup from '../components/CardGroup'
import ReactTypingEffect from 'react-typing-effect'

function Homepage() {

  const cardData = {
    'Pathfinder': {
      image: '../logo192.png',
      body: 'Check out this awesome pathfinding visualization, written entirely in Javascript!',
      page: 'pathfinder',
    },
    'Card Two': {
      image: '../logo192.png',
      body: 'This is a test card',
      page: 'home',
    },
  }

  return (
    <div className='HomeLayout'>
      <div className='Header'>
        <h3>
          Hi :) I'm
        </h3>
        <h1>
          Tyler Hostler-Mathis,
        </h1>
        <h3>
          <ReactTypingEffect
            text={[
              'a developer 👨‍💻',
              'a student 📚',
              'an intern 🌎',
              'a streamer 📷',
            ]}
            speed={50}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={2500}
            />
        </h3>
      </div>
      <CardGroup cardData={cardData}/>
    </div>
  )
}

export default Homepage;