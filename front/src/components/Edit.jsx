import React, { useState } from 'react'
import '../public/edit.css'
import quitIcon from '../public/png/quit.png'
import okIcon from '../public/png/ok.png'
import { useEffect } from 'react'
import { editDataFetcher } from '../dataFetchers'
import { editViewHandler } from '../viewHandlers'
import { editViewDataResetter, editViewDataSetter } from '../dataSetters'
import { editDataRetrieverAndValidator } from '../dataValidators'
import { sendDisplayReloadEvent } from '../eventsDispatchers'
export const Edit = () => {

  //Aca
  //Una practica que no me gusta tanto es guardar el estado de edit y add en los values de los inputs
  //Recomendablemente esto se tendria que guardar en un usestate y de ahi derivarlo a los values y al fetcher
  //Desde lejos se ve que es asi, pero por razones... lo voy a mantener asi
  //Puede ser un fix para mas adelante?, el tema es que me enquilomba un poco mas el codigo
  //El mismo debate de siempre, buenas practicas vs buen codigo

  useEffect(() => {
    const edit = document.querySelector('.editContainer')
    edit.addEventListener('sendDataEditEvent', handleSendDataEditEvent)
  }, [])

  const handleSendDataEditEvent = (event) => {
    editViewDataSetter(event.detail)
  }

  const handleEditOk = async () => {
    const data = editDataRetrieverAndValidator()
    if (!data) {
      console.error('Error (handleEditOk): data fue null')
      return
    }
    try {
      await editDataFetcher(data)
      editViewHandler()
      editViewDataResetter()
      sendDisplayReloadEvent()
    } catch (error) {
      console.error('Error (handleEditOk):', error);
    }
  }

  const handleEditQuit = () => {
    EditViewHandler()
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
        <input id="nombre"/>
        <label htmlFor="ciudad">Ciudad</label>
        <input id="ciudad"/>
        <label htmlFor="edad">Edad</label>
        <input id="edad"/>
      </div>
    </div>
  )
}
