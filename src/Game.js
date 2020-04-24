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
               
                <h1>{game.name}</h1>
                <p>Rating {game.rating}</p> 
        </GameCard>
    </Link>
    );

export default Game;

Game.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired
    }).isRequired,
};





export const GameCard = styled.section`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    
    height: 250px;
    width: 100%;
    text-decoration: none;
    box-shadow: 0 0 20px black;
    overflow: hidden;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        margin: auto;
        position: relative;
        display: block;
        background: rgba(0,0,0,0.8);

        width: 100%;
        padding-left: 10px;
        z-index: 2;
        color: white;
        font-size: 1.5rem; 
        grid-column: span 3;
        grid-row-start: -2;
        padding: 15px;
    }

    p {
        margin: auto;
        position: relative;
        width: 100%;
        z-index: 2;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 0.75rem; 
        grid-row-start: 1;
        grid-column-start: 3;
        display:grid;
        justify-items: center;
       
        background: rgba(0,0,0,0.8);
        

    }   

    @media (max-width: 500px) {

    }
`





    