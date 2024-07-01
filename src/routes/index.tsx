import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "../pages/summary";
import Sales from "../pages/sales";
import Sale from "../pages/sale";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/vendas" element={<Sales />} />
      <Route path="/vendas/:id" element={<Sale />} />
    </Routes>
  );
}

export default RoutesApp;
