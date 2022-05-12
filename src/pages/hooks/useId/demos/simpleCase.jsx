import React from "react";
function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>In questo usiamo lo <code>useId</code> per generare un id univoco da usare per associare la label alla checkbox. In questo modo cliccando la label si otterrà lo stesso risultato che cliccando direttamente la checkbox.</p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useId simple case" src="https://codepen.io/FAngelo94/embed/rNJMMdg?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                    See the Pen <a href="https://codepen.io/FAngelo94/pen/rNJMMdg">
            useId simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;