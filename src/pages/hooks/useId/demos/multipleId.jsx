import React from "react";
function MultipleId() {
    return (
        <React.Fragment>
            <h5>Multiplo Id usato come suffisso</h5>
            <p>Cliccando sulle label daremo il focus all'input field correlato.</p>
            <p>In questo caso abbiamo creato un id con <code>useId</code> e aggiunto un suffisso, in questo modo siamo sicuri di non dublicare l'id in altri componenti ma non dovremo nemmeno crearne uno per ogni campo all'interno del nostro form</p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useId simple case" src="https://codepen.io/FAngelo94/embed/ExQggMj?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/FAngelo94/pen/ExQggMj">
  useId simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
        </React.Fragment>
    );
}

export default MultipleId;