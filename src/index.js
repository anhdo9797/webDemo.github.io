import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import "antd/dist/antd.css";

import Authentication from "./components/authentication";
import AuthenticationVer2 from "./components/authenVer2";
import AuthenticationVer22 from "./components/authenVer2/ver2";
import ChallengeV3 from "./components/ChallengeV3";
import Challenge4 from "./components/challengeV4";

export default function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Challenge4} />
            <Route path="/ver-2" component={AuthenticationVer22} />
          </Switch>
        </div>
      </HashRouter>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
