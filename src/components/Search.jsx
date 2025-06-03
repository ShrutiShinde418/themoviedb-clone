const Search = () => {
  return (
    <div className="m-10 relative">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full h-11 text-[rgba(0,0,0,.5)] rounded-3xl border px-7 py-5"
        placeholder="Search for a movie, TV Show or a person"
      />
      <button
        type="submit"
        className="gradient py-2.5 px-7 border-none rounded-3xl text-white absolute right-0 cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
