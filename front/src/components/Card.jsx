import React from 'react'
import editIcon from '../public/png/editar.png'
import deleteIcon from '../public/png/borrar.png'
import '../public/card.css'

export const Card = (props) => {
  return (
    <div className='card'>
        <div className='info'>
            <h1>{props.nombre}</h1>
            <p>Ciudad: {props.ciudad} </p>
            <p>Edad: {props.edad}</p>
        </div>
        <div className='buttonContainer'>
            <div className='buttons'>
                <img src={editIcon} alt="Icono Editar" />   
                <img src={deleteIcon} alt="Icono Borrar" />
            </div>
        </div>     
    </div>
  )
}
