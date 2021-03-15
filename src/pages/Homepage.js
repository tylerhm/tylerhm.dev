import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardGroup from '../components/CardGroup'
import ReactTypingEffect from 'react-typing-effect'

function Homepage({ navigate }) {

  const cardData = {
    'Card One': {
      image: '../logo192.png',
      body: 'This is a test card',
      page: 'home',
    },
    'Card Two': {
      image: '../logo192.png',
      body: 'This is a test card',
      page: 'home',
    },
    'Card Three': {
      image: '../logo192.png',
      body: 'This is a test card',
      page: 'home',
    },
    'Card Four': {
      image: '../logo192.png',
      body: 'This is a test card',
      page: 'home',
    },
  }

  return (
    <div className='HomeLayout'>
      <div className='Header'>
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
      <CardGroup cardData={cardData} navigate={navigate}/>
    </div>
  )
}

export default Homepage;