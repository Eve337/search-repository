import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';

const App:React.FC = () => {
  return (
    <div className="App">
      <h1>Search</h1>
      <Searchbar />
    </div>
  );
}

export default App;
