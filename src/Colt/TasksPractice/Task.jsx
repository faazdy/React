import React from 'react'
import './Task.css'
import { useState } from 'react'

export default function Task({taskText, isDo = false}) {
    const [isDoit, setDo] = useState(isDo)

    const handleDo = ()=>{
        setDo(!isDoit)
    }
  
    return (
    <div className={isDoit ? 'task isDo' : 'task'}>
        <strong>{taskText}</strong>
        <input type="checkbox" name="" id="" onChange={handleDo} checked={ isDoit }/>
        <span>{isDoit ? 'Hecho' : 'No hecho'}</span>
    </div>
  )
}
