'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
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
    <header className="sticky top-0 bg-bg border-b-2 border-border z-[1000] w-full">
      <div className="max-w-grid-max mx-auto flex justify-between items-center px-grid-margin py-4 md:py-5 relative z-[1001] bg-bg">
        <Link href="/" className="flex items-center text-inherit z-[1002]">
          <img src="/LOGO.png" alt="Ryan Builds Logo" width="40" height="40" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[40px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`font-sans text-sm text-text no-underline transition-colors duration-200 font-medium py-[8px] hover:text-accent relative ${
                  isActive ? 'text-accent after:content-[""] after:absolute after:bottom-[-15px] after:left-0 after:right-0 after:h-[2px] after:bg-accent' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Link href="/contact">
            <button className="bg-accent text-bg border-none px-[28px] py-[14px] font-sans text-sm cursor-pointer transition-opacity duration-200 font-bold uppercase tracking-[0.5px] md:hover:opacity-90">
              Lets talk
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="bg-transparent border-none cursor-pointer p-[10px] z-[1002] flex items-center justify-center md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-[30px] h-[20px] relative flex flex-col justify-between">
            <span className={`block w-full h-[2px] bg-text transition-all duration-300 origin-center ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}></span>
            <span className={`block w-full h-[2px] bg-text transition-all duration-300 origin-center ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed top-0 left-0 w-full h-[100dvh] bg-bg z-[1000] flex flex-col justify-between pt-[100px] px-grid-margin pb-[40px] overflow-y-auto md:!hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col gap-[32px] mt-[40px]">
              <Link 
                href="/" 
                className={`font-heading text-2xl font-bold text-text no-underline tracking-[-1px] ${pathname === '/' ? 'text-accent' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                >
                  <Link 
                    href={link.path}
                    className={`font-heading text-2xl font-bold text-text no-underline tracking-[-1px] ${pathname === link.path ? 'text-accent' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              className="flex flex-col gap-[32px] mt-[60px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact">
                <button className="w-full bg-accent text-bg border-none px-[28px] py-[14px] font-sans text-sm cursor-pointer transition-opacity duration-200 font-bold uppercase tracking-[0.5px]">
                  Lets talk
                </button>
              </Link>
              <div className="flex flex-col gap-[16px]">
                <a href="https://x.com/techbuildske" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-text no-underline opacity-70">Twitter (X) ↗</a>
                <a href="https://github.com/Ryavnn" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-text no-underline opacity-70">GitHub ↗</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
