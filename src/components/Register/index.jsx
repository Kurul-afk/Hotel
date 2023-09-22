import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { toast } from "react-toastify";
import "./style.css";

const API = "http://localhost:8000";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { handleRegister } = useContext(authContext);

  const handleSubmit = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.warning("Fill all inputs!");
    } else if (password.trim() !== confirmPassword.trim()) {
      toast.warning("correctly confirm your password");
    } else {
      const user = {
        email,
        password,
        confirm_password: confirmPassword,
      };
      handleRegister(user, navigate);
    }
  };

  return (
    <div className="authForm">
      <div className="authForm__container">
        <div className="authForm__block">
          <h3 className="authForm__title">Register</h3>
          <div className="authForm__item">
            <input
              className="authForm__input"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="authForm__text">Mail</label>
          </div>
          <div className="authForm__item">
            <input
              className="authForm__input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="authForm__text">Password</label>
          </div>
          <div className="authForm__item">
            <input
              className="authForm__input"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="authForm__text">Repeat password</label>
          </div>
          <div className="authForm__btns">
            <button className="authForm__submit" onClick={handleSubmit}>
              Submit
            </button>
            <Link to={"/login"} className="authForm__link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
