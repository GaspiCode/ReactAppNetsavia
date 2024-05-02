import { useState } from 'react'
import { PlusButton } from './PlusButton'
import { Display } from './Display'
import '../public/container.css'

function App() {
  const miArray = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  return (
     <div className='container'>
      <PlusButton/>
      <Display array={miArray}/>
     </div>
  )
}

export default App
