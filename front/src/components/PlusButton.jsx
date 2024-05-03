import React, { useEffect, useState } from 'react'
import plusIcon from '../public/png/plus.png'
import '../public/plusButton.css'
export const PlusButton = () => {

  useEffect(() => {

    const plusButton = document.querySelector('.plusButtonContainer button')
 

    if(plusButton){
      plusButton.addEventListener('click',handleClick)
    }
    else{
      console.log('Error (PlusButton): plusButton fue null')
    }

   
    return() => {
      if(plusButton){
        plusButton.removeEventListener('click',handleClick)
      }
      else{
        console.log('Error (PlusButton): plusButton fue null')
      }
    }
  }, [])

  
  const handleClick = () => {
    const add = document.querySelector('.addContainer')
    const container = document.querySelector('.container')
    if(add && container){
      container.style.transform = 'translate(20%, 0)'
      add.style.transform = 'translate(-200%, -50%)'
    }
    else{
      console.log('Error (PlusButton): add o container fue null')
    }

  }

  return (
    <div className='plusButtonContainer'>
      <button onClick={handleClick()}>
        <img src={plusIcon} alt="Icono Añadir" />
      </button>
    </div>
  )
}
