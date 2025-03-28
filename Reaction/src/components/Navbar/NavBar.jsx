import React from 'react'
import Logo from "./Logo";
import Menu from './Menu';

const NavBar = (props) => {
  return (
    <div className="flex w-full item-center justify-between px-7 py-6">
      <Logo />
      <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
    </div>
  )
}

export default NavBar