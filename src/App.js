import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pathfinder from './pages/Pathfinder'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/groov'>
          {() => {
            window.location.href = 'https://github.com/GroovTeam'
            return null
          }}
        </Route>
        <Route path='/custom-portfolio'>
          {() => {
            window.location.href = 'https://beariverairions.com'
            return null
          }}
        </Route>
        <Route path='/pathfinder'>
          <Pathfinder />
        </Route>
        <Route path='/home'>
          <Homepage />
        </Route>

        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
