import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Experience from './components/Experience';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Navbar />
          
          <Hero />
          <Experience />
          <Projects />
          <Contact />
          
        </>
      )}
    </>
  );
}

export default App;
