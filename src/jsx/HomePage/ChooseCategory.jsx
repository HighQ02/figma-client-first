import React from 'react'; 
import '../../static/Home.css';

function ChooseCategory() {
  return (
    // Choose a Category
    <section class="choose-category">
        <h2>Choose A Category</h2>
        <div class="categories-grid">
            <div class="category">
                <div class="icon-background"><i class="fa-solid fa-building"></i></div>
                <h3>Business</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div class="category">
                <div class="icon-background"><i class="fa-solid fa-rocket"></i></div>
                <h3>Startup</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div class="category">
                <div class="icon-background"><i class="fa-solid fa-chart-simple"></i></div>
                <h3>Economy</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div class="category">
                <div class="icon-background"><i class="fa-solid fa-lightbulb"></i></div>
                <h3>Technology</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
        </div>
    </section>
  );
}

export default ChooseCategory;