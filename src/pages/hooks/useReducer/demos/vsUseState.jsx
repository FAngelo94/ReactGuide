import React from "react";

function VsUseState() {

    return (
        <React.Fragment>
            <h5 className="mt-3">Caso complesso e confronto con <code>useState</code></h5>
            <p>Esempio più concreto di come usare lo <code>useReducer</code>.</p>
            <p>In questo caso notiamo che risulta efficente usare questo hooks rispetto allo <code>useState</code> per diversi motivi, come:</p>
            <p>1. Abbiamo tutta la logica legata alle azioni che è possibile compiere con un utente tutte all'interno di un reducer anziché divisa in diverse funzioni</p>
            <p>2. Se creassimo un componente che effettua più azioni sull'utente (ad esempio aggiunta/rimozione di un email) noi dovremmo comunque passargli soltanto il dispatch e non una calback per ciascuna azione.</p>
            <iframe height="500" style={{width: "100%"}}scrolling="no" title="useReducer - simple case" src="https://codepen.io/FAngelo94/embed/bGLNZYO?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/bGLNZYO">
                    useReducer - simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment >
    );
}
export default VsUseState;