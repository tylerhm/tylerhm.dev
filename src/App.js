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

export default App;
