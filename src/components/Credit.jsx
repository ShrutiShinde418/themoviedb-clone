import { Link } from "react-router-dom";

const Credit = ({ releaseDate, originalTitle, episodeCount, character }) => {
  return (
    <div className="grid grid-cols-[0.5fr_0.5fr_5fr] items-center">
      <div>
        {releaseDate ? (
          <p>{releaseDate && new Date(releaseDate)?.getFullYear()}</p>
        ) : (
          <p>&mdash;</p>
        )}
      </div>
      <div>
        <input type="radio" name="credit" id={originalTitle} />
      </div>
      <div>
        <p>
          <Link to={"/"} className="font-semibold hover:text-blue">
            {originalTitle}
          </Link>
        </p>
        <div className="flex gap-2">
          <Link to={"/"} className="text-gray-500 underline">
            {episodeCount} Episodes
          </Link>
          {character && <p>as {character}</p>}
        </div>
      </div>
    </div>
  );
};

export default Credit;
