import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Fallback from "./components/Fallback";
import MainPage from "./pages/MainPage";
import PopularPeople from "./pages/PopularPeople";
import PopularMovies from "./pages/PopularMovies";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<Fallback />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/popular/people" element={<PopularPeople />} />
          <Route path="/popular/movies" element={<PopularMovies />} />
          <Route path="/person/:id" element={<PersonPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
