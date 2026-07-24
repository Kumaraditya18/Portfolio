import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollPosition = window.scrollY + 100;
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3.5 bg-black/60 backdrop-blur-xl border-b border-white/[0.04]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* Apple Style Minimal Logo */}
        <a 
          href="#home" 
          className="text-sm font-semibold tracking-tight text-[#f5f5f7] hover:text-white transition-colors duration-200"
        >
          Kumar Aditya
        </a>

        {/* Minimal Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-xs font-normal text-gray-400 tracking-wide">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-[#f5f5f7] transition-colors duration-200 ${
                    activeSection === item.id ? 'text-white font-medium' : ''
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
            className="text-[11px] font-medium px-4 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300"
          >
            Get CV
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            className="w-6 h-6 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1px] w-5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`block h-[1px] w-3.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-[1px] w-5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 h-screen bg-black/95 backdrop-blur-2xl py-8 px-8 flex flex-col gap-6 animate-fade-in border-t border-white/[0.04]">
          <ul className="flex flex-col gap-6 text-lg font-light text-gray-300">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 ${activeSection === item.id ? 'text-white font-normal' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/KumarAdityaResume.pdf"
            download
            className="text-center text-sm font-semibold py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 mt-4"
          >
            Get CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
