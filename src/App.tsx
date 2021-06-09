import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Main from "./components/Search";
import RepositoryPage from "./components/card/RepositoryPage";
import { Favourites } from "./components/favourites/Favourites";

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/RepositoryPage/:username/:reponame' component={RepositoryPage} />
      <Route path='/Favourite' component={Favourites} />
      <Redirect to='/' />
    </Router>
  );
}

export default App;
