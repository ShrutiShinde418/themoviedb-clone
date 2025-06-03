import { SlOptions } from "react-icons/sl";
import { FaList } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import Menu from "./Menu";
import { useState } from "react";

const Card = () => {
  const [menuHandler, setMenuHandler] = useState(false);

  const showMenuHandler = () => {
    setMenuHandler((prevState) => !prevState);
  };

  const subMenuItems = [
    {
      id: 1,
      title: "Add to List",
      icon: <FaList />,
    },
    {
      id: 2,
      title: "Favorite",
      icon: <MdOutlineFavorite />,
    },
    {
      id: 3,
      title: "Watchlist",
      icon: <FaBookmark />,
    },
    {
      id: 4,
      title: "Rating",
      icon: <IoStar />,
    },
  ];
  return (
    <div className="relative min-w-44 w-44 mx-5 mb-10">
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
      <img
        src="http://image.tmdb.org/t/p/original/7MrgIUeq0DD2iF7GR6wqJfYZNeC.jpg"
        alt="Anora"
        className="rounded-md w-full"
      />
    </div>
  );
};

export default Card;
