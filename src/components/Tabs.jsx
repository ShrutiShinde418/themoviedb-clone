import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setActiveTab } from "../store/tabSlice";

const Tabs = ({
  tabButtons,
  tabListStyles,
  tabsIndicatorStyles,
  tabButtonStyles,
  tabType,
}) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.tabBars[tabType]);
  const indicatorRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    if (indicatorRef.current && tabRefs.current[activeTab]) {
      const activeTabButton = tabRefs.current[activeTab];
      indicatorRef.current.style.transform = `translateX(${activeTabButton.offsetLeft}px)`;
      indicatorRef.current.style.width = `${activeTabButton.offsetWidth}px`;
    }
  }, [activeTab]);

  return (
    <div
      role="tablist"
      aria-label="Tabs Section"
      className={`flex relative isolate font-semibold rounded-4xl border ${tabListStyles}`}
    >
      <div
        className={`tabs-indicator ${tabsIndicatorStyles}`}
        ref={indicatorRef}
      ></div>
      {tabButtons.map((tabButton) => {
        return (
          <button
            key={tabButton.id}
            ref={(el) => (tabRefs.current[tabButton.name] = el)}
            id={tabButton.name}
            aria-controls={tabButton.name}
            aria-selected={tabButton.name === activeTab}
            onClick={() =>
              dispatch(setActiveTab({ tabType, tabName: tabButton.name }))
            }
            role="tab"
            className={`cursor-pointer ${
              tabButton.name === activeTab
                ? tabButtonStyles.activeTextColor
                : tabButtonStyles.inactiveTextColor
            } py-0.5 px-3`}
          >
            {tabButton.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
