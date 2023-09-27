import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import StatusPage from "./pages/StatusPage";
import Register from "./components/Register";
import Login from "./components/Login";
import AddRoom from "./pages/AddRooms";
import AdminPage from "./pages/AdminPage";
import EditRoom from "./pages/EditRoom";

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
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/edit-room/:id" element={<EditRoom />} />
      </Route>
    </Routes>
  );
};

export default Routing;
