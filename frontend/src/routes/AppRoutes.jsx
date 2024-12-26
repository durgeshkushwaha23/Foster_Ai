import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users/login" element={<Login/>} />
        <Route path="/users/register" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
