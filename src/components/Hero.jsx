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
  { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React' },
  { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap className="text-purple-600" />, name: 'Bootstrap' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiExpress className="text-gray-400" />, name: 'Express.js' },
  { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
  { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
  { icon: <FaGithub className="text-white" />, name: 'GitHub' },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section id="home" className="pt-24 w-full flex flex-col items-center justify-center bg-black px-40 py-10 text-white">

      {/* Dashed Animated Border */}
      <div className="relative w-[240px] h-[240px] flex items-center justify-center mb-6">
        <div className="absolute w-full h-full rounded-full border-2 border-dashed border-violet-400" />
        <motion.img
          src={myImage}
          alt="Kumar Aditya"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[220px] h-[220px] rounded-full object-cover relative z-10"
        />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-3xl md:text-6xl text-purple-300 font-bold mb-4 text-center edu-heading"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hi, I  am Kumar Aditya
      </motion.h1>
      <motion.p
        className="text-xl text-white text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        I design and build fast, responsive, and scalable web applications using the MERN stack. Passionate about clean code, intuitive UI, and seamless user experiences.
      </motion.p>

      {/* Tech Stack Title */}
      <motion.h2
        className="mt-14 text-2xl font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        Tech Stack
      </motion.h2>

      {/* Skills */}
      <motion.div
        className="flex justify-center flex-wrap gap-6 mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group text-4xl cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            variants={itemVariants}
          >
            {skill.icon}
            <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-20 whitespace-nowrap">
              {skill.name}
            </span>
          </motion.div>
        ))}

      </motion.div>

      {/* Experience */}
<motion.div
  className="mt-20 max-w-3xl w-full"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
>
  <h3 className="text-3xl font-semibold text-white text-center mb-10">Experience</h3>
  <div className="relative border-l border-gray-700 pl-6">
    {[
      {
        title: "Web Development Intern",
        company: "UptoSkills",
        period: "Feb 2025 - Mar 2025",
        description:
          "Built a real-time stock value tracking website using React and Node.js. Implemented live stock data APIs, responsive charts, and user-friendly UI.",
      },
      {
        title: "Web Development Intern",
        company: "GeiqueTech",
        period: "May 2025 - July 2025",
        description:
          "Worked as a Web Development Intern at GeiqueTech, a client-service company offering website solutions. Contributed by debugging and resolving issues across multiple live websites, optimizing performance, and collaborating with the dev team to enhance user experience and functionality.",
      },
    ].map((exp, idx) => (
      <div className="mb-10 relative" key={idx}>
        {/* Timeline Dot */}
        <div className="absolute w-4 h-4 bg-[#c999ee] rounded-full -left-[30px] top-1"></div>

        <h4 className="text-xl font-bold text-[#c999ee]">{exp.title}</h4>
        <p className="text-sm text-gray-400 mb-1">
          {exp.company} · {exp.period}
        </p>
        <p className="text-gray-300">{exp.description}</p>
      </div>
    ))}
  </div>
</motion.div>

    </section>
  );
};

export default Hero;
