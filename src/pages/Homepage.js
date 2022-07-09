import './Homepage.scss'
import Banner from '../components/Banner'
import CardGroup from '../components/CardGroup'
import { Highlights, ContractWork, CellularAutomata } from '../utils/Cards'

function Homepage() {
  return (
    <div className='HomeLayout'>
      <Banner />
      <div className='CardGroupContainer'>
        <div className='CardGroupHeader'>
          Highlights
        </div>
        <CardGroup cardData={Highlights}/>
        <div className='CardGroupHeader'>
          Contract Work
        </div>
        <CardGroup cardData={ContractWork}/>
        <div className='CardGroupHeader'>
          Cellular Automata
        </div>
        <CardGroup cardData={CellularAutomata}/>
      </div>
    </div>
  )
}

export default Homepage