import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Tomato is your trusted food delivery platform that brings your
            favorite meals right to your doorstep. Explore a wide variety of
            restaurants, cuisines, and dishes prepared with fresh ingredients.
            Order quickly, enjoy fast delivery, and satisfy your cravings
            anytime.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <li>+1-212-456-7890</li>
          <li>contact@tomato.com</li>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 24 ⓒ tomato.com - All right reserved
      </p>
    </div>
  );
};

export default Footer;
