import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 36.18138,
  lng: -115.947833,
};

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Intersection Observer hook to detect if contact section is visible
  const { ref: inViewRef, inView } = useInView({
    /* Trigger when 100px of section is visible */
    rootMargin: "100px",
    triggerOnce: true,
  });

  // Load map only once when section is in view
  React.useEffect(() => {
    if (inView) {
      setMapLoaded(true);
    }
  }, [inView]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Message sent successfully");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const containerAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerAnimationRef,
    offset: ["start end", "end end"],
  });

  const OpacityAnimation = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const OpacityAnimation2 = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const slideAnimationUp = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const slideAnimationUp2 = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const slideAnimationleft = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      className="contact-container flex flex-col justify-center items-center mt-10"
      id="contact-section"
      ref={(node) => {
        containerAnimationRef.current = node;
        inViewRef(node); // assign ref for intersection observer
      }}
    >
      <div className="contact-title">
        <motion.h2 style={{ opacity: OpacityAnimation, y: slideAnimationUp }}>
          Call or Visit
        </motion.h2>
      </div>
      <form
        className="contact-sections flex justify-center items-start gap-6 mt-10"
        onSubmit={handleSubmit}
      >
        <motion.div
          className="contact-left-section flex flex-col gap-4 justify-center items-start"
          style={{ opacity: OpacityAnimation2, x: slideAnimationleft }}
        >
          <h4>Send Us A Message</h4>

          <div className="form-contact-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-contact-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-contact-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-contact-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Let us know your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-contact-group">
            <button name="btnform-send" id="btnform-send" type="submit">
              SEND
            </button>
            <p>
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </motion.div>

        <div className="contact-right-section flex flex-col justify-center gap-10">
          <div className="upper-right-section flex gap-6">
            <motion.div
              className="upper-right-first-group flex flex-col gap-4"
              style={{ opacity: OpacityAnimation2, y: slideAnimationUp }}
            >
              <h4>Marci Metzger - THE RIDGE REALTY GROUP</h4>
              <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
              <a href="tel:2069196886">(206) 919-6886</a>
              <a
                href="https://wa.me/12069196886"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* WhatsApp SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                  fill="#128C7E"
                >
                  <path d="M16.003 2.002c-7.728 0-14 6.271-14 14 0 2.474.645 4.888 1.871 7.007L2 30l7.168-1.855A13.93 13.93 0 0016.003 30c7.729 0 14-6.272 14-14s-6.271-13.998-14-13.998zm0 2c6.626 0 12 5.373 12 12 0 6.626-5.374 12-12 12a11.936 11.936 0 01-5.777-1.491l-.41-.237-4.199 1.088 1.123-4.091-.267-.42A11.932 11.932 0 014.003 16c0-6.627 5.373-12 12-12zm-2.315 6.498c-.304-.682-.625-.695-.916-.707-.238-.01-.511-.01-.785-.01-.273 0-.716.103-1.09.51s-1.43 1.398-1.43 3.41 1.463 3.957 1.665 4.234c.203.273 2.823 4.322 6.985 5.885 3.457 1.34 4.16 1.076 4.91 1.004.75-.07 2.416-.986 2.758-1.937.34-.95.34-1.766.239-1.937-.102-.17-.364-.272-.766-.478-.398-.205-2.42-1.197-2.796-1.33-.374-.136-.647-.204-.918.204-.272.408-1.05 1.33-1.288 1.604-.238.273-.479.307-.875.102-.398-.204-1.682-.62-3.203-1.977-1.184-1.06-1.984-2.37-2.213-2.777-.227-.408-.024-.626.17-.83.174-.174.398-.455.602-.682.204-.227.272-.375.41-.613.136-.238.068-.477-.034-.682s-.88-2.184-1.207-2.986z" />
                </svg>
                Our WhatsApp
              </a>
            </motion.div>

            <motion.div
              className="upper-right-second-group flex flex-col gap-4"
              style={{ opacity: OpacityAnimation2, y: slideAnimationUp2 }}
            >
              <h4>Office Hours</h4>
              <p
                className="accordion-p"
                onClick={toggleAccordion}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                {isOpen ? "▼" : "▶"} Open today <span>08:00 am – 07:00 pm</span>
              </p>
              {isOpen && (
                <div className="accordion-content" style={{ paddingLeft: "1rem" }}>
                  <p>
                    <strong>Mon</strong> 08:00 am – 07:00 pm
                  </p>
                  <p>
                    <strong>Tue</strong> 08:00 am – 07:00 pm
                  </p>
                  <p>
                    <strong>Wed</strong> 08:00 am – 07:00 pm
                  </p>
                  <p>
                    <strong>Thu</strong> 08:00 am – 07:00 pm
                  </p>
                  <p>
                    <strong>Fri</strong> 08:00 am – 07:00 pm
                  </p>
                  <p>
                    <strong>Sat</strong> 08:00 am – 07:00 pm
                  </p>
                  <p>
                    <strong>Sun</strong> 08:00 am – 07:00 pm
                  </p>
                </div>
              )}
              <p>Open daily 8:00 am - 7:00 pm</p>
            </motion.div>
          </div>

          <motion.div
            className="lower-right-section flex flex-col"
            style={{ opacity: OpacityAnimation2, y: slideAnimationUp }}
          >
            <h4>Walk-In Visits Are Accepted</h4>

            {/* Conditionally render the map */}
            {mapLoaded ? (
              <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "450px",
                  backgroundColor: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                Loading map...
              </div>
            )}
          </motion.div>
        </div>
      </form>
    </div>

  );
};

export default Contact;

