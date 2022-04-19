import React from 'react';
import CodeBlock from "../../../components/codeBlock";
import SimpleCase from './demos/simpleCase';
import FormCase from './demos/formCase';
import MultipleUpdate from './errors/multipleUpdates';
import PageHook from "../../../components/pageHook"

function UseMemo() {

  return (
    <PageHook
      title={"useMemo"}
      theory={
        <React.Fragment>

        </React.Fragment>
      }
      demos={
        <React.Fragment>
          
        </React.Fragment>
      }
      errors={
        <React.Fragment>
          
        </React.Fragment>
      }
    />
  );
}

export default UseMemo;
