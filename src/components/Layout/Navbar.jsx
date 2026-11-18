'use client';
import { lazy, Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const MobileMenu = lazy(() => import('./MobileMenu'));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuRequested, setMenuRequested] = useState(false);
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
          onClick={() => {
            setMenuRequested(true);
            setIsOpen(open => !open);
          }}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <div className="w-[30px] h-[20px] relative flex flex-col justify-between">
            <span className={`block w-full h-[2px] bg-text transition-all duration-300 origin-center ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}></span>
            <span className={`block w-full h-[2px] bg-text transition-all duration-300 origin-center ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {menuRequested && (
        <Suspense fallback={null}>
          <MobileMenu
            isOpen={isOpen}
            pathname={pathname}
            navLinks={navLinks}
            onClose={() => setIsOpen(false)}
          />
        </Suspense>
      )}
    </header>
  );
};

export default Navbar;
