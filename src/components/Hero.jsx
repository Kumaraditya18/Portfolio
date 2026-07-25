'use client';
import React from 'react';
import { ArrowRight, Mail, MapPin, ExternalLink } from 'lucide-react';
import { FaReact, FaNodeJs, FaJs, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiPostgresql, SiTypescript, SiLeetcode } from 'react-icons/si';

const techItems = [
  { icon: <FaReact />, name: 'React', hoverColor: 'group-hover:text-cyan-400' },
  { icon: <SiNextdotjs />, name: 'Next.js', hoverColor: 'group-hover:text-text-app' },
  { icon: <FaNodeJs />, name: 'Node.js', hoverColor: 'group-hover:text-green-500' },
  { icon: <SiMongodb />, name: 'MongoDB', hoverColor: 'group-hover:text-emerald-500' },
  { icon: <FaJs />, name: 'JavaScript', hoverColor: 'group-hover:text-yellow-400' },
  { icon: <SiTypescript />, name: 'TypeScript', hoverColor: 'group-hover:text-blue-500' },
  { icon: <SiTailwindcss />, name: 'Tailwind', hoverColor: 'group-hover:text-sky-400' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', hoverColor: 'group-hover:text-blue-400' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 bg-bg-app overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-text-app)_0.012px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Main Core Container */}
      <div className="section-container relative z-10">
        
        {/* Top Ribbon */}
        <div className="w-full flex items-center justify-between border-b border-border-app pb-4 mb-8 text-[10px] tracking-[0.2em] font-mono text-text-muted-app uppercase select-none">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-amber-700 dark:bg-purple-500"></span>
            Full Stack & Product Engineer
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Ready For Work
          </div>
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Mockup Grid */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02] text-text-app uppercase">
              YOUR NEXT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-stone-800 to-amber-900 dark:from-blue-400 dark:via-indigo-500 dark:to-purple-600">WEB APP</span><br />
              BUILT RIGHT
            </h1>

            <p className="text-sm md:text-base text-text-muted-app font-light leading-relaxed max-w-lg">
              I turn your idea into a production-ready web application — fast. Whether you need a SaaS platform, a client-facing dashboard, or an AI-powered tool, I handle design, frontend, backend, and deployment end-to-end.
            </p>

            {/* CTA outline button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 border border-text-app/40 hover:border-text-app dark:border-purple-500/50 dark:hover:border-purple-500 bg-transparent hover:bg-text-app/5 dark:hover:bg-purple-500/5 text-text-app text-xs font-mono tracking-widest uppercase px-6 py-3 rounded-lg transition-all duration-300 group cursor-pointer"
              >
                Start A Project
                <ArrowRight className="w-4 h-4 text-text-muted-app dark:text-purple-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Tech Stack Tiles Section */}
            <div className="w-full flex flex-col space-y-2.5">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-mono text-text-muted-app uppercase select-none">
                <span className="w-4 h-[1px] bg-amber-700 dark:bg-purple-500"></span>
                Core Tech Stack
              </div>
              <div className="grid grid-cols-4 gap-2 max-w-sm w-full">
                {techItems.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-card-app/60 border border-border-app hover:border-text-app/30 dark:hover:border-purple-500/25 rounded-lg p-1.5 flex flex-col items-center justify-center gap-1 w-full h-[58px] transition-all hover:scale-102 group cursor-default"
                  >
                    <div className={`text-text-muted-app/70 ${tech.hoverColor} transition-colors duration-300`}>
                      {React.cloneElement(tech.icon, { className: 'w-4.5 h-4.5' })}
                    </div>
                    <span className="text-[8px] font-mono text-text-muted-app/70 tracking-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divided Metrics section */}
            <div className="w-full flex flex-col space-y-2.5">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-mono text-text-muted-app uppercase select-none">
                <span className="w-4 h-[1px] bg-amber-700 dark:bg-purple-500"></span>
                Impact & Metrics
              </div>
              <div className="flex items-center gap-8 md:gap-12 py-1">
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-text-app">10+</div>
                  <div className="text-[9px] text-text-muted-app uppercase tracking-wider font-mono mt-0.5">Products Shipped</div>
                </div>
                <div className="w-px h-8 bg-border-app"></div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-text-app">5K+</div>
                  <div className="text-[9px] text-text-muted-app uppercase tracking-wider font-mono mt-0.5">Active Users</div>
                </div>
                <div className="w-px h-8 bg-border-app"></div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-text-app">100%</div>
                  <div className="text-[9px] text-text-muted-app uppercase tracking-wider font-mono mt-0.5">Delivery Rate</div>
                </div>
              </div>
            </div>

            {/* Code Block */}
            <div className="w-full max-w-lg bg-[#070709]/80 border border-border-app rounded-xl p-4 text-left font-mono text-[11px] text-[#86868b] leading-normal select-none hidden min-[480px]:block">
              <span className="text-[#a87850] dark:text-[#a771ee]">const</span> project = &#123;
              <div className="pl-4">type: <span className="text-[#22d3ee]">"Web App / SaaS / Landing Page"</span>,</div>
              <div className="pl-4">stack: <span className="text-[#22d3ee]">"React · Node.js · PostgreSQL · Tailwind"</span>,</div>
              <div className="pl-4">timeline: <span className="text-[#22d3ee]">"2 – 6 Weeks"</span>,</div>
              <div className="pl-4">result: <span className="text-[#22d3ee]">"Production-ready. Scalable. Yours."</span></div>
              &#125;;
            </div>

          </div>

          {/* Right Side: Portrait Image */}
          <div className="lg:col-span-5 hidden min-[650px]:flex flex-col items-start justify-start relative min-h-[580px] -mt-32">
            
            {/* Pulsing backlight glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/8 dark:bg-purple-500/12 rounded-full blur-[110px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-orange-500/8 dark:bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none animate-[pulse_4s_ease-in-out_infinite_reverse]"></div>

            {/* Circular dot-matrix tech grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[radial-gradient(rgba(120,76,37,0.12)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(167,113,238,0.1)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle,black_55%,transparent_100%)] pointer-events-none animate-[spin_180s_linear_infinite]"></div>

            {/* User Portrait Image */}
            <div className="relative w-full max-w-[460px] h-[620px] flex items-end justify-center [mask-image:linear-gradient(to_top,transparent_0%,black_14%)]">
              <img
                src="/my_portrait.png?v=2"
                alt="Kumar Aditya Portrait"
                className="max-h-full max-w-full object-contain object-bottom select-none pointer-events-none relative z-10 filter drop-shadow-[0_10px_20px_rgba(61,43,31,0.12)] dark:drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-bg-app to-transparent z-20"></div>
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