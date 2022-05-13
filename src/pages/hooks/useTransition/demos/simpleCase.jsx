import React from "react";
function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>In questo esempio, che ammetto di aver copiato, facciamo partire all'interno della funzione <code>startTransition</code> il fetch per recuperare le informazioni del nuovo utente.</p>
            <p>Finché le chiamate non sono terminate <code>isPending</code> rimane <code>true</code> lasciando il pulsante disabilitato e la scritta "Loading..." di fianco.</p>
            <iframe height="500" style={{ width: "100%" }} scrolling="no" title="useTransition simple case" src="https://codepen.io/FAngelo94/embed/LYQRezE?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/LYQRezE">
                    useTransition simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;