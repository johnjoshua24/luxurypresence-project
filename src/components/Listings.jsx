import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/Listings.css";

import img1 from "../assets/scroll-img1.webp";
import img2 from "../assets/scroll-img2.webp";
import img3 from "../assets/scroll-img3.webp";
import img4 from "../assets/scroll-img4.webp";

const scrollImages = [img1, img2, img3, img4];

const Listings = () => {
  const containerAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerAnimationRef,
    offset: ["start end", "end end"],
  });

  const OpacityAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleAnimation = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div
      className="listings-container mt-10"
      id="listings-section"
      ref={containerAnimationRef}
    >
      {/* Background Scroll */}
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...scrollImages, ...scrollImages, ...scrollImages].map(
            (src, idx) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                rootMargin: "200px",
              });

              return (
                <img
                  key={idx}
                  ref={ref}
                  src={inView ? src : undefined}
                  alt={`scroll-img-${idx}`}
                  className="scroll-img"
                  loading="lazy"
                />
              );
            }
          )}
        </div>
      </div>

      {/* Foreground Content */}
      <motion.div
        className="listings-content mt-10 z-10"
        style={{ opacity: OpacityAnimation, scale: scaleAnimation }}
      >
        <div className="search-fields">
          <div className="listings-title">
            <h2>Let's Find Your Dream Home</h2>
          </div>
          <div className="search-fields-upper">
            <div className="field-group">
              <label htmlFor="location">Location</label>
              <select name="location" id="location">
                <option value="">Select Location</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="type">Type</label>
              <select name="type" id="type">
                <option value="">Select Type</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="sort-by">Sort By</label>
              <select name="sort-by" id="sort-by">
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Least Expensive to Most</option>
                <option value="">Most Expensive to Least</option>
                <option value="">Bedrooms (Low to High)</option>
                <option value="">Bedrooms (High to Low)</option>
                <option value="">Bathrooms (Low to High)</option>
                <option value="">Bathrooms (High to Low)</option>
              </select>
            </div>
          </div>

          <div className="search-fields-lower">
            <div className="field-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <select name="bedrooms" id="bedrooms">
                <option value="">Any Number</option>
                <option value="">Studio</option>
                <option value="">1+</option>
                <option value="">2+</option>
                <option value="">3+</option>
                <option value="">4+</option>
                <option value="">5+</option>
                <option value="">6+</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <select name="bathrooms" id="bathrooms">
                <option value="">Any Number</option>
                <option value="">1+</option>
                <option value="">2+</option>
                <option value="">3+</option>
                <option value="">4+</option>
                <option value="">5+</option>
                <option value="">6+</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="minprice">Min Price</label>
              <input type="number" id="minprice" name="minprice" />
            </div>

            <div className="field-group">
              <label htmlFor="maxprice">Max Price</label>
              <input type="number" id="maxprice" name="maxprice" />
            </div>

            <button>Search Now</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Listings;
