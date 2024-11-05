import React from 'react'
import './Header.scss'
const Header = () => {
  return (
     <>
     <nav className="nav">
      <div className="nav_container">
<h2 className="nav_h2">Digital Agency</h2>
 <div className="nav_list">
<a href="">home</a>
<a href="">About</a>
<a href="">Testimonials</a>
<a href="">contact</a>
 </div>
      </div>

  </nav>
<div className="header__wrapper">
<div className="header__container">
<div className="header__div">
<h1>Building digital products, brands & experience</h1>
<p>Digital Agency is your online team mangement tool that easy and prompt
</p>
<button>
Contact Us
</button>
</div>
 <img src="/discussing.svg" alt="" className="header__img" />


    
</div>

<div className="companys">
<h3>Trusted by 4,000+ companies</h3>
<img src="/Logos.svg" alt="" />

</div>

</div>

 
  <section className='Hero'>
<img src="/working.svg" alt="" />
<div className="hero__div">
<h1>Branding & Design system</h1>
<p> Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
<img src="/Arrow.svg" alt="" />
</div>

  </section>
  <section className='Hero2'>
<img src="/analyze.svg" alt="" />
<div className="hero__div">
<h1>Custome & Plugin Development</h1>
<p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
<img src="/Arrow.svg" alt="" />
</div>

  </section>

    
  
 
      


     
     
     
     
     
     </>
  )
}

export default Header