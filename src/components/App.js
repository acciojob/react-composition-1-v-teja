
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {



  const data = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
       <Tabs tabs={data}></Tabs>
    </div>
  )
}

export default App
