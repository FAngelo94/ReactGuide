import React from "react";
function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>In questo esempio usiamo lo <code>useImperativeHandle</code> per dare il focus del campo input all'interno del componente <code>FancyInput</code> cliccando sul bottone che si trova nel componente padre, cosa normalmente impossibile in maniera così diretta ma si dovrebbe utilizzare il passaggio di una prop.</p>
            <p>Con il secondo bottone, sempre presente nel padre, possiamo scrivere all'interno del campo input la parola "Hello".</p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useId multiple id" src="https://codepen.io/FAngelo94/embed/poaErqq?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/poaErqq">
                    useId multiple id</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;