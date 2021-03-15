import { useState } from 'react'
import Homepage from './pages/Homepage'

function App() {

  const [page, selectPage] = useState('home')

  const changePage = (newPage) => { selectPage(newPage) }

  switch (page) {
    case 'home':
      return (<Homepage navigate={changePage}/>)
  }
}

export default App;
