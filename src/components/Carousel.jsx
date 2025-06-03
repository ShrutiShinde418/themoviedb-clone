import Card from "./Card";
import Tabs from "./Tabs";

const Carousel = ({ titleStyles }) => {
  const buttons = [
    {
      id: 1,
      name: "Today",
    },
    {
      id: 2,
      name: "This Week",
    },
  ];
  return (
    <>
      <div className="flex mb-4 mx-5 gap-4 items-center">
        <h1 className={`carousel__title ${titleStyles}`}>Trending</h1>
        <Tabs
          tabButtons={buttons}
          activeId={1}
          tabsIndicatorStyles={"bg-dark-blue"}
          tabListStyles={"border-dark-blue"}
          tabButtonStyles={{
            inactiveTextColor: "text-black",
            activeTextColor: "text-gradient-1",
          }}
        />
      </div>
      <Card />
    </>
  );
};

export default Carousel;
