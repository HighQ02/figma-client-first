import React from 'react'; 
import '../../static/Home.css';

function HomeHero() {
  return (
    // Home Hero
    <header class="home-hero">
        <div class="hero-image"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <span class="posted-on">Posted on startup</span>
            <h1>Step-by-step guide to choosing great font pairs</h1>
            <p>By <span class="author">James West</span> | May 23, 2022</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button class="read-more-btn"><a href="#">Read More &gt;</a></button>
        </div>
    </header>
  );
}

export default HomeHero;