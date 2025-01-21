import React from 'react'
import { useState } from 'react'

function Favorite() {
    const [isFavorite, setFavorite] = useState(false)

    const handleFavorite = () =>{
        setFavorite(!isFavorite)
    }
    const style = {
        backgroundColor: isFavorite ? 'pink' : ''
    }
  return (
    <button
        className='favorite-btn' 
        style={style}
        onClick={handleFavorite}>
        ❤️ 
    </button>
  )
}

export default Favorite