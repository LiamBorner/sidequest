import React, { Component } from 'react';
import Game from './Game';
import searchQuery from './App';

// TODO
// Grab text from button input
// pass to search_query
// on submit, run the async function

// const searchQuery = "spyro"
// document.getElementById("searchQuery").value;


class SearchGames extends Component {

    state  = {
        games: []
    }

/* <label>Search a game</label>
      <input type="text" id="searchQuery" placeholder="Search a game"></input>/>
      <button >Submit</button> */


async componentDidMount() {
    try {
        const SEARCH_QUERY = "super mario";
        // const SEARCH_QUERY = searchQuery;
        const res = await fetch(`https://api.rawg.io/api/games?page_size=20&search=${SEARCH_QUERY}`);
        const games = await res.json();
        console.log(res);
        this.setState({
            games: games.results
        })
    } catch(e) {
        console.error("The API isn't working")
    }
}
render() {
 return (
     
     <ul>   
        {this.state.games.map(game => 
        <li key={game.id} game={game}>
            {game.name}, {game.id}

            </li> )}
    </ul>
// if required, you can remove add Game as the styled component
// to the li element and convert back into a card style

 )

}
}

export default SearchGames;