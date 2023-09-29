import React from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Calendar from "../../components/Calendar/Calendar";
import "./style.css";

function MainPage() {
  return (
    <>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to our hotel! We pride ourselves on providing exceptional
          service and luxurious accommodations for all our guests. With
          breathtaking views, comfortable rooms, and a dedicated staff, we
          guarantee you a memorable stay. Explore our website to learn more
          about our offerings and book your next vacation with us.
        </p>
      </div>
      <CustomCarousel />
      <Calendar />
    </>
  );
}
export default MainPage;
