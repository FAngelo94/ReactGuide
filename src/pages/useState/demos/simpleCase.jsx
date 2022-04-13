import React from "react";
function SimpleCase() {
    const [state, setState] = React.useState(0);

    return (
        <React.Fragment>
            <h5><a href="https://github.com/FAngelo94/ReactGuide/tree/main/src/pages/useState/Demos/SimpleCase.jsx" class="link-primary" target="_blank">Caso Semplice</a></h5>
            <p>Esempio semplice con un contatore e 2 pulsanti che aggiornano lo stato aumentando o diminuendo la variabile di 1</p>
            <p className="text-center">Stato={state}</p>
            <div className="d-flex flex-wrap">
                <button type="button" class="btn btn-secondary flex-grow-1 me-3" onClick={() => setState(prevState => prevState + 1)}>+</button>
                <button type="button" class="btn btn-secondary flex-grow-1" onClick={() => setState(prevState => prevState - 1)}>-</button>
            </div>
        </React.Fragment>
    );
}

export default SimpleCase;