import React, { useState, useEffect } from 'react';
import api from '../services/api';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {

        return (
            <>

            <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row no-gutters">
                                {
                                    pokemons.map((pokemon, index) =>
                                        <div className="col-3">
                                            <PokemonCard key={index} pokemon={pokemon} />
                                        </div>
                                    )

                                    

                                }
                             
                            </div>
                        </div>
                    </div>
            </div>
               

            </>
        );
    
}

export default PokemonList;
