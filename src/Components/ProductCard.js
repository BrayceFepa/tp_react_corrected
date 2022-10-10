import React from "react";

function ProductCard({ img, details, price, cartCount, setCartCount}) {
  return (
    <div className="col-md-4">
      <div className="card bg-light text-center d-flex justify-content-center align-items-center flex-column">
        <img src={`./images/${img}`} className="img-top" width={200}></img>
        <div className="card-body">
          <div className="card-text text-black fw-bold">{details}</div>
          <div className="card-title fw-bold">{price}</div>
                  <button className="btn btn-danger w-75 text-white"
                    onClick={()=>setCartCount(cartCount +=1)}
                  >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
