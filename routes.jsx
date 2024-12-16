import React from "react";
import { Routes, Route } from "react-router-dom";
import ConnectWallet from "./connect-wallet";
import Dashboard from "./Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ConnectWallet />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
