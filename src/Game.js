import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Game = ({ game }) => (
    <Link to={`/${game.id}`}>
        <GameCard>
        <div id={game.id}>
            <img src= {game.background_image}></img>
        <div> 
            <h1>{game.name}</h1>
            <p>Rating {game.rating}</p> 
        </div>    
        </div>
        </GameCard>
        
    </Link>
    );

export default Game;

Game.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,

    }).isRequired,
};

const GameCard = styled.div`
    width: 100%;
    height: 40vh;
    text-decoration: none;
    box-shadow: 0 0 20px black;
    overflow: hidden;

    img {
        
        max-height: 40vh;
        background-position: center center;
        max-width: 100%;
        background-size: cover;
        height: 100%;
        overflow: hidden;
    }

    h1 {
        position: relative;
        margin: auto;
        width: 100%;
        padding-left: 10px;
        z-index: 2;
        color: white;
        font-size: 1.5rem; 
        top: -108px;
    }

    p {
        position: relative;
        margin: auto;
        width: 100%;
        padding-left: 10px;
        z-index: 2;
        color: white;
        font-size: 1.5rem; 
        top: -100px;
    }
`





    