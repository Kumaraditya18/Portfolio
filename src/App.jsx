import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Hero';
// import ProjectsPage from './components/Projects';
// import ContactPage from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
