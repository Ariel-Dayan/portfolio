import React from 'react';

const Project = ({ project: { title, image, description, link }}) => (
    <div style={{display: 'inline-block', width: 450, margin: 10}}>
        <h3>{title}</h3>
        <img src={image} alt='project' style={{ width: 200, height: 120 }}></img>
        <p>{description}</p>
        <a href={link}>{link}</a>
    </div>
);

export default Project