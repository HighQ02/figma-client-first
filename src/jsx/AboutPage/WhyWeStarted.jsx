import React from 'react';
import Why_We_Started from '../../images/pexels-buro-millennial-636760-1438072.jpg'
import '../../static/AboutUs.css';

function WhyWeStarted() {
  return (
    // Why We Started
    <div class="why-we-started">
        <div class="image">
            <img src={Why_We_Started} alt="Why we started"/>
            <div class="circle"></div>
        </div>
        <div class="content">
            <h2>Why we started this Blog</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
    </div>
  );
}

export default WhyWeStarted;