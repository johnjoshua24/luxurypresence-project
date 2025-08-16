import React, { useRef, useState } from "react";
import "../styles/GetItSold.css";
import image1 from "../assets/getsold1.webp";
import image2 from "../assets/getsold2.webp";
import image3 from "../assets/getsold3.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";  // <-- import

const GetItSold = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const images = [
    {
      src: image1,
      title: "Top Residential Sales Last 5 Years",
      description: `We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.`,
    },
    {
      src: image2,
      title: "Don't Just List it...",
      description:
        "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    },
    {
      src: image3,
      title: "Guide to Buyers",
      description:
        "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    },
  ];

  const containerAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerAnimationRef,
    offset: ["start end", "end end"],
  });

  const OpacityAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imagesOpacityAnimation = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const slideAnimationUp = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div
      className="getitsold-container px-4 py-10 flex flex-col items-center mt-10"
      id="getitsold-section"
      ref={containerAnimationRef}
    >
      <div className="getitsold-title mb-8">
        <motion.h2 style={{ opacity: OpacityAnimation, y: slideAnimationUp }}>
          Get It Sold
        </motion.h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center max-w-6xl w-full gap-4">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          // Use useInView hook to detect visibility
          const [ref, inView] = useInView({
            triggerOnce: true,
            rootMargin: "100px",
          });

          return (
            <motion.div
              key={index}
              ref={ref} // observe this div for intersection
              onMouseEnter={() => setActiveIndex(index)}
              className={`image-container relative h-[500px] rounded overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
                ${isActive ? "w-full" : "w-full sm:w-[400px]"}
              `}
              style={{ opacity: imagesOpacityAnimation, y: slideAnimationUp }}
            >
              <img
                src={inView ? image.src : undefined} // load src only if in view
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-white text-center transition-opacity duration-500
                  ${isActive ? "opacity-100" : "opacity-0"}
                `}
              >
                <h4 className="image-title mb-2">{image.title}</h4>
                <p className="image-description">{image.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GetItSold;
