const PeopleCard = ({ profilePath, name, knownForTitles }) => {
  return (
    <div className="shadow-md rounded-t-md flex flex-col mt-1">
      <img
        src={`http://image.tmdb.org/t/p/w200/${profilePath}`}
        alt={name}
        className="w-full rounded-t-md h-80 object-cover"
      />
      <div className="flex flex-col gap-0 p-2">
        <h3 className="font-semibold text-lg leading-5.5">{name}</h3>
        <p className="text-grey-2 leading-4.5 text-sm">{knownForTitles}</p>
      </div>
    </div>
  );
};

export default PeopleCard;
