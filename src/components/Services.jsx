import React from 'react'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <div className='services'>
        <h1 className="title">Les Services</h1>
        <div className="cards">
            <div className="card">
                <img src="/assets/logo.png" alt="service" />
                <div className="body">
                    <h4 className='title'>rossage automatique</h4>
                    <p className='text'> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Vitae maiores et, harum quos 
                    </p>
                </div>
                <Link className="foot">
                    Read more
                </Link>
            </div>

            <div className="card">
                <img src="/assets/logo.png" alt="service" />
                <div className="body">
                    <h4 className='title'>rossage automatique</h4>
                    <p className='text'> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Vitae maiores et, harum quos 
                    </p>
                </div>
                <Link className="foot">
                    Read more
                </Link>
            </div>

            <div className="card">
                <img src="/assets/logo.png" alt="service" />
                <div className="body">
                    <h4 className='title'>rossage automatique</h4>
                    <p className='text'> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Vitae maiores et, harum quos 
                    </p>
                </div>
                <Link to="/" className="foot">
                    Read more
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Services