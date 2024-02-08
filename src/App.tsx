import React from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";

function App() {
  return (
      <div className="app_container">
        <SideBar />
        <Main />
      </div>
  );
}

export default App;
