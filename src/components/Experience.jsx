'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
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
      "Worked on debugging and resolving issues across multiple live websites, optimizing performance, and collaborating with the dev team to enhance user experience and functionality.",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineIndicatorRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide entire timeline content initially
      gsap.set([contentRef.current, timelineIndicatorRef.current], { opacity: 0 });
      gsap.set(cardsRef.current, { opacity: 0, y: 40 });

      /** ✅ Master Timeline with pinning */
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

      // 1️⃣ Responsive Big Title Animation
      const isMobile = window.innerWidth < 640;
      tl.fromTo(
        titleRef.current,
        { 
          scale: isMobile ? 2.5 : 6, 
          opacity: 0.3, 
          y: isMobile ? '10vh' : '30vh' 
        },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          ease: 'power2.out', 
          duration: 0.8 
        }
      );

      // 2️⃣ Reveal content AFTER title finishes
      tl.to([contentRef.current, timelineIndicatorRef.current], {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          // ✅ Only create ScrollTriggers after reveal completes
          createDotTriggers();
        },
      });

      // 3️⃣ Reveal cards
      tl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Dot Movement function
      function createDotTriggers() {
        cardsRef.current.forEach((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 70%',
            onEnter: () => moveDot(item),
            onEnterBack: () => moveDot(item),
          });
        });
      }

      function moveDot(target) {
        if (timelineIndicatorRef.current && target && contentRef.current) {
          const containerRect = contentRef.current.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();

          const offset =
            targetRect.top -
            containerRect.top +
            target.querySelector("h4").offsetHeight / 2 -
            8;

          gsap.to(timelineIndicatorRef.current, {
            y: offset,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 md:px-12 relative overflow-hidden min-h-screen"
    >
      {/* Big Animated Title */}
      <h2
        ref={titleRef}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-[#a771ee] mb-12"
      >
        Experience
      </h2>

      {/* Timeline Container (Hidden initially) */}
      <div
        ref={contentRef}
        className="relative border-l border-gray-700 pl-6 max-w-3xl mx-auto mt-20"
      >
        {/* Dot indicator */}
        <div
          ref={timelineIndicatorRef}
          className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[30px] top-0"
        ></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="mb-20 relative exp-item"
          >
            <h4 className="text-xl font-bold text-[#c999ee]">{exp.title}</h4>
            <p className="text-sm text-gray-400 mb-1">
              {exp.company} · {exp.period}
            </p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
