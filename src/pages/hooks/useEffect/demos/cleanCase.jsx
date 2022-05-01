import React from "react";
function CleanCase() {

    return (
        <React.Fragment>
            <h5 className='mt-3'>Esempio di useEffect ripulito</h5>
            <p>In questo caso ad ogni click viene triggerato un nuovo render e all'interno di 2 useEffect different andiamo ad incrementare 2 variabili, <code>effectWithClean</code> e <code>effectWithoutClean</code>. Tuttavia solo quest'ultima viene realmente incrementata perché, a scopo di esempio, nel primo <code>useEffect</code> andiamo a settare la variabile <code>effectWithClean</code> a 0 nel return.</p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useEffect simple case" src="https://codepen.io/FAngelo94/embed/vYdYeKX?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/vYdYeKX">
                    useEffect simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default CleanCase;