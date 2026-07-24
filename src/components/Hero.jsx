'use client';
import React from 'react';
import { ArrowRight, Mail, MapPin, ExternalLink } from 'lucide-react';
import { FaReact, FaNodeJs, FaJs, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiPostgresql, SiTypescript, SiLeetcode } from 'react-icons/si';

const techItems = [
  { icon: <FaReact className="text-cyan-400 text-xl md:text-2xl" />, name: 'React' },
  { icon: <SiNextdotjs className="text-text-app text-xl md:text-2xl" />, name: 'Next.js' },
  { icon: <FaNodeJs className="text-green-500 text-xl md:text-2xl" />, name: 'Node.js' },
  { icon: <SiMongodb className="text-emerald-500 text-xl md:text-2xl" />, name: 'MongoDB' },
  { icon: <FaJs className="text-yellow-400 text-xl md:text-2xl" />, name: 'JavaScript' },
  { icon: <SiTypescript className="text-blue-500 text-xl md:text-2xl" />, name: 'TypeScript' },
  { icon: <SiTailwindcss className="text-sky-400 text-xl md:text-2xl" />, name: 'Tailwind' },
  { icon: <SiPostgresql className="text-blue-400 text-xl md:text-2xl" />, name: 'PostgreSQL' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-10 flex flex-col justify-between bg-bg-app overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-text-app)_0.012px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Main Core Container */}
      <div className="section-container flex-grow flex flex-col justify-center relative z-10">
        
        {/* Top Mockup Ribbon */}
        <div className="w-full flex items-center justify-between border-b border-border-app pb-4 mb-8 text-[10px] tracking-[0.2em] font-mono text-text-muted-app uppercase select-none">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-purple-500"></span>
            Freelance SDE
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Available For Projects
          </div>
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Mockup Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-center md:text-left items-center md:items-start">
            
            {/* All-caps bold headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02] text-text-app uppercase">
              I BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">DIGITAL</span> <br />
              EXPERIENCES
            </h1>

            <p className="text-sm md:text-base text-text-muted-app font-light leading-relaxed max-w-lg">
              Freelance Software Engineer partnering with companies to design high-performance web applications, optimize APIs, and integrate intelligent AI tools.
            </p>

            {/* CTA outline button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 border border-purple-500/50 hover:border-purple-500 bg-transparent hover:bg-purple-500/5 text-text-app text-xs font-mono tracking-widest uppercase px-6 py-3 rounded-lg transition-all duration-300 group cursor-pointer"
              >
                Start A Project
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Tech Stack Tiles Section */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-mono text-text-muted-app uppercase select-none">
                <span className="w-4 h-[1px] bg-purple-500"></span>
                Tech Stack
              </div>
              <div className="grid grid-cols-4 gap-2.5 max-w-md w-full">
                {techItems.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-card-app border border-border-app hover:border-purple-500/30 rounded-xl p-2.5 flex flex-col items-center justify-center gap-1.5 w-full h-[76px] transition-all hover:scale-102"
                  >
                    {tech.icon}
                    <span className="text-[9px] font-mono text-text-muted-app">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divided Metrics section */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-mono text-text-muted-app uppercase select-none">
                <span className="w-4 h-[1px] bg-purple-500"></span>
                Impact & Metrics
              </div>
              <div className="flex items-center gap-8 md:gap-12 py-2">
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-text-app">10+</div>
                  <div className="text-[9px] text-text-muted-app uppercase tracking-wider font-mono mt-0.5">Projects</div>
                </div>
                <div className="w-px h-8 bg-border-app"></div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-text-app">500+</div>
                  <div className="text-[9px] text-text-muted-app uppercase tracking-wider font-mono mt-0.5">Leetcode</div>
                </div>
                <div className="w-px h-8 bg-border-app"></div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-text-app">100%</div>
                  <div className="text-[9px] text-text-muted-app uppercase tracking-wider font-mono mt-0.5">Commitment</div>
                </div>
              </div>
            </div>

            {/* Developer Code Snippet */}
            <div className="w-full max-w-lg bg-[#070709]/80 border border-border-app rounded-xl p-4 text-left font-mono text-[11px] text-[#86868b] leading-normal select-none hidden min-[480px]:block">
              <span className="text-[#a771ee]">const</span> developer = &#123;
              <div className="pl-4">
                name: <span className="text-[#22d3ee]">"Kumar Aditya"</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-[#22d3ee]">"Freelance Engineer"</span>,
              </div>
              <div className="pl-4">
                services: <span className="text-[#22d3ee]">["Full Stack", "AI Integrations", "APIs"]</span>,
              </div>
              <div className="pl-4">
                availability: <span className="text-[#22d3ee]">"Accepting client contracts"</span>
              </div>
              &#125;;
            </div>

          </div>

          {/* Right Side: Portrait Image & Status floating card */}
          <div className="lg:col-span-5 hidden min-[650px]:flex flex-col items-center justify-end relative min-h-[500px]">
            
            {/* Rotating orbits */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-purple-500/20 animate-[spin_80s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-cyan-500/15 animate-[spin_50s_linear_infinite_reverse] pointer-events-none"></div>

            {/* User Portrait Image */}
            <div className="relative w-full max-w-[360px] h-[520px] flex items-end justify-center">
              <img
                src="/my_portrait.png?v=2"
                alt="Kumar Aditya Portrait"
                className="max-h-full max-w-full object-contain object-bottom select-none pointer-events-none relative z-10"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-app to-transparent z-20"></div>
            </div>

          </div>

        </div>

        {/* Footer Bar Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border-app pt-6 mt-16 text-xs text-text-muted-app font-mono select-none">
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-text-muted-app/60 mb-1">Email Address</span>
            <a href="mailto:kumaraditya1814@gmail.com" className="text-text-app hover:underline">kumaraditya1814@gmail.com</a>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-text-muted-app/60 mb-1">Location</span>
            <span className="text-text-app">Pune, India</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-text-muted-app/60 mb-1">Let's Connect</span>
            <div className="flex items-center gap-3 mt-0.5">
              <a href="https://www.linkedin.com/in/kumar-aditya-098202257/" target="_blank" rel="noopener noreferrer" className="hover:text-text-app transition-colors">LinkedIn</a>
              <span>/</span>
              <a href="https://github.com/Kumaraditya18" target="_blank" rel="noopener noreferrer" className="hover:text-text-app transition-colors">GitHub</a>
              <span>/</span>
              <a href="https://leetcode.com/u/kumar_aditya18/" target="_blank" rel="noopener noreferrer" className="hover:text-text-app transition-colors">Leetcode</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;