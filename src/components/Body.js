import MainContainer from "./MainContainer";
import React from "react";
import SideBar from "./SideBar";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
