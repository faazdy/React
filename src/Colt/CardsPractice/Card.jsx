import React from 'react'

function Card({name, age, isTall}) {
  return (
    <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{isTall}</h3>
        <hr />
    </div>
  )
}

export default Card