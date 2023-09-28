import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { authContext } from "../../context/authContext";

const Header = () => {
  const isAdmin = localStorage.getItem("email") === "admin";

  const { handleLogout, currentUser, setCurrentUser } = useContext(authContext);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, [currentUser]);
  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <Link className="header__item " to={"/"}>
            Hotel Booking
          </Link>
          <Link className="header__item" to={"/list-page"}>
            Rooms
          </Link>
          {isAdmin && (
            <>
              <Link className="header__item" to={"/add-room"}>
                Add room
              </Link>
              <Link className="header__item" to={"/admin-page"}>
                Admin list
              </Link>
            </>
          )}
        </div>
        <div className="header__right">
          <input className="header__input" type="text" placeholder="enter..." />
          {!currentUser ? (
            <Link className="header__item" to={"/register"}>
              Register
            </Link>
          ) : (
            <button
              className="header__btn_logout"
              onClick={() => currentUser && handleLogout(navigate)}
            >
              Logout
            </button>
          )}
          {currentUser ? (
            <p className="header__current_user">Online:{currentUser}</p>
          ) : (
            <p className="header__current_user">No user</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
