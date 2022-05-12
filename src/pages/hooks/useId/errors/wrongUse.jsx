import React from "react";
function WrongUse() {
    return (
        <React.Fragment>
            <h5>Uso Sbagliato</h5>
            <p>Ecco un esempio di come NON usare MAI lo <code>useId</code>, cosa indicata e sottolineata anche nella documentazione ufficiale. Gli id legati al parametro key dovrebbero essere create sempre usando i dati che stiamo usando all'interno del map</p>
            <p>Al di la dell'errore possiamo notare come richiamando <code>useId</code> diverse volte, e in diversi componenti, avremo sempre id univoci.</p>
            <iframe height="400" style={{width: "100%"}} scrolling="no" title="useId wrong way to use it" src="https://codepen.io/FAngelo94/embed/VwQjBQo?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/FAngelo94/pen/VwQjBQo">
  useId wrong way to use it</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
        </React.Fragment>
    );
}

export default WrongUse;