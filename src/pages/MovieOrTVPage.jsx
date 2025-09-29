import { useEffect, Fragment } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Card from "../components/cards/Card";
import { formattedDate } from "../utils/helpers";
import Filter from "../components/Filter";
import { ToastContainer, toast } from "react-toastify";

const MovieOrTVPage = ({ queryKey, queryFunction, title }) => {
  const { data, fetchNextPage, hasNextPage, error, isLoading, fetchStatus } =
    useInfiniteQuery({
      queryKey: [queryKey],
      queryFn: ({ pageParam = 1 }) => queryFunction({ pageParam }),
      getNextPageParam: (lastPage) => lastPage?.nextCursor ?? undefined,
    });

  useEffect(() => {
    if (error) {
      toast.error(`${error.message}`);
    }

    return () => toast.dismiss();
  }, [error]);

  return (
    <div className="mx-4 mb-10">
      <ToastContainer />
      <h2 className="font-semibold text-[1.75rem] my-5 mx-3">{title}</h2>
      {isLoading && <p>Loading...</p>}
      <div className="grid grid-cols-[1fr_4fr] gap-5">
        <Filter />
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {data?.pages?.map((page, index) => (
              <Fragment key={index}>
                {page?.results.map((item) => (
                  <Card
                    key={item.id}
                    imgURL={`http://image.tmdb.org/t/p/w200/${item.poster_path}`}
                    title={item.title || item.name}
                    releaseDate={formattedDate(
                      item.release_date || item.first_air_date,
                    )}
                    rating={
                      !item.vote_average
                        ? 0
                        : Math.round(item.vote_average * 10)
                    }
                    cardStyles={"shadow rounded-lg pb-2 leading-tight"}
                    imgStyles={"rounded-t-lg"}
                  />
                ))}
              </Fragment>
            ))}
          </div>
          {fetchStatus === "fetching" ? (
            <p className="mb-4 text-lg font-semibold">Loading...</p>
          ) : null}
          <button
            className="font-bold text-2xl bg-blue text-white rounded-lg py-3"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieOrTVPage;
