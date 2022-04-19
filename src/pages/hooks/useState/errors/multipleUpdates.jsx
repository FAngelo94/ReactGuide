import React from "react";
import CodeBlock from "../../../../components/codeBlock";

function MultipleUpdate() {
    const [state, setState] = React.useState(0);
    const [state2, setState2] = React.useState(0);

    const updateWrong = () => {
        setState(state + 1)
        setState(state + 2)
    }

    const updateCorrect = () => {
        setState2(prev => prev + 1)
        setState2(prev => prev + 2)
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="text-center">Stato non correttamente aggiornato={state}</p>
                        <button type="button" className="btn btn-secondary w-100" onClick={updateWrong}>Aggiorna Male</button>
                        <CodeBlock
                            text={`
const [state, setState] = React.useState(0);
const updateWrong = () => {
    // Questo set verrà sovrascritto dal successivo
    setState(state + 1) 
    // Il valore di state non è stato ancora aggiornato quindi al 
    //prossimo render avremo soltanto che "state=state+2" 
    setState(state + 2) 
}`}
                        />
                    </div>
                    <div className="col">
                        <p className="text-center">Stato correttamente aggiornato={state2}</p>
                        <button type="button" className="btn btn-secondary w-100" onClick={updateCorrect}>Aggiorna Correttamente</button>
                        <CodeBlock
                            text={`
const [state, setState] = React.useState(0);
const updateCorrect = () => {
    setState(prev => prev + 1)
    // Usando il "Functional Updates" avremo che "prev" è già
    // aggiornato al valore di "state+1" grazie alla riga precedente
    setState(prev => prev + 2)
    // In questo modo al render successivo avremo correttamente
    // state=state+3
}`}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MultipleUpdate;