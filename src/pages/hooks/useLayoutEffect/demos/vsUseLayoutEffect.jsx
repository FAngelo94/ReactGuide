//https://codepen.io/zachnagatani/pen/RwNpVPG?editors=1010

import React from "react";
function VsUseLayoutEffect() {

    return (
        <React.Fragment>
            <h5 className='mt-3'>Differenza con useLayoutEffect</h5>
            <p>Questo è un esempio pratico in cui si nota la differenza. Di base all'interno di entrabi gli effetti modifichiamo la rotazione del componente effettando di fatto una modifica al DOM.</p>
            <p>Nel caso del <code>useLayoutEffect</code> notiamo che la grafica viene aggiornata soltanto una volta perché il codice all'interno viene eseguito prima che React disegni la grafica</p>
            <p>Nel caso del <code>useEffect</code> invece vediamo la grafica cambiare perché il codice all'interno dello <code>useEffect</code> viene eseguito dopo che React disegna la grafica</p>
            <iframe height="350" style={{ width: "100%" }} scrolling="no" title="Super Stupid useEffect vs useLayoutEffect Example" src="https://codepen.io/FAngelo94/embed/ExQxveG?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/ExQxveG">
                    Super Stupid useEffect vs useLayoutEffect Example</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default VsUseLayoutEffect;