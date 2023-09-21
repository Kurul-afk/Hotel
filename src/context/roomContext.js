import React, { createContext } from "react";

export const roomContext = createContext();

const roomContextProvider = ({ children }) => {
  return <roomContext.Provider value={{}}>{children}</roomContext.Provider>;
};

export default roomContextProvider;
