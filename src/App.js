import React from "react";
import { Portfolio, Education, Front } from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <Route path="/" exact component={Front} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/edu" exact component={Education} />


          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;

