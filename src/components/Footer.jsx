import React, { useCallback } from "react";
import "../styles/Footer.css";

import fbicon from "../assets/icons8-facebook.svg";
import igicon from "../assets/icons8-instagram.svg";
import linkedinicon from "../assets/icons8-linkedin.svg";
import yelpicon from "../assets/icons8-yelp.svg";
import godaddy from "../assets/godaddyairo.svg";
import footerlogo from "../assets/logo.webp";

const Footer = () => {
 const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

    const handleLogoClick = useCallback(() => {
      reloadPage();
      window.location.href = "/";
    }, [reloadPage]);

  return (
    <footer className="footer-container flex flex-col items-center justify-center mt-20">
      <div className="footer-sections w-full px-4 flex flex-col items-center">
        {/* Upper Section */}
        <div className="footer-upper-section w-full flex justify-between items-center gap-4">
          <div className="footerlogo-container">
            <img src={footerlogo} alt="Footer Logo" className="footer-logo" onClick={handleLogoClick}/>
          </div>

          <div className="social-icons-container flex gap-4">
            <a
              href="https://www.facebook.com/MarciHomes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbicon} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/marciandlauren_nvrealtors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={igicon} alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/marci-metzger-30642496/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinicon} alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yelpicon} alt="Yelp" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider w-full" />

        {/* Lower Section */}
        <div className="footer-lower-section w-full flex justify-between items-center text-center">
          <div className="copyright-container">
            <p>© 2023 Marci Metzger Homes — All Rights Reserved.</p>
          </div>

          <div className="poweredby-container">
            <a
              href="https://www.godaddy.com/websites/website-builder?isc=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=en-us_corp_applications_base"
              target="_blank"
              rel="noopener noreferrer"
              className="poweredby-link"
            >
              <span>Powerd by</span>
              <img
                src={godaddy}
                alt="Powered by GoDaddy"
                className="poweredby-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
