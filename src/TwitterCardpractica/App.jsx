import './style.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
const users = [
    {
        id: 1,
        nombre: "Samuel Cain",
        username: "samuxl",
        follow: false       
    },
    {
        id: 2,
        nombre: "Alicia Gómez",
        username: "aligz",
        follow: true
    },
    {
        id: 3,
        nombre: "Carlos Ruiz",
        username: "carlitox",
        follow: false
    },
    {
        id: 4,
        nombre: "Marta López",
        username: "martita",
        follow: true
    },
    {
        id: 5,
        nombre: "Diego Castro",
        username: "dieguito",
        follow: false
    }
];

export function App(){
    return(
        users.map((user)=>{
            return(
                <TwitterFollowCard name={user.nombre} username={user.username} follow={user.follow}/>
            )
        })
    )
}