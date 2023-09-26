import React, { createContext } from "react";
export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
