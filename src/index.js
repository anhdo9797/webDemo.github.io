import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import Authentication from "./components/authentication";

export default function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <div>
          <Switch>
            <Authentication />
          </Switch>
        </div>
      </HashRouter>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
