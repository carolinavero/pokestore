import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {

    return (
        <>

            <div className="row no-gutters">
                {
                    pokemons.map((pokemon, index) =>
                        <div key={index}  className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <PokemonCard pokemon={pokemon} />
                        </div>
                    )
                }
                
            </div>

        </>
    );
    
}

export default PokemonList;
