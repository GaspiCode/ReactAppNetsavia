import React, { useEffect, useState } from 'react'
import '../public/confirm.css'
import okIcon from '../public/png/ok.png'
import quitIcon from '../public/png/quit.png'
import { confirmViewHandler} from '../viewHandlers'
import { sendDisplayReloadEvent } from '../eventsDispatchers'
import { confirmDataFetcher } from '../dataFetchers'

export const Confirm = () => {

  let[id, setId] = useState()

  useEffect(()=>{
    const confirm = document.querySelector('.confirmContainer')
    confirm.addEventListener('sendIdEvent',handleId)
  },[])

  const handleId =(event) =>{
    setId(event.detail.id)
  }

const handleConfirmOk = async () =>{
  try {
    await confirmDataFetcher(id)
    confirmViewHandler()
    sendDisplayReloadEvent()
  } catch (error) {
    console.error('Error (handleAdd):', error)
  }
}
const handleConfirmQuit = () =>{
  confirmViewHandler()
}
  
  return (
    <div className='confirmContainer'>
      <h1>Confirmar</h1>
      <div className='confirmHeaderButtonContainer'>
        <div className='confirmbuttonOk'>
          <button onClick={handleConfirmOk}></button>
          <img src={okIcon} alt="" />
        </div>
        <div className='confirmbuttonQuit'>
          <button onClick={handleConfirmQuit}></button>
          <img src={quitIcon} alt="" />
        </div>
      </div>
    </div>
  )
}
