import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"

function UseEffect() {

  return (
    <PageHook
      title={"useEffect"}
      theory={
        <React.Fragment>
          <p>Questo costrutto è necessario per eseguire "effetti collaterali" che non sono legati direttamente al render del componente ma che vengono a determinate condizioni (soltanto nel render iniziale, al modificarsi di una variabile, o all'esecuzione di una funzione).</p>
          <p>Il suo nome deriva dal fatto che di base un componente React può essere visto come una funzione pura (dato un input X avrò sempre lo stesso output Y), usando però lo useEffect posso creare "effetti collaterali" che di norma non avrei in una funzione pura</p>
          
          <h5>Ripulire uno useEffect</h5>
          <p>Per ripulire uno useEffect basta fare il return di una funzione in cui inserisco tutto ciò che voglio eseguire prima che il componente sia rimosso dalla UI o prima che venga eseguito il render successivo</p>
          <p>Nel seguente esempio la sottoscrizione verrà fatta ad ogni render ma, grazie alla funzione presente nel return, disiscrivo il componente prima di ogni render successivo, in modo da evitare multiple iscrizioni che creino errori/inconsistenze, e prima che il componente venga rimosso dalla UI</p>
          <CodeBlock
          text={
`useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  };
});`} />


          <h5>Temporizzazione degli useEffect</h5>
          <p>Tutto ciò che viene inserito all'interno di uno <code>useEffect</code> viene eseguito subito dopo che React ha disegnato la grafica del nuovo render in modo da non bloccare l'applicazione (lasciando ad esempio l'applicazione bloccata in attesa di una risposta da server) </p>
          <p>Quando invece è necessario eseguire una qualche funzione prima che la grafica venga ridisegnata da React in modo da non far notare inconsistenze all'utente si può usare <code>useLayoutEffect</code>. Funziona in maniera idendica a <code>useEffect</code> ma viene eseguito prima che il DOM venga ridisegnato.</p>

          <h5>Eseguire uno useEffect condizionatamente</h5>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          
        </React.Fragment>
      }
      errors={
        <React.Fragment>
          
        </React.Fragment>
      }
    />
  );
}

export default UseEffect;
