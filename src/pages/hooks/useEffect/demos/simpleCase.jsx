import React from "react";
function SimpleCase() {

    return (
        <React.Fragment>
            <h5 className='mt-3'>Caso semplice</h5>
            <p>Esempio semplice di <code>useEffect</code> triggerato dalla modifica della variabile <code>Count</code> che causa la modifica della variabile <code>Count power</code></p>
            <iframe height="300" style={{width: "100%"}} scrolling="no" title="useEffect vs useLayoutEffect" src="https://codepen.io/FAngelo94/embed/jOZOLjZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/jOZOLjZ">
                    useEffect vs useLayoutEffect</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe> 
        </React.Fragment>
    );
}

export default SimpleCase;