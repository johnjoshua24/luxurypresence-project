import React from "react";
import "../styles/Hero.css";
import { Link } from "react-scroll";
import mainBackground from "../assets/mainbackground.webp"; // adjust path if needed

const Hero = () => {
  return (
    <div className="hero" id="hero-section" role="banner">
      <img
        src={mainBackground}
        alt="Beautiful property background"
        className="hero-image"
        loading="eager"
      />
      <div className="hero-content">
        <h1>Pahrump Realtor</h1>
        <p>MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <Link to="listings-section" smooth={true} duration={300} offset={-70}>
          <button className="hero-btn">Browse Listings</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
