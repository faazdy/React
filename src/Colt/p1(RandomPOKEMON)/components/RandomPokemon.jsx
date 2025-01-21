import React from 'react'
import "../style.css"

export default function RandomPokemon() {
    const num = Math.floor(Math.random() * 151) + 1
    const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+num+'.png'

    return (
        <div className='pokeCard'>
            <h1>Pokemon number: {num}</h1>
            <img src={img} alt="" />
        </div>
    )
}
