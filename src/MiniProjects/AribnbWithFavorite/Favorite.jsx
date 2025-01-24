import React from 'react'
import { useState } from 'react'

function Favorite() {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite = () =>{
        setIsFavorite(!isFavorite)
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