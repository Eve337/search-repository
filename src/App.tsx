import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Main from "./components/Search";
import RepositoryPage from "./components/card/RepositoryPage";

function App() {
  const dispatch = useDispatch();
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/RepositoryPage/:username/:reponame' component={RepositoryPage} />
      {/*<Redirect to='/' />*/}
    </Router>
  );
}

export default App;
