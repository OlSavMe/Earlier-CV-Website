import React from "react";
import { Portfolio, Education, Front, Career } from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BottomNav from "./components/BottomNavigation";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <BottomNav />
          <div className="App">
            <Route path="/" exact component={Front} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/edu" component={Education} />
            <Route path="/career" component={Career} />
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
