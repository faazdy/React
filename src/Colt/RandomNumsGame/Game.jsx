import React from 'react'


export default function Game() {
    const num1 = Math.floor(Math.random() * 5) + 1
    const num2 = Math.floor(Math.random() * 5) + 1
    const result = num1 === num2 ? 'WIN' : 'LOSE'

    //CUANDO LOS ESTILOPS SON DINAMICOS ES MEJOR HACERLOS AQUI EN JSON
    const styles = {
      color: num1 === num2 ? 'green' : 'red'
    }
  return (
    <div style={styles}>
        <h1>U {result}</h1>
        <h2>NUMS: {num1} - {num2}</h2>
    </div>
  )
}
