import { ErrorBoundary } from "react-error-boundary";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Fallback from "./components/Fallback";
import {
  trendingCarouselButtons,
  tabMappers,
  popularCarouselButtons,
  topRatedCarouselButtons,
} from "./utils/helpers";
import {
  fetchTrendingMediaData,
  fetchWhatsPopularData,
  fetchTopRatedData,
} from "./services/api";
import { useSelector } from "react-redux";

function App() {
  const { trendingTab, popularTab, topRatedTab } = useSelector(
    (state) => state.tabs.tabBars
  );
  return (
    <>
      <ErrorBoundary fallback={<Fallback />}>
        <Navbar />
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
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
