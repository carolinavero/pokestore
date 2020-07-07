import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Counter from './Counter';

const PokemonCard = ({ pokemon }) => {

    const [ infoPokemon, setInfoPokemon ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const [ price ] = useState(() => {
        return Math.floor(Math.random() * 90) + 10;
    });

    useEffect(() => {
        async function getInfo() {
            const info = await api.get(`pokemon/${pokemon.name}`);
            setInfoPokemon(info.data);
            setLoaded(true);
        }
        getInfo();
        console.log(pokemon);
    }, [pokemon]);

    return (

        <div className="pokemon-card">
            <div className="pokemon-card-header">
                <h2>{pokemon.name}</h2>
            </div>
            <div className="pokemon-card-body">
               {
                   loaded ? 
                   <img src={infoPokemon.sprites.front_default} alt={pokemon.name} /> : 
                   'Carregando...'
               }
            </div>
            <div className="pokemon-card-footer">
                <h4>R$ {price},00</h4>   
                <Counter pokemon={pokemon} info={infoPokemon} price={price} />
            </div>
           
        </div>
    )
}

export default PokemonCard;