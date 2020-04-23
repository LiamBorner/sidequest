import React, { Component } from 'react';
import Game from './Game';
import GameDetail from './GameDetail';

import styled from 'styled-components';

class GamesList extends Component {

    state  = {
        games: []
    }

async componentDidMount() {
    try {
        const res = await fetch('https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added');
        const games = await res.json();
        console.log(games);
        this.setState({
            games: games.results
        })
    } catch(e) {
        console.error("The API isn't working")
    }
}
render() {
 return (   
        <GameGrid>{this.state.games.map(game => <Game key={game.id} game={game} /> )}</GameGrid>
 )

}
}


export default GamesList;

const GameGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 2fr);
    }
`


