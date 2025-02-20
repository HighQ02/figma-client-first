import React from 'react'; 
import Featured_Post from '../../images/featured-post.jpg'
import '../../static/Home.css';

function FeaturedPosts() {
  return (
    // Featured Posts
    <section class="featured-posts">
        <div class="featured-post">
            <h2>Featured Post</h2>
            <div class="post-wrapper">
                <img src={Featured_Post} alt="Featured Post"/>
                <div class="post-info">
                    <p>By <span class="author">John Doe</span> | May 23, 2022</p>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <button class="read-more-btn">Read More &gt;</button>
                </div>
            </div>
        </div>
        <div class="all-posts">
            <h2>All Posts <a href="#" class="view-all">View All</a></h2>
            
            <div class="posts-grid">
                <div class="post">
                    <p>By <span class="author">John Deo</span> | Aug 23, 2021</p>
                    <h3>8 Figma design systems that you can download for free today.</h3>
                </div>
                <div class="post">
                    <p>By <span class="author">Jane Doe</span> | Sep 15, 2021</p>
                    <h3>How to create a design system in Figma.</h3>
                </div>
                <div class="post">
                    <p>By <span class="author">John Deo</span> | Aug 23, 2021</p>
                    <h3>8 Figma design systems that you can download for free today.</h3>
                </div>
                <div class="post">
                    <p>By <span class="author">Jane Doe</span> | Sep 15, 2021</p>
                    <h3>How to create a design system in Figma.</h3>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FeaturedPosts;