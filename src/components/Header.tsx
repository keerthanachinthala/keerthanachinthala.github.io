import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Reset active section when at top of page
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy functionality
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY > 100) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    
    // Reset active section when at top of page
    if (window.scrollY < 100) {
      setActiveSection('');
      return;
    }

    // Check if we're at the bottom of the page (for footer)
    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
    if (isAtBottom) {
      setActiveSection('footer');
      return;
    }

    // Regular intersection observer logic for other sections
    const sections = document.querySelectorAll('section[id]:not(#footer)');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const navItems = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#recommendations', label: 'Recommendations', id: 'recommendations' },
    { href: '#footer', label: 'Contact', id: 'footer' }, // Changed from footer to contact
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-5 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? '' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 navbar" data-aos="fade-up">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-200 font-medium rounded-full ${
                  activeSection === item.id 
                    ? 'text-white bg-emerald-600/80 px-3 py-0.5' 
                    : 'text-gray-300 hover:text-emerald-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2 transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-emerald-400 bg-gray-700/50' 
                    : 'text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;