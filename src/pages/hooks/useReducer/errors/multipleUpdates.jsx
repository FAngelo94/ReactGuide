import React from "react";

function MultipleUpdate() {
    return (<React.Fragment>
        <h5>Aggiornamento multiplo</h5>
        <p>Un errore comune che mi capitava all'inizio, quando non usavo il "functional updates", era quello di modificare più volte <code>state</code> paretendo dal suo stesso valore, dimendicando che, una volta chiamato <code>setState</code> il valore di <code>state</code> viene aggiornato dal render successivo.</p>
        <p>L'esempio è più chiaro:</p>
        <iframe height="300" style={{ width: "100%" }} scrolling="no" title="useState simple case" src="https://codepen.io/FAngelo94/embed/JjpjLmp?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/FAngelo94/pen/JjpjLmp">
                useState simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </React.Fragment>)
}

export default MultipleUpdate;