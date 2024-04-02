import React from "react";
import "./index.css";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import BusinessPlan from "./Pages/BusinessPlan";
import FinancialPlan from "./Pages/FinancialPlan";


import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<About />} />
      <Route path="/BusinessPlan" element={<BusinessPlan />} />
      <Route path="/FinancialPlan" element={<FinancialPlan />} />
    </Routes>
    </>
  );
}

export default App;
