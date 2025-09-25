import { Link } from "react-router-dom";
import Menu from "./menu/Menu";
import { navOptions, navbarOptions } from "../utils/helpers";

const Navbar = () => {
  return (
    <div className="flex bg-dark-blue text-white items-center justify-between px-5 py-4 font-semibold relative">
      <ul className="flex gap-8 items-center">
        <Link to="/" className="text-gradient text-2xl font-bold">
          TMDB
        </Link>
        {navbarOptions.map((item) => {
          return (
            <li key={item.id} className="group">
              <a href="#">{item.title}</a>
              <Menu
                subMenuItems={item.subMenuItems}
                classNames="group-hover:opacity-100"
                menuItemClassNames="hover:bg-grey ps-3 pe-14 py-1"
                subMenuStyles="flex"
                listStyles=""
              />
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-8 items-center">
        {navOptions.map((item) => {
          return (
            <li key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
