import React from 'react';
import CodeBlock from "../../../components/codeBlock";
import SimpleCase from './demos/simpleCase';
import PageHook from "../../../components/pageHook"

function UseCallback() {

  return (
    <PageHook
      title={"useCallback"}
      theory={
        <React.Fragment>
          <p className='mt-2'>Questo hooks ti consente di memorizzare l'output di una funzione in base ai suoi parametri di ingresso. In questo modo se richiamiamo la funzione più volte passando gli stessi parametri avremo una risposta rapida memorizzata.</p>
          <p>Se una delle variabili presenti nell'array delle dipendenze, passato alla <code>useCallback</code> come secondo parametro, cambia allora la funzione viene chiamata e il suo nuovo output memorizzato.</p>
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

export default UseCallback;
