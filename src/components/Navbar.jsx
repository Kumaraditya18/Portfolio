import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        <a href="#home" className="text-lg font-bold hover:text-blue-400">
          Kumar Aditya
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
