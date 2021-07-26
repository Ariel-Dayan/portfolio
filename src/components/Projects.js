import React from 'react';
import Project from './Project';
import PROJECTS from '../data/projects';

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => <Project key={PROJECT.id} project={PROJECT}/>)
            }
        </div>
    </div>
);

export default Projects