import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { GameCard } from './Game';


        
class GameDetail extends Component{

    state = {
        game: []
    }
    
    async componentDidMount() {
        try {
        const res = await fetch(`https://api.rawg.io/api/games/${this.props.match.params.name}`);
        const game = await res.json();
        console.log(game);
        this.setState({
            game,
        });
        } catch(e) {
        console.log(e);
        }
    }

    
    render() {
        const { game } = this.state;
        return (
        <GameWrapper backdrop={game.background_image}>
            <GameInfo>
                <Overdrive id={game.id}>
                <GameCard>
                    <div id={game.id}>
                    <div> 
        </div>    
        </div>
        </GameCard>
                </Overdrive>   
                <div> 
                    <h1>{game.name}</h1>
                    <h3>Release date: {game.released}</h3>
                    <div dangerouslySetInnerHTML={{ __html: game.description}}>
                    {/* <p>{game.description}</p> */}
                    </div>
                  
                </div>
            </GameInfo>
        </GameWrapper>
        
    );
    }
    }

    
    
    
    export default GameDetail;


const GameWrapper = styled.div`
position: relative;
padding-top: 70vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: cover;


@media only screen and (max-width: 400px){
    padding-top: 0;
    background-size: none;
    background: none;
    text-align: center;   
}

`;

const GameInfo = styled.div`
background: white;
text-align: left;
padding: 2rem 10%;
display: flex;
> div {
    margin-left: 30px;
    margin-right: 30px;

}


@media only screen and (max-width: 400px){
    display: block;
    text-align: center; 
    
img {
    top: 0rem;

}

}

`;








