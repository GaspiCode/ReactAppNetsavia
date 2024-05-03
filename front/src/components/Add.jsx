import React from 'react'
import '../public/add.css'
import okIcon from '../public/png/ok.png'
import quitIcon from '../public/png/quit.png'
import { useEffect } from 'react'


export const Add = () => {

  useEffect(() => {

    const okButton = document.querySelector('.addbuttonOk input')
    const quitButton = document.querySelector('.addbuttonQuit button')

    if(okButton && quitButton){
      okButton.addEventListener('click',handleOkButtonClick)
      quitButton.addEventListener('click',handleQuitButtonClick)
    }
    else{
      console.log('Error (Add): okButton o quitButton fue null')
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
    const add = document.querySelector('.addContainer')
    const container = document.querySelector('.container')
    if(add && container){
      container.style.transform = 'translate(0, 0)'
      add.style.transform = 'translate(-500%, -50%)'
    }
    else{
      console.log('Error (Add): add o container fue null')
    }

  }
  
  const handleQuitButtonClick = () => {
    const add = document.querySelector('.addContainer')
    const container = document.querySelector('.container')
    if(add && container){
      container.style.transform = 'translate(0, 0)'
      add.style.transform =  'translate(-500%, -50%)'
    }
    else{
      console.log('Error (Add): add o container fue null')
    }

  }



  return (
    <form action="" className='addComponent'>
      <div className='addContainer'>
        <div className='addHeader'>
          <h1>Agregar</h1>
          <div className='addHeaderButtonContainer'>
            <div className='addbuttonOk'>
              <input type="submit" onClick={handleOkButtonClick}/>
              <img src={okIcon} alt=""/>
            </div>
            <div className='addbuttonQuit'>
              <button onClick={handleQuitButtonClick}></button>
              <img src={quitIcon} alt=""/> 
            </div>
          </div>
        </div>
        <div className='addInfo'>
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
