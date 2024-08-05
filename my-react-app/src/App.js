import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import ClerkConfig from "./config/ClerkConfig";

function App() {
  return (
    <ClerkConfig>
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
    </ClerkConfig>
  );
}

export default App;
