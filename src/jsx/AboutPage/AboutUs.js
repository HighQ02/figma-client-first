import React from 'react';
import AboutAndStats from './AboutAndStats';
import MissionAndVision from './MissionAndVision';
import OurTeam from './OurTeam';
import WhyWeStarted from './WhyWeStarted';
import ListAuthors from './ListAuthors';

function AboutUs() {
  return (
    <div className="AboutUs">
        <AboutAndStats />
        <MissionAndVision />
        <OurTeam />
        <WhyWeStarted />
        <ListAuthors />
    </div>
  );
}

export default AboutUs;
