import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <>

            <div className="container search">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <div className="row search-content">
                            <div className="col-12 col-sm-12">

                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Pesquisar..." aria-label="Pesquisar" aria-describedby="button-search" />
                                        <div className="input-group-append">
                                        <button className="btn btn-primary" type="button" id="button-search"> 
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                </div>        

                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            

        </>

    )
}

export default Search;