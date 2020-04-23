import React, { Component } from 'react';
import Game from './Game';
import './Search.css';
import axios from 'axios';
import GameDetail from './GameDetail';
import { Link } from 'react-router-dom';


// TODO
// Grab text from button input
// pass to search_query
// on submit, run the async function

// const searchQuery = "spyro"
// document.getElementById("searchQuery").value;


class SearchGames extends Component {

        state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        };
        // this.state.cancel = '';
    


    fetchSearchResults = (query) => {

        const searchUrl = `https://api.rawg.io/api/games?&page_size=20&search=${query}`;

        // const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
        // `page_size=${updatedPageNo}`        
        // `https://api.rawg.io/api/games?${pageNumber}&search=${query}`

        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
                cancelToken: this.cancel.token,
            })
            .then( res => {
                    const total = res.data.total;
                    const resultNotFoundMsg = !res.data.results.length ? 'There are no more search results. Try a new search' : '';

                    this.setState( {
                        results: res.data.results,
                        message: resultNotFoundMsg,
                        loading: false
                    })
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Could not reach API.'
                    })
                }
            })
        };

        handleOnInputChange = (event) => {
            const query = event.target.value;
            console.log(query);

            if ( ! query ) {
                this.setState({ query, results: {}, message: ''});
            } else {
                this.setState({ query, loading: true, message: ''},
                () => {
                    this.fetchSearchResults(query);
                });
            }
        };

        renderSearchResults = () => {
            const { results } = this.state;
            // console.log(results);

            if ( Object.keys( results ).length && results.length ) {
                return (
                    <div>
                        <ul>
                        {results.map( result => {
                            return (
                                <Link to={`/${result.id}`}>
                                <li key={result.id} result={result.name}>{result.name}, {result.id}</li> 
                                </Link>
                            )
                        })}
                        </ul> 
                    </div> 
                        )
            }
        };

    render() {
        const { query } = this.state;
        return (
            <div className="container">
                <h2 className="heading">Search</h2>
                <label className="search-label" htmlFor="search-input">
                <input 
                    type="text"
                    name="query"
                    value={ query }
                    id="search-input"
                    placeholder="Search for a game"
                    onChange={this.handleOnInputChange}
                    />
                    <i className="fa fa-search-search-icon"></i>
                    </label>
                    
                    { this.renderSearchResults() }

            </div>                
        )
    }
};

export default SearchGames;

