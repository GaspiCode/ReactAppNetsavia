import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './Card'
import '../public/display.css'
import {  displayDataFetcher } from '../dataFetchers';

export const Display = () => {

  const [datos, setDatos] = useState([])

  const handleDisplayDataFetcher = async () => {
    const data = await displayDataFetcher()
    setDatos(data)
  }

  useEffect(() => { 
    const display = document.querySelector('.displayer')
    display.addEventListener('resetEvent',handleDisplayDataFetcher)

    handleDisplayDataFetcher()
  }, [])
  
  return (
    <div className="displayer">
        <ul>
            {datos.map((item) => (
                <li key={item._id}>
                  <Card _id={item._id} nombre={item.nombre} edad={item.edad} ciudad={item.ciudad}/>
                </li>
            ))}
        </ul>
    </div>
  )
}
