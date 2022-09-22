import React from "react";
function VsUseRef() {

    return (
        <React.Fragment>
            <h5>Usare useState al posto di useRef</h5>
            <p>In questo esempio potete vedere come usare useState al posto di useRef e la piccola differenza tra i 2</p>
            <p>Come scritto nell'esempio aprite la console per vedere la differenza tramite i console.log</p>
            <iframe height="300" style={{width:"100%"}} scrolling="no" title="useRef vs useState" src="https://codepen.io/FAngelo94/embed/poVeyer?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/FAngelo94/pen/poVeyer">
  useRef vs useState</a> by Angelo Falci (<a href="https://codepen.io/FAngelo94">@FAngelo94</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
        </React.Fragment >
    );
}

export default VsUseRef;