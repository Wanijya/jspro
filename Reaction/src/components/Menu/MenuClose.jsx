import React from "react";

const MenuClose = (props) => {
  const menuBarCloses = () => {
    props.setMenuOpen(false);
  };

  return (
    <div
      onClick={menuBarCloses}
      className="font-[a4] uppercase opacity-80 cursor-pointer text-right hover:opacity-70 active:scale-y-95 z-50 "
    >
      <h1>Close</h1>
    </div>
  );
};

export default MenuClose;
