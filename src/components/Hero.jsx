'use client';
import React from "react";
import Hero3D from "./Hero3D";
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
  return (
    <section
      id="home"
      className="pt-28 w-full flex flex-col items-center justify-center bg-black px-6 md:px-20 pb-16 text-white"
    >
      {/* ===== Top Row: Model and Description ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        
        {/* Left - 3D Model */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Hero3D />
        </div>

        {/* Right - Text & Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl text-gray-300 mb-2"> Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl text-purple-300 font-bold mb-4">
            Kumar Aditya
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed max-w-lg mx-auto md:mx-0">
            I am a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> who loves creating
            scalable, high-performance web applications with clean UI/UX. 
            I specialize in the MERN stack and enjoy solving complex coding challenges on platforms like LeetCode.  
            <br /><br />
            My expertise lies in building dynamic, user-friendly applications, integrating AI-powered solutions, 
            and delivering seamless digital experiences. Always eager to learn, collaborate, and create impactful technology!
          </p>
        </div>
      </div>

      {/* ===== Links Section ===== */}
      <div className="flex flex-wrap gap-6 mt-10 justify-center">
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

      {/* ===== Tech Stack Section ===== */}
      <h2 className="mt-12 text-2xl font-semibold text-center">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
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