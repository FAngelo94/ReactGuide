import React from "react";
import CodeBlock from "../../../../components/codeBlock";

function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>In questo esempio l'aggiornamento della variabile <code>deferredCount</code> viene rimandato, infatti dalla console potremo vedere dopo il primo click questa sequenza di valori stampati:</p>
            <CodeBlock
            text={`deferredCount 0
Hello 1
deferredCount 1`}
            />
            <p>Al primo render l'aggiornamento della variabile <code>deferredCount</code> viene rimandato per cui stamperemo 0 come valore.Poi verrà eseguito il codice all'interno dello <code>useEffect</code>.</p>
            <p>A questo punto verrà aggiornata la variabile <code>deferredCount</code> che genererà un nuovo render e avremo l'ultima stampa con il nuovo valore.</p>
            <iframe height="400" style={{ width: "100%" }} scrolling="no" title="useRef simple case" src="https://codepen.io/FAngelo94/embed/RwQGjoO?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/RwQGjoO">
                    useRef simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;