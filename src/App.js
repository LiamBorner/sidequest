import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import GamesList from './GamesList';
import SearchGames from './SearchGames';
import GameDetail from './GameDetail';



function App() {
  return (
    <Router>

    <header className="App-header">
      <Link to="/">Sidequest II</Link>
    </header>
    <Link to="/search">Search</Link>

    <Switch>
      <Route exact path="/" component={GamesList} />
      <Route path="/search" component={SearchGames} />
      <Route path="/:name" component={GameDetail} />
    </Switch> 
      </Router>
  );
}



export default App;
