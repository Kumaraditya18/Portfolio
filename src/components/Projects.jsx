'use client';
import React from 'react';
import portfolioImg from '../assets/Port.png';
import cOco from '../assets/Collab-CODE (2).png';
import Avtarai from '../assets/avtarai.jpg';
import intervbitImg from '../assets/intervbit.png';

const projects = [
  {
    id: 'intervbit',
    title: "IntervBit",
    description:
      "A full-stack AI-powered mock interview platform simulating real-time verbal interviews. Users get instant feedback using OpenAI, Deepgram for STT, and ElevenLabs for TTS.",
    link: "https://interv-bit.vercel.app/",
    image: intervbitImg,
  },
  {
    id: 'portfolio',
    title: "My Portfolio",
    description:
      "Responsive developer portfolio with smooth UI transitions, minimal design and dynamic routing. Showcases work and skills with modern design standards.",
    link: "https://adityaportfolio-ten.vercel.app/",
    image: portfolioImg,
  },
  {
    id: 'collabcode',
    title: "Collab-Code",
    description:
      "Real-time code collaboration tool supporting multiple users with socket-based code sync, chat, and custom room joining. Built with CodeMirror and Socket.IO.",
    link: "https://collab-code-lemon.vercel.app/",
    image: cOco,
  },
  {
    id: 'avtarai',
    title: "AvtarAI",
    description:
      "Virtual try-on web app allowing users to upload photos and test outfits using OpenCV pipelines. Future-ready for e-commerce AR integration.",
    link: "https://github.com/Kumaraditya18/AvtarAI",
    image: Avtarai,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#060000] text-white py-20 px-4 md:px-12">
      <h2 className="text-5xl font-bold text-center text-[#a771ee] mb-15">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <div key={proj.id} className="relative group">
            {/* Hover Glow Background */}
            <div className="absolute inset-0 rounded-xl bg-[#a771ee] opacity-0 blur-xl group-hover:opacity-30 transition duration-300 z-0" />

            {/* Card */}
            <div className="relative z-10 bg-[#121212] border border-gray-800 rounded-xl shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
