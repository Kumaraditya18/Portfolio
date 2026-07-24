import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true); // default to dark mode

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    // Sync dark mode class
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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
        ? 'py-3.5 bg-bg-app/75 backdrop-blur-xl border-b border-border-app shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* Apple Style Minimal Logo */}
        <a 
          href="#home" 
          className="text-sm font-semibold tracking-tight text-text-app hover:opacity-85 transition-opacity duration-200"
        >
          Kumar Aditya
        </a>

        {/* Minimal Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-xs font-normal text-text-muted-app tracking-wide">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-text-app transition-colors duration-200 ${
                    activeSection === item.id ? 'text-text-app font-medium' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-border-app pl-6">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-1.5 rounded-full hover:bg-card-app text-text-muted-app hover:text-text-app transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="/KumarAdityaResume.pdf"
              download
              className="text-[11px] font-medium px-4 py-1.5 rounded-full bg-text-app text-bg-app hover:opacity-90 transition-all duration-300"
            >
              Get CV
            </a>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 rounded-full hover:bg-card-app text-text-muted-app hover:text-text-app transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            className="w-6 h-6 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1px] w-5 bg-text-app transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`block h-[1px] w-3.5 bg-text-app transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-[1px] w-5 bg-text-app transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 h-screen bg-bg-app/95 backdrop-blur-2xl py-8 px-8 flex flex-col gap-6 animate-fade-in border-t border-border-app">
          <ul className="flex flex-col gap-6 text-lg font-light text-text-muted-app">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 ${activeSection === item.id ? 'text-text-app font-normal' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/KumarAdityaResume.pdf"
            download
            className="text-center text-sm font-semibold py-3 rounded-full bg-text-app text-bg-app hover:opacity-90 transition-all duration-300 mt-4"
          >
            Get CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
