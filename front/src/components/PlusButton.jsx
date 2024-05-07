import React, { useEffect, useState } from 'react'
import plusIcon from '../public/png/plus.png'
import '../public/plusButton.css'
import { plusButtonViewHandler } from '../viewHandlers'

export const PlusButton = () => {

  return (
    <div className='plusButtonContainer'>
      <button onClick={plusButtonViewHandler}>
        <img src={plusIcon} alt="Icono Añadir" />
      </button>
    </div>
  )
}
