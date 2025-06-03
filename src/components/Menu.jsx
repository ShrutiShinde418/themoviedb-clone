const Menu = ({
  subMenuItems,
  classNames,
  menuItemClassNames,
  subMenuStyles,
  listStyles,
}) => {
  return (
    <div
      className={`absolute bg-white text-black font-normal py-1 border border-gray-300 rounded-sm z-50 mt-1 ${classNames} opacity-0 transition-all duration-100`}
    >
      <ul className={`flex flex-col ${listStyles}`}>
        {subMenuItems.map((subMenuItem) => {
          return (
            <li id={subMenuItem.id} className={`${menuItemClassNames}`}>
              <a href="#" className={subMenuStyles}>
                {subMenuItem.icon}
                {subMenuItem.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
