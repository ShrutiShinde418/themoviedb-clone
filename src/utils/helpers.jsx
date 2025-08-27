import { FaList } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

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

export const freeToWatchCarouselButtons = [
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

export const getMonthName = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber];
};

export const formattedDate = (date) => {
  const dateObj = new Date(date);

  return `${getMonthName(dateObj.getMonth()).slice(
    0,
    3
  )} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};

export const tabMappers = {
  Today: "day",
  "This Week": "week",
};
