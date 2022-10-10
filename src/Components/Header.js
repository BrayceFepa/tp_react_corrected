import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'


function Header({ cartCount }) {
  return (
      <div>
          <TopBar />
          <NavBar counter={cartCount} />
    </div>
  )
}

export default Header