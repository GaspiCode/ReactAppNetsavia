import React from 'react'
import { PlusButton } from './PlusButton'
import { Display } from './Display'
import '../public/container.css'
export const Container = () => {
  return (
    <div className='container'>
      <PlusButton />
      <Display/>
    </div>
  )
}
