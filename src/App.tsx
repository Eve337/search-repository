import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RepositoryPage from "./../src/components/RepositoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Searchbar} />
          <Route
            path='/RepositoryPage/:username/:reponame'
            component={RepositoryPage}
          />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
