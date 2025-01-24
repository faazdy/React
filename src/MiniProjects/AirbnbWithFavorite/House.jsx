import React from 'react'
import Favorite from './Favorite'
import "./style.css"

function House({ name, location, rating, pricePerNight, picUrl }) {
  return (
    <div className="plant-card">
        <section className="img">
            <img 
                src={picUrl} 
                alt={`${name} pic`} 
            />
        </section>
        <section className="info">
            <div className="type">
                <span>⭐ {rating}</span>
            </div>
            <div className="text">
                <h1>{name}</h1>
                <p>
                    ${pricePerNight}
                </p>
            </div>
        </section>
        <section className="profile">
            <a href="#">Location: {location}</a>
        </section>
        <section className='favorite-container'>
            <Favorite />
        </section>
    </div>
  )
}

export default House