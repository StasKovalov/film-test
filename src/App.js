import React from "react";

import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import AddFilm from "./containers/AddFilm";
import Films from "./containers/Films";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Films} />
        <Route path="/add-films" exact component={AddFilm} />
      </Switch>
    </Layout>
  );
}

export default App;
