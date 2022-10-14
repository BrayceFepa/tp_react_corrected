import React from 'react'
import CategoryBtn from './CategoryBtn';

function Categories({productsFilter, isSelected}) {
  const categoriesList = ['All', "women", "men", "baby", "All"]; //we've forgotten baby category

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
        {
          categoriesList.map((category, id) => (
            <CategoryBtn category={category} selected={isSelected === id} onSelect={()=>productsFilter(id, category)} />
          ))
          }
        </div>
    </div>
  )
}

export default Categories