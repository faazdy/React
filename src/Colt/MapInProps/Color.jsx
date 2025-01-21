import React from 'react'

export default function Color({colores}) {
  return (
    <ul>
        {
            colores.map((c) => {
                return <li style={{color: c}}>{c}</li>
            })
        }
        <hr />
    </ul>
  )
}
