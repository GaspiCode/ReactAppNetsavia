import React from 'react'
import editIcon from '../public/png/editar.png'
import deleteIcon from '../public/png/borrar.png'
import '../public/card.css'
import { useEffect } from 'react'

export const Card = (props) => {

  
  useEffect(() => {

    const editButton = document.querySelector('.buttons img')
 

    if(editButton){
      editButton.addEventListener('click',handleEditClick)
    }
    else{
      console.log('Error (PlusButton): plusButton fue null')
    }

   
    return() => {
      if(editButton){
        editButton.removeEventListener('click',handleEditClick)
      }
      else{
        console.log('Error (PlusButton): plusButton fue null')
      }
    }
  }, [])

  
  const handleEditClick = () => {
    const add = document.querySelector('.editContainer')
    const container = document.querySelector('.container')
    if(add && container){
      container.style.transform = 'translate(-500%, 0)'
      add.style.transform = 'translate(-50%, -50%)'
    }
    else{
      console.log('Error (PlusButton): add o container fue null')
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
              <button onClick={handleEditClick()}>
                <img src={editIcon} alt="Icono Editar" />   
              </button>
              <button>
                <img src={deleteIcon} alt="Icono Borrar" />
              </button>
               
            </div>
        </div>     
    </div>
  )
}
