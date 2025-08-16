import React, { useRef } from "react";
import "../styles/About.css";
import subjectimg from "../assets/subject-person.webp";
// import aboutbackground from '../assets/aboutbackground.webp'
import { motion, useScroll, useTransform } from "framer-motion";

const Realtor = () => {
const containerAnimationRef = useRef(null);
 const { scrollYProgress } = useScroll({
    target: containerAnimationRef,
    offset: ["start end", "end end"],
  });

  const OpacityAnimation = useTransform(scrollYProgress, [0,1], [0,1]);
    const OpacityAnimation2 = useTransform(scrollYProgress, [0,1], [0.7,1]);
  const slideAnimationUp = useTransform(scrollYProgress, [0,1], [50,0])
  const slideAnimationLeft = useTransform(scrollYProgress, [0,1], [-50,0])


  return (
    <div className="about-container flex flex-col justify-center items-center gap-10 mt-10" id="about-section" ref={containerAnimationRef}>
      <div className="about-title">
        <motion.h2 style={{opacity: OpacityAnimation, y: slideAnimationUp}}>About Us</motion.h2>
      </div>
      <div className="about-sections flex justify-center items-center">
        <motion.div className="about-left-section" style={{opacity: OpacityAnimation, x: slideAnimationLeft}}>
          
        </motion.div>
        <motion.div className="about-right-section flex flex-col justify-start items-center gap-4" style={{opacity: OpacityAnimation2, y: slideAnimationUp}}>
          <img src={subjectimg} alt="about-person-img" loading="lazy"/>
          <h3>Marci J Metzger</h3>
          <h4>REALTOR FOR NEARLY 3 DECADES!</h4>
          <p>
            Marci was a REALTOR, then licensed Broker, in Washington State. Now,
            she is enjoying the sunshine, and helping clients in Southern
            Nevada. Having helped buyers and sellers in many markets since 1995,
            she is a wealth of knowledge.
          </p>
          <a href="tel:2069196886">
              <button>CALL NOW</button>
          </a>
        
        </motion.div>
      </div>
    </div>
  );
};

export default Realtor;
