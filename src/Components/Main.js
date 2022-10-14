import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import SearchForm from "./SearchForm";

function Main({addToCart, data, productsFilter, isSelected}) {
  
  return (
    <div>
      <div>
        <Categories productsFilter={productsFilter} isSelected={isSelected} />
        <SearchForm />
      </div>

      <div className="container">
        
        <div className="row p-4 mx-auto g-4">

          {data.map((product, id) => {
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
