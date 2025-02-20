import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Author_Image1 from '../../images/pexels-vazhnik-7562313.jpg'
import Author_Image2 from '../../images/pexels-cottonbro-6209800.jpg'
import Author_Image3 from '../../images/pexels-anastasia-shuraeva-5704849.jpg'
import Author_Image4 from '../../images/pexels-tim-douglas-6205509.jpg'
import '../../static/Home.css';

function ListOfAuthors() {
  return (
    // List Of Authors
    <section class="list-of-authors">
        <h2 class="list-title">List of Authors</h2>
        <div class="authors-container">
          <div class="author-card">
            <img src={Author_Image1} alt="Floyd Miles" class="author-image"/>
            <h3 class="author-name">Floyd Miles</h3>
            <p class="author-role">Content Writer @Company</p>
            <div class="social-links">
                <a href="#"><FontAwesomeIcon icon="fa-facebook" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-square-x-twitter" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-instagram" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-linkedin" /></a>
            </div>
          </div>
          <div class="author-card">
            <img src={Author_Image2} alt="Dianne Russell" class="author-image"/>
            <h3 class="author-name">Dianne Russell</h3>
            <p class="author-role">Content Writer @Company</p>
            <div class="social-links">
                <a href="#"><FontAwesomeIcon icon="fa-facebook" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-square-x-twitter" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-instagram" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-linkedin" /></a>
            </div>
          </div>
          <div class="author-card">
            <img src={Author_Image3} alt="Floyd Miles" class="author-image"/>
            <h3 class="author-name">Floyd Miles</h3>
            <p class="author-role">Content Writer @Company</p>
            <div class="social-links">
                <a href="#"><FontAwesomeIcon icon="fa-facebook" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-square-x-twitter" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-instagram" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-linkedin" /></a>
            </div>
          </div>
          <div class="author-card">
            <img src={Author_Image4} alt="Dianne Russell" class="author-image"/>
            <h3 class="author-name">Dianne Russell</h3>
            <p class="author-role">Content Writer @Company</p>
            <div class="social-links">
                <a href="#"><FontAwesomeIcon icon="fa-facebook" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-square-x-twitter" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-instagram" /></a>
                <a href="#"><FontAwesomeIcon icon="fa-linkedin" /></a>
            </div>
          </div>
        </div>
    </section>
  );
}

export default ListOfAuthors;