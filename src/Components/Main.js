import React, { useState } from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import SearchForm from "./SearchForm";
import products from "../products";

function Main({addToCart}) {
  
  return (
    <div>
      <div>
        <Categories/>
        <SearchForm />
      </div>

      <div className="container">
        
        <div className="row p-4 mx-auto g-4">

          {products.map((product, id) => {
            return (
              <ProductCard product={product} key={id} addToCart={addToCart} />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Main;
