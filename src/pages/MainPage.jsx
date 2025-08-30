import { useSelector } from "react-redux";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import {
  popularCarouselButtons,
  trendingCarouselButtons,
  topRatedCarouselButtons,
  tabMappers,
} from "../utils/helpers";
import {
  fetchTopRatedData,
  fetchTrendingMediaData,
  fetchWhatsPopularData,
} from "../services/api";

const MainPage = () => {
  const { trendingTab, popularTab, topRatedTab } = useSelector(
    (state) => state.tabs.tabBars
  );

  return (
    <>
      <Search />
      <Carousel
        key={1}
        titleStyles={"text-black"}
        buttons={trendingCarouselButtons}
        title={"Trending"}
        tabType={"trendingTab"}
        apiCallDetails={{
          queryKey: ["trendingData", tabMappers[trendingTab]],
          queryFn: () => fetchTrendingMediaData(tabMappers[trendingTab]),
        }}
      />
      <Carousel
        key={2}
        titleStyles={"text-black"}
        buttons={popularCarouselButtons}
        title={"What's Popular"}
        tabType={"popularTab"}
        apiCallDetails={{
          queryKey: [
            "popularTab",
            tabMappers[popularTab][0],
            tabMappers[popularTab][1],
          ],
          queryFn: () =>
            fetchWhatsPopularData(
              tabMappers[popularTab][0],
              tabMappers[popularTab][1]
            ),
        }}
      />
      <Carousel
        key={3}
        titleStyles={"text-black"}
        buttons={topRatedCarouselButtons}
        title={"Top Rated"}
        tabType={"topRatedTab"}
        apiCallDetails={{
          queryKey: ["freeToWatch", tabMappers[topRatedTab]],
          queryFn: () => fetchTopRatedData(tabMappers[topRatedTab]),
        }}
      />
    </>
  );
};

export default MainPage;
