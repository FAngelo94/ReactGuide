import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import MutableValues from './demos/mutableValues';
import SimpleCase from './demos/simpleCase';
import VsUseState from './demos/vsUseState';
import UncontrolledFields from './demos/uncontrolledFields';

function UseRef() {

  return (
    <PageHook
      title={"useRef"}
      theory={
        <React.Fragment>
          <CodeBlock
            text={`
  const refContainer = useRef(initialValue);`
            } />
          <p>Grazie a questo hook possiamo accedere in maniera "imperativa" ad un componente del DOM. Per fare ciò, come si vedrà meglio negli esempi, si crea una variabille (come nel codice sopra) e la sia assegna al componente grafico del quale vogliamo un accesso diretto.</p>
          <p>Possiamo sfruttare questo hook anche per salvare una variabile che non vogliamo cambi con i successivi render e, se modificata, non triggeri un nuovo render.</p>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <SimpleCase />
          <MutableValues />
          <UncontrolledFields />
          <VsUseState />
        </React.Fragment>
      }
      errors={
        <React.Fragment>

        </React.Fragment>
      }
    />
  );
}

export default UseRef;
