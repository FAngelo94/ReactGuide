import React from 'react';

import PageHook from "../../../components/pageHook"
import SimpleCase from './demos/simpleCase';

function UseImperativeHandle() {

  return (
    <PageHook
      title={"useImperativeHandle"}
      theory={
        <React.Fragment>
          <p>Usando questo hook, in combinazione con <code>useRef</code> e <code>forwardRef</code>, è possibile accedere dal padre a delle funzioni dichiarate in un componente figlio.</p>
          <p>Questo tipo di programmazione, detta imperativa, dovrebbe essere evitata sfruttando il naturale passaggio di props. Per questo motivo questo hook è raramente usato ma, in casi particolare in cui sia necessario usarlo, è molto utile.</p>
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

export default UseImperativeHandle;
