import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { fetchPopularData } from "../services/api";
import PeopleCard from "../components/cards/PeopleCard";

const PopularPeople = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularPeople"],
    queryFn: () => fetchPopularData("person", 1),
  });

  useEffect(() => {
    if (error) {
      toast.error(`${error.message}`);
    }

    return () => toast.dismiss();
  }, [error]);

  return (
    <div className="mx-10 mb-10">
      <ToastContainer />
      <h2 className="font-bold text-2xl my-5">Popular People</h2>
      {isLoading && <p>Loading...</p>}
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
                knownForItems={item.known_for}
                profilePath={item.profile_path}
                name={item.name}
                key={item.name}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PopularPeople;
