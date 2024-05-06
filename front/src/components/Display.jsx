import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './Card'
import '../public/display.css'

export const Display = ({}) => {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('/Data')
        const jsonData = await response.json()
        setDatos(jsonData)
      } catch (err) {
        console.error('Error (Display): Error en la solicitud',err)
      }
    }
    obtenerDatos()
  }, [])
  
  const data = {
    id: 1,
    nombre: "Mateo",
    edad: 32,
    ciudad: "Barcelona"
  }
  datos.push(data)

  const data2 = {
    id: 2,
    nombre: "Gaspar",
    edad: 22,
    ciudad: "buenos aires"
  }
  datos.push(data2)



  return (
    <div className="displayer">
        <ul>
            {datos.map((item) => (
                <li key={item.id}>
                  <Card id={item.id} nombre={item.nombre} edad={item.edad} ciudad={item.ciudad}/>
                </li>
            ))}
        </ul>
    </div>
  )
}
