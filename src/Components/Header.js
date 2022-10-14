import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'


function Header({length, cart, handleQuantity}) {
  return (
      <div>
          <TopBar />
      <NavBar length={length} cart={cart} handleQuantity={handleQuantity} />
    </div>
  )
}

export default Header