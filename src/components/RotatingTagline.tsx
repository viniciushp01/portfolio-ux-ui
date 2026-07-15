import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const PHRASES = [
  "for SaaS",
  "Driving acquisition & retention",
  "With experience in wellness & fitness"
];

interface RotatingTaglineProps {
  phrases?: string[];
  interval?: number;
  className?: string;
}

export function RotatingTagline({ phrases = PHRASES, interval = 2800, className = "" }: RotatingTaglineProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <span className={`relative flex w-full items-center overflow-hidden font-clash uppercase text-white h-[2.5em] sm:h-[1.4em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="block leading-tight sm:whitespace-nowrap"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
