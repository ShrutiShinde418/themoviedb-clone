import { useQuery } from "@tanstack/react-query";
import { fetchPopularData } from "../services/api";
import { ToastContainer } from "react-toastify";
import PeopleCard from "../components/cards/PeopleCard";

const PopularPeople = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["popularPeople"],
    queryFn: () => fetchPopularData("person", 1),
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
              <PeopleCard
                knownForTitles={knownForTitles}
                profilePath={item.profile_path}
                name={item.name}
                key={item.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PopularPeople;
