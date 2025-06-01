import React from "react";

const Menu = ({ subMenuItems }) => {
  return (
    <div className="absolute bg-white text-black font-normal py-1 border border-gray-300 rounded-sm z-50 mt-1 group-hover:opacity-100 opacity-0 transition-all duration-100">
      <ul className="flex flex-col">
        {subMenuItems.map((subMenuItem) => {
          return (
            <li id={subMenuItem.id} className="hover:bg-grey ps-3 pe-14 py-1">
              <a href="#">{subMenuItem.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
