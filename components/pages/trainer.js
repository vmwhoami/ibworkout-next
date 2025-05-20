"use client";

import { useInView } from "react-hook-inview";
import { motion } from "motion/react";

const AboutTrainer = () => {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px" });
  const visible = { y: 0, opacity: 1 };
  const hidden = { y: 100, opacity: 0 };
  const transition = { delay: 0.5, default: { duration: 0.8 } };

  return (
    <section
      ref={ref}
      id="about-us"
      className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT COLUMN */}
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
        <p className="text-lg text-gray-600 uppercase tracking-wider">
          Know more to be more with us
        </p>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Non faucibus ut turpis magn...
          {/* your full ipsum here */}
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full h-100% flex justify-center items-center">
        {/* Red shape */}
        <div className="transform rotate-6 right-0 rounded-xl">
          {/* Gray shape */}
          <div className="bg-gray-100 w-[80%] h-[80%] transform -rotate-6 left-0 rounded-xl">
            <motion.a
              href="https://www.instagram.com/innabogdan/"
              animate={inView ? visible : hidden}
              transition={transition}
              className="relative z-10 block w-64 h-96 overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="/images/Inngirea.jpg"
                alt="Trainer Inna"
                className="object-cover w-full h-full"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainer;
