import React, { useState } from 'react'
import '../public/edit.css'
import quitIcon from '../public/png/quit.png'
import okIcon from '../public/png/ok.png'
import { useEffect } from 'react'
import { editDataFetcher } from '../dataFetchers'
import { editViewHandler } from '../viewHandlers'
import { editViewDataResetter, editViewDataSetter } from '../dataSetters'
import { dataValidator } from '../dataValidators'
import { sendDisplayReloadEvent } from '../eventsDispatchers'
import { editDataRetriever } from '../dataRetrievers'

export const Edit = () => {

  let [data, setData] = useState()

  useEffect(() => {
    const edit = document.querySelector('.editContainer')
    edit.addEventListener('sendDataEditEvent', handleSendDataEditEvent)
  }, [])

  const handleSendDataEditEvent = (event) => {
      setData(event.detail)
      editViewDataSetter(event.detail)
  }

  const handleEditOk = async () => {
    const newData = {...data,...editDataRetriever()}
    if(!dataValidator(newData)){
      return
    }
    try {
      await editDataFetcher(newData)
      editViewHandler()
      editViewDataResetter()
      sendDisplayReloadEvent()
    } catch (error) {
      console.error('Error (handleEditOk):', error);
    }
  }

  const handleEditQuit = () => {
    editViewHandler()
    editViewDataResetter()
  }

  return (
    <div className='editContainer'>
      <div className='editHeader'>
        <h1>Editar</h1>
        <div className='editHeaderButtonContainer'>
          <div className='editbuttonOk'>
            <button onClick={handleEditOk}></button>
            <img src={okIcon} alt="" />
          </div>
          <div className='editbuttonQuit'>
            <button onClick={handleEditQuit}></button>
            <img src={quitIcon} alt="" />
          </div>
        </div>
      </div>
      <div className='editInfo'>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" />
        <label htmlFor="ciudad">Ciudad</label>
        <input id="ciudad" />
        <label htmlFor="edad">Edad</label>
        <input id="edad" />
      </div>
    </div>
  )
}
