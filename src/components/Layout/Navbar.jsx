import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scorlling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Work', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/LOGO.png" alt="Ryan Builds Logo" width="40" height="40" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-cta">
          <Link to="/contact">
            <button className="cta-button">Lets talk</button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="mobile-nav-links">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                >
                  <NavLink to={link.path} className={({ isActive }) => isActive ? 'active' : ''}>
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              className="mobile-menu-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact">
                <button className="cta-button full-width">Lets talk</button>
              </Link>
              <div className="mobile-socials">
                <a href="#twitter">Twitter (X) ↗</a>
                <a href="#github">GitHub ↗</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
