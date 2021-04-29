import './Homepage.scss'
import CardGroup from '../components/CardGroup'
import ReactTypingEffect from 'react-typing-effect'

function Homepage() {
  // Renderable cards
  const cardData = {
    'Groov': {
      image: 'https://imgur.com/QwXe6X5l.png',
      body: 'A music based social media that brings freestyle to the pubic. For this project, I took the role of Project Manager and Mobile Developer.',
      page: 'https://github.com/GroovTeam',
      external: true,
    },
    'Facebook SWE Internship': {
      image: 'https://imgur.com/pa4jxAs.png',
      body: 'Three month paid internship on the Data Experiences team. Contributed directly to Facebook\'s codebase and bridged the gap between big data and consumers.',
      page: 'https://www.facebook.com/careers/v2/jobs/654496918442526/',
      external: true,
    },
    'Custom Portfolio': {
      image: 'https://imgur.com/xH8SHD7l.png',
      body: 'Dynamic portfolio built from scratch with React and Bootstrap.',
      page: 'https://beariverairions.com',
      external: true,
    },
    'Pathfinder': {
      image: 'https://imgur.com/qc0Q9Hyl.png',
      body: 'Awesome pathfinding visualization, written entirely in Javascript!',
      page: 'pathfinder',
      external: false,
    },
    'VR Molecule Builder': {
      image: 'https://imgur.com/kQ2i8cal.png',
      body: 'VR application that allows the user to build organic molecules. Build in an effort to improve stereochemistry education materials.',
      page: 'https://drive.google.com/file/d/1W2QugDdjEtT40bghaI3PLtvp-3QBLKjQ/view',
      external: true,
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