import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import GamesList from './GamesList';
import SearchGames from './SearchGames';



function App() {
  return (
    <Router>

    <header className="App-header">
      <Link to="/">Sidequest II</Link>
    </header>
      
      {/* <GamesList /> */}


<SearchGames/>

    </Router>
  );
}



export default App;
