import { useState } from "react";
import React from "react";



const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div>
        <ul className="tabs">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
            >
              {tabs[index]}
            </li>
          ))}
        </ul>
          <p>This is the content for {tabs[activeTab]}.</p>
      </div>
    );
  };
  
  export default Tabs;