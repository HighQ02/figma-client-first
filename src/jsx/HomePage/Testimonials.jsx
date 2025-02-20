import React from 'react'; 
import Author_Image from '../../images/JaneSmith.png'
import '../../static/Home.css';

function Testimonials() {
  return (
    // Testimonials
    <section class="testimonials">
        <div class="testimonials-container">
            <div class="testimonials-content">
                <h2 class="testimonials-title">TESTIMONIALS</h2>
                <p class="testimonials-subtitle">What people say about our blog</p>
                <p class="testimonials-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
            </div>
    
            <div class="divider"></div>
    
            <div class="testimonial-card">
                <p class="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="testimonial-author">
                    <img src={Author_Image} alt="Profile Picture" class="author-image"/>
                    <div class="author-info">
                        <p class="author-name">Jonathan Vallem</p>
                        <p class="author-role">New york, USA</p>
                    </div>
                </div>
                <div class="testimonial-navigation">
                    <button class="nav-arrow">←</button>
                    <button class="nav-arrow">→</button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Testimonials;