import Card from "./Card";
import Tabs from "./Tabs";
import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMediaData } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import { formattedDate } from "../utils/helpers";

const Carousel = ({ titleStyles, buttons, title, tabType, apiCallDetails }) => {
  const { data, error } = useQuery({
    queryKey: apiCallDetails.queryKey,
    queryFn: apiCallDetails.queryFn,
  });

  if (error) {
    return toast.error(`${error}`);
  }

  return (
    <>
      <ToastContainer />
      <div className="flex mb-7 mx-5 gap-4 items-center">
        <h1 className={`carousel__title ${titleStyles}`}>{title}</h1>
        <Tabs
          tabButtons={buttons}
          tabsIndicatorStyles={"bg-dark-blue"}
          tabListStyles={"border-dark-blue"}
          tabButtonStyles={{
            inactiveTextColor: "text-black",
            activeTextColor: "text-gradient-1",
          }}
          tabType={tabType}
        />
      </div>
      <div className="flex overflow-auto whitespace-nowrap">
        {data?.length > 0 &&
          data.map((item) => (
            <Card
              key={item.id}
              imgURL={`http://image.tmdb.org/t/p/w200/${item.poster_path}`}
              title={item.title || item.name}
              releaseDate={formattedDate(
                item.release_date || item.first_air_date
              )}
            />
          ))}
      </div>
    </>
  );
};

export default Carousel;
