import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Pathfinder from './pages/Pathfinder'

function App() {
  return (
    <Router>
      
      <Switch>

        <Route path='/pathfinder'>
          <Pathfinder />
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
