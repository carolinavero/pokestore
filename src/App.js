import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Search from './components/Search';
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

        <Search />

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-9 col-12">
                <PokemonList pokemons={pokemons} />
              </div>
              <div className="col-sm-3 col-12">
                <Cart />
              </div>
            </div>

          </div>
      
        </>
      );
  }
}

export default App;
