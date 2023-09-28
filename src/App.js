import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./context/authContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RoomContextProvider from "./context/roomContext";

const App = () => {
  return (
    <RoomContextProvider>
      <AuthContextProvider>
        <ToastContainer />
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </RoomContextProvider>
  );
};

export default App;
