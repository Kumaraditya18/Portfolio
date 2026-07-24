'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Intro = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const timer = setTimeout(() => {
            onFinish();
          }, 450); // slight pause at 100% for visual feedback
          return 100;
        }
        const diff = Math.random() * 20 + 5; // increment progress naturally
        return Math.min(prev + diff, 100);
      });
    }, 70);

    return () => {
      clearInterval(interval);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#000000] text-white z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-md w-full px-6 flex flex-col items-center">
        {/* Animated Developer Logo/Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 font-mono text-purple-400 border border-purple-500/20 px-3 py-1 rounded text-xs tracking-wider uppercase bg-purple-500/5 shadow-sm"
        >
          Developer Studio
        </motion.div>

        {/* Name with text reveal */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center text-white">
          KUMAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400">ADITYA</span>
        </h1>
        
        {/* Role Subheading */}
        <p className="text-sm font-mono text-gray-400 mb-12 tracking-wide text-center">
          Associate Software Developer @ Amber
        </p>

        {/* Loading Bar Container */}
        <div className="w-48 md:w-60 h-[2px] bg-white/5 rounded-full overflow-hidden relative mb-3">
          <motion.div 
            className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Progress text */}
        <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
          Initializing... {Math.round(progress)}%
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;

