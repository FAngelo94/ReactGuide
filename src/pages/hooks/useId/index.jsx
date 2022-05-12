import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import MultipleId from './demos/multipleId';
import SimpleCase from './demos/simpleCase';
import WrongUse from './errors/wrongUse';

function UseId() {

  return (
    <PageHook
      title={"useId"}
      theory={
        <React.Fragment>
          <p>Nel caso di questo hook cito letteralmente la breve descrizione che ho trovato sulla documentazione ufficiale:</p>
          <p><code>useId</code> è un hook per la generazione di ID univoci che sono stabili su server e client, evitando al contempo discrepanze di idratazione.</p>
          <p>Perché usarlo e non crearmi un mio id? All'aumentare del numero di componenti potrebbe esserci il rischio di creare id duplicati compromettendo qualche funzionalità del codice.</p>
          <p>Guardate la sezione demo per maggiori informazioni su cosa fare, o non fare, con questo hook</p>
        </React.Fragment>
      }
      demos={
        <React.Fragment>
          <SimpleCase />
          <MultipleId />
        </React.Fragment>
      }
      errors={
        <React.Fragment>
          <WrongUse />
        </React.Fragment>
      }
    />
  );
}

export default UseId;
