const Footer = () => {
  const footerOptions1 = [
    { id: 1, title: "About TMDB" },
    { id: 2, title: "Contact Us" },
    { id: 3, title: "Support Forums" },
    { id: 4, title: "API Documentation" },
    { id: 5, title: "System Status" },
  ];

  const footerOptions2 = [
    { id: 6, title: "Contribution Bible" },
    { id: 7, title: "Add New Movie" },
    { id: 8, title: "Add New TV Show" },
  ];

  const footerOptions3 = [
    { id: 9, title: "Guidelines" },
    { id: 10, title: "Discussions" },
    { id: 11, title: "Leaderboard" },
  ];

  const footerOptions4 = [
    { id: 12, title: "Terms of Use" },
    { id: 13, title: "API Terms of Use" },
    { id: 14, title: "Privacy Policy" },
    { id: 15, title: "DMCA Policy" },
  ];

  return (
    <div className="bg-dark-blue flex text-white gap-10 justify-center p-14">
      <div>
        <p className="text-gradient font-bold text-xl mb-5">The Movie DB</p>
        <button className="bg-white text-blue uppercase p-3 rounded-md font-bold cursor-pointer text-lg">
          join the community
        </button>
      </div>
      <ul>
        <ul className="uppercase font-semibold text-lg">the basics</ul>
        {footerOptions1.map((footerItem) => (
          <li key={footerItem.id}>
            <a href="">{footerItem.title}</a>
          </li>
        ))}
      </ul>
      <ul>
        <ul className="uppercase font-semibold text-lg">get involved</ul>
        {footerOptions2.map((footerItem) => (
          <li key={footerItem.id}>
            <a href="#">{footerItem.title}</a>
          </li>
        ))}
      </ul>
      <ul>
        <ul className="uppercase font-semibold text-lg">community</ul>
        {footerOptions3.map((footerItem) => (
          <li key={footerItem.id}>
            <a href="#">{footerItem.title}</a>
          </li>
        ))}
      </ul>
      <ul>
        <ul className="uppercase font-semibold text-lg">legal</ul>
        {footerOptions4.map((footerItem) => (
          <li key={footerItem.id}>
            <a href="#">{footerItem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
