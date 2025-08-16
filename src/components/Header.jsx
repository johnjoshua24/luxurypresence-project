import React, { useState, useCallback, useRef, useEffect } from "react";
import "../styles/Header.css";
import headerlogo from "../assets/logo.webp";
import { Link } from "react-scroll";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const shouldBeScrolled = window.scrollY > 50;
        if (shouldBeScrolled !== scrolled) {
          setScrolled(shouldBeScrolled);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [scrolled]);

  useEffect(() => {
    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  const handleLogoClick = useCallback(() => {
    reloadPage();
    window.location.href = "/";
  }, [reloadPage]);
  return (
    <div
      className={`header-container headerFade-in flex items-center justify-between p-4 fixed top-0 w-full z-50 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo-container">
        <img src={headerlogo} alt="header-logo" onClick={handleLogoClick} />
      </div>

      <button
        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="nav-menu-container">
        <ul
          className={`nav-menu flex justify-center items-center gap-10 ${
            menuOpen ? "active" : ""
          }`}
        >
          <li>
            <Link
              to="hero-section"
              smooth={true}
              duration={300}
              offset={-70}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              duration={300}
              offset={-70}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="getitsold-section"
              smooth={true}
              duration={300}
              offset={-70}
              onClick={closeMenu}
            >
              Get It Sold
            </Link>
          </li>
          <li>
            <Link
              to="listings-section"
              smooth={true}
              duration={300}
              offset={-70}
              onClick={closeMenu}
            >
              Listings
            </Link>
          </li>

          <li>
            <Link
              to="gallery-section"
              smooth={true}
              duration={300}
              offset={-70}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="services-section"
              smooth={true}
              duration={300}
              offset={-70}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              smooth={true}
              duration={300}
              offset={-70}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
