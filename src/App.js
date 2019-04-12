import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Components/Layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Loading from "./Components/Layout/Loading";

const Equipo = React.lazy(() => import("./Components/Equipo/Equipo"));
const Calculadora = React.lazy(() =>
  import("./Components/Calculadora/Calculadora")
);
const MDRLC = React.lazy(() => import("./Components/MDRLC/MDRLC"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/equipo" component={Equipo} />
            <Route path="/" exact component={Calculadora} />
            <Route path="/MDRLC" component={MDRLC} />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
