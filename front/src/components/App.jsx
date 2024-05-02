import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Container } from './Container';
import { Add } from './Add';
import { Edit } from './Edit';

function App() {
  const miArray = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/Edit' element={<Edit/>}/>
      </Routes>
    </Router>
  )
}

export default App
