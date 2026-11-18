import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

export default function MobileMenu({ isOpen, navLinks, pathname, onClose }) {
  return (
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
              onClick={onClose}
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
                  onClick={onClose}
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
              <a href="https://x.com/techbuildske" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[4px] font-sans text-sm text-text no-underline opacity-70">Twitter (X) <ArrowUpRight size={14} /></a>
              <a href="https://github.com/Ryavnn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[4px] font-sans text-sm text-text no-underline opacity-70">GitHub <ArrowUpRight size={14} /></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
