import React, { useEffect, useState } from 'react'
import plusIcon from '../public/png/plus.png'
import '../public/plusButton.css'
import { viewhandler_PlusButtonClick } from '../viewHandlers'
export const PlusButton = () => {

  useEffect(() => {

    const plusButton = document.querySelector('.plusButtonContainer button')
 

    if(plusButton){
      plusButton.addEventListener('click',viewhandler_PlusButtonClick)
    }
    else{
      console.log('Error (PlusButton): plusButton fue null')
    }

   
    return() => {
      if(plusButton){
        plusButton.removeEventListener('click',viewhandler_PlusButtonClick)
      }
      else{
        console.log('Error (PlusButton): plusButton fue null')
      }
    }
  }, [])


  return (
    <div className='plusButtonContainer'>
      <button>
        <img src={plusIcon} alt="Icono Añadir" />
      </button>
    </div>
  )
}
