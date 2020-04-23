import React, { Component } from 'react';
import styled from 'styled-components';

        
class GameDetail extends Component{

    state = {
        game: []
    }
    
    async componentDidMount() {
        try {
        const res = await fetch(`https://api.rawg.io/api/games/${this.props.match.params.name}`);
        const game = await res.json();
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
        <div>
            <div>
                <div id={game.id}>
                    
                </div>   
                <div> 
                    <h1>{game.name}</h1>
                    <h3>{game.description}</h3>
                    
                </div>
            </div>
        </div>
        
    );
    }
    }
    
    
    export default GameDetail;