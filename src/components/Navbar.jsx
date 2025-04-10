import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-lg font-bold hover:text-blue-400">
          Kumar Aditya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
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
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
