import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Stylesheets/App.css';
import GamesList from './GamesList';
import SearchGames from './SearchGames';
import GameDetail from './GameDetail';
import Toggle from './Toggle';



function App() {
  return (
    <Router>

    <header className="App-header">
      <Link to="/" className="app-name">Sidequest</Link>
    <Link to="/search" className="search-box">Search</Link>
    </header>
    {/* <Toggle /> */}

    <Switch>
      <Route exact path="/" component={GamesList} />
      <Route path="/search" component={SearchGames} />
      <Route path="/:name" component={GameDetail} />
    </Switch> 
      </Router>
  );
}



export default App;
