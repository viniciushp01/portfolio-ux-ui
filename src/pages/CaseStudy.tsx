import React, { useRef, useState } from 'react';
import { Particles } from '../components/Particles';
import { Meteors } from '../components/Meteors';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { SectionHeader } from '../components/SectionHeader';
import { MockupWindow } from '../components/MockupWindow';

export default function CaseStudy() {
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

  const phones = [
    {
      id: 'monad',
      src: '/homepage-monad.png',
      alt: 'Monad',
      targetX: "-140%",
      targetY: 24,
      rotate: -12,
      zIndex: 10,
      delay: 0.1,
    },
    {
      id: 'default',
      src: '/homepage-default.png',
      alt: 'Default',
      targetX: "-50%",
      targetY: 0,
      rotate: -6,
      zIndex: 30,
      delay: 0.2,
    },
    {
      id: 'exo',
      src: '/homepage-exo.png',
      alt: 'Exo',
      targetX: "50%",
      targetY: 8,
      rotate: 6,
      zIndex: 20,
      delay: 0.3,
    },
    {
      id: 'blinkday',
      src: '/homepage-blinkday.png',
      alt: 'Blinkday',
      targetX: "140%",
      targetY: 32,
      rotate: 12,
      zIndex: 10,
      delay: 0.4,
    }
  ];

  return (
    <CaseStudyLayout
      title="Blinkplanet Explorer"
      subtitle="App designed to drive user acquisition and ecosystem conversion for BlinkPlanet’s Web3 Marketplace"
      role="Product Designer"
      project="WEB3 Telegram APP"
      duration="2025"
    >
      {/* Hero Image Area - Full Width */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#050505] to-[#000000] flex items-center justify-center mb-20 border-y border-[#222] overflow-hidden cursor-default -mx-4 md:-mx-8 lg:-mx-20"
      >
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        <Meteors number={20} />
        
        {/* Purple Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[800px] bg-[#7c3aed]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

        {/* Mockups Container with Parallax */}
        <motion.div 
          className="relative w-full max-w-[1600px] h-full flex items-center justify-center"
          style={{ x: parallaxX, y: parallaxY }}
        >
          {phones.map((phone) => (
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
                    {/* Notch */}
                    <div className="absolute top-1 md:top-2 inset-x-0 h-2 md:h-2 w-[35%] bg-[#1a1a1a] z-20 rounded-full mx-auto shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"></div>
                    {/* Image */}
                    <img src={phone.src} alt={phone.alt} className="w-full h-full object-cover rounded-[0.75rem] sm:rounded-[1.25rem] md:rounded-[1.5rem]" />
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="space-y-32">
        {/* Challenge */}
        <section className="max-w-4xl">
          <SectionHeader label="The Challenge" title="How to scale user acquisition for BlinkPlanet?" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed">
            The Web3 ecosystem evolves rapidly. With the rise of Telegram Web Apps (tap-to-earn style), we identified a prime opportunity to attract highly engaged users. The challenge was: how to build a social app that wasn't just a 'clicker,' but a powerful traffic and conversion engine for the BlinkPlanet marketplace?
          </p>
        </section>

        {/* Discovery */}
        <section className="max-w-4xl">
          <SectionHeader label="Discovery" title="Initial Strategy" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed">
            We analyzed the explosion of Telegram communities using simple reward mechanics for retention. Our hypothesis: Integrating a Social App directly with BlinkPlanet to significantly reduce Customer Acquisition Cost (CAC). Due to an aggressive time-to-market, we prioritized a High-Fidelity MVP. This ensured a premium first impression and allowed for live iterations based on real-time user feedback.
          </p>
        </section>

        {/* MVP */}
        <section className="max-w-4xl">
          <SectionHeader label="MVP" title="First Version" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-8">
            The product's foundation was built on classic gamification mechanics to drive immediate engagement.
          </p>
          <ul className="space-y-4 text-lg text-[#a1a1a1] leading-relaxed list-disc pl-6">
            <li><strong className="text-white">Tapping & Tasks:</strong> Instant point gratification.</li>
            <li><strong className="text-white">Ranking & Referral:</strong> Driving organic virality.</li>
            <li><strong className="text-white">Shop (Digital Assets):</strong> Direct exposure to the parent platform's marketplace.</li>
            <li><strong className="text-white">Skins:</strong> UI customization as a visual retention tool.</li>
          </ul>
        </section>

        {/* Secondary Image Area - MVP Screens */}
        <div className="w-full rounded-[2rem] overflow-hidden relative py-16 md:py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#050505] to-[#000000] flex items-center justify-center border border-[#222]">
          {/* Space Background Elements */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          <Particles
            className="absolute inset-0 z-0 opacity-60"
            quantity={200}
            ease={80}
            color="#ffffff"
            refresh
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60%] max-w-[1000px] bg-[#7c3aed]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

          <div className="relative z-10 w-full px-6 md:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-[1000px] mx-auto">
              {[
                { src: '/old-home.png', alt: 'Home Screen' },
                { src: '/tasks.png', alt: 'Tasks Screen' },
                { src: '/referral.png', alt: 'Referral Screen' },
                { src: '/Leaderboard.png', alt: 'Leaderboard Screen' }
              ].map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                  className="relative w-full aspect-[9/19.5] rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)]"
                >
                  {/* Notch */}
                  <div className="absolute top-1 md:top-2 inset-x-0 h-2 md:h-2 w-[35%] bg-[#1a1a1a] z-20 rounded-full mx-auto shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"></div>
                  {/* Image */}
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-[0.75rem] sm:rounded-[1.25rem]" />
                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Iteration */}
        <section className="max-w-4xl">
          <SectionHeader label="Iteration" title="Data driven iteration: The turning point" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-6">
            Post-launch data revealed a bottleneck: engagement was high, but marketplace conversion remained low. Passive 'tapping' didn't create enough perceived value to drive actual transactions.
          </p>
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-6">
            <strong className="text-white">The Design Decision:</strong> Beyond refining UI components, we shifted from 'passive clicking' to 'active strategy.' We introduced three core experience layers:
          </p>
          <ol className="space-y-4 text-lg text-[#a1a1a1] leading-relaxed list-decimal pl-6 mb-12">
            <li><strong className="text-white">Spotlight:</strong> A dynamic showcase for platform updates, removing discovery barriers.</li>
            <li><strong className="text-white">Gifts:</strong> Performance-based reward milestones.</li>
            <li><strong className="text-white">Arcade & Expeditions:</strong> Mini-games where progression was tied to owning platform assets.</li>
          </ol>
          <p className="text-lg text-[#a1a1a1] leading-relaxed">
            By linking gameplay success to asset ownership, we transformed interface design into a <strong className="text-white">monetization engine</strong>.
          </p>
        </section>

        {/* Tertiary Image Area - Iteration Screens */}
        <div className="w-full rounded-[2rem] overflow-hidden relative py-16 md:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#050505] to-[#000000] flex items-center justify-center border border-[#222]">
          {/* Space Background Elements */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          <Particles
            className="absolute inset-0 z-0 opacity-60"
            quantity={100}
            ease={80}
            color="#ffffff"
            refresh
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[60%] max-w-[1000px] bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

          <div className="relative z-10 w-full px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[700px] mx-auto">
              {[
                { src: '/bpx_tapping.gif', alt: 'Tapping Interaction' },
                { src: '/gif-skins.gif', alt: 'Skins Showcase' },
                { src: '/blink-runner.gif', alt: 'Runner Gameplay' }
              ].map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                  className="relative w-[90%] sm:w-[60%] md:w-full mx-auto rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)]"
                >
                  {/* Notch */}
                  <div className="absolute top-1 md:top-2 inset-x-0 h-2 md:h-2 w-[35%] bg-[#1a1a1a] z-20 rounded-full mx-auto shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"></div>
                  {/* Image */}
                  <img src={img.src} alt={img.alt} className="w-full h-auto block rounded-[0.75rem] sm:rounded-[1.25rem]" />
                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Results & Impact */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="w-full"
        >
          <div className="relative bg-[#0a0a0a] rounded-[2rem] p-10 md:p-16 text-center border border-[#222] overflow-hidden shadow-2xl">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            {/* Subtle Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
                Results & Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#222]">
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex flex-col items-center pt-6 md:pt-0"
                >
                  <span className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                    <AnimatedNumber value={7000} suffix="+" />
                  </span>
                  <p className="text-lg text-[#a1a1a1] max-w-[250px] leading-snug">Unique users reached at launch.</p>
                </motion.div>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex flex-col items-center pt-10 md:pt-0"
                >
                  <span className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                    <AnimatedNumber value={38} suffix="%" />
                  </span>
                  <p className="text-lg text-[#a1a1a1] max-w-[250px] leading-snug">User migration rate from the social app to the main platform.</p>
                </motion.div>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex flex-col items-center pt-10 md:pt-0"
                >
                  <span className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                    <AnimatedNumber value={889} format={false} />
                  </span>
                  <p className="text-lg text-[#a1a1a1] max-w-[250px] leading-snug">Digital assets sold, generating direct revenue impact.</p>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <section className="max-w-4xl pb-10">
          <SectionHeader label="Conclusion" title="Strategic Outcomes" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed italic">
            Leading the BPX project enhanced my strategic communication with stakeholders and validated the impact of documenting high-performance usability logic. By applying Design Thinking, I translated raw data into creative solutions, precisely adapting the product to evolving challenges. This journey proved that combining grounded design with rapid feedback loops is the key to solid, scalable results.
          </p>
        </section>

        {/* Project Navigation */}
        <section className="pt-20 border-t border-[#222] flex flex-col md:flex-row justify-between gap-8">
          <Link 
            to="/case-study/album" 
            className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1"
          >
            <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
              <ChevronLeft size={20} />
              <span className="text-sm font-semibold uppercase tracking-widest">Previous Project</span>
            </div>
            <h4 className="text-2xl font-bold text-white">Blinkplanet Álbum Feature</h4>
          </Link>
          
          <Link 
            to="/case-study/album" 
            className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1 text-right items-end"
          >
            <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
              <span className="text-sm font-semibold uppercase tracking-widest">Next Project</span>
              <ChevronRight size={20} />
            </div>
            <h4 className="text-2xl font-bold text-white">Blinkplanet Álbum Feature</h4>
          </Link>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
