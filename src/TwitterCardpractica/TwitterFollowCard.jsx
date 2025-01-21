/*Para poder reutilizar nuestros componentes, hay que usar si o si parametros y entre llaves
    function BlaBlaBla({param1, param2....})
*/
import React from "react"
import { useState } from "react"

export function TwitterFollowCard({name, username, follow}){

    const [isFollow, changeFollow] = useState(follow)
    const handleFollow = ()=>{
        changeFollow(!isFollow)
    }

    return(
        <article className="card-follow">
            <img src="image.png" alt={name+" pic"} />
            <div className="info">
                <strong>{name}</strong>
                <span>@{username}</span>
            </div>
            <div className='btn-container'>
                <button onClick={handleFollow} className={isFollow ? 'btn following' : 'btn'}>
                    <span className="textDefault">{isFollow ? 'Following' : 'Follow'}</span>
                    <span className="stopFollow">Unfollow</span>
                </button>
            </div>
        </article>
    )
}