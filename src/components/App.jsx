import { PlusButton } from './PlusButton.jsx'
import { Display } from './Display.jsx'
import '../public/container.css'

export const App = () => {
  const miArray = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  return (
    <div className='container'>
      <PlusButton/>
      <Display array={miArray}/>
     </div>
  )
}
