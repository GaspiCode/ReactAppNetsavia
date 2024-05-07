import React from 'react'
import '../public/confirm.css'
import okIcon from '../public/png/ok.png'
import quitIcon from '../public/png/quit.png'
import { useEffect } from 'react'
import { viewHandler_ConfirmButtonClick } from '../viewHandlers'

export const Confirm = () => {

  useEffect(() => {

    const okButton = document.querySelector('.confirmbuttonOk input')
    const quitButton = document.querySelector('.confirmbuttonQuit button')

    if (okButton && quitButton) {
      okButton.addEventListener('click', viewHandler_ConfirmButtonClick)
      quitButton.addEventListener('click', viewHandler_ConfirmButtonClick)
    }
    else {
      console.log('Error (Confirm): okButton o quitButton fue null')
    }

    return () => {
      if (okButton && quitButton) {
        okButton.removeEventListener('click', viewHandler_ConfirmButtonClick)
        quitButton.removeEventListener('click', viewHandler_ConfirmButtonClick)
      }
      else {
        console.log('Error (Confirm): okButton o quitButton fue null')
      }
    }
  }, [])

  return (
    <div className='confirmContainer'>
      <h1>Confirmar</h1>
      <div className='confirmHeaderButtonContainer'>
        <div className='confirmbuttonOk'>
          <button></button>
          <img src={okIcon} alt="" />
        </div>
        <div className='confirmbuttonQuit'>
          <button></button>
          <img src={quitIcon} alt="" />
        </div>
      </div>
    </div>
  )
}
