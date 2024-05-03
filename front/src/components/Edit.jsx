import React from 'react'
import '../public/edit.css'
import quitIcon from '../public/png/quit.png'
import okIcon from '../public/png/ok.png'
import { useEffect } from 'react'

export const Edit = () => {

  useEffect(() => {

    const okButton = document.querySelector('.buttonOk input')
    const quitButton = document.querySelector('.buttonQuit button')

    if(okButton && quitButton){
      okButton.addEventListener('click',handleOkButtonClick)
      quitButton.addEventListener('click',handleQuitButtonClick)
    }
    else{
      console.log('Error (Add): addButton o quitButton fue null')
    }
   
    return() => {
      if(okButton && quitButton){
        okButton.removeEventListener('click',handleOkButtonClick)
        quitButton.removeEventListener('click',handleQuitButtonClick)
      }
      else{
        console.log('Error (Add): okButton o quitButton fue null')
      }
    }
  }, [])

  
  const handleOkButtonClick = () => {
    const add = document.querySelector('.editContainer')
    const container = document.querySelector('.container')
    if(add && container){
      container.style.transform = 'translate(0, 0)'
      add.style.transform = 'translate(500%, -50%)'
    }
    else{
      console.log('Error (Add): add o container fue null')
    }

  }
  
  const handleQuitButtonClick = () => {
    const add = document.querySelector('.editContainer')
    const container = document.querySelector('.container')
    if(add && container){
      container.style.transform = 'translate(0, 0)'
      add.style.transform =  'translate(500%, -50%)'
    }
    else{
      console.log('Error (Add): add o container fue null')
    }

  }



  return (
    <form action="" className='editComponent'>
      <div className='editContainer'>
        <div className='editHeader'>
          <h1>Editar</h1>
          <div className='editHeaderButtonContainer'>
            <div className='editbuttonOk'>
              <input type="submit" onClick={handleOkButtonClick}/>
              <img src={okIcon} alt=""/>
            </div>
            <div className='editbuttonQuit'>
              <button onClick={handleQuitButtonClick}></button>
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
