import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GlassWater } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-950/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-copper-400 hover:text-copper-300 transition-colors"
          >
            <GlassWater className="w-8 h-8" />
            <span className="font-serif text-2xl">The Copper Still</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['menu', 'reservations', 'about'].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className={`text-cream-100 hover:text-copper-400 transition-colors capitalize ${
                  location.pathname === `/${item}` ? 'text-copper-400' : ''
                }`}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="px-4 py-2 bg-copper-500 text-cream-50 rounded-md hover:bg-copper-600 transition-colors"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden text-cream-100 hover:text-copper-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-navy-950/95 backdrop-blur-sm border-t border-copper-900/20"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {['menu', 'reservations', 'about'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    className={`text-cream-100 hover:text-copper-400 transition-colors capitalize ${
                      location.pathname === `/${item}` ? 'text-copper-400' : ''
                    }`}
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  to="/reservations"
                  className="px-4 py-2 bg-copper-500 text-cream-50 rounded-md hover:bg-copper-600 transition-colors text-center"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}