import React, { useState, useEffect } from 'react';

function Api () {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemons, setPokemons] = useState([0]);
    const [previous, setPrevious] = useState(0);
    const [next, setNext] = useState(0);
    const [count, setCount] = useState(0);

    const [price, setPrice] = useState(0);

    useEffect(() => {

        const url = `https://pokeapi.co/api/v2/pokemon/`;
       /*  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`; */

        fetch(url)
            .then(response => response.json())
            .then(result => {
                setIsLoaded(true);
                setPokemons(result.results);
                console.log('lista de pokemon', result.results);

                setPrevious(result.previous);
                setNext(result.next);
                setCount(result.count);
 
                console.log("prev", result.previous);
                console.log("next", result.next);
                console.log("count", result.count);
 
            },
            error => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    if (error) {
        return <div>Erro: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Carregando...</div>;
    } else {

        return (   

            <>
            <h2>Total de Itens: {count}</h2>
            <ul>
    
                 {pokemons.map(pokemon => (
                    <li key={pokemon.name}>

                        <h2>{pokemon.name}</h2> {pokemon.url}
                         <p>id: {pokemon.id}</p>
                        

                         <img src={''} alt={pokemon.name}  /> 

                         <h4>R${price},00</h4>

                        <button>Comprar</button>

                    </li>
                ))} 

                {previous > 1 ? 
                    <a href={previous}>Anteriores</a> 
                    : ''
                }
                <a href={next}>Próximos</a>

            </ul>
            </>

        )
    }

}

export default Api;

