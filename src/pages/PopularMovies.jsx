import { useQuery } from "@tanstack/react-query";
import { fetchPopularData } from "../services/api";
import Card from "../components/cards/Card";
import { formattedDate } from "../utils/helpers";
import Filter from "../components/Filter";

const PopularMovies = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["popularPeople"],
    queryFn: () => fetchPopularData("movie", 1),
  });
  return (
    <div className="mx-4 mb-10">
      <h2 className="font-semibold text-[1.75rem] my-5 mx-3">Popular Movies</h2>
      <div className="flex">
        <Filter />
        <div className="flex flex-wrap">
          {data?.length > 0 &&
            data.map((item) => (
              <Card
                key={item.id}
                imgURL={`http://image.tmdb.org/t/p/w200/${item.poster_path}`}
                title={item.title || item.name}
                releaseDate={formattedDate(
                  item.release_date || item.first_air_date
                )}
                rating={Math.round(item.vote_average * 10)}
                cardStyles={"shadow rounded-lg pb-2 leading-tight"}
                imgStyles={"rounded-t-lg"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
