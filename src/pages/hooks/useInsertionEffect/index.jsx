import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"
import SimpleCase from './demos/simpleCase';

function UseInsertionEffect() {

  return (
    <PageHook
      title={"useInsertionEffect"}
      theory={
        <React.Fragment>

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

export default UseInsertionEffect;
