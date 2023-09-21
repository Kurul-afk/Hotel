import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import StatusPage from "./pages/StatusPage";
import Register from "./components/Register";
import Login from "./components/Login";

const Routing = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/list-page" element={<ListPage />} />
      <Route path="/detail-page/:id" element={<DetailPage />} />
      <Route path="/status-page" element={<StatusPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
