import React from 'react'

const Menu = (props) => {
  
  const menuBarOpens = () => {    
    props.setMenuOpen(true)
    console.log(props.menuOpen);
  }

  return (
    <div onClick={menuBarOpens} className="font-[a4] active:scale-y-95 uppercase opacity-80 cursor-pointer hover:opacity-70">Menu</div>
  )
}

export default Menu