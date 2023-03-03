import React from 'react'
import { Link } from 'react-router-dom'

const Carousal = () => {
  return (
    
    <div className='carousal'>
      <div className="overlay"></div>
      <div className="image"></div>
      <div className="body">
        <div className="text">
        Le futur de l'arrosage est intelligent. Rejoignez-nous dans notre mission de préserver l'eau
        </div>
        <div className="btns">
          <Link to="/"><i class="fa-solid fa-cart-shopping"></i> Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Carousal