import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { subMenuItems } from "../../utils/helpers";
import Menu from "../menu/Menu";
import "react-circular-progressbar/dist/styles.css";

const Card = ({
  title,
  imgURL,
  releaseDate,
  rating,
  cardStyles,
  imgStyles,
}) => {
  const [menuHandler, setMenuHandler] = useState(false);

  const showMenuHandler = () => {
    setMenuHandler((prevState) => !prevState);
  };

  return (
    <div className={`relative min-w-44 w-44 mx-3 mb-9 ${cardStyles}`}>
      <button
        className="options bg-white/30 backdrop-invert backdrop-opacity-40 w-fit p-1 absolute rounded-full right-2 top-2 cursor-pointer hover:bg-blue"
        onClick={showMenuHandler}
      >
        <SlOptions className="bg-transparent" />
      </button>
      <div className="size-10 absolute top-[14.75rem] left-3">
        <CircularProgressbarWithChildren
          value={rating}
          className="bg-progress-bg rounded-full p-0.5 font-display"
          strokeWidth={6}
        >
          <div className="flex items-baseline text-white">
            <strong className="text-sm after:content-['%']">{rating}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
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
        src={imgURL}
        alt={title}
        className={`w-full h-64 object-cover ${imgStyles}`}
      />
      <div className="ml-3 mt-6 flex flex-col flex-wrap text-wrap">
        <Link to={"/"} className="font-bold hover:text-blue">
          {title}
        </Link>
        <h3 className="text-grey-2">{releaseDate}</h3>
      </div>
    </div>
  );
};

export default Card;
