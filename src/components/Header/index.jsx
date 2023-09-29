import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { authContext } from "../../context/authContext";
import SearchComponent from "../SearchComponent";
import "./style.css";

const Header = () => {
  const isAdmin = localStorage.getItem("email") === "admin";

  const { handleLogout, currentUser, setCurrentUser } = useContext(authContext);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, []);

  const handleSearchChange = (searchText) => {
    console.log("Search text:", searchText);
  };

  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <Link className="header__item" to={"/"}>
            Flat Booking
          </Link>
          <Link className="header__item" to="/list-page">
            {" "}
            {/* Исправлена ошибка с className */}
            Rooms
          </Link>
          {isAdmin && (
            <>
              <Link className="header__item" to="/add-room">
                {" "}
                {/* Исправлена ошибка с className */}
                Add room
              </Link>
              <Link className="header__item" to="/admin-page">
                {" "}
                {/* Исправлена ошибка с className */}
                Admin list
              </Link>
            </>
          )}
        </div>
        <div className="header__right">
          <SearchComponent onSearch={handleSearchChange} />
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
            <p className="header__current_user">Online: {currentUser}</p>
          ) : (
            <p className="header__current_user">No user</p>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
