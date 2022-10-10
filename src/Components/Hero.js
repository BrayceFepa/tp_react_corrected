import React from 'react'

function Hero() {
  return (
    <div className='hero d-flex justify-content-center flex-column mt-5  px-5 bg-light'>
          {/* right side */}
          <div className='right d-flex flex-column'>
              <span className='h3 fw-bold text-dark'>Spring / Summer Collection</span>
              <span className='fw-bold display-3 text-dark my-3'>Get up to 45% Off <br/>
New Arrivals</span>
              <button className='btn btn-danger w-25'>Shop Now </button>
          </div>
    </div>
  )
}

export default Hero