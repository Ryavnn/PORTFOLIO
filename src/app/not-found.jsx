'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] md:py-[100px] text-center">
        {/* Label */}
        <motion.p
          className="hero-label justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          PAGE NOT FOUND
        </motion.p>

        {/* Big 404 */}
        <motion.h1
          className="font-heading font-extrabold leading-[0.85] m-0 mb-[24px] tracking-[-4px] md:tracking-[-8px] uppercase select-none"
          style={{ fontSize: 'clamp(120px, 25vw, 280px)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          4<span className="text-accent">0</span>4
        </motion.h1>

        {/* Message */}
        <motion.p
          className="font-sans text-base leading-[1.6] mb-[16px] max-w-[480px] mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you're looking for doesn't exist,<br />
          was moved, or never existed in the first place.
        </motion.p>

        <motion.p
          className="font-sans text-sm opacity-60 mb-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          — But there's plenty more to explore —
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col md:flex-row gap-[16px] justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/" className="btn-primary">
            BACK TO HOME
          </Link>
          <Link href="/projects" className="btn-secondary">
            VIEW MY WORK
          </Link>
          <Link href="/contact" className="btn-outline">
            GET IN TOUCH
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
