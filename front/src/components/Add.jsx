import React from 'react'
import '../public/add.css'


export const Add = () => {
  return (
    <form action="">
      <div className='addContainer'>
        <h1>Agregar</h1>
        <div className='addInfo'>
          <label htmlFor="">Nombre</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Ciudad</label>
          <input type="text" />
          <label htmlFor="">Edad</label>
          <input type="text" name="" id="" />
          <div>
            <input type="submit"/>
            <button>Cancelar</button>
          </div>
        </div>
      </div>
    </form>
  )
}
