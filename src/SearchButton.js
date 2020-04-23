import React, { Component } from 'react';
import SearchGames from './SearchGames';




export default class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [] , text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h3>Search</h3>
                <SearchGames />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Search a game
                    </label>
                    <input 
                        id="new-todo" 
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>Search</button>
                    </form>
            </div>
        );

        
        
    }


    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const searchQuery = {
            text: this.state.text
        };
        this.setState(state => ({
            items: state.items.concat(searchQuery),
            text: ''
        }));
        console.log(searchQuery);
    }
}





// export default SearchButton;

