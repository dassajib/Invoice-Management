import React from "react";
import { GiFireDash } from "react-icons/gi";
import { SIDEBAR_NAVIGATION_ELEMENETS } from "../../data/const";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed w-64 top-0 left-0 h-full bg-gray-900 p-4">
      <div className="flex items-center gap-8 border-b border-gray-800 pb-4">
        <Link to="/">
          <GiFireDash size={24} className="text-gray-300 cursor-pointer" />
        </Link>
        <Link to="/">
          <span className="text-gray-300 tracking-[4px] text-lg font-bold cursor-pointer">
            INVOICE
          </span>
        </Link>
      </div>
      <div>
        <ul>
          {SIDEBAR_NAVIGATION_ELEMENETS.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="flex items-center gap-8 my-6 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-950 active:bg-red-900"
            >
              <span className=" text-xl">{item.icon}</span>
              <li className="">{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
