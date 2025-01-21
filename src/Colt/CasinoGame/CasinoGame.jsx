import React from 'react'
import "./style.css"

export default function CasinoGame({slot1, slot2, slot3}) {
    const values = [slot1, slot2, slot3]
    const isWin = slot1 === slot2 && slot1 === slot3

    const styles = {
        color: isWin ? 'green' : 'red',
    }
  return (
    <div style={styles} className='casino'>
        <div>
            {
                values.map((element) =>{
                    return <h3>{element}</h3>
                })
            }
        </div>
        {
            isWin ? <h5>Congrats!!</h5> : null
        }
        <h4>U {isWin ? 'Win' : 'Lose'}</h4>
    </div>
  )
}
