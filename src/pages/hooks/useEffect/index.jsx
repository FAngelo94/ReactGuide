import React from 'react';
import CodeBlock from "../../../components/codeBlock";
import PageHook from "../../../components/pageHook"
import CleanCase from './demos/cleanCase';
import SimpleCase from './demos/simpleCase';
import VsUseLayoutEffect from './demos/vsUseLayoutEffect';
import EventNotWork from './errors/eventNotWork';
import InfiniteUpdate from './errors/infiniteUpdate';

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
          <p>Se vuoi eseguire uno <code>useEffect</code> soltanto se viene modificata una certa variabile puoi farlo inserendola nell'array passato come secondo parametri allo <code>useEffect</code> come nell'esempio:</p>
          <CodeBlock
            text={
              `useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);`
            }
          />
          <p>Ovviamente il dicscorso non cambia se volessimo introdurre più variabile, in tal caso lo <code>useEffect</code> verrà triggerato se almeno una delle variabili presenti nel suo array viene modificata.</p>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <h5 className='mt-3'><a href="https://github.com/FAngelo94/ReactGuide/tree/main/src/pages/useEffect/demos/simpleCase.jsx" className="link-primary" target="_blank" rel="noreferrer">Caso semplice</a></h5>
          <p>Esempio semplice di <code>useEffect</code> triggerato dalla modifica della variabile <code>Count</code> che causa la modifica della variabile <code>Count power</code></p>
          <SimpleCase />

          <h5 className='mt-3'><a href="https://github.com/FAngelo94/ReactGuide/tree/main/src/pages/useEffect/demos/cleanCase.jsx" className="link-primary" target="_blank" rel="noreferrer">Esempio di useEffect ripulito</a></h5>
          <p>In questo caso ad ogni click viene triggerato un nuovo render e all'interno di 2 useEffect different andiamo ad incrementare 2 variabili, <code>effectWithClean</code> e <code>effectWithoutClean</code>. Tuttavia solo quest'ultima viene realmente incrementata perché, a scopo di esempio, nel primo <code>useEffect</code> andiamo a settare la variabile <code>effectWithClean</code> a 0 nel return.</p>
          <CleanCase />

          <h5 className='mt-3'><a href="https://github.com/FAngelo94/ReactGuide/tree/main/src/pages/useEffect/demos/vsUseLayoutEffect.jsx" className="link-primary" target="_blank" rel="noreferrer">Differenza con useLayoutEffect</a></h5>
          <VsUseLayoutEffect />

        </React.Fragment>
      }
      errors={
        <React.Fragment>
          <h5><a href="https://github.com/FAngelo94/ReactGuide/tree/main/src/pages/useEffect/demos/eventNotWork.jsx" className="link-primary" target="_blank" rel="noreferrer">L'evento non funziona</a></h5>
          <EventNotWork />

          <h5><a href="https://github.com/FAngelo94/ReactGuide/tree/main/src/pages/useEffect/demos/infiniteUpdate.jsx" className="link-primary" target="_blank" rel="noreferrer">Aggiornamento infinito</a></h5>
          <InfiniteUpdate />
        </React.Fragment>
      }
    />
  );
}

export default UseEffect;
