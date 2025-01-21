import React from "react";
import { useState, useEffect } from "react";

export function Store(){
    const [query, setQuery] = useState(''); // value de la search bar
    const [items, setItems] = useState([]); //resultados de la API

    const submit = (e)=>{
        e.preventDefault();
    }
    const inputValue = (input)=>{
        setQuery(input.target.value);
    }

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${query.trim()}`) //el TRIM es para eliminar los espacios al principio o final
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                setItems(Array(data)); //lo meto en un array para que no me de conflicto con .map
                if(query.trim() === ''){
                    setItems([])
                }
            })
            .catch((e)=> console.log(e))

            
    }, [query]);

    return(
        <section>
            <form onSubmit={submit}>
                <input type="text"
                    onChange={inputValue}
                    value={query}     
                />
                <input type="submit" value="a" />
            </form>

            <div className="container">
                {
                    items.length > 0 ? (items.map((item)=>{
                        const {title, description, id, image, price} = item

                        return(
                            <div className="card" key={id}>
                                
                                <p>{description}</p>
                                <img src={image} alt="" />
                                <strong>${price}</strong>
                                <h3>{title}</h3>
                            </div>
                        )
                    })) : (<p>s</p>)
                }
            </div>
        </section>
    )

}