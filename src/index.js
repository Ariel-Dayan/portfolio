import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';

import './index.css';

ReactDOM.render(
    (
        <Router>
            <Switch>
                <Route exact path='/' render={() => <Header><App /></Header>} /> 
                <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            </Switch>
        </Router>
    ), 
    document.getElementById('root')
);