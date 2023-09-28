import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const authContext = createContext();

const API = "http://localhost:8000";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (user, navigate) => {
    setLoading(true);
    try {
      await axios.post(`${API}/users`, user);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (user, navigate) => {
    setLoading(true);
    try {
      const { data } = await axios(`${API}/users`, user);
      const findUser = data.find(
        (item) => item.email === user.email && item.password === user.password
      );

      if (findUser) {
        localStorage.setItem("tokkens", JSON.stringify(data));
        setCurrentUser(user.email);
        localStorage.setItem("email", user.email);
        navigate("/");
        toast.success("you successfully login");
      } else {
        toast.error("doesn't exist this user!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = (navigate) => {
    setLoading(true);
    localStorage.removeItem("tokkens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/login");
    setLoading(false);
  };

  const contextValue = {
    currentUser,
    setCurrentUser,
    error,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
