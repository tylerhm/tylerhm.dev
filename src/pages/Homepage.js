import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardGroup from '../components/CardGroup'
import ReactTypingEffect from 'react-typing-effect'

function Homepage() {

  const cardData = {
    'Card One': {
      image: '../logo192.png',
      body: 'This is a test card',
      href: 'placeholder.js',
    },
    'Card Two': {
      image: '../logo192.png',
      body: 'This is a test card',
      href: 'placeholder.js',
    },
    'Card Three': {
      image: '../logo192.png',
      body: 'This is a test card',
      href: 'placeholder.js',
    },
    'Card Four': {
      image: '../logo192.png',
      body: 'This is a test card',
      href: 'placeholder.js',
    },
  }

  return (
    <div className='HomeLayout'>
      <div className='Name'>
      <h5>
        Hi :) I'm
        </h5>
        <h1>
          Tyler Hostler-Mathis,
        </h1>
        <h5>
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
        </h5>
      </div>
      <CardGroup cardData={cardData}/>
    </div>
  )
}

export default Homepage;