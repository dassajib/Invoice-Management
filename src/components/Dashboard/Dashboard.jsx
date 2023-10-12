import React from "react";
import Table from "../Table/Table";
import { DASHBOARD_CARD_DATA } from "../../data/const";

const Dashboard = () => {
  return (
    <div className="p-6 w-full lg:w-[calc(100%-256px)] lg:ml-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {DASHBOARD_CARD_DATA.map((item) => (
          <div key={item.id}>
            <div className="bg-white rounded-md border border-gray-900 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="text-2xl font-semibold mb-1">{item.amount}</div>
                  <div className="text-2xl font-medium text-gray-400">
                    {item.cardName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
