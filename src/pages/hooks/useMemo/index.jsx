import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import SimpleCase from './demos/simpleCase';

function UseMemo() {

  return (
    <PageHook
      title={"useMemo"}
      theory={
        <React.Fragment>
          <p>Passando una funzione e una serie di dipendenze <code>useMemo</code> ricalcolerà il valore memorizzato solo quando una delle dipendenze è cambiata.</p>
          <h5>Differenze con <code>useCallback</code></h5>
          <p><code>useMemo</code> lavora in maniera molto simile a <code>useCallback</code> ma anziché ritornare una funzione ritorna il valore della funzione eseguita.</p>
          <h5>Costrutto per migliorare le performance</h5>
          <p>Come meglio spiegato nel primo esempio <code>useMemo</code> non è altro che un costrutto che migliora le performance e potrebbe essere sostituito da una combinazione di uno <code>useState</code> con un <code>useEffect</code></p>
          <p>Tuttavia grazie a <code>useMemo</code> il componente verrà renderizzato la metà delle volte con un notevole miglioramento delle performance! (Guardare il primo esempio per maggiore chiarezza).</p>
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

export default UseMemo;
