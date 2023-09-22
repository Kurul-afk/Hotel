import React, { useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(authContext);

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      toast.warning("Fill all inputs!");
    } else {
      const user = {
        email,
        password,
        confirm_password: confirmPassword,
      };
      handleLogin(user, navigate);
    }
  };

  return (
    <div className="loginForm">
      <div className="loginForm__container">
        <div className="loginForm__block">
          <h3 className="loginForm__title">Login</h3>
          <div className="loginForm__item">
            <input
              className="loginForm__input"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="loginForm__text">Mail</label>
          </div>
          <div className="loginForm__item">
            <input
              className="loginForm__input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="loginForm__text">Password</label>
          </div>
          <div className="loginForm__btns">
            <button className="loginForm__submit" onClick={handleSubmit}>
              Submit
            </button>
            <Link to={"/register"} className="loginForm__link">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
