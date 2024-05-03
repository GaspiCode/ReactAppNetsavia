import React from 'react'
import editIcon from '../public/png/editar.png'
import deleteIcon from '../public/png/borrar.png'
import '../public/card.css'
import { useEffect } from 'react'

export const Card = (props) => {

  
  useEffect(() => {

    const editButton = document.querySelector('.buttonEdit')
    const deleteButton = document.querySelector('.buttonDelete')

    if(editButton && deleteButton){
      editButton.addEventListener('click',handleEditClick)
      deleteButton.addEventListener('click',handleDeleteClick)
    }
    else{
      console.log('Error (PlusButton): editButton o deleteButton fue null')
    }

   
    return() => {
      if(editButton && deleteButton){
        editButton.removeEventListener('click',handleEditClick)
        deleteButton.removeEventListener('click',handleDeleteClick)
      }
      else{
        console.log('Error (PlusButton): plusButton fue null')
      }
    }
  }, [])

  
  const handleEditClick = () => {
    const edit = document.querySelector('.editContainer')
    const container = document.querySelector('.container')
    if(edit && container){
      container.style.transform = 'translate(-500%, 0)'
      edit.style.transform = 'translate(-50%, -50%)'
    }
    else{
      console.log('Error (PlusButton): edit o container fue null')
    }

  }

  const handleDeleteClick = () => {
    const confirm = document.querySelector('.confirmContainer')
    const container = document.querySelector('.container')
    if(confirm && container){
      container.style.transform = 'translate(0, 500%)'
      confirm.style.transform = 'translate(-50%, -50%)'
    }
    else{
      console.log('Error (PlusButton): confirm o container fue null')
    }

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
              <button className='buttonEdit' onClick={handleEditClick}>
                <img src={editIcon} alt="Icono Editar" />   
              </button>
              <button className='buttonDelete' onClick={handleDeleteClick}>
                <img src={deleteIcon} alt="Icono Borrar" />
              </button>
               
            </div>
        </div>     
    </div>
  )
}
