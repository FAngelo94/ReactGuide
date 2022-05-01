import React from 'react';
import CodeBlock from "../../../components/codeBlock";
import SimpleCase from './demos/simpleCase';
import ThemeCase from './demos/themeCase';
import PageHook from "../../../components/pageHook"

function UseContext() {

  return (
    <PageHook
      title={"useContext"}
      theory={
        <React.Fragment>
          <p>Con questo hooks possiamo creare un contesto, contenente all'inteno delle props, in modo da passare quest'ultime a dei componenti figli</p>
          <h5>Perché non passare direttamente le props?</h5>
          <p>Possono esserci vari motivi, ad esempio il caso in cui un componente ha un esteso e profondo albero di componenti figli e abbiamo bisogno di passare una variabile da questo componente padre ad un figlio che si trovi in fondo all'albero. Senza lo <code>useContext</code> dovremmo passare la props a tutti i componenti che collegano il componente radice a quello foglia rendendo il codice più complesso inutilmente.</p>
          <p>Usando invece lo <code>useContext</code> creiamo un contesto al quale assegniamo la props che vogliamo passare al figlio in fondo all'albero dei componenti. A qualsiasi figlio sarà necessaria tale props bastera fare l'import del context dal padre ed estrarre la props da esso.</p>
          <p>Guarda nella sezione demo per maggiore chiarezza</p>

          <h5>Altri casi d'uso</h5>
          <p>Si può usare questo hooks anche per la creazione di uno stato globale, cioè una serie di variabili usate in tutti i componenti, evitando di passare tonnelate di props ovunque</p>
          <p>Spesso viene usato anche per gestire diversi temi dell'applicazione (chiaro/scuro ad esempio)</p>

          <h5>Lato negativo</h5>
          <p>Bisogna comunque riflettere quando usare uno <code>useContext</code> perché si aggiunge complessità all'applicazione e si complicano gli unit test che si andranno a creare</p>

          <h5>Provider e Consumer</h5>
          <p>Si devinisce <code>Provider</code> il componente che passa i valori al context</p>
          <p>Si devinisce <code>Consumer</code> il componente, o i componenti, che "consumano" i valori passato.</p>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <SimpleCase />
          <ThemeCase />
        </React.Fragment>
      }
      errors={
        <React.Fragment>
          
        </React.Fragment>
      }
    />
  );
}

export default UseContext;
