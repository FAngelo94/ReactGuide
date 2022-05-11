import React from "react";
function UncontrolledFields() {
    return (
        <React.Fragment>
            <h5>Campi non controllati</h5>
            <p>Nell'esempio vediamo 2 modi diversi di gestire 1 campo input (metodo di gestione che possiamo estendere a molti altri componenti che solitamente possiamo incontrare in un form).</p>
            <p>Nel primo caso, <code>UncontrolledComponent</code>, abbiamo bisogno di un bottone per salvare ciò che l'utente inserisce nello stato del componente per visualizzarlo a video o, in generale, per avere tutte le informazioni inserite contenute in un unico oggetto (si pensi al caso di un form con diversi campi di input). Se volessimo soltanto visualizzare a video il valore basterebbe forzare un render ma avremo comunque bisogno sempre di un pulsante.</p>
            <p>Nel secondo caso, <code>ControlledComponent</code>, ogni volta che l'utente inserisce un valore lo stato del componente viene aggiornato causando un render. In questo modo in grafica viene visualizzato lo stato del componente aggiornato in realtime senza necessità di premere pulsanti.</p>
            <p>Qual'è dei 2 metodi è migliore?</p>
            <p>Nella maggior parte dei casi è più conveniente avere dei componenti controllati per molte ragioni. Dall'altra parte il maggior vantaggio di avere componenti non controllati è che modificarli non causa alcun render migliorando considerevomente le perfomance, aspetto che tuttavia può non essere così cruciale, dipende da cosa stiamo sviluppando.</p>
            <iframe height="400" style={{ width: "100%" }} scrolling="no" title="useRef uncontrolled component" src="https://codepen.io/FAngelo94/embed/dydMqvN?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/dydMqvN">
                    useRef uncontrolled component</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default UncontrolledFields;