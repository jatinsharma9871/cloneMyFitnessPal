import React from 'react'
import "./Blog.css"
function Blog() {
  return (
    <div className='blog-container'>
      <div className='blog-header'>
        <div className='blog-up-navbar'>
          <div></div>
          <div className='navbar-img'>
            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/03/logo-1.png" alt="first" />
          </div>
          <div></div>
        </div>
        <div className='blog-bottom-navbar'>
          <div className='blog-category'>
            <p>RECIPES</p>
            <p>NUTRITION</p>
            <p>WEIGHT LOSS</p>
            <p>FITNESS</p>
            <p>INSPIRATION</p>
            <p>ESSENTIALS</p>
            <p>VIDEO</p>

          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/>

      <div className='blog-register'>
      <h1 className='blog-register-heading'>Fitness starts with what you eat.</h1>
      <p>Sign up for your personalized newsletter.</p>
      <div>
        <input className='input' type="text" placeholder="Your Email" />
        <button>Sign Up</button>
      </div>
      </div>


      <div className='blog-body'></div>

      <div className='blog-footer'>
        <img src='https://blog.myfitnesspal.com/wp-content/uploads/2021/03/logo-1.png' alt='logo-footer'></img>
        <p className="footer-name">MyFitnessPal</p>
        <p className='footer-desc'>is the leading app for tracking—and conquering—your nutrition and fitness goals. Log meals from a database of 14 million foods, track physical activity, and learn how to build healthy habits that stick. With more than 500 recipes, 150 workout routines, and a variety of expert-guided meal and workout plans, you’ll have the support you need for your entire health and fitness journey.</p>
        <p style={{fontWeight:"bolder"}} className="footer-name">MyFitnessPal Blog</p>
        <p className='privacy'>© 2022MyFitnessPal™ | Privacy Policy | Terms | </p>
      
      </div>

    </div>
  )
}

export default Blog