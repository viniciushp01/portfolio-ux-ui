import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Meteors } from './Meteors';
import { CaseStudyHeroData } from '../types';
import { MockupWindow } from './MockupWindow';

interface CaseStudyHeroProps {
  hero: CaseStudyHeroData;
}

export function CaseStudyHero({ hero }: CaseStudyHeroProps) {
  const [hoveredPhone, setHoveredPhone] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 30, stiffness: 100 };
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, -30]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, -30]), springConfig);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[${hero.bgColor}] flex items-center justify-center mb-20 border-y border-white/5 overflow-hidden cursor-default`}
      style={{ backgroundColor: hero.bgColor }}
    >
      {/* Modern Premium Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: `radial-gradient(circle at 50% 50%, ${hero.glowColor}30 0%, transparent 70%)` }}
      ></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#050505)]"></div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {hero.type === 'phones' && <Meteors number={20} />}
      
      {/* Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[800px] blur-[100px] rounded-full pointer-events-none z-0"
        style={{ backgroundColor: `${hero.glowColor}20` }}
      ></div>

      {hero.type === 'phones' ? (
        <motion.div 
          className="relative w-full max-w-[1600px] h-full flex items-center justify-center"
          style={{ x: parallaxX, y: parallaxY }}
        >
          {hero.phones?.map((phone) => (
            <div 
              key={phone.id}
              className="absolute top-1/2 left-1/2 w-[18vw] sm:w-[110px] md:w-[150px] lg:w-[180px] aspect-[9/19.5]"
              style={{ 
                zIndex: hoveredPhone === phone.id ? 50 : phone.zIndex,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div
                initial={{ x: 0, y: 150, rotate: 0, opacity: 0, scale: 0.8 }}
                animate={{ x: phone.targetX, y: phone.targetY, rotate: phone.rotate, opacity: 0.85, scale: 1 }}
                transition={{ type: "spring", damping: 22, stiffness: 100, delay: phone.delay }}
                className="w-full h-full"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: phone.delay + 0.5 }}
                  className="w-full h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 0, opacity: 1, y: -20 }}
                    onHoverStart={() => setHoveredPhone(phone.id)}
                    onHoverEnd={() => setHoveredPhone(null)}
                    className="w-full h-full rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
                  >
                    <div className="absolute top-1 md:top-2 inset-x-0 h-2 md:h-2 w-[35%] bg-[#1a1a1a] z-20 rounded-full mx-auto shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"></div>
                    <img src={phone.src} alt={phone.alt} className="w-full h-full object-cover rounded-[0.75rem] sm:rounded-[1.25rem] md:rounded-[1.5rem]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="relative w-full max-w-[1600px] h-full flex items-center justify-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] sm:w-[600px] md:w-[700px] lg:w-[800px] z-30">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
              className="w-full rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-white/20 bg-black/60 backdrop-blur-md overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-x-0 top-0 h-4 md:h-8 bg-[#111] flex items-center px-4 md:px-4 gap-2 md:gap-2 border-b border-white/10 z-10">
                <div className="w-2 h-2 md:w-2 md:h-2 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2 h-2 md:w-2 md:h-2 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2 h-2 md:w-2 md:h-2 rounded-full bg-[#27c93f]"></div>
              </div>
              <img src={hero.windowImage} alt={hero.windowAlt} className="w-full h-auto object-cover pt-4 md:pt-8" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
