import React from 'react'

function Categories() {
  return (
      <div className="main container d-flex justify-content-center align-items-center flex-column my-5">
          {/* Main title */}
        <div className=" my-3">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h2>SHOP</h2>
            <div className="divider"></div>
          </div>
        </div>

        <div className="row w-100 mt-5 d-flex justify-content-between align-items-center mx-auto">
          <a href='#'className="col-2 bg-danger cursor-pointer py-2 text-center h5 px-3 mr-1  text-decoration-none text-white">All</a>
          <a href='#' className="col-2 bg-secondary py-2 text-center h5 px-3 mr-1 text-decoration-none text-white">
            Women's
          </a>
          <a href='#' className="col-2 bg-secondary py-2 text-center h5 px-3 mr-1 text-decoration-none text-white">
            Men's
          </a>
          <a href='#' className="col-2 bg-secondary py-2 text-center h5 px-3 mr-1 text-decoration-none text-white">
            All
          </a>
        </div>
    </div>
  )
}

export default Categories