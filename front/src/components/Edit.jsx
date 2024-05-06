import React from 'react'
import '../public/edit.css'
import quitIcon from '../public/png/quit.png'
import okIcon from '../public/png/ok.png'
import { useEffect } from 'react'
import { viewHandler_EditButtonClick } from '../viewHandlers'

export const Edit = () => {

  useEffect(() => {

    const okButton = document.querySelector('.editbuttonOk button')
    const quitButton = document.querySelector('.editbuttonQuit button')

    if(okButton && quitButton){
      okButton.addEventListener('click',viewHandler_EditButtonClick)
      quitButton.addEventListener('click',viewHandler_EditButtonClick)
    }
    else{
      console.log('Error (Add): okButton o quitButton fue null')
    }
   
    return() => {
      if(okButton && quitButton){
        okButton.removeEventListener('click',viewHandler_EditButtonClick)
        quitButton.removeEventListener('click',viewHandler_EditButtonClick)
      }
      else{
        console.log('Error (Add): okButton o quitButton fue null')
      }
    }
  }, [])

  return (
    <form action="" className='editComponent'>
      <div className='editContainer'>
        <div className='editHeader'>
          <h1>Editar</h1>
          <div className='editHeaderButtonContainer'>
            <div className='editbuttonOk'>
             <button></button>
              <img src={okIcon} alt=""/>
            </div>
            <div className='editbuttonQuit'>
              <button></button>
              <img src={quitIcon} alt=""/> 
            </div>
          </div>
        </div>
        <div className='editInfo'>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" required/>
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" name='ciudad' id='ciudad'required/>
          <label htmlFor="edad">Edad</label>
          <input type="text" name="edad" id="edad" required/>
        </div>
      </div>
    </form>
  )
}
