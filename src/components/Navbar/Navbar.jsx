import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import dp from "../../assets/dp.jpg";
import Dashboard from "../Dashboard/Dashboard";

const Navbar = () => {
  return (
    <div className="w-[calc(100%-256px)] ml-64 bg-gray-50 min-h-screen">
      <div className="flex justify-between py-4 px-2 shadow-md shadow-black/10">
        <div className="flex gap-2">
          <AiOutlineMenu size={24} className="cursor-pointer" />
          <span className="font-medium">Dashboard</span>
        </div>
        <div className="">
          <img
            src={dp}
            className="w-8 h-8 rounded object-cover align-middle cursor-pointer"
            alt="user pic"
          />
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default Navbar;
