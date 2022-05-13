import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import SimpleCase from './demos/simpleCase';

function UseInsertionEffect() {

  return (
    <PageHook
      title={"useInsertionEffect"}
      theory={
        <React.Fragment>
          <p>Questo hook è identico a <code>useEffect</code> o <code>useLayoutEffect</code> con l'unica differenza che si attiva in modo sincrono prima di tutte le mutazioni DOM, quindi prima degli altri tipi di "Effect".</p>
          <p><code>useInsertionEffect</code> dovrebbe essere limitato per la modifica del css-in-js come con la libreria <code>StyledComponent</code>. Preferire useEffect o useLayoutEffect per il resto.</p>
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

export default UseInsertionEffect;
