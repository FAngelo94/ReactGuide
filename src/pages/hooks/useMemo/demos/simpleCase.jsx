import React from "react";
function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>Nell'esempio sotto la variabile <code>memoizeSumValue</code> verrà aggiornata ogni volta che le variabili <code>x</code> o <code>y</code> cambino valore. Quindi se le 2 variabili cambiano un nuovo render verrà triggerato durante il quale verrà aggiornata la variabile <code>memoizeSumValue</code></p>
            <p>Se, alternativamente, usassimo il binomio <code>useEffect</code>-<code>useState</code> quando le 2 variabili <code>x</code> e <code>y</code> cambiano, in un primo render verrà eseguito il codice all'interno dello <code>useEffect</code> che a sua volta triggererà un nuovo render, a causa del comando <code>setMemoizeSumValue</code>, in cui la variabile <code>memoizeSumValue</code> verrà aggiornata.</p>
            <iframe height="300" style={{ width: "100%" }} scrolling="no" title="useMemo simple case" src="https://codepen.io/FAngelo94/embed/oNEXONo?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/oNEXONo">
                    useMemo simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;