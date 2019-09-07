import React from "react";

import Layout from "./components/Layout";
import AddFilm from "./containers/AddFilm";
import Films from "./containers/Films";

function App() {
  return (
    <Layout>
      <Films />
    </Layout>
  );
}

export default App;
