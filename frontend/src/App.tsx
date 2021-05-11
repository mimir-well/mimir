import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./containers/Header";
import Article from "./containers/Article";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/:articleSlugName">
          <Article />
        </Route>
        <Route path="/">
          <Redirect to="/article-test-name" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
