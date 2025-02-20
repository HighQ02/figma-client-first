import React from 'react'; 
import '../../static/Home.css';

function AboutUsAndOurMission() {
  return (
    // About Us & Our Mission
    <section class="about-us-mission">
        <div class="about-bg"></div>
        <div class="pattern"></div>
        <div class="about-content">
            <div class="about-info-container">
                <h2>ABOUT US</h2>
                <h3>We are a community of content writers who share their learnings</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="about-read-more-btn">Read More &gt;</a>
            </div>
        </div>
        <div class="mission-content">
            <div class="about-info-container">
                <h2>Our Mission</h2>
                <h3>Creating valuable content for creatives all around the world</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Perferendis iusto repudiandae, nesciunt dolor enim, reprehenderit, odio exercitationem numquam neque laudantium nam laborum.</p>
            </div>
        </div>
    </section>
  );
}

export default AboutUsAndOurMission;