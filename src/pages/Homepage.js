import './Homepage.scss'
import Banner from '../components/Banner'
import CardGroup from '../components/CardGroup'
import Cards from '../components/Cards'

function Homepage() {
  return (
    <div className='HomeLayout'>
      <Banner />
      <CardGroup cardData={Cards}/>
    </div>
  )
}

export default Homepage