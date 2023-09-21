import React, { createContext } from "react";

export const authContext = createContext();

const authContextProvider = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default authContextProvider;
