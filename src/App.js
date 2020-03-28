import React from "react";
import { MainPage, Front } from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <Route path="/" exact component={Front} />
            <Route path="/main" exact component={MainPage} />


          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;

