import React from 'react';
import FeaturedPost from './FeaturedPost';
import AllPosts from './AllPosts';

function Blog() {
  return (
    <div className="Blog">
        <FeaturedPost />
        <AllPosts />
    </div>
  );
}

export default Blog;
