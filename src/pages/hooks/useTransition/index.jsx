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
