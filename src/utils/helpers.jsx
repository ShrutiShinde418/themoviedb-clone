import { FaList } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { format } from "date-fns";
import { FaPlus, FaSearch } from "react-icons/fa";

export const navOptions = [
  {
    id: 1,
    title: <FaPlus />,
  },
  {
    id: 2,
    title: "Login",
  },
  {
    id: 3,
    title: "Join TMDB",
  },
  {
    id: 4,
    title: <FaSearch className="text-blue" />,
  },
];

export const navbarOptions = [
  {
    id: 1,
    title: "Movies",
    subMenuItems: [
      {
        id: 1,
        title: "Popular",
        path: "/popular/movies",
      },
      {
        id: 2,
        title: "Now Playing",
        path: "/now/playing",
      },
      {
        id: 3,
        title: "Upcoming",
        path: "/upcoming",
      },
      {
        id: 4,
        title: "Top Rated",
        path: "/top/rated/movies",
      },
    ],
  },
  {
    id: 2,
    title: "TV Shows",
    subMenuItems: [
      {
        id: 1,
        title: "Popular",
        path: "/popular/tv",
      },
      {
        id: 2,
        title: "Airing Today",
        path: "/airing/tv",
      },
      {
        id: 3,
        title: "On TV",
        path: "/on/tv",
      },
      {
        id: 4,
        title: "Top Rated",
        path: "/top/rated/tv",
      },
    ],
  },
  {
    id: 3,
    title: "People",
    subMenuItems: [
      {
        id: 1,
        title: "Popular People",
        path: "/popular/people",
      },
    ],
  },
  {
    id: 4,
    title: "More",
    subMenuItems: [
      {
        id: 1,
        title: "Discussions",
        path: "/discussions",
      },
      {
        id: 2,
        title: "LeaderBoard",
        path: "/leaderboard",
      },
    ],
  },
];

export const trendingCarouselButtons = [
  {
    id: 1,
    name: "Today",
  },
  {
    id: 2,
    name: "This Week",
  },
];

export const popularCarouselButtons = [
  {
    id: 1,
    name: "Streaming",
  },
  {
    id: 2,
    name: "On TV",
  },
  {
    id: 3,
    name: "For Rent",
  },
  {
    id: 4,
    name: "In Theaters",
  },
];

export const topRatedCarouselButtons = [
  {
    id: 1,
    name: "Movies",
  },
  {
    id: 2,
    name: "TV",
  },
];

export const subMenuItems = [
  {
    id: 1,
    title: "Add to List",
    icon: <FaList />,
  },
  {
    id: 2,
    title: "Favorite",
    icon: <MdOutlineFavorite />,
  },
  {
    id: 3,
    title: "Watchlist",
    icon: <FaBookmark />,
  },
  {
    id: 4,
    title: "Rating",
    icon: <IoStar />,
  },
];

export const formattedDate = (date) => {
  return format(new Date(date), "MMM d, y");
};

export const tabMappers = {
  Today: "day",
  "This Week": "week",
  Streaming: [
    "movie",
    ["sort_by=popularity.desc", "with_watch_providers=8", "watch_region=IN"],
  ],
  "On TV": [
    "tv",
    [
      "sort_by=popularity.desc",
      "air_date.gte=2025-08-01",
      `air_date.lte=2025-08-27`,
    ],
  ],
  "For Rent": ["movie", ["sort_by=popularity.desc", "with_release_type=4"]],
  "In Theaters": [
    "movie",
    [
      "sort_by=popularity.desc",
      "with_release_type=3",
      "release_date.gte=2025-08-01",
    ],
  ],
  Movies: "movie",
  TV: "tv",
};

export const sortOptions = [
  { value: "popularity-descending", label: "Popularity Descending" },
  { value: "popularity-ascending", label: "Popularity Ascending" },
  { value: "rating-descending", label: "Rating Descending" },
  { value: "rating-ascending", label: "Rating Ascending" },
  { value: "release-descending", label: "Release Descending" },
  { value: "release-ascending", label: "Release Ascending" },
  { value: "title-descending", label: "Title (Z-A)" },
  { value: "title-ascending", label: "Title (A-Z)" },
];

export const genres = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Adventure",
  },
  {
    id: 3,
    name: "Animation",
  },
  {
    id: 4,
    name: "Comedy",
  },
  {
    id: 5,
    name: "Crime",
  },
  {
    id: 6,
    name: "Documentary",
  },
  {
    id: 7,
    name: "Drama",
  },
  {
    id: 8,
    name: "Family",
  },
  {
    id: 9,
    name: "Fantasy",
  },
  {
    id: 10,
    name: "History",
  },
  {
    id: 11,
    name: "Horror",
  },
  {
    id: 12,
    name: "Music",
  },
  {
    id: 13,
    name: "Mystery",
  },
  {
    id: 14,
    name: "Romance",
  },
  {
    id: 15,
    name: "Science Fiction",
  },
];
