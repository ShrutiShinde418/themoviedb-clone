import { useState, useRef, useEffect } from "react";

const Tabs = ({
  tabButtons,
  activeId,
  tabListStyles,
  tabsIndicatorStyles,
  tabButtonStyles,
}) => {
  const [activeTab, setActiveTab] = useState(activeId);
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
            ref={(el) => (tabRefs.current[tabButton.id] = el)}
            id={tabButton.id}
            aria-controls={tabButton.id}
            aria-selected={tabButton.id === activeTab}
            onClick={() => setActiveTab(tabButton.id)}
            role="tab"
            className={`cursor-pointer ${
              tabButton.id === activeTab
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
