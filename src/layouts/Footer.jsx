import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="upper-foot">
          <div className="f-about-projet">
              <h4 className='title'>Apropos de projet</h4>
              <div className="body">
                  But I must explain to you how all this mistaken idea denoun 
                  pleasure and praising pain was born and will give you a complete 
                  account of the system, and expound teachings
              </div>
              <div className="social-media">
                  <Link to="/"><i class="fa-brands fa-facebook-f"></i></Link>
                  <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                  <Link to="/"><i class="fa-brands fa-linkedin-in"></i></Link>
                  <Link to="/"><i class="fa-brands fa-tiktok"></i></Link>
              </div>
          </div>
          <div className="f-quick-link">
              <h4 className='title'>Liens rapides</h4>
              <div className="body">
                <Link to="/">link1</Link>
                <Link to="/">link1</Link>
                <Link to="/">link1</Link>
                <Link to="/">link1</Link>
              </div>
          </div>
          <div className="f-services">
              <h4 className='title'>Les services</h4>
              <div className="body">
                <Link to="/">link1</Link>
                <Link to="/">link1</Link>
                <Link to="/">link1</Link>
                <Link to="/">link1</Link>
              </div>
          </div>
          <div className="f-contact">
              <h4 className='title'>N'hésitez pas à nous contacter ou à nous appeler</h4>
              <div className="body">
                  <Link to="/">
                      <i class="fa-solid fa-phone"></i>  0616876447
                  </Link>
                  <Link to="/">
                      <i class="fa-solid fa-envelope"></i>  smart.agri@gmail.com
                  </Link>
                  <Link to="/">
                      <i class="fa-solid fa-location-dot"></i> Bd Béni Amir, BP 77 Khouribga - Maroc.
                  </Link>
                  
              </div>
          </div>
      </div>
      <div className="down-foot">
          <Link>&copy; Copyright 2023 @abh.ayoub  Tous les droits sont réservés</Link>
          <Link>Termes & Conditions</Link>
          <Link>Plan du site</Link>
          <Link>politique de confidentialité</Link>
      </div>
    </div>
  )
}

export default Footer