import React from "react";
function FormCase() {

    return (
        <React.Fragment>
            <h5>Gestione di un Form con più campi</h5>
            <p>Creare uno <code>useState</code> per ogni campo in caso di form complessi può portare ad avere una lunga lista di variabili che rende il codice meno leggibile. In questi casi una soluzione può essere quella di avere un oggetto come stato dove ogni chiave dell'oggetto rappresenta il valore di un campo del form come in questo esempio:</p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useState - error - multiple updates" src="https://codepen.io/FAngelo94/embed/qBxBowY?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/FAngelo94/pen/qBxBowY">
  useState - error - multiple updates</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
        </React.Fragment >
    );
}

export default FormCase;