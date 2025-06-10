import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 
              className={`font-bold text-xl sm:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-pink-500' : 'text-white'
              }`}
            >
              Sonny Angels
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Stores'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`relative font-chillax transition-colors duration-300 hover:text-pink-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all hover:after:w-full ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`} 
                size={24} 
              />
            ) : (
              <Menu 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`} 
                size={24} 
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100 translate-y-0 py-4' 
              : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden py-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 px-4">
            {['Home', 'About', 'Products', 'Stores'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 font-medium hover:text-pink-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;