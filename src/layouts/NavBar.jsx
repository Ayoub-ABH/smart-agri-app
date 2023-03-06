import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

    <div className="UperBar">
      <div className='contacts'> 
        <span className="phone">
          <i class="fa-solid fa-phone"></i>  0616876447
        </span> 
        <span className="email">
          <i class="fa-solid fa-envelope"></i>  smart.agri@gmail.com
        </span>  
        <span className="destination">
          <i class="fa-solid fa-location-dot"></i> Khouribga - Maroc
        </span> 
      </div>
      {/* <div className='social-media'>
        <Link to="/"><i class="fa-brands fa-facebook-f"></i></Link>
        <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
        <Link to="/"><i class="fa-brands fa-linkedin-in"></i></Link>
        <Link to="/"><i class="fa-brands fa-tiktok"></i></Link>
      </div> */}
      
    </div>


    <div className="NavBar">
      <div className="fav-logo">
        <div className='fav-logo-img'></div> 
        <div className="fav-logo-txt">Smart Agri</div> 
      </div>
      <div className='navs'>
        <Link to="/">acceuil</Link>
        <Link to="/">processus</Link>
        <Link to="/">about</Link>
        <Link to="/">contact</Link>
      </div>
    </div>
    </div>
  )
}

export default NavBar