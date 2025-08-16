import React, { useRef, useState } from 'react';
import '../styles/Services.css';

import service1 from '../assets/services1.webp';
import service2 from '../assets/services2.webp';
import service3 from '../assets/services3.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // import hook

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    {
      src: service1,
      title: "Real Estate Done Right",
      description: `Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!`,
    },
    {
      src: service2,
      title: "Commercial & Residential",
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    },
    {
      src: service3,
      title: "Rely on Expertise",
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    },
  ];

  const containerAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerAnimationRef,
    offset: ["start end", "end end"],
  });

  const OpacityAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imagesOpacityAnimation = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const slideAnimationUp = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div
      className="services-container px-4 py-10 flex flex-col items-center mt-10"
      id="services-section"
      ref={containerAnimationRef}
    >
      <div className="services-title mb-8">
        <motion.h2 style={{ opacity: OpacityAnimation, y: slideAnimationUp }}>
          Our Services
        </motion.h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center max-w-6xl w-full gap-4">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          const [ref, inView] = useInView({
            triggerOnce: true,
            rootMargin: '100px',
          });

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              ref={ref}
              className={`image-container relative h-[500px] rounded overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                isActive ? 'w-full' : 'w-full sm:w-[400px]'
              }`}
              style={{ opacity: imagesOpacityAnimation, y: slideAnimationUp }}
            >
              {inView ? (
                <img
                  src={service.src}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 animate-pulse" />
              )}

              <div
                className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-white text-center transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h4 className="image-title mb-2">{service.title}</h4>
                <p className="image-description">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
