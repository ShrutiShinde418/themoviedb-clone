import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { trendingCarouselButtons } from "./utils/helpers";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Carousel
        titleStyles={"text-black"}
        buttons={trendingCarouselButtons}
        title={"Trending"}
      />
      <Footer />
    </>
  );
}

export default App;
