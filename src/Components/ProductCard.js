import React from "react";

function ProductCard({ product, addToCart }) {
  const { img, title, price } = product;


  return (
    <div className="col-md-4">
      <div className="card bg-light text-center d-flex justify-content-center align-items-center flex-column">
        <img src={img} className="img-top"></img>
        <div className="card-body">
          <div className="card-text text-black fw-bold">{title}</div>
          <div className="card-title fw-bold">{price}</div>
          <button className="btn btn-danger w-100 text-white"
            onClick={()=> addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
