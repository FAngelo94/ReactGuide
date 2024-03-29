import React from 'react';
import CodeBlock from "../../../components/codeBlock";
import SimpleCase from './demos/simpleCase';
import FormCase from './demos/formCase';
import VsUseRef from './demos/vsUseRef';
import MultipleUpdate from './errors/multipleUpdates';
import PageHook from "../../../components/pageHook"

function UseState() {

  return (
    <PageHook
      title={"useState"}
      theory={<React.Fragment>
        <CodeBlock
          text={"const [state, setState] = useState(initialState);"}
        />
        <p className='mt-2'>Questo hook ritorna una variabile, non modificabile direttamente, e una funzione per aggiornarla.</p>
        <p>Durante il rendering iniziale <code>state</code> avrà il valore passato nel momento dell'inizializzazione (<code>initialState</code>)</p>
        <p>La funzione <code>setState</code> accetta un nuovo stato come valore, aggiorna <code>state</code> e renderizza il componente.
          Se chiamiamo la funzione più volte di fila nello stesso render soltanto l'ultimo nuovo stato passato verrà settato.</p>
        <CodeBlock
          text={"setState(newState);"}
        />
        <dl className="row">
          <dt className="col-sm-1">Nota</dt>
          <dd className="col-sm-11">React garantisce che <code>state</code> non cambi quando il componente viene renderizzato a meno che non si chiami la relativa funzione per aggiornarlo</dd>
        </dl>

        <h5>Functional updates</h5>
        <p>Se per aggiornare lo stato hai bisogno dello stato precedente puoi passare a  <code>setState</code> una funzione che ha come parametro lo stato precedente:</p>
        <CodeBlock
          text={
            `setState(prevState=>{
...
return newState;
});`} />
        <p>Se lo stato è un oggetto e vogliamo aggiorne soltanto una sua chiave, dobbiamo comunque passare l'intero nuovo oggetto con le vecchie chiavi lasciate inalterate (guardare nella sezione demo per maggior chiarezza):</p>
        <CodeBlock
          text={
            `setState(prevState => {
const updateValues = {...};//qui inseriamo le chiavi da aggiornare
return {...prevState, ...updatedValues};
});`} />

        <h5>Lazy initial state</h5>
        <p>Se lo stato iniziale dev'essere calcolato puoi passare una funzione direttamente nella dichiarazione che verrà eseguita soltanto al primo render del componente:</p>
        <CodeBlock
          text={
            `const [state, setState] = useState(() => {
const initialState = someExpensiveComputation(props);
return initialState;
});
`} />

        <h5>Aggiornamento dello stato con identico valore</h5>
        <p>React renderizza il componente anche se viene passato il valore dello stato corrente alla funzione <code>setState</code> ma in questo caso non renderizzerà anche i figli di tale componente ne triggererà gli useEffect</p>
        <p>Il rendering, sia del componente che dei figli, avviene invece se viene passato un nuovo oggetto che ha le variabili identiche in quanto il confronto tra oggetti controlla il loro puntatore, che sarà diverso nonostante le variabili interne siano uguali</p>

        <h5>Aggiornamento di più useState nello stesso Render</h5>
        <p>Se aggiorno più stati in contemporanea all'interno di un componente React cerca di accorpare tutte le modifiche in un unico render in modo da ottimizzare l'Aggiornamento dell'applicazione</p>
        <p>Nel caso in cui invece si voglia forzare un rendering syncrono, evitando di aggiornare più stati in maniera asincrona nello stesso rendering, siò usare la funzione <code>flushSync</code> che però rallenterà le performance</p>
      </React.Fragment>}
      demos={<React.Fragment>
        <SimpleCase />
        <FormCase />
        <VsUseRef />
      </React.Fragment>}

      errors={<React.Fragment>
        <MultipleUpdate />
      </React.Fragment>}
    />
  );
}

export default UseState;
