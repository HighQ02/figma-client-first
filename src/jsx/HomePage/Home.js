import React from 'react';
import HomeHero from './HomeHero';
import FeaturedPosts from './FeaturedPosts';
import AboutUsAndOurMission from './AboutUsAndOurMission';
import ChooseCategory from './ChooseCategory';
import WhyWeStarted from './WhyWeStarted';
import ListOfAuthors from './ListOfAuthors';
import LogoComponent from './LogoComponent';
import Testimonials from './Testimonials';
import JoinOurTeam from './JoinOurTeam';

function Home() {
  return (
    <div className="Home">
        <HomeHero />
        <FeaturedPosts />
        <AboutUsAndOurMission />
        <ChooseCategory />
        <WhyWeStarted />
        <ListOfAuthors />
        <LogoComponent />
        <Testimonials />
        <JoinOurTeam />
    </div>
  );
}

export default Home;
