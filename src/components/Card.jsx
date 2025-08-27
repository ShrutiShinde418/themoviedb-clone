import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { subMenuItems } from "../utils/helpers";
import { useState } from "react";

const Card = ({ title, imgURL, releaseDate }) => {
  const [menuHandler, setMenuHandler] = useState(false);

  const showMenuHandler = () => {
    setMenuHandler((prevState) => !prevState);
  };

  return (
    <div className="relative min-w-44 w-44 mx-3 mb-9">
      <button
        className="options bg-white/30 backdrop-invert backdrop-opacity-40 w-fit p-1 absolute rounded-full right-2 top-2 cursor-pointer hover:bg-blue"
        onClick={showMenuHandler}
      >
        <SlOptions className="bg-transparent" />
      </button>
      {menuHandler && (
        <Menu
          subMenuItems={subMenuItems}
          classNames={menuHandler ? "opacity-100 top-9 -right-12" : ""}
          menuItemClassNames="px-5 py-2 text-sm hover:bg-dark-blue hover:text-white font-semibold"
          subMenuStyles="flex gap-3 items-center"
          listStyles="divide-y divide-gray-300"
        />
      )}
      <img src={imgURL} alt={title} className="rounded-md w-full" />
      <div className="ml-3 mt-3 flex flex-col flex-wrap text-wrap">
        <Link to={"/"} className="font-semibold hover:text-blue">
          {title}
        </Link>
        <h3 className="text-grey-2">{releaseDate}</h3>
      </div>
    </div>
  );
};

export default Card;
