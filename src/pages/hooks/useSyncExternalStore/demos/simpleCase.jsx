import React from "react";
function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>In questo esempio molto semplice il nostro store esterno è rappresentato dall'evento di "resize" associato alla window.</p>
            <p>Come secondo parametro dello hook andiamo a specificare il valore che vogliamo leggere dallo "store" ogni volta che si aggiorna. In questo caso si tratta della larghezza della schermata.</p>
            <p>Cambiando la larghezza del vostro schermo potrete vedere il valore aggiornarsi</p>
            <iframe height="400" style={{ width: "100%" }} scrolling="no" title="useSyncExternalStore simple case" src="https://codepen.io/FAngelo94/embed/rNJMJPW?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/rNJMJPW">
                    useSyncExternalStore simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;


