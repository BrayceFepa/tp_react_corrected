import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'


function Header({length, cart, incrementQuantity, decrementQuantity}) {
  return (
      <div>
          <TopBar />
      <NavBar length={length} cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
    </div>
  )
}

export default Header