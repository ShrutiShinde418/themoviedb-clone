import { useQuery } from "@tanstack/react-query";
import { fetchPopularPeople } from "../services/api";
import { ToastContainer } from "react-toastify";

const PopularPeople = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["popularPeople"],
    queryFn: () => fetchPopularPeople(1),
  });

  return (
    <div className="mx-10 mb-10">
      <ToastContainer />
      <h2 className="font-bold text-2xl my-5">Popular People</h2>
      <div className="grid grid-cols-4 gap-6">
        {data?.length > 0 &&
          data?.map((item) => {
            const knownForTitles = item.known_for
              .slice(0, 3)
              .map((entry) => entry.title || entry.name)
              .join(", ");

            return (
              <div className="shadow-md rounded-t-md flex flex-col mt-1">
                <img
                  src={`http://image.tmdb.org/t/p/w200/${item.profile_path}`}
                  alt={item.name}
                  className="w-full rounded-t-md h-80 object-cover"
                />
                <div className="flex flex-col gap-0 p-2">
                  <h3 className="font-semibold text-lg leading-5.5">
                    {item.name}
                  </h3>
                  <p className="text-grey-2 leading-4.5 text-sm">
                    {knownForTitles}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PopularPeople;
