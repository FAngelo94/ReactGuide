import React from "react";
function FunctionForInit() {
    return (
        <React.Fragment>
            <h5 className="mt-3">Passare una funzione per inizializzare lo stato</h5>
            <p>Nel caso l'inizializzazione dello stato iniziale preveda di fare varie operazioni è possibile passare una funzione anziché un valore.</p>
            <p>Tale funzione, che nell'esempio chiamiamo <code>init</code>, accetterà in ingresso il valore passato come secondo parametri, <code>initialState</code> nell'esempio</p>
            <iframe height="300" style={{ width: "100%" }} scrolling="no" title="useReducer complex example" src="https://codepen.io/FAngelo94/embed/wvyBbJd?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/wvyBbJd">
                    useReducer complex example</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default FunctionForInit;