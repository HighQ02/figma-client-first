import React from 'react'; 
import Logo1 from '../../images/logoipsum1.png'
import Logo2 from '../../images/logoipsum2.png'
import Logo3 from '../../images/logoipsum3.png'
import Logo4 from '../../images/logoipsum4.png'
import Logo5 from '../../images/logoipsum5.png'
import '../../static/Home.css';

function LogoComponent() {
  return (
    // Logo Component
    <section class="logo-component">
        <div class="featured-in">
          <p class="we-are">We are</p>
          <h2 class="featured-in-title">Featured in</h2>
        </div>
        <div class="logos">
          <img src={Logo1} alt="Logo 1"/>
          <img src={Logo2} alt="Logo 2"/>
          <img src={Logo3} alt="Logo 3"/>
          <img src={Logo4} alt="Logo 3"/>
          <img src={Logo5} alt="Logo 3"/>
        </div>
    </section>
  );
}

export default LogoComponent;