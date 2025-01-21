import { useState } from "react"

export function ContadorClicks({number = 0}){
    const [num, changeNum] = useState(number)

    const counter = ()=>{
        changeNum(num + 1)
    }
    const reset = ()=>{
        changeNum(0)
    }
    const diss = ()=>{
        changeNum(num - 1)
    }
    const salute = ()=>{
        changeNum('Hola mi amigo de React')
    }
    return(
        <div>
            <h1>Hola, {num}</h1>
            <button onClick={counter}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={diss}>-</button>
            <button onClick={salute}>Saludar</button>
        </div>
    )
}