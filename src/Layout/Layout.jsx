import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex text-gray-800">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
