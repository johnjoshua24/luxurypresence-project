import React, { useRef } from "react";
import "../styles/Gallery.css";
import { motion, useScroll, useTransform } from "framer-motion";


const Blog = () => {
  const containerAnimationRef = useRef(null);
 const { scrollYProgress } = useScroll({
    target: containerAnimationRef,
    offset: ["start end", "end end"],
  });

  const OpacityAnimation = useTransform(scrollYProgress, [0,1], [0.7,1]);
    const slideAnimationUp = useTransform(scrollYProgress, [0,1], [50,0])

  return (
    <div className="gallery-container flex flex-col justify-center items-center mt-10" id="gallery-section" ref={containerAnimationRef}>
      <div className="gallery-title">
        <motion.h2 style={{opacity: OpacityAnimation, y: slideAnimationUp}}>Photo Gallery</motion.h2>
      </div>

      
    </div>
  );
};

export default Blog;
