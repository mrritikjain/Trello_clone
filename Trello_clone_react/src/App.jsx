import React from "react";
import "./index.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex h-[calc(100vh-3rem)]">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default App;
