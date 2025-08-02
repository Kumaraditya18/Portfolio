'use client';
import React from "react";
import { motion } from "framer-motion";

const Intro = ({ onFinish }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // hide intro after 2.5s
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-purple-400 tracking-wide mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        KUMAR ADITYA
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Full Stack Developer | MERN & AI Enthusiast
      </motion.p>
    </motion.div>
  );
};

export default Intro;
