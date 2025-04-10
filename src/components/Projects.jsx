import React from 'react';
import { motion } from 'framer-motion';
import portfolioImg from '../assets/Port.png';
import cOco from '../assets/Collab-CODE (2).png';
import Avtarai from '../assets/avtarai.jpg';

const projects = [
  {
    title: "My Portfolio",
    description: "A beautiful React portfolio using Tailwind, React and Express",
    link: "https://adityaportfolio-ten.vercel.app/",
    image: portfolioImg
  },
  {
    title: "Collab-Code",
    description: "A real time collaborative coding platform",
    link: "https://collab-code-lemon.vercel.app/",
    image: cOco
  },
  {
    title: "AvtarAI",
    description: "A virtual changing room with image upload feature",
    link: "https://github.com/Kumaraditya18/AvtarAI",
    image: Avtarai
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: 'spring'
    }
  }),
};

const Projects = () => {
  return (
    <section className="min-h-screen py-20 bg-black">
      <h2 className="text-6xl font-bold edu-heading text-center mb-16 text-[#a771ee]">Projects</h2>

      <div className="flex flex-col items-center gap-16 px-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row bg-gray-700 rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full h-72 md:h-96">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold  text-[#65d77e] mb-3">{proj.title}</h3>
              <p className="text-lg text-gray-300 italic mb-6">{proj.description}</p>
              <a
                href={proj.link}
                className="text-green-500 hover:text-green-700 font-semibold text-lg"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
