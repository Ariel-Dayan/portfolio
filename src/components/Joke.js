import React from 'react';

const Joke = ({ joke: { setup, punchline }}) => (<p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>);

export default Joke;