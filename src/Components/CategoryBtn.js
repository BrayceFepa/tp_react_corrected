import React from 'react'

const CategoryBtn = ({category, selected, onSelect}) => {
  return (
    <button
      className={`btn col-2 text-white text-capitalize ${selected ? 'btn-danger' : 'btn-secondary'}  `}
      onClick={onSelect}
    >
      {category === 'All'? category : category+"'s"}
    </button>
  )
}

export default CategoryBtn