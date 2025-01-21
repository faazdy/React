import React from 'react'
import Card from './Card'

export default function CardList() {

    const users = [{
        id: 1,
        nombre: 'Alexa',
        edad: 76,
        altura: 175
    },
    {
        id: 2,
        nombre: 'Boos',
        edad: 78,
        altura: 141
    }
    ]
  return (
    <div>
        {
            users.map((user) =>{
                return <Card name={user.nombre} age={user.edad} isTall={user.altura} key={user.id}/>
            })
        }
    </div>
  )
}
