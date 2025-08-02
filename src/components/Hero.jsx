'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import myImage from "../assets/Dp.jpg";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaBootstrap, FaGitAlt, FaGithub as GitHubIcon
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  { icon: <GitHubIcon className="text-white" />, name: "GitHub" },
];

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in for profile image only
      gsap.fromTo(
        ".profile-image",
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="pt-28 w-full flex flex-col items-center justify-center bg-black px-6 md:px-40 pb-10 text-white"
    >
      {/* Profile Image */}
      <div className="fade-section relative w-[240px] h-[240px] flex items-center justify-center mb-6 profile-image">
        <div className="absolute w-full h-full rounded-full border-2 border-dashed border-violet-400 animate-spin-slow"></div>
        <img
          src={myImage}
          alt="Kumar Aditya"
          className="w-[220px] h-[220px] rounded-full object-cover relative z-10"
        />
      </div>

      {/* Title (Visible Immediately) */}
      <h1 className="text-3xl md:text-6xl text-purple-300 font-bold mb-4 text-center">
        KUMAR ADITYA
      </h1>

      {/* Description (Visible Immediately) */}
      <div className="text-xl text-white text-center max-w-xl space-y-2">
        <p>A Full Stack Developer specialized in building scalable web applications,</p>
        <p>clean UI/UX, and AI-driven solutions using the MERN stack.</p>
      </div>

      {/* Links */}
      <div className="fade-section flex gap-6 mt-6">
        <a
          href="https://leetcode.com/u/kumar_aditya18/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition text-lg"
        >
          <SiLeetcode className="text-2xl" /> LeetCode
        </a>
        <a
          href="https://github.com/Kumaraditya18"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition text-lg"
        >
          <FaGithub className="text-2xl" /> GitHub
        </a>
      </div>

      {/* Tech Stack */}
      <h2 className="fade-section mt-14 text-2xl font-semibold text-center">
        Tech Stack
      </h2>
      <div className="fade-section flex justify-center flex-wrap gap-6 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group text-4xl cursor-pointer transform transition-transform duration-300 hover:scale-125"
          >
            {skill.icon}
            <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-20 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
