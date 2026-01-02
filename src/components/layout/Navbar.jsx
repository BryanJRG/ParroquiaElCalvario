import React, { useEffect, useState } from "react";
import { href, Link } from "react-router-dom";
import Contact from "../../pages/Contact";
import { Menu, X } from 'lucide-react';

const Navbar = ({ isOpen, setIsOpen, liturgicalColor, noHero}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Activar animaciones después del montaje
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'sacramentos', href: '/sacramentos'},
    { label: 'historia', href: '/historia'},
    { label: 'oraciones', href: '/oraciones'},
    { label: 'Donar', href: '/donar' },
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        noHero
          ? 'bg-white/95'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo con animación y color dinámico */}
          <div 
            className={`font-cinzel-xb text-xl sm:text-2xl transition-colors duration-300 opacity-0 ${
              mounted ? 'animate-fade-scale-up' : ''
            } ${
              noHero ? liturgicalColor :
              scrolled ? liturgicalColor : 'text-white'
            }`}
          >
            Parroquia El Cristo Negro
          </div>
          
          {/* Desktop Navigation con animaciones escalonadas */}
          <div className="hidden md:flex items-center space-x-8 uppercase">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-cormorant-m text-base hover:opacity-70 transition-all duration-300 relative group opacity-0 ${
                  mounted ? 'animate-fade-scale-up' : ''
                } ${
                  noHero ? liturgicalColor :
                  scrolled ? liturgicalColor : 'text-white'
                }`}
                style={{ 
                  animationDelay: `${100 + index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button con color dinámico */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 opacity-0 ${
              mounted ? 'animate-fade-scale-up delay-200' : ''
            } ${
              noHero ? liturgicalColor :
              scrolled 
                ? `${liturgicalColor} hover:bg-black/5` 
                : 'text-white hover:bg-white/10'
            }`}
            style={{ 
              animationDelay: '200ms',
              animationFillMode: 'forwards'
            }}
            aria-label="Menú de navegación"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;