import React from 'react';
import Our_Team from '../../images/pexels-pixabay-461049.jpg'
import '../../static/AboutUs.css';

function OurTeam() {
  return (
    // Our Team Of Creatives
    <div class="our-team">
        <div class="content">
            <h2>Our team of creatives</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div class="image">
            <img src={Our_Team} alt="Our team of creatives"/>
            <div class="shape"></div>
        </div>
    </div>
  );
}

export default OurTeam;