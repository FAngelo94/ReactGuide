import React from "react";
function SimpleCase() {
    const [state, setState] = React.useState(0);

    return (
        <React.Fragment>
            
            <p className="text-center">Stato={state}</p>
            <div className="d-flex flex-wrap">
                <button type="button" className="btn btn-secondary flex-grow-1 me-3" onClick={() => setState(prevState => prevState + 1)}>+</button>
                <button type="button" className="btn btn-secondary flex-grow-1" onClick={() => setState(prevState => prevState - 1)}>-</button>
            </div>
        </React.Fragment>
    );
}

export default SimpleCase;