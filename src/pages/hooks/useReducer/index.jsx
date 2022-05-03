import React from 'react';
import CodeBlock from "../../../components/codeBlock";
import SimpleCase from './demos/simpleCase';
import VsUseState from './demos/vsUseState';
import FunctionForInit from './demos/functionForInit';
import PageHook from "../../../components/pageHook"

function UseReducer() {

  return (
    <PageHook
      title={"useReducer"}
      theory={
        <React.Fragment>
          <p className='mt-2'>Questo hooks rappresenta un'alternativa a <code>useState</code></p>
          <p><code>useReducer</code> è generalmente preferibile a <code>useState</code> quando si deve gestire una logica di stato complessa o quando lo stato successivo dipende da quello precedente.
          </p>
          <p> <code>useReducer</code> ti consente anche di ottimizzare le prestazioni per i componenti figli che attivano aggiornamenti perché puoi passare il <code>dispatch</code> invece di una, o più, callback. </p>
          <p>Ad esempio, nel caso di un componente Counter come figlio la cui logica è gestita dal padre basterà passare la funzione <code>dispatch</code> al Counter anziché le 2 funzioni <code>increment</code> e <code>decrement</code></p>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <SimpleCase />
          <FunctionForInit />
          <VsUseState />
        </React.Fragment>
      }
    />
  );
}

export default UseReducer;
