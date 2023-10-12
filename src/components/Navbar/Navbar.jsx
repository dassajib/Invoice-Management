import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import dp from "../../assets/dp.jpg";
import { SIDEBAR_NAVIGATION_ELEMENETS } from "../../data/const";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50">
      <div className="flex justify-between py-4 px-2 shadow-md shadow-black/10">
        <div className="flex gap-2">
          <span className="hidden md:block font-medium">Dashboard</span>

          {/* hamburger button for mobile */}
          <div className="cursor-pointer md:hidden ml-2 mt-1">
            <button
              onClick={handleClick}
              className="rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {open == true ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div className="pr-2">
          <img
            src={dp}
            className="w-8 h-8 rounded object-cover align-middle cursor-pointer"
            alt="user picture"
          />
        </div>
      </div>

      {/* mobile navigation menu */}
      {open ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {SIDEBAR_NAVIGATION_ELEMENETS.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
