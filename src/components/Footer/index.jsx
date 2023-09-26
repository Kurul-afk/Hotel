import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Contact Information</h3>
            <p>1234 Elm Street, Bishkek, Kyrgyzstan</p>
            <p>Phone: +7 (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img
                  src="https://i.pinimg.com/474x/4a/94/77/4a9477bede69bbce3300e20588b28ebf.jpg"
                  alt="Facebook"
                />
              </a>
              <a href="#" className="social-icon">
                <img
                  src="https://i.pinimg.com/474x/64/1c/ec/641cecefc3e502d1f3b89ac352b5694b.jpg"
                  alt="Twitter"
                />
              </a>
              <a href="#" className="social-icon">
                <img
                  src="https://i.pinimg.com/474x/17/fc/93/17fc93ea85e6db68192109f581154be8.jpg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
