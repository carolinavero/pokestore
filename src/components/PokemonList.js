import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {

        return (
            <>

                <div className="row no-gutters">
                    {
                        pokemons.map((pokemon, index) =>
                            <div className="col-3">
                                <PokemonCard key={index} pokemon={pokemon} />
                            </div>
                        )
                    }
                    
                </div>

            </>
        );
    
}

export default PokemonList;
