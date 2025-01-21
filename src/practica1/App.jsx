import './style.css';
import { TaskCard } from './Task';

export function App (){
    return(
        <>
            <TaskCard text="Hacer lentejas" isDo={false}/>
            <TaskCard text="Hacer 2" isDo={false}/>
            <TaskCard text="Hacer 3" isDo={false}/>
        </>
    )
}