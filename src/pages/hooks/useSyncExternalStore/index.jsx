import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import SimpleCase from './demos/simpleCase';

function UseSyncExternalStore() {

  return (
    <PageHook
      title={"useSyncExternalStore"}
      theory={
        <React.Fragment>
          <p><code>useSyncExternalStore</code> è un hook consigliato per la lettura e la sottoscrizione a sorgenti di dati di origine esterna in un modo compatibile con le funzionalità di rendering simultanee come <code>selective hydration</code> and <code>time slicing</code></p>
          <p>Questo metodo restituisce il valore del negozio e accetta tre argomenti:</p>
          <p><code>subscribe</code>: funzione per registrarsi ad una callback che viene chiamata ogni volta che cambia lo store esterno da cui leggiamo i dati.</p>
          <p><code>getSnapshot</code>: funzione che restituisce il valore corrente dello store.</p>
          <p><code>getServerSnapshot</code>: funzione che restituisce lo snapshot utilizzato durante il rendering del server.</p>
          <CodeBlock
            text={`const state = useSyncExternalStore(store.subscribe, store.getSnapshot);`}
          />
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <SimpleCase />
        </React.Fragment>
      }
      errors={
        <React.Fragment>

        </React.Fragment>
      }
    />
  );
}

export default UseSyncExternalStore;
