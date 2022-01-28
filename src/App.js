import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Footer from './components/Footer'
import ConwaysGameOfLife from './pages/ConwaysGameOfLife'
import Sixle from './pages/Sixle'
import Homepage from './pages/Homepage'
import Pathfinder from './pages/Pathfinder'
import PredatorVsPrey from './pages/PredatorVsPrey'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/pathfinder'>
          <Pathfinder />
        </Route>

        <Route path='/conways-game-of-life'>
          <ConwaysGameOfLife />
        </Route>

        <Route path ='/sixle'>
          <Sixle />
        </Route>

        <Route path='/predator-vs-prey'>
          <PredatorVsPrey />
        </Route>

        <Route path='/home'>
          <Homepage />
        </Route>

        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
