import React from 'react'
import CasinoGame from './CasinoGame'

export function App() {
    const n1 = Math.floor(Math.random() * 5 ) + 1
    const n2 = Math.floor(Math.random() * 5 ) + 1
    const n3 = Math.floor(Math.random() * 5 ) + 1
  return (
    <CasinoGame slot1={n1} slot2={n2} slot3={n3}/>
  )
}
