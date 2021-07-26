import React, { Component } from 'react';

import TITLES from '../data/titles';

const INTERVAL_TIME = 4000;

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.fadeOutTimeout = this.fadeOutTitle();
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.fadeOutTimeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            this.setState({ fadeIn: true, titleIndex: (this.state.titleIndex + 1) % TITLES.length });
            this.fadeOutTimeout = this.fadeOutTitle();
        }, INTERVAL_TIME);
    }

    fadeOutTitle = () => setTimeout(() => this.setState({ fadeIn: false }), INTERVAL_TIME / 2);


    render() {
        const { titleIndex, fadeIn } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        );
    }
}

export default Title;
