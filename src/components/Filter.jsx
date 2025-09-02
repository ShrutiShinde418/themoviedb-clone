import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { sortOptions } from "../utils/helpers";

const Filter = () => {
  const [showSortFilter, setShowSortFilter] = useState(false);
  return (
    <div className="w-9/12">
      <div className="rounded-md shadow flex flex-col">
        <button
          onClick={() => setShowSortFilter((prevState) => !prevState)}
          className="flex items-center justify-between px-3 py-3 cursor-pointer"
        >
          <p className="font-semibold text-lg">Sort</p>
          {!showSortFilter && (
            <div>
              <MdOutlineKeyboardArrowRight className="size-5" />
            </div>
          )}
          {showSortFilter && (
            <div>
              <MdOutlineKeyboardArrowDown className="size-5" />
            </div>
          )}
        </button>
        <hr className="text-gray-100" />
        {showSortFilter && (
          <div className="px-3 mt-2 pb-4">
            <p className="font-light text-lg mb-2">Sort Result By</p>
            <select
              name="sort"
              id="sort"
              className="w-full p-2 bg-gray-300 rounded-lg cursor-pointer"
            >
              {sortOptions.map((item) => (
                <option value={item.value} className="bg-white hover:bg-blue">
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
