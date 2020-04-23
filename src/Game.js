import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import './Stylesheets/App.css';



const Game = ({ game }) => (
    <Link to={`/${game.id}`}>
        <GameCard backdrop={game.background_image}>
            {/* <img src= {game.background_image}></img> */}
            <InnerGameCard></InnerGameCard>    
                <h1>{game.name}</h1>
                <p>Rating {game.rating}</p> 
        </GameCard>
    </Link>
    );

export default Game;

Game.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,

    }).isRequired,
};

export const GameCard = styled.section`
    width: 100%;
    height: 40vh;
    text-decoration: none;
    box-shadow: 0 0 20px black;
    overflow: hidden;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
    max-width: 100%;

    

    h1 {
        position: relative;
        margin: auto;
        width: 100%;
        padding-left: 10px;
        z-index: 2;
        color: white;
        font-size: 1.5rem; 
        margin-top: -65px;
    }

    p {
        position: relative;
        margin: auto;
        width: 100%;
        padding-left: 10px;
        padding-top: 5px; 
        z-index: 2;
        color: white;
        font-size: 1rem; 
    }   
`

export const InnerGameCard = styled.div`
    background-color: black;
    opacity: 0.8;
    z-index: 1;
    position: relative;
    height: 75px;
    margin-top: 180px;
    
   
`





    