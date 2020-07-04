import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import api from './services/api';
import PokemonList from './components/PokemonList';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([0]);

  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {

    api.get(`pokemon`)
      .then(result => {
        //console.log("result!!", result.data);
        console.log("prev", result.data.previous)
 
        setPokemons(result.data.results);
        setIsLoaded(true);

        setPrevious(result.data.previous);
        setNext(result.data.next);
        setCount(result.data.count);

        console.log("prev", previous);
        console.log("next", next);
        console.log("count", count);

      })

      .catch(error => {
        setError("Erro ao carregar itens.")
      })

  }, []);
  

  if (error) {
    console.error('erro ao carregar', error);
    return <div>Erro: {error}</div>;

  } else if (!isLoaded) {
    return <div>Carregando...</div>;

  } else {

      return (
        <>
        <Navbar />

        <PokemonList pokemons={pokemons} />
      
        </>
      );
  }
}

export default App;
