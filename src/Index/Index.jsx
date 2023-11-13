import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import CreateInvoice from "../components/CreateInvoice/CreateInvoice";
import Layout from "../Layout/Layout";
import LogIn from "../components/LogIn/LogIn";
import Registration from "../components/Registration/Registration";
import Company from "../components/Company/Company";
import Uom from "../components/Uom/Uom";
import Invoice from "../components/Invoice/Invoice";
import Item from "../components/Item/Item";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="create-invoice" element={<CreateInvoice />} />
        <Route path="company" element={<Company />} />
        <Route path="uom" element={<Uom />} />
        <Route path="item" element={<Item />} />
        <Route path="invoice" element={<Invoice />} />
      </Route>
    </Routes>
  );
};

export default Index;
