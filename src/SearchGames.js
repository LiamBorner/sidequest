import React, { Component } from 'react';
import Game from './Game';
import './Search.css';
import axios from 'axios';

// TODO
// Grab text from button input
// pass to search_query
// on submit, run the async function

// const searchQuery = "spyro"
// document.getElementById("searchQuery").value;


class SearchGames extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        };
        this.cancel = '';
    }


    fetchSearchResults = (query) => {

        const searchUrl = `https://api.rawg.io/api/games?&page_size=20&search=${query}`;
        console.log("Search url" + searchUrl);

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
                console.log("this clearly isn't working");
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
                console.log("Results " + {results});
                return (
                    <div>
                        <ul>
                        {results.map( result => {
                            return (
                                <li key={result.id} result={result.name}>{result.name}</li> 
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

/* <label>Search a game</label>
      <input type="text" id="searchQuery" placeholder="Search a game"></input>/>
      <button >Submit</button> */


// async componentDidMount() {
//     try {
//         const SEARCH_QUERY = '';
//         // const SEARCH_QUERY = searchQuery;
//         const res = await fetch(`https://api.rawg.io/api/games?page_size=20&search=${SEARCH_QUERY}`);
//         const games = await res.json();
//         console.log(res);
//         this.setState({
//             games: games.results
//         })
//     } catch(e) {
//         console.error("The API isn't working")
//     }
// }
// render() {
//  return (
     
//      <ul>   
//         {this.state.games.map(game => 
//         <li key={game.id} game={game}>
//             {game.name}, {game.id}

//             </li> )}
//     </ul>
// // if required, you can remove add Game as the styled component
// // to the li element and convert back into a card style

//  )

// }
// }

// export default SearchGames;
