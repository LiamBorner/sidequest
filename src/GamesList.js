import React, { Component } from 'react';
import Game from './Game';

import styled from 'styled-components';


//Todo - give user a way to amend the filter dates
const DATE_FROM = "2019-10-10"
const DATE_TO = "2020-10-10"


const dateFrom = document.getElementById("date-input");


console.log("Date input: " + dateFrom);

class GamesList extends Component {

    state  = {
        games: [],
        DATE_FROM: "2019-10-10",
        DATE_TO: "2020-10-10"
    }


async componentDidMount() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?dates=${DATE_FROM},${DATE_TO}&ordering=-rating&page_size=21`);
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
            <React.Fragment>
                {/* <input type="text" id="date-input"/> */}
            <GameGrid>
                {this.state.games.map(game => <Game key={game.id} game={game} /> )}
            </GameGrid>
            </React.Fragment>
    )

}
};



export default GamesList;

const GameGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto-fit minmax(100px, 500px);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`


