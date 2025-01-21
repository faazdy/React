import React from 'react'
import House from './House'
import "./style.css"

function HouseList({ houses }) {
    return (
        <div className="container">
            {
                houses.map((item) => {
                    return <House {...item} key={item.id}/>
                })
            }
        </div>
    )
}

export default HouseList