import { genres, sortOptions } from "../utils/helpers";
import FilterMenu from "./menu/FilterMenu";
import Chip from "./Chip.jsx";

const Filter = () => {
  return (
    <div className="w-9/12 flex flex-col gap-3">
      <FilterMenu initialValue={true} title={"Sort"}>
        <div className="px-3 mt-2 pb-4">
          <p className="font-light text-lg mb-2">Sort Result By</p>
          <select
            name="sort"
            id="sort"
            className="w-full p-2 bg-gray-300 rounded-lg cursor-pointer accent-blue"
          >
            {sortOptions.map((item) => (
              <option value={item.value} key={item.value} className="bg-white">
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </FilterMenu>
      <FilterMenu initialValue={true} title={"Where To Watch"}>
        <div className="px-3 mt-2 pb-4">
          <p className="font-light text-lg mb-2">Show Me</p>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="show"
                id="everything"
                value="Everything"
              />
              <label htmlFor="everything">Everything</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="show"
                id="movies-not-seen"
                value="Movies I Haven't Seen"
              />
              <label htmlFor="movies-not-seen">Movies I Haven't Seen</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="show"
                id="movies-seen"
                value="Movies I Have Seen"
              />
              <label htmlFor="movies-seen">Movies I Have Seen</label>
            </div>
          </div>
        </div>
        <hr className="text-gray-100" />
        <div className="px-3 mt-2 pb-4">
          <p className="font-light text-lg mb-2">Availabilities</p>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="availabilities"
                id="availabilities"
                value="availabilities"
                className="accent-blue"
                defaultChecked
              />
              <label htmlFor="availabilities">Search all availabilities?</label>
            </div>
          </div>
        </div>
        <hr className="text-gray-100" />
        <div className="px-3 mt-2 pb-4">
          <p className="font-light text-lg mb-2">Release Dates</p>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-3">
              <input
                type="checkbox"
                name="releases"
                id="releases"
                value="releases"
                className="accent-blue"
                defaultChecked
              />
              <label htmlFor="availabilities">Search all releases?</label>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label htmlFor="from-date">from</label>
                <input
                  type="date"
                  name="from-date"
                  id="from-date"
                  defaultValue="from-date"
                  className="accent-blue border border-gray-300 px-2 py-1 rounded-md"
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="to-date">to</label>
                <input
                  type="date"
                  name="to-date"
                  id="to-date"
                  defaultValue="to-date"
                  className="accent-blue border border-gray-300 px-2 py-1 rounded-md"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </FilterMenu>
      <FilterMenu initialValue={true} title={"Genres"}>
        <div className="flex flex-wrap gap-2 m-3">
          {genres.map((item) => (
            <Chip title={item.name} key={item.id} />
          ))}
        </div>
      </FilterMenu>
    </div>
  );
};

export default Filter;
