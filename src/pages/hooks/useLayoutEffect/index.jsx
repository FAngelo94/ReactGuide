import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import VsUseLayoutEffect from './demos/vsUseLayoutEffect';

function UseLayoutEffect() {

  return (
    <PageHook
      title={"useLayoutEffect"}
      theory={
        <React.Fragment>
          <p>Questo hook è essenzialmente molto simile a <code>useEffect</code> con l'unica differenza che il codice viene eseguito da react prima di stampare a video rallentando le performance ma garantendo che la grafica sia aggiornata con ciò che eseguiamo all'interno dello hook senza cambianti grafici anomali.</p>
          <p>Per maggiori informazioni su come usarlo leggere la sezione dedicata allo <code>useEffect</code> perché per il resto sono uguali, e l'esempio nelle demo che, ancora una volta, è lo stesso usato per lo <code>useEffect</code>.</p>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <VsUseLayoutEffect />
        </React.Fragment>
      }
      errors={
        <React.Fragment>
          
        </React.Fragment>
      }
    />
  );
}

export default UseLayoutEffect;
