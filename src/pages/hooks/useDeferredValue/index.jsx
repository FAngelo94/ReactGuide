import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import SimpleCase from './demos/simpleCase';
import WithUseMemo from './demos/withUseMemo';

function UseDeferredValue() {

  return (
    <PageHook
      title={"useDeferredValue"}
      theory={
        <React.Fragment>
          <p><code>useDeferredValue</code> accetta un valore e restituisce una nuova copia del valore il cui aggiornamento viene rimandato per fare prima altri aggiornamenti prioritari.</p>
          <h5>Utilizzo in combinazione con <code>useMemo</code></h5>
          <p><code>useDeferredValue</code> rinvia solo il valore che gli passi. Se vuoi impedire che un componente figlio venga riprodotto durante un aggiornamento urgente, devi anche memorizzare quel componente con <code>React.memo</code> o <code>React.useMemo</code></p>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <SimpleCase />
          <WithUseMemo />
        </React.Fragment>
      }
      errors={
        <React.Fragment>
          
        </React.Fragment>
      }
    />
  );
}

export default UseDeferredValue;
