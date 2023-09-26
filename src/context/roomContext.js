import React, { createContext } from "react";

export const roomContext = createContext();

const RoomContextProvider = ({ children }) => {
  return <roomContext.Provider value={{}}>{children}</roomContext.Provider>;
};

export default RoomContextProvider;
