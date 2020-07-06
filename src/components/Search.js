import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = () => {
    return (
        <>

            <div className="container-fluid search">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12 col-sm-9">
                                <input type="text" className="form-control" placeholder="Pesquisar..." />
                            </div>

                            <div className="col-12 col-sm-3">
                                <button className="btn btn-primary btn-block">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            

        </>

    )
}

export default Search;