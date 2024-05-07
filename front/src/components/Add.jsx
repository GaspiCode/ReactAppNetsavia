import React, { useState } from 'react'
import '../public/add.css'
import okIcon from '../public/png/ok.png'
import quitIcon from '../public/png/quit.png'

import { addViewDataResetter } from '../dataSetters'
import { sendDisplayReloadEvent } from '../eventsDispatchers'
import { dataValidator } from '../dataValidators'
import { addDataFetcher } from '../dataFetchers'
import { addViewHandler } from '../viewHandlers'
import { addDataRetriever } from '../dataRetrievers'


export const Add = () => {

  const handleAddOk = async () => {
    const newData = addDataRetriever()
    if(!dataValidator(newData)){
      return
    }
    try {
      await addDataFetcher(newData)
      addViewHandler()
      addViewDataResetter()
      sendDisplayReloadEvent()
    } catch (error) {
      console.error('Error (handleAddOk):', error);
    }
  }

  const handleAddQuit = () => {
    addViewHandler()
    addViewDataResetter()
  }

  return (
      <div className='addContainer'>
        <div className='addHeader'>
          <h1>Agregar</h1>
          <div className='addHeaderButtonContainer'>
            <div className='addbuttonOk'>
              <button onClick={handleAddOk}></button>
              <img src={okIcon} alt="" />
            </div>
            <div className='addbuttonQuit'>
              <button onClick={handleAddQuit}></button>
              <img src={quitIcon} alt="" />
            </div>
          </div>
        </div>
        <div className='addInfo'>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" />
          <label htmlFor="ciudad">Ciudad</label>
          <input id='ciudad' />
          <label htmlFor="edad">Edad</label>
          <input id="edad" />
        </div>
      </div>
  )
}
