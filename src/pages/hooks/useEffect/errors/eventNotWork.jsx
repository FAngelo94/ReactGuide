import React from "react";
function EventNotWork() {

    return (
        <React.Fragment>
            <h5>La funzione assegnata all'interno dell'evento non funziona correttamente</h5>
            <p>Nell'esempio seguente <code>stateInsideListener</code> non viene aggiornato perché quando assegniamo l'<code>event listener</code> a <code>window</code> e all'interno usiamo la variabile <code>state</code> lo facciamo soltanto al primo render quindi all'interno della funzione chiamata dal <code>event listener</code> la variabile <code>state</code> avrà il suo valore iniziale perché tale funzione non legge ogni volta il valore della variabile ma salva al suo interno lo stato della variabile quando viene creata.</p>
            <p>In questo caso, stupido fatto solo per esempio, si potrebbe risolvere il problema richiamando lo <code>useEffect</code> ogni volta che state si modifica e magari aggiungere un return per ripulire lo <code>useEffect</code> eliminando l'<code>event listener</code>.</p>
            <iframe height="300" style={{ width: "100%" }} scrolling="no" title="useEffect clean case" src="https://codepen.io/FAngelo94/embed/poaoWdq?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/poaoWdq">
                    useEffect clean case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default EventNotWork;