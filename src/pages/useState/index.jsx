import React, { useEffect } from 'react';
import Page from "../../components/page"
import CodeBlock from "../../components/codeBlock";

function UseState() {
  const [state, setState] = React.useState(0);
  console.log(state)
  useEffect(() => {
    setState(1)
    setState(2)
  }, []);

  return (
    <Page>
      <h1 className="text-center">useState</h1>
      <h3>Teoria</h3>
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
      <dl class="row">
        <dt class="col-sm-1">Nota</dt>
        <dd class="col-sm-11">React garantisce che <code>state</code> non cambi quando il componente viene renderizzato a meno che non si chiami la relativa funzione per aggiornarlo</dd>
      </dl>

      <h5>Functional updates</h5>

      <h5>Lazy initial state</h5>

      <h5>Aggiornamento dello stato con identico valore</h5>

      <h5>Aggiornamento di più useState nello stesso Render</h5>

      <h3>Pratica e Demo</h3>
    </Page>
  );
}

export default UseState;
