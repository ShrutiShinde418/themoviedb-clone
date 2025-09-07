import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Fallback from "./components/Fallback";
import MainPage from "./pages/MainPage";
import PopularPeople from "./pages/PopularPeople";
import PersonPage from "./pages/PersonPage";
import MovieOrTVPage from "./pages/MovieOrTVPage";
import {
  fetchMovieData,
  fetchPopularData,
  fetchTopRatedData,
} from "./services/api";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<Fallback />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/popular/people" element={<PopularPeople />} />
          <Route
            path="/popular/movies"
            element={
              <MovieOrTVPage
                queryFunction={() => fetchPopularData("movie", 1)}
                queryKey={"popularMovies"}
                title={"Popular Movies"}
              />
            }
          />
          <Route
            path="/now/playing"
            element={
              <MovieOrTVPage
                queryKey={"nowPlayingMovies"}
                queryFunction={() => fetchMovieData("now_playing", 1)}
                title={"Now Playing"}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieOrTVPage
                queryKey={"upcomingMovies"}
                queryFunction={() => fetchMovieData("upcoming", 1)}
                title={"Upcoming"}
              />
            }
          />
          <Route
            path="top/rated/movies"
            element={
              <MovieOrTVPage
                queryKey={"upcomingMovies"}
                queryFunction={() => fetchTopRatedData("movie")}
                title={"Upcoming"}
              />
            }
          />
          <Route path="/person/:id" element={<PersonPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
