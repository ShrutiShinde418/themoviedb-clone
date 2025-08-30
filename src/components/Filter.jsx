import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

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
            <select name="sort" id="sort" className="w-full p-2 bg-gray-300">
              <option value="popularity-descending">
                Popularity Descending
              </option>
              <option value="popularity-ascending">Popularity Ascending</option>
              <option value="rating-descending">Rating Descending</option>
              <option value="rating-ascending">Rating Ascending</option>
              <option value="release-descending">Release Descending</option>
              <option value="release-ascending">Release Ascending</option>
              <option value="title-descending">Title (Z-A)</option>
              <option value="release-ascending">Title (A-Z)</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
