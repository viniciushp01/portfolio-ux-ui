import React from 'react';
import { motion } from 'motion/react';

interface MockupWindowProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export function MockupWindow({ src, alt, className = "", imageClassName = "" }: MockupWindowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`w-full bg-[#0a0a0a] rounded-[2rem] border border-[#222] overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-6 md:h-8 bg-[#111] flex items-center px-4 md:px-6 gap-2 border-b border-white/10 z-10">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#27c93f]"></div>
      </div>
      <img src={src} alt={alt} className={`w-full h-auto object-cover pt-6 md:pt-8 ${imageClassName}`} />
    </motion.div>
  );
}
