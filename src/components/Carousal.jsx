import React from 'react'
import { Link } from 'react-router-dom'

const Carousal = () => {
  return (
    
    <div className='carousal'>
      <div className="overlay"></div>
      <div className="image"></div>
      <div className="body">
        <div className="text">
            your way to minimize water lost
        </div>
        <div className="btns">
          <Link to="/">Shop Now</Link>
          <Link to="/">Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default Carousal