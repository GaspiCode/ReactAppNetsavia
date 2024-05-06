import React from 'react'
import editIcon from '../public/png/editar.png'
import deleteIcon from '../public/png/borrar.png'
import '../public/card.css'
import { useEffect } from 'react'
import { viewHandler_CardEditClick, viewHandler_CardDeleteClick } from '../viewHandlers'
export const Card = (props) => {

  
  useEffect(() => {

    const editButton = document.querySelector('.buttonEdit')
    const deleteButton = document.querySelector('.buttonDelete')

    if(editButton && deleteButton){
      editButton.addEventListener('click',viewHandler_CardEditClick)
      deleteButton.addEventListener('click',viewHandler_CardDeleteClick)
    }
    else{
      console.log('Error (PlusButton): editButton o deleteButton fue null')
    }

   
    return() => {
      if(editButton && deleteButton){
        editButton.removeEventListener('click',viewHandler_CardEditClick)
        deleteButton.removeEventListener('click',viewHandler_CardDeleteClick)
      }
      else{
        console.log('Error (PlusButton): plusButton fue null')
      }
    }
  }, [])




  return (
    <div className='card'>
        <div className='info'>
            <h1>{props.nombre}</h1>
            <p>Ciudad: {props.ciudad} </p>
            <p>Edad: {props.edad}</p>
        </div>
        <div className='buttonContainer'>
            <div className='buttons'>
              <button className='buttonEdit'>
                <img src={editIcon} alt="Icono Editar" />   
              </button>
              <button className='buttonDelete'>
                <img src={deleteIcon} alt="Icono Borrar" />
              </button>
               
            </div>
        </div>     
    </div>
  )
}
