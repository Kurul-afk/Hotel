import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoomContextProvider from "./context/roomContext";

const App = () => {
  return (
    // Не трогать
    <RoomContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </RoomContextProvider>
  );
};

export default App;
