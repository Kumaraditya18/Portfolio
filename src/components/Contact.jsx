import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-black min-h-screen text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <h2 className="text-4xl font-bold edu-heading text-[#c999ee] mb-4">Let's Connect</h2>
        <p className="text-gray-400 max-w-2xl text-lg mx-auto mb-8">
          Have an idea or want to collaborate? I’m always excited to hear about new projects and opportunities!
        </p>

        {/* Download CV */}
        <div className="mb-12">
          <a
            href="/Aditya_Resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-[#77429f] text-white px-6 py-3 rounded hover:bg-blue-700 transition text-lg font-medium"
          >
            <FaDownload /> Download CV
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 max-w-2xl mx-auto my-12"></div>

        {/* Location and Availability */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-gray-400 text-lg mb-12">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Manipur, India</span>
          </div>
          <div className="flex items-center gap-3">
            <FaClock className="text-blue-400" />
            <span>Available: Mon - Sat, 10AM - 8PM IST</span>
          </div>
        </div>

        {/* Contact Icons */}
        <div className="flex flex-wrap justify-center gap-12 text-4xl mb-16">
          <a href="tel:+919693968375" className="hover:text-blue-500 transition-transform transform hover:scale-110" title="Call">
            <FaPhoneAlt />
          </a>
          <a href="mailto:kumaraditya1814@gmail.com" className="hover:text-blue-500 transition-transform transform hover:scale-110" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/kumar-aditya-098202257/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Kumaraditya18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://instagram.com/train_with_aadi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110" title="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Quote / Motto */}
        <motion.blockquote
          className="italic text-gray-400 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          "Code is like humor. When you have to explain it, it’s bad."
        </motion.blockquote>

        {/* Optional Newsletter or Collaboration Invite */}
        <div className="mt-16">
          <p className="text-gray-400 text-sm">Interested in working together? Let’s create something awesome.</p>
          <a
            href="mailto:kumaraditya1814@email.com"
            className="inline-block mt-4 text-blue-500 underline hover:text-blue-400 transition"
          >
            Send a quick email →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
