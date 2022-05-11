import React from "react";
function MutableValues() {
    return (
        <React.Fragment>
            <h5>Valori Variabili</h5>
            <p>Come puoi vedere in questo esempio <code>reference</code> contiene come valore <code>current</code> un intero che ha 0 come valore iniziale.</p>
            <p>Tramite il primo bottone andiamo a sommare 1 a tale variabile ma non vediamo modificarsi il valore a video perché modificare <code>reference</code> non causa un nuovo render, aprendo la console vedrai la variabile modificarsi.</p>
            <p>Tramite il secondo bottone forziamo il componente ad effettuare un render andando a modificare il valore mostrato a video di reference.</p>
            <iframe height="300" style={{ width: "100%" }} scrolling="no" title="useRef mutable values" src="https://codepen.io/FAngelo94/embed/PoQNdjQ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/PoQNdjQ">
                    useRef mutable values</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default MutableValues;