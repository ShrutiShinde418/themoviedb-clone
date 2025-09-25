import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const FilterMenu = ({ initialValue, children, title }) => {
  const [showFilter, setShowFilter] = useState(initialValue);
  return (
    <div className="rounded-md shadow flex flex-col">
      <button
        onClick={() => setShowFilter((prevState) => !prevState)}
        className="flex items-center justify-between px-3 py-3 cursor-pointer"
      >
        <p className="font-semibold text-lg">{title}</p>
        {!showFilter && (
          <div>
            <MdOutlineKeyboardArrowRight className="size-5" />
          </div>
        )}
        {showFilter && (
          <div>
            <MdOutlineKeyboardArrowDown className="size-5" />
          </div>
        )}
      </button>
      <hr className="text-gray-100" />
      {showFilter && children}
    </div>
  );
};

export default FilterMenu;
