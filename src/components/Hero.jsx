'use client';
import React from "react";
import Hero3D from "./Hero3D";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-[#000000] overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-5xl w-full px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Copy and Details */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Active Job Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-normal tracking-wide mb-6 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Associate SDE @ Amber
          </div>

          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#a771ee] font-mono uppercase mb-4">
            Engineering Studio
          </h2>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Kumar Aditya. <br />
            <span className="text-zinc-500">Scalable Web & AI.</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
            I design high-performance MERN applications, optimize backend database architectures, and integrate intelligent AI tools. Currently engineering booking solutions at <span className="text-[#f5f5f7] font-normal">Amber</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black hover:bg-zinc-200 text-xs font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-250"
            >
              Let's connect
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-8 md:gap-10 border-t border-white/[0.06] pt-6 w-full">
            <div>
              <div className="text-lg md:text-xl font-bold font-mono text-[#f5f5f7]">500+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">LeetCode</div>
            </div>
            <div className="w-px h-8 bg-white/[0.06]"></div>
            <div>
              <div className="text-lg md:text-xl font-bold font-mono text-[#f5f5f7]">1.5+ Yrs</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Experience</div>
            </div>
            <div className="w-px h-8 bg-white/[0.06]"></div>
            <div>
              <div className="text-lg md:text-xl font-bold font-mono text-[#f5f5f7]">10+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Projects</div>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive 3D Orbit */}
        <div className="w-full md:w-[45%] flex justify-center items-center relative min-h-[300px] md:min-h-[400px]">
          <Hero3D />
        </div>

      </div>

      {/* Tech Stack Horizontal Slider */}
      <div className="w-full mt-16 md:mt-24 border-t border-white/[0.04] bg-[#020202] py-4 relative">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4 justify-between">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-zinc-500 uppercase font-mono">
            Core Tech
          </span>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-3 md:mt-0">
            {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JavaScript', 'Git'].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium tracking-tight text-zinc-500 hover:text-zinc-200 transition-colors duration-250 cursor-default font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;