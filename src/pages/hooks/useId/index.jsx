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
