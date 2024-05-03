import React from 'react'
import '../public/confirm.css'
import okIcon from '../public/png/ok.png'
import quitIcon from '../public/png/quit.png'
import { useEffect } from 'react'


export const Confirm = () => {

  useEffect(() => {

    const okButton = document.querySelector('.confirmbuttonOk input')
    const quitButton = document.querySelector('.confirmbuttonQuit button')

    if(okButton && quitButton){
      okButton.addEventListener('click',handleOkButtonClick)
      quitButton.addEventListener('click',handleQuitButtonClick)
    }
    else{
      console.log('Error (Confirm): okButton o quitButton fue null')
    }
   
    return() => {
      if(okButton && quitButton){
        okButton.removeEventListener('click',handleOkButtonClick)
        quitButton.removeEventListener('click',handleQuitButtonClick)
      }
      else{
        console.log('Error (Confirm): okButton o quitButton fue null')
      }
    }
  }, [])

  
  const handleOkButtonClick = () => {
    const confirm = document.querySelector('.confirmContainer')
    const container = document.querySelector('.container')
    if(confirm && container){
      container.style.transform = 'translate(0, 0)'
      confirm.style.transform =  'translate(-50%, -800%)'
    }
    else{
      console.log('Error (Confirm): confirm o container fue null')
    }
  }
  
  const handleQuitButtonClick = () => {
    const confirm = document.querySelector('.confirmContainer')
    const container = document.querySelector('.container')
    if(confirm && container){
      container.style.transform = 'translate(0, 0)'
      confirm.style.transform =  'translate(-50%, -800%)'
    }
    else{
      console.log('Error (Confirm): confirm o container fue null')
    }

  }





  return (
    <div className='confirmContainer'>
      <h1>Confirmar</h1>
      <div className='confirmHeaderButtonContainer'>
        <div className='confirmbuttonOk'>
          <input type="submit" onClick={handleOkButtonClick} />
          <img src={okIcon} alt="" />
        </div>
        <div className='confirmbuttonQuit'>
          <button onClick={handleQuitButtonClick}></button>
          <img src={quitIcon} alt="" />
        </div>
      </div>
    </div>
  )
}
