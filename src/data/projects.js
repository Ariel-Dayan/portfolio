import reactAppImage from '../assets/projects/reactApp.png';
import convertAPIImage from '../assets/projects/convertAPI.png';
import pipeTransactionImage from '../assets/projects/pipeTransaction.png';
import xonixGameImage from '../assets/projects/xonixGame.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React App that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/Ariel-Dayan/portfolio',
        image: reactAppImage
    },
    {
        id: 2,
        title: 'Pipe-transaction Package',
        description: 'A NPM package that I built for managing multi-stage operations.',
        link: 'https://www.npmjs.com/package/pipe-transaction',
        image: pipeTransactionImage
    },
    {
        id: 3,
        title: 'Example HTML Canvas Game',
        description: 'Xonix game I developed, involving in HTML(canvas), CSS and vanilla JS.',
        link: 'https://github.com/Ariel-Dayan/pokemonXonixGame',
        image: xonixGameImage
    },
    {
        id: 4,
        title: 'Convert API',
        description: 'An API to convert files formats I developed, involving in NodeJs & Express.',
        link: 'https://github.com/Ariel-Dayan/convertApi',
        image: convertAPIImage
    }
];

export default PROJECTS;