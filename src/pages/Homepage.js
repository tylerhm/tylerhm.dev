import './Homepage.scss'
import CardGroup from '../components/CardGroup'
import ReactTypingEffect from 'react-typing-effect'

function Homepage() {
  // Renderable cards
  const cardData = {
    'Pathfinder': {
      image: 'https://i.imgur.com/qc0Q9Hyl.png',
      body: 'Awesome pathfinding visualization, written entirely in Javascript!',
      page: 'pathfinder',
    },
    'Custom Portfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom fPortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Customs Portfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom sPortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom dPortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom gPortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom fPofrtfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Customf Portfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom ePortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom dPordtfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom cPortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom bPortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
    },
    'Custom aPortfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'custom-portfolio'
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
        </h3>
      </div>
      <CardGroup cardData={cardData}/>
    </div>
  )
}

export default Homepage