import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Dynamic scroll spy tracking
      const scrollPosition = window.scrollY + 120;
      const sections = navItems.map(item => document.getElementById(item.id));
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-[#030303]/80 backdrop-blur-md border-b border-white/5 shadow-md shadow-black/20' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-lg font-bold font-display tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:scale-125 transition-transform duration-300"></span>
          Kumar Aditya
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-400">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative py-1 hover:text-white transition-colors duration-200 ${
                    activeSection === item.id ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/KumarAdityaResume.pdf"
            download
            className="text-xs font-semibold px-4.5 py-2 rounded-full border border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5 hover:bg-purple-500/10 text-purple-300 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 bg-white rounded-full transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
              }`}
            ></span>
            <span
              className={`block h-[1.5px] w-6 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block h-[1.5px] w-6 bg-white rounded-full transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#09090b]/95 backdrop-blur-lg border-b border-white/5 py-6 px-6 shadow-xl flex flex-col gap-5">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-400">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 hover:text-white transition-colors ${
                    activeSection === item.id ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/KumarAdityaResume.pdf"
            download
            className="text-center text-sm font-semibold py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
