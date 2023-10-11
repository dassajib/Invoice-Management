import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import CreateInvoice from "../components/CreateInvoice/CreateInvoice";
import SignIn from "../components/SignIn/SignIn";
import Layout from "../Layout/Layout";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-invoice" element={<CreateInvoice />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
