import React from 'react'
import Hero from "../../assets/image.png"

export function BodyContent({name}) {
    const opinionsReact = [
        {
            id: 1,
            username: "Benjamin Mack",
            pic: Hero,
            text: "React makes building UI so much easier!"
        },
        {
            id: 2,
            username: "Gussie Estrada",
            pic: Hero,
            text: "I love how React lets me manage state efficiently."
        },
        {
            id: 3,
            username: "Raymond Parks",
            pic: Hero,
            text: "Using React hooks changed the way I develop!"
        },
        {
            id: 4,
            username: "Jeffrey Houston",
            pic: Hero,
            text: "The component-based approach in React is so intuitive."
        }
    ];
  return (
    <main>
        <section className='hero'>
            <h1>LANDING WITH <span>REACT</span></h1>
            <h2>Hi, <span>{name}</span></h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus assumenda modi quam earum mollitia beatae voluptatibus laborum.
            </p>
        </section>
        <section>
            <div>
                <h2>React</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem, ipsa tempore iste cum cupiditate natus perferendis magnam rerum rem expedita blanditiis nobis. Error iusto nam quam officiis corporis tempore.
                </p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </section>
        <section className='cards'>
            <h2>Opinions of React</h2>
            <div className="cards-cont">
                {
                opinionsReact.map((card)=>{
                    return(
                        <div className='card'>
                            <div className="info">
                                <img src={card.pic} alt={card.username + " image"} />
                                <strong>{card.username}</strong>
                            </div>
                            <hr />
                            <p>{card.text}</p>
                        </div>
                    )
                })
                }
            </div>
        </section>
    </main>
  )
}

