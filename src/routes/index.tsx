import React from "react";
import { Routes, Route } from "react-router-dom";
import { Clients } from "../pages/Clients";
import { Sales } from "../pages/Sales";
import { Reports } from "../pages/Reports";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/clientes" element={<Clients />} />

      <Route path="/vendas" element={<Sales />} />

      <Route path="/relatorios" element={<Reports />} />
    </Routes>
  );
};
