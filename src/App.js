import React, { useState, useEffect, useCallback } from 'react';
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

  const getInfoFromAPI = useCallback(uri => {

    api.get(uri)
      .then(result => {
        setPokemons(result.data.results);
        setIsLoaded(true);

        setPrevious(result.data.previous);
        setNext(result.data.next);

      })

      .catch(error => {
        setError("Erro ao carregar itens.")
      })

  }, []);

  useEffect(() => {

    getInfoFromAPI('https://pokeapi.co/api/v2/pokemon')

  }, [getInfoFromAPI]);

  function handlePreviousPage () {
    if(previous) getInfoFromAPI(previous);
  }

  function handleNextPage() {
    if(next) getInfoFromAPI(next);
  }

  if (error) {
    console.error('Erro ao carregar: ', error);
    return <div>Erro: {error}</div>;

  } else if (!isLoaded) {
    return <div>Carregando...</div>;

  } else {

      return (
        <>
        <section  className="header">
          <Navbar />
        </section>

        <Search />

          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-12">
                <PokemonList pokemons={pokemons} />

                <nav aria-label="Pagination">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <button className="page-link " onClick={handlePreviousPage}> Anterior</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link active" onClick={handleNextPage}> Próximo</button>
                    </li>
                  </ul>
                </nav>

              </div>
              <div className="col-sm-4 col-12">
                <Cart />
              </div>
            </div>

          </div>
      
        </>
      );
  }
}

export default App;
