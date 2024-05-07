import React from 'react'
import editIcon from '../public/png/editar.png'
import deleteIcon from '../public/png/borrar.png'
import '../public/card.css'
import { CardDeleteViewHandler, CardEditViewHandler } from '../viewHandlers'
import { sendIdEvent } from '../eventsDispatchers'
export const Card = (props) => {

  const handleCardEdit = () => {
    
    CardEditViewHandler()
  }

  const handleCardDelete = () => {
    sendIdEvent(props.id)
    CardDeleteViewHandler()
  }

  return (
    <div className='card'>
      <div className='info'>
        <h1>{props.nombre}</h1>
        <p>Ciudad: {props.ciudad} </p>
        <p>Edad: {props.edad}</p>
      </div>
      <div className='buttonContainer'>
        <div className='buttons'>
          <button onClick={handleCardEdit}>
            <img src={editIcon} alt="Icono Editar" />
          </button>
          <button onClick={handleCardDelete}>
            <img src={deleteIcon} alt="Icono Borrar" />
          </button>

        </div>
      </div>
    </div>
  )
}
