import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Floyd_Miles from '../../images/pexels-vazhnik-7562313.jpg'
import Dianne_Russell from '../../images/pexels-cottonbro-6209800.jpg'
import Jenny_Wilson from '../../images/pexels-anastasia-shuraeva-5704849.jpg'
import Leslie_Alexander from '../../images/pexels-tim-douglas-6205509.jpg'
import Guy_Hawkins from '../../images/image1.png'
import Eleanor_Pena from '../../images/image2.png'
import Robert_Fox from '../../images/image3.png'
import Jacob_Jones from '../../images/image4.png'
import '../../static/AboutUs.css';

function ListAuthors() {
  return (
    // List Of Authors
    <div class="list-of-authors">
        <h2>List of Authors</h2>
        <div class="authors-grid">
            <div class="author">
                <img src={Floyd_Miles} alt="Floyd Miles"/>
                <h3>Floyd Miles</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
            <div class="author">
                <img src={Dianne_Russell} alt="Dianne Russell"/>
                <h3>Dianne Russell</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
            <div class="author">
                <img src={Jenny_Wilson} alt="Jenny Wilson"/>
                <h3>Jenny Wilson</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
            <div class="author">
                <img src={Leslie_Alexander} alt="Leslie Alexander"/>
                <h3>Leslie Alexander</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
            <div class="author">
                <img src={Guy_Hawkins} alt="Guy Hawkins"/>
                <h3>Guy Hawkins</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
            <div class="author">
                <img src={Eleanor_Pena} alt="Eleanor Pena"/>
                <h3>Eleanor Pena</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
            <div class="author">
                <img src={Robert_Fox} alt="Robert Fox"/>
                <h3>Robert Fox</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
            <div class="author">
                <img src={Jacob_Jones} alt="Jacob Jones"/>
                <h3>Jacob Jones</h3>
                <p>Content Writer @Company</p>
                <div class="social-links">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ListAuthors;