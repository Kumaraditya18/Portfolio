'use client';
import React from "react";
import Hero3D from "./Hero3D";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { 
  ArrowRight
} from "lucide-react";
import {
  FaJs, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaReact className="text-cyan-400 group-hover:scale-110 transition-transform" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500 group-hover:scale-110 transition-transform" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400 group-hover:scale-110 transition-transform" />, name: "Express" },
  { icon: <SiMongodb className="text-emerald-500 group-hover:scale-110 transition-transform" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-sky-400 group-hover:scale-110 transition-transform" />, name: "Tailwind CSS" },
  { icon: <FaJs className="text-yellow-400 group-hover:scale-110 transition-transform" />, name: "JavaScript" },
  { icon: <FaGitAlt className="text-orange-500 group-hover:scale-110 transition-transform" />, name: "Git" }
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-[#030303] overflow-hidden animate-fade-in"
    >
      {/* Background SVG Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Copy and Details */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Active Job Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold font-mono tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Associate Software Dev @ Amber
          </div>

          <h2 className="text-xs font-semibold tracking-widest text-[#a771ee] font-mono uppercase mb-3">
            Kumar Aditya
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] mb-6 text-white">
            Engineering <span className="text-gradient">Scalable Web</span> & AI Architectures
          </h1>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
            I build high-performance full-stack web applications, optimize APIs, and integrate intelligent AI tools. Currently engineering student-housing solutions at <span className="text-white font-semibold">Amber</span>.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8 border-y border-white/5 py-4 w-full max-w-md">
            <div>
              <div className="text-xl md:text-2xl font-bold font-mono text-white">500+</div>
              <div className="text-xs text-gray-500">LeetCode Solved</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold font-mono text-white">1.5+ Yrs</div>
              <div className="text-xs text-gray-500">Industry Exp</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold font-mono text-white">10+</div>
              <div className="text-xs text-gray-500">Projects Built</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-white/10 hover:border-white/20 hover:bg-white/5 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://leetcode.com/u/kumar_aditya18/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#d19a2e] transition duration-200"
            >
              <SiLeetcode className="text-lg" />
              <span className="font-mono text-xs">Leetcode</span>
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
            <a
              href="https://github.com/Kumaraditya18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition duration-200"
            >
              <FaGithub className="text-lg" />
              <span className="font-mono text-xs">GitHub</span>
            </a>
          </div>

        </div>

        {/* Right Side: Interactive 3D Orbit */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[300px] md:min-h-[400px]">
          <Hero3D />
        </div>

      </div>

      {/* Tech Stack Horizontal Slider */}
      <div className="w-full mt-16 md:mt-24 border-t border-white/5 bg-[#070709]/40 backdrop-blur-sm py-4.5 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4 justify-between">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase font-mono">
            Core Technologies
          </span>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-3 md:mt-0">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 cursor-default"
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="text-xs font-medium tracking-tight font-mono">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;