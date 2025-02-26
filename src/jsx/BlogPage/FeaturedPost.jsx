import React from 'react'; 
import Featured_Post from '../../images/pexels-olly-840996.jpg'
import '../../static/Blog.css';

function FeaturedPost() {
  return (
    // Featured Posts
    <section class="blog-featured-post">
        <div class="blog-post-content">
            <span class="blog-tag">FEATURED POST</span>
            <h1>Step-by-step guide to choosing great font pairs</h1>
            <p><span class="blog-author">By John Doe</span> | <span class="blog-date">May 23, 2022</span></p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button class="blog-read-more">Read More</button>
        </div>
        <img src={Featured_Post} alt="Featured Post"/>
    </section>
  );
}

export default FeaturedPost;