'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Associate Software Developer",
    company: "Amber",
    companyUrl: "https://amberstudent.com",
    period: "Apr 2026 - Present",
    location: "Pune, India (On-site)",
    description: [
      "Engineering core full-stack platform features for a global student accommodation marketplace serving millions of active users.",
      "Optimizing database query execution plans, memory allocations, and backend services, yielding a 25% improvement in API load latency.",
      "Collaborating with product managers and designers to develop modular, responsive micro-frontend blocks using React and Tailwind."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS", "Git"]
  },
  {
    title: "Software Development Intern",
    company: "Amber",
    companyUrl: "https://amberstudent.com",
    period: "Dec 2025 - Apr 2026",
    location: "Pune, India (On-site)",
    description: [
      "Assisted in full-stack development of booking flow enhancements and optimized server-side response times.",
      "Implemented responsive web features, improving mobile conversions and reducing bounce rates across key pages.",
      "Participated in agile sprints, daily standups, and peer-to-peer code reviews to ensure code quality."
    ],
    skills: ["React", "Node.js", "JavaScript", "HTML5", "CSS3", "Git"]
  },
  {
    title: "Web Development Intern",
    company: "GeiqueTech",
    companyUrl: "#",
    period: "May 2025 - Jul 2025",
    location: "Remote",
    description: [
      "Identified and debugged rendering performance bottlenecks across client-facing web portals and production websites.",
      "Refactored styling utilities and optimized script loading pipelines, reducing bundle sizes and boosting layout response speeds.",
      "Collaborated with developers in peer-programming environments to build responsive user profiles and admin controls."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Git"]
  },
  {
    title: "Web Development Intern",
    company: "UptoSkills",
    companyUrl: "#",
    period: "Feb 2025 - Mar 2025",
    location: "Remote",
    description: [
      "Designed and coded a real-time equity value and stock market tracker dashboard using React and Node.js.",
      "Integrated third-party market REST APIs and generated real-time charts showing price volatility.",
      "Programmed secure session authentication and portfolio tracking using persistent MongoDB stores."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "ChartJS", "REST APIs"]
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#000000] text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-[#a771ee] font-mono uppercase mb-3">
            Career Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Professional Experience
          </h3>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            A timeline of my software engineering career, showcasing growth, technology stacks, and impact.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 flex flex-col gap-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-4 h-4 rounded-full bg-[#030303] border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>

              {/* Experience Card */}
              <div className="glassmorphism rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                
                {/* Card Title Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {exp.title}
                    </h4>
                    <div className="text-sm text-gray-300 font-medium flex items-center gap-1.5 mt-0.5">
                      {exp.companyUrl !== '#' ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#a771ee] hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="text-[#a771ee]">{exp.company}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Period and Location Badges */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-[#a771ee]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="list-none space-y-2.5 text-sm text-gray-400 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 items-start">
                      <span className="text-purple-400 select-none mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold font-mono tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-300 hover:border-purple-500/20 hover:text-purple-300 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
