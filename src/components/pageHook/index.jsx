import React from 'react';
import Page from "../page"
import CollapseContainer from '../collapseContainer';

function PageHook({title, theory, demos, errors}) {

  return (
    <Page>
      <h1 className="text-center mt-4">{title}</h1>
      <CollapseContainer
        label={"Teoria"}
        type="text-success"
        children={theory}
      />

      <CollapseContainer
        label={"Pratica e Demo"}
        type="text-warning"
        children={demos}
      />

      <CollapseContainer
        label={"Errori Comuni"}
        type="text-danger"
        children={errors}
      />
    </Page>
  );
}

export default PageHook;
