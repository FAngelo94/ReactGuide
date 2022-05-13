import React from "react";
import CodeBlock from "../../../../components/codeBlock";

function WithUseMemo() {
    return (
        <React.Fragment>
            <h5>Esempio con useMemo</h5>
            <p>In questo esempio vediamo come usare <code>useDeferredValue</code> in combinazione con <code>useMemo</code> per ritardare l'esecuzione del primo <code>useEffect</code> in favore del secondo.</p>
            <p>Possiamo confermare la cosa visualizzando i messaggi stampati in console</p>
            <iframe height="400" style={{ width: "100%" }} scrolling="no" title="useDeferredValue simple case" src="https://codepen.io/FAngelo94/embed/xxYRRYR?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/xxYRRYR">
                    useDeferredValue simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default WithUseMemo;