import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

    <div className="UperBar">
      <div> 
        <div className="phone"><i class="fa-solid fa-phone"></i>0616876447</div> 
      </div>
      <div>
        <div className="email"><i class="fa-solid fa-envelope"></i>smartAgri@gmail.com</div>  
      </div>
      <div className='social-media'>
        <span>fb</span>
        <span>insta</span>
        <span>tiktok</span>
      </div>
      
    </div>


    <div className="NavBar">
      <div className="fav-logo">
        <div className='fav-logo-img'></div> 
        <div className="fav-logo-txt">Smart Agri</div> 
      </div>
      <div className='navs'>
        <Link to="/">home</Link>
        <Link to="/">process</Link>
        <Link to="/">about</Link>
        <Link to="/">contact</Link>
      </div>
    </div>
    </div>
  )
}

export default NavBar