import React from "react";
function FormCase() {
    const [state, setState] = React.useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    return (
        <React.Fragment>
            <h5><a href="https://github.com/FAngelo94/ReactGuide/tree/main/src/pages/useState/Demos/FormCase.jsx" class="link-primary" target="_blank">Gestione di un Form con più campi</a></h5>
            <p>Creare uno <code>useState</code> per ogni campo in caso di form complessi può portare ad avere una lunga lista di variabili che rende il codice meno leggibile. In questi casi una soluzione può essere quella di avere un oggetto come stato dove ogni chiave dell'oggetto rappresenta il valore di un campo del form come in questo esempio:</p>
            <p className="text-center">Stato={JSON.stringify(state)}</p>
            <div className="d-flex">
            <div class="input-group input-group-sm mb-3 gap-3">
                {Object.keys(state).map((item, index) => 
                    <input key={index} type="text" class="form-control w-25" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={state[item]}  placeholder={item}
                    onChange={(event)=>setState(prev =>
                        {
                            return {...prev, [item]: event.target.value}
                        })}/>
                )}
                
                </div>
            </div>
        </React.Fragment >
    );
}

export default FormCase;