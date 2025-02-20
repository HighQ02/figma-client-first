import React from 'react'; 
import '../../static/AboutUs.css';

function AboutAndStats() {
  return (
    // About And Stats
    <div class="about-stats">
        {/* About Us Section */}
        <div class="about-us">
            <div class="left">
                <h2>ABOUT US</h2>
                <h1>We are a team of content writers who share their learnings</h1>
            </div>
            <div class="right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>

        {/* Stats Section */}
        <div class="stats">
            <div class="background"></div>
            <div class="stat total-blog">
                <h3>12+</h3>
                <p>Blogs Published</p>
            </div>
            <div class="stat views">
                <h3>18K+</h3>
                <p>Views on Finswet</p>
            </div>
            <div class="stat active-users">
                <h3>30K+</h3>
                <p>Total active Users</p>
            </div>
            <div class="pattern"></div>
        </div>
    </div>
  );
}

export default AboutAndStats;