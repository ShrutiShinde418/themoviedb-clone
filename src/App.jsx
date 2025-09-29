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
  fetchPopularData,
  fetchTopRatedData,
  fetchMovieOrTVData,
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
                queryFunction={({ pageParam = 1 }) =>
                  fetchPopularData("movie", pageParam)
                }
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
                queryFunction={({ pageParam = 1 }) =>
                  fetchMovieOrTVData("movie", "now_playing", pageParam)
                }
                title={"Now Playing"}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieOrTVPage
                queryKey={"upcomingMovies"}
                queryFunction={({ pageParam = 1 }) =>
                  fetchMovieOrTVData("movie", "upcoming", pageParam)
                }
                title={"Upcoming"}
              />
            }
          />
          <Route
            path="top/rated/movies"
            element={
              <MovieOrTVPage
                queryKey={"upcomingMovies"}
                queryFunction={({ pageParam = 1 }) =>
                  fetchTopRatedData("movie", pageParam)
                }
                title={"Upcoming"}
              />
            }
          />
          <Route
            path="/popular/tv"
            element={
              <MovieOrTVPage
                queryFunction={({ pageParam = 1 }) =>
                  fetchPopularData("tv", pageParam)
                }
                queryKey={"popularTVShows"}
                title={"Popular TV Shows"}
              />
            }
          />
          <Route
            path="/airing/tv"
            element={
              <MovieOrTVPage
                queryFunction={({ pageParam = 1 }) =>
                  fetchMovieOrTVData("tv", "airing_today", pageParam)
                }
                queryKey={"TVShowsAiring"}
                title={"TV Shows Airing Today"}
              />
            }
          />
          <Route
            path="/on/tv"
            element={
              <MovieOrTVPage
                queryFunction={({ pageParam = 1 }) =>
                  fetchMovieOrTVData("tv", "on_the_air", pageParam)
                }
                queryKey={"onTheAir"}
                title={"Currently Airing TV Shows"}
              />
            }
          />
          <Route
            path="/top/rated/tv"
            element={
              <MovieOrTVPage
                queryFunction={({ pageParam = 1 }) =>
                  fetchTopRatedData("tv", pageParam)
                }
                queryKey={"topRatedTV"}
                title={"Top Rated TV Shows"}
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
