import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import carreira from "../pages/carreira";
import condutas from "../pages/condutas";

import livros from "../pages/livros";
import contato from "../pages/contato";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/carreira" component={carreira} />
        <Route path="/contato" component={contato} />
        <Route exact path="/condutas" component={condutas} />
        <Route path="/livros" component={livros} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
