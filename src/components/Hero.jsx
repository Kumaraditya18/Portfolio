import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/Dp.jpg';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaBootstrap, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { Link } from 'react-router-dom';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaGithub />, name: 'GitHub' },
];

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 px-6 py-10 text-white">
      {/* Profile */}
      <motion.img
        src={myImage}
        alt="Kumar Aditya"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[250px] h-[250px] rounded-full object-cover border-4 border-gray-700 shadow-lg mb-6"
      />

      {/* Intro */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hi, I'm Kumar Aditya
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        I design and build fast, responsive, and scalable web applications using the MERN stack. Passionate about clean code, intuitive UI, and seamless user experiences.
      </motion.p>

      {/* Skills */}
      <div className="flex justify-center flex-wrap gap-6 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-4xl text-blue-400 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            title={skill.name}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>

      {/* Experience */}
      <div className="mt-16 max-w-3xl w-full">
        <h3 className="text-3xl font-semibold text-white text-center mb-10">Experience</h3>
        <div className="relative border-l border-gray-700 pl-6">
          {/* Experience Entry */}
          <div className="mb-10">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
            <h4 className="text-xl font-bold text-blue-400">Web Development Intern</h4>
            <p className="text-sm text-gray-400 mb-1">UptoSkills · Jan 2024 - Mar 2024</p>
            <p className="text-gray-300">
              Built a real-time stock value tracking website using React and Node.js. Implemented live stock data APIs, responsive charts, and user-friendly UI.
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="mt-16 flex gap-6">
        <Link
          to="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition"
        >
          Check My Projects
        </Link>
        <Link
          to="/contact"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded shadow transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
