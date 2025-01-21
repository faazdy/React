import React, { useState, useEffect } from "react";

export function Movie() {
    const [query, setQuery] = useState(""); 
    const [movies, setMovies] = useState([]);

    // cambio del value
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    // Fetch de la API al cambiar el estado 'query'
    useEffect(() => {
        if (query.trim() === "") {
            setMovies([]); // Limpia los datos si no hay búsqueda
            return;
        }
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, [query, setMovies]);

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <section>
            <form
                onSubmit={submit}
            >
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            <div className="movies-container">
                {movies.map((movie) => {
                    //const id = movie.show.id;
                    //const name = movie.show.name;
                    //const image = movie.show.image;
                    const { id, name, image } = movie.show; // agarrar las propiedades de cada 'movie.show' pero las necesarias
                    
                    return (
                        <div className="movie" key={id}>
                            <h1>{name}</h1>
                            <img
                                src={image?.medium} // el ? es para que si hay un 'undefined' o 'null' no acceda al .meduim y bote error
                                alt={`Movie: ${name}`}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
