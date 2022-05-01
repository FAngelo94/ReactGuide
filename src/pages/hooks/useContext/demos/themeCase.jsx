import React from "react";
function ThemeCase() {
    return (
        <React.Fragment>
            <h5>Gestire diversi temi</h5>
            <p>In questo esempio vediamo come gestire diversi temi per un nostra applicazione (nel mio caso ho usato bootstrap in contemporanea)</p>
            <p>Puoi modificare il tema applicato al bottone cambiando il <code>value</code> passato dal context provider.</p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useState simple case" src="https://codepen.io/FAngelo94/embed/RwQwyxw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/RwQwyxw">
                    useState simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default ThemeCase;