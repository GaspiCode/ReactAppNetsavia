import React from 'react'
import '../public/edit.css'
import editIcon from '../public/png/editar.png'

export const Edit = () => {
  return (
    <form action="">
      <div className='editContainer'>
        <h1>Editar</h1>
        <div className='editInfo'>
          <label htmlFor="">Nombre</label>
          <div>
            <input type="text" name="" id="" />
            <img src={editIcon} alt="" />
          </div>
          <label htmlFor="">Ciudad</label>
          <div>
            <input type="text" name="" id="" />
            <img src={editIcon} alt="" />
          </div>
          <label htmlFor="">Edad</label>
          <div>
            <input type="text" name="" id="" />
            <img src={editIcon} alt="" />
          </div>
          <div className='editBotones'>
            <input type="submit"/>
            <button>Cancelar</button>
          </div>
        </div>
      </div>
    </form>
  )
}
