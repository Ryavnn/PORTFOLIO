'use client';
import { useState, useEffect } from 'react';

const rotatingWords = ['WEB DESIGN', 'AUTOMATION', 'DEVELOPMENT', 'REDESIGN', 'SEO'];

export default function HeroHeadline() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-heading text-3xl font-extrabold leading-[1.05] mx-auto mb-[32px] tracking-[-1.5px] max-w-[900px]">
      I BUILD DIGITAL EXPERIENCES THROUGH<br/>
      <span className={`text-accent inline-block transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 -translate-y-[20px]' : 'opacity-100 translate-y-0 animate-[slideIn_0.5s_ease-in-out]'}`}>
        {rotatingWords[currentWordIndex]}
      </span>
    </h1>
  );
}
