import React from 'react'

const NavBar = () => {
  return (
    <div>

    <div className="UperBar">
      <div> 
        <div className="phone">0616876447</div> 
      </div>
      <div>
        <div className="email">smartAgri@gmail.com</div>  
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
      <ul className='navs'>
        <li>home</li>
        <li>process</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
    </div>
  )
}

export default NavBar