import { FaPlus, FaSearch } from "react-icons/fa";
import Menu from "./Menu";

const Navbar = () => {
  const navbarOptions = [
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

  const navOptions = [
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
  return (
    <div className="flex bg-dark-blue text-white items-center justify-between px-5 py-4 font-semibold relative">
      <ul className="flex gap-8 items-center">
        <li className="text-gradient text-2xl font-bold">TMDB</li>
        {navbarOptions.map((item) => {
          return (
            <li key={item.id} className="group">
              <a href="#">{item.title}</a>
              <Menu
                subMenuItems={item.subMenuItems}
                classNames="group-hover:opacity-100"
                menuItemClassNames="hover:bg-grey ps-3 pe-14 py-1"
                subMenuStyles="flex"
                listStyles=""
              />
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-8 items-center">
        {navOptions.map((item) => {
          return (
            <li key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
