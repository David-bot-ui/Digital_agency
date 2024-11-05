import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
   <>
   <div className="others__wrapper">
   <div className="others__list">
    <p>TESTIMONIALS</p>
    <h2>Read What Other have to Say</h2>
   </div>
<div className="others__cards">
<div className="card1">
<img src="./manwhite.svg" alt="" />
<h2>Andrew Rathore</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>

</div>
<div className="card1">
<img src="./womenwhite.svg" alt="" />
<h2>Vera Duncan</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
</div>
<div className="card1">
<img src="./womenblack.svg" alt="" />
<h2>Mark Smith</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
</div>
</div>




   </div>


   <div className="contact__wrapper">
   <div className="contact__container">
 <img src="/support.svg" alt="" className="header__img" />
<div className="contact__div">
<h1>Be a part of the next big thing</h1>
<p> We work with Brans, Startups, to SMEs. Colaborate for more impact and growt
</p>
<button>
Contact Us
</button>
</div>


    
</div>

   </div>
   
   <footer>
        <div class="footer-section">
            <h3>Digital Agency</h3>
            <p>Building Digital Products,  Brands & Experience</p>
        </div>
        <div class="footer-section">
            <h3>Resources</h3>
            <ul>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">Glossary</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Company</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Social Media</h3>
            <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </div>
    </footer>
    <div class="footer-bottom">
        <p>&copy; Matheus. Todos os direitos reservados</p>
    </div>
   
   
   
   
   
   
   
   </>
  )
}

export default Footer