import React from 'react'
import '../public/add.css'
import okIcon from '../public/png/ok.png'
import quitIcon from '../public/png/quit.png'

import { addReseter } from '../dataReseters'
import { displayReloader } from '../dataReloaders'
import { addValidator } from '../dataValidators'
import { addDataFetcher } from '../dataFetchers'
import { addViewHandler } from '../viewHandlers'


export const Add = () => {

  const handleAddOk = async () => {
    const data = addValidator()
    if (!data) {
      console.error('Error (handleAdd): data fue null')
      return
    }
    try {
      await addDataFetcher(data);
      addViewHandler();
      addReseter();
      displayReloader();
    } catch (error) {
      console.error('Error (handleAdd):', error);
    }
  }

  const handleAddQuit = () => {
    addViewHandler()
    addReseter()
  }

  return (
    <div className='addComponent'>
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
    </div>
  )
}
