import React from "react";
function InfiniteUpdate() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (count < 10000 && count > 1)
            setCount(prevCount => prevCount + 1);
    }, [count]);

    return (
        <React.Fragment>
            <h5>Aggiornamento infinito</h5>
            <p>Un errore banale, ma che può capitare quando all'interno di uno <code>useEffect</code> vengono sviluppate complesse logiche o tante righe di codice (cosa che si dovrebbe evitare ma può capitare).</p>
            <p>In ogni caso bisogna fare attenzione a non modificare all'interno di uno <code>useEffect</code> una delle variabili di stato messe anche all'interno dell'array passato come secondo parametro. Al contrario questo farà si che lo <code>useEffect</code> venga nuovamente eseguito come accade nell'esempio seguente:</p>
            <p>(PS: all'interno dello <code>useEffect</code> ho messo un if per evitare che il loop causato dall'errore prosegua all'infinito)</p>
            <iframe height="300" style={{ width: "100%" }} scrolling="no" title="useEffect - error - assign event inside" src="https://codepen.io/FAngelo94/embed/NWyWYGJ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/NWyWYGJ">
                    useEffect - error - assign event inside</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default InfiniteUpdate;