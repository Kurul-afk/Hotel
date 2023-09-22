import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
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
        </div>
        <div className="header__right">
          <input className="header__input" type="text" placeholder="enter..." />
          <Link className="header__item" to={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
