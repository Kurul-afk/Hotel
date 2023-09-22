import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import StatusPage from "./pages/StatusPage";
import Register from "./components/Register";
import Login from "./components/Login";

const ProtectedRoute = () => {
  const user = localStorage.getItem("email");
  return user ? <Outlet /> : <Navigate to="/login" />;
};

const Routing = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<MainPage />} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/detail-page/:id" element={<DetailPage />} />
        <Route path="/status-page" element={<StatusPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
