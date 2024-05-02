import React from 'react'
import plusIcon from '../public/png/plus.png'
import '../public/plusButton.css'
export const PlusButton = () => {
  
  const handleClick = async () => {
    
  };

  return (
    <div className='plusButtonContainer'>
      <button onClick={handleClick}>
        <img src={plusIcon} alt="Icono Añadir"/>
      </button>
    </div>
  )
}
