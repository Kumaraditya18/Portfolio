'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
  FaMapMarkerAlt,
  FaClock,
  FaRegAddressBook
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide text and content initially
      gsap.set(textRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(contentRef.current, { opacity: 0, y: 50 });

      /** Timeline with pinning */
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1️⃣ Big Icon appears
      tl.fromTo(
        iconRef.current,
        { scale: 6, opacity: 0.3, y: '30vh' },
        { scale: 1.5, opacity: 1, y: 0, ease: 'power2.out', duration: 1 }
      );

      // 2️⃣ Transition Icon → Text
      tl.to(iconRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: 'power1.inOut',
      });
      tl.to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, "-=0.1");

      // 3️⃣ Reveal rest of content
      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-20 py-24 px-4 bg-black min-h-screen text-white text-center relative overflow-hidden"
    >
      {/* Large Icon */}
      <div
        ref={iconRef}
        className="text-[#c999ee] text-[10rem] md:text-[12rem] flex justify-center mb-12"
      >
        <FaRegAddressBook />
      </div>

      {/* "Let's Connect" Heading (hidden initially) */}
      <h2
        ref={textRef}
        className="text-8xl md:text-7xl font-bold text-[#c999ee] mb-12"
        style={{ fontFamily: "'Edu VIC WA NT Beginner', cursive" }}
      >
        Let's Connect
      </h2>

      {/* Contact Content (hidden initially) */}
      <div ref={contentRef}>
        <p className="text-gray-400 max-w-2xl text-lg mx-auto mb-8">
          Have an idea or want to collaborate? I’m always excited to hear about new projects and opportunities!
        </p>

        {/* Download CV */}
        <div className="mb-12">
          <a
            href="/KumarAdityaResume.pdf"
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

        {/* Quote */}
        <blockquote className="italic text-gray-400 text-lg max-w-xl mx-auto">
          "Code is like humor. When you have to explain it, it’s bad."
        </blockquote>

        {/* Email Invite */}
        <div className="mt-16">
          <p className="text-gray-400 text-sm">Interested in working together? Let’s create something awesome.</p>
          <a
            href="mailto:kumaraditya1814@gmail.com"
            className="inline-block mt-4 text-blue-500 underline hover:text-blue-400 transition"
          >
            Send a quick email →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
