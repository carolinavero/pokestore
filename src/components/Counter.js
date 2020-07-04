import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {


    return (
        <>
            <div className="row no-gutters">
                
                <div className="col-3">
                    <button
                        className="btn btn-secondary"
                    >
                        <FontAwesomeIcon icon={faMinus} />

                    </button>

                </div>
                <div className="col-6">
                    <span>
                        0
                    </span>
                </div>
                <div className="col-3">
                    <button
                        className="btn btn-secondary"
                        /* onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled={this.props.counter.value === 0 ? "disabled" : ""} */
                    >
                        <FontAwesomeIcon icon={faPlus} />

                    </button>
                </div>
                
            </div>

            <div className="row">
                <div className="col-12">
                    <button
                        className="btn btn-success btn-block"
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span>Adicionar </span>
                    </button>
                </div> 
            </div>
        </>
    );
}


export default Counter;