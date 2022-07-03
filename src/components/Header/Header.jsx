import React from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderNav from './HeaderNav'
import HeaderTop from './HeaderTop'

function Header() {
  return (
    <header className='header'>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderNav />
    </header>
  )
}

export default Header
