import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Carousel titleStyles={"text-black"} />
      <Footer />
    </>
  );
}

export default App;
