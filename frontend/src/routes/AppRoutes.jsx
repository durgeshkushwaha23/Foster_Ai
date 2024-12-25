import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<div>g</div>} />
        <Route path="/regiter" element={<div>ef</div>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
