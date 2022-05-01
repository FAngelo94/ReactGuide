import React from "react";
function SimpleCase() {
    return (
        <React.Fragment>
            <h5>Caso Semplice</h5>
            <p>L'esempio è abbastanza chiaro e si spiega da solo. Solo un osservazione, nel caso di un progetto in cui i componenti <code>Counter</code> e <code>App</code> si fossero trovati in file separati sarebbe stato necessario fare l'export di <code>CountContext</code> nel file di <code>App</code> ed importarlo all'interno di <code>Counter</code></p>
            <iframe height="300" style={{ width: "100%" }} scrolling="no" title="useContext simple case" src="https://codepen.io/FAngelo94/embed/LYQYmEJ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/FAngelo94/pen/LYQYmEJ">
                    useContext simple case</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </React.Fragment>
    );
}

export default SimpleCase;