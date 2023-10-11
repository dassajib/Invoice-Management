import React from "react";
import Table from "../Table/Table";

const Dashboard = () => {
  return (
    <div className="p-6 w-[calc(100%-256px)] ml-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-md border border-gray-900 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">10</div>
              <div className="text-sm font-medium text-gray-400">
                Active orders
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
