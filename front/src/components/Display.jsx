import React from 'react'
import { Card } from './Card'
import '../public/display.css'

export const Display = ({array}) => {
  return (
    <div className="displayer">
        <ul>
            {array.map((item, index) => (
                <li id={index}><Card title={item}/></li>
            ))}
        </ul>
    </div>
  )
}
