import { FaList } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { format } from "date-fns";

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
