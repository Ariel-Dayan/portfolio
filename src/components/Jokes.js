import React, { Component } from 'react';
// const AbortController = window.AbortController;
import Joke from './Joke';

const JOKE_TYPES = {
    general: 'general',
    programming: 'programming',
    knocknock: 'knock-knock'
};

const BASE_JOKE_URL = 'https://official-joke-api.appspot.com/jokes';
const PROGRAMMING_TEN_JOKES_URL = `${BASE_JOKE_URL}/${JOKE_TYPES.programming}/ten`;
const RANDOM_JOKE_URL = `${BASE_JOKE_URL}/random`;

class Jokes extends Component {
    state = { mainJoke: {}, jokes: [] };
    controller = new AbortController();

    fetchCatchHandler = err => {
        if (err.name == 'AbortError') {
            return;
        } else {
            console.log(err);
        };
    }

    componentDidMount() {
        fetch(RANDOM_JOKE_URL, { signal: this.controller.signal})
            .then(response => response.json())
            .then(joke => this.setState({ mainJoke: joke }))
            .catch(this.fetchCatchHandler);
    }
    
    componentWillUnmount() {
        this.controller.abort();
    }

    getProgrammingJokes = () => {
        fetch(PROGRAMMING_TEN_JOKES_URL)
            .then(response => response.json())
            .then(jokes => this.setState({ jokes }))
            .catch(this.fetchCatchHandler);
    }

    render() {        
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.mainJoke}/>
                <hr />
                <h3>Want ten new jokes?</h3>
                <button onClick={this.getProgrammingJokes}>Click me!</button>
                {
                    this.state.jokes.map(currJoke=> <Joke key={currJoke.id} joke={currJoke}/>)
                }
            </div>
        );
    }
}

export default Jokes;