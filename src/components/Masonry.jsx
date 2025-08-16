import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";  // import hook
import "../styles/Masonry.css";

import image1 from "../assets/blogimage1.webp";
import image2 from "../assets/blogimage2.webp";
import image3 from "../assets/blogimage3.webp";
import image4 from "../assets/blogimage4.webp";
import image5 from "../assets/blogimage5.webp";
import image6 from "../assets/blogimage6.webp";
import image7 from "../assets/blogimage7.webp";
import image8 from "../assets/blogimage8.webp";
import image9 from "../assets/blogimage9.webp";
import image10 from "../assets/blogimage10.webp";
import image11 from "../assets/blogimage11.webp";

const galleryImages = [
  image1, image8, image2, image9, image3, image10,
  image4, image5, image11, image6, image7
];

const Masonry = () => {
  const containerAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerAnimationRef,
    offset: ["start end", "end end"],
  });

  const OpacityAnimation = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const slideAnimationUp = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      className="photos-container mt-10"
      ref={containerAnimationRef}
      style={{ opacity: OpacityAnimation, y: slideAnimationUp }}
    >
      {galleryImages.map((imgSrc, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          rootMargin: "100px",  // start loading images 100px before they appear
        });
        return (
          <img
            key={index}
            ref={ref}
            src={inView ? imgSrc : undefined}    // only load image if in view
            alt={`gallery-${index + 1}`}
            className={`gallery-img height-${(index % 3) + 1}`}
            loading="lazy"  // still good to add for fallback and browser optimization
          />
        );
      })}
    </motion.div>
  );
};

export default Masonry;
