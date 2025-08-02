import { useState } from 'react';

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

        {/* Animated Hamburger Button */}
        <div className="md:hidden">
          <button
            className="w-8 h-8 flex flex-col justify-between items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-1 w-7 bg-white rounded transition-transform duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-1 w-7 bg-white rounded transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block h-1 w-7 bg-white rounded transition-transform duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 animate-slide-down">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
