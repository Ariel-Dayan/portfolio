import React from 'react';

const SocialProfile = ({ profile: { image, link }}) => (
    <span>
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <img src={image} alt='social profile' style={{ width: 35, height: 35, margin: 10 }}></img>
        </a>
    </span>
);

export default SocialProfile;