import React from 'react'
import plusIcon from '../public/png/plus.png'
import '../public/plusButton.css'
export const PlusButton = () => {
  return (
    <div className='plusButtonContainer'>
        <img src={plusIcon} alt="Icono Añadir"/>
    </div>
  )
}
