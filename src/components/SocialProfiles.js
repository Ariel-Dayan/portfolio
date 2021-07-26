import React from 'react';

import SOCIAL_PROFILES from '../data/socialProfiles';
import SocialProfile from './SocialProfile';

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => <SocialProfile key={SOCIAL_PROFILE.id} profile={SOCIAL_PROFILE} />)
            }
        </div>
    </div>
);

export default SocialProfiles;