import React from 'react'
import Color from './Color'

export function App() {
  return (
    <div>
        <Color colores={['red', 'orange', 'blue']}/>
        <Color colores={['green', 'olive', 'gray']}/>
    </div>
  )
}
