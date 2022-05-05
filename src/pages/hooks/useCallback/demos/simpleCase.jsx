import React from "react";
function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>L'esempio si spiega da solo, se clicchiamo più volte il tasto somma senza cambiare X o Y grazia a <code>useCallback</code> userremo il valore memorizzato senza triggerare effettivamente la funzione.</p>
            <p>Come prova di ciò vede stampata a video la variabile contatore che viene incrementata soltanto quando la funzione all'interno di <code>useCallback</code> viene effettivamente chiamata.</p>
            <p>Ovviamente questo hook non è consigliato per funzioni non pure o, in altre parole, nei casi in cui effettuiamo operazioni che modifichiano in qualsiasi modo lo stato del componente anche passando più volte gli stessi input. Nell'esempio non potremmo usare <code>useCallback</code> nel caso fossimo interessati a vedere quante volte l'utente clicca il pulsante somma senza considerare se gli input cambino o meno.</p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useState form case" src="https://codepen.io/FAngelo94/embed/eYVmaaa?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/eYVmaaa">
                    useState form case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;