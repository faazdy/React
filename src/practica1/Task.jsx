import { useState } from "react"

export function TaskCard ({text, isDo = false}) { //con el isDo = false le damos el valor default de isDo, en este caso, false
    const [isDoit, changeDo] = useState(isDo)

    const cambiarEstado = ()=>{
        changeDo(!isDoit)
    } 
    return(
        <div className={isDoit === true ? 'card-hecho': 'card'}>
            <strong className="task-text">{text}</strong>
            <div>
                <input type="checkbox" name="" id="check" onChange={cambiarEstado}/>
            </div>
            <strong className="estado">{isDoit === true ? 'Hecho' : 'no hecho'}</strong>
        </div>
    )
}