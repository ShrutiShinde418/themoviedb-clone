import { ErrorBoundary } from "react-error-boundary";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Fallback from "./components/Fallback";
import { trendingCarouselButtons, tabMappers } from "./utils/helpers";
import { fetchTrendingMediaData } from "./services/api";
import { useSelector } from "react-redux";

function App() {
  const trendingActiveTab = useSelector(
    (state) => state.tabs.tabBars.trendingTab
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
            queryKey: ["trendingData", tabMappers[trendingActiveTab]],
            queryFn: () =>
              fetchTrendingMediaData(tabMappers[trendingActiveTab]),
          }}
        />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
