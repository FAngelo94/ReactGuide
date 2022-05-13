import React from 'react';
import CodeBlock from "../../../components/codeBlock";
import SimpleCase from './demos/simpleCase';
import PageHook from "../../../components/pageHook"

function UseTransition() {

  return (
    <PageHook
      title={"useTransition"}
      theory={
        <React.Fragment>
          <CodeBlock
          text={`const [isPending, startTransition] = useTransition();`}
           />
          <p>Questo hook restutiusce un valore che identifica se lo stato della transizione è in corso e una funzione per avviarla.</p>
          <p>L'esempio è più chiaro di qualsiasi altra spiegazione</p>
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

export default UseTransition;
