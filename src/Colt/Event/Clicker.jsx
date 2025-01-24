import React from 'react'

function handleClick(){
    console.log('u click me')
}

function Clicker() {
  return (
    <div>
        <h1>Click the button</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Clicker