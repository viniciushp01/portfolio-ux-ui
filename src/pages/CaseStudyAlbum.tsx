import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { SectionHeader } from '../components/SectionHeader';
import { MockupWindow } from '../components/MockupWindow';

export default function CaseStudyAlbum() {
  return (
    <CaseStudyLayout
      title="Blinkplanet Álbum Feature"
      subtitle="Transforming nostalgia-driven collecting into a revenue engine, generating R$60k+ in digital asset sales."
      role="Product Designer"
      project="Digital Album for a Web3 Marketplace"
      duration="4 months"
    >
      {/* Hero Image Area - Full Width */}
      <div 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#050505] flex items-center justify-center mb-20 border-y border-white/5 overflow-hidden cursor-default"
      >
        {/* Modern Premium Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1e3a8a30_0%,_transparent_70%)] opacity-60"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#050505)]"></div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Blue Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[800px] bg-[#3b82f6]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

        {/* Mockups Container */}
        <motion.div 
          className="relative w-full max-w-[1600px] h-full flex items-center justify-center"
        >
          {/* Main Interface */}
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
              <img src="/gif-album.gif" alt="Album Interface" className="w-full h-auto object-cover pt-4 md:pt-8" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="space-y-32">
        
        {/* Section 1: The Challenge */}
        <section className="max-w-4xl">
          <SectionHeader label="The Challenge" title="Bridging the gap between Web2 and Web3" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-6">
            Web3 marketplaces often face retention challenges. After the initial purchase, users frequently disengage until the next speculation opportunity arises.
          </p>
          <p className="text-lg text-[#a1a1a1] leading-relaxed">
            The goal of this project was to break the 'cold' nature of purely financial transactions by creating an emotional, recurring experience, bringing the nostalgia of physical sticker albums (Web2) into the digital landscape (Web3).
          </p>
        </section>

        {/* Section 2: Strategy */}
        <section className="max-w-4xl">
          <SectionHeader label="Strategy" title="Leveraging the Power of Nostalgia" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-6">
            We identified that the most effective way to educate and engage users was through <strong className="text-white">Emotional Design</strong>. By utilizing the familiar mental model of physical sticker albums, we simplified the digital transition.
          </p>
          <ul className="space-y-4 text-lg text-[#a1a1a1] leading-relaxed list-disc pl-6">
            <li><strong className="text-white">The Trigger:</strong> Gamification based on scarcity and rewards (prizes for completing the album).</li>
            <li><strong className="text-white">The Objective:</strong> To transform an NFT purchase into a meaningful step within a playful collection, significantly increasing <strong className="text-white">User LTV (Lifetime Value)</strong>.</li>
          </ul>
        </section>

        {/* Cover Desktop Mockup */}
        <MockupWindow src="/bahia-cover.png" alt="Album Cover Interface" className="mb-16" />

        {/* Section 3: Delivery & Execution */}
        <section className="max-w-4xl">
          <SectionHeader label="Delivery & Execution" title="Agile Prototyping & Architecture" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-6">
            Facing an aggressive time-to-market, I prioritized a High-Fidelity MVP. Instead of lengthy wireframing cycles, we moved straight to high-fidelity prototypes. This allowed for rapid usability testing and immediate transition to development, ensuring the creative vision was maintained despite the tight deadline.
          </p>
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-6">
            The primary focus was reducing cognitive load in a data-heavy environment:
          </p>
          <ul className="space-y-4 text-lg text-[#a1a1a1] leading-relaxed list-disc pl-6 mb-12">
            <li><strong className="text-white">Single-Page Experience:</strong> Designed a unified layout to maintain user focus and ensure a fluid visual distribution of stickers.</li>
            <li><strong className="text-white">Bookmark System:</strong> To streamline navigation within a vast inventory, I implemented a side-marker system for quick category jumps.</li>
            <li><strong className="text-white">Constant Feedback:</strong> Integrated a persistent progress bar in the footer, turning the navigation into a visual journey of achievement.</li>
          </ul>
        </section>

        {/* Desktop Mockup Image */}
        <MockupWindow src="/index_bahia_desktop.png" alt="Strategic Routing Interface" className="mb-16" />
        
        <section className="max-w-4xl">
          <h3 className="text-2xl font-bold mb-6 text-white">Strategic Routing & Conversion</h3>
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-6">
            To convert the desire for collecting into actual revenue, I designed a <strong className="text-white">Smart Routing</strong> flow for empty album slots. Clicking a missing sticker strategically guided the user:
          </p>
          <ul className="space-y-4 text-lg text-[#a1a1a1] leading-relaxed list-disc pl-6 mb-6">
            <li><strong className="text-white">Booster Packs:</strong> Directed to packs when the sticker was part of active collections.</li>
            <li><strong className="text-white">Secondary Market:</strong> Direct link to the marketplace if the sticker was only available through user-to-user trading.</li>
          </ul>
          <p className="text-lg text-[#a1a1a1] leading-relaxed mb-12">
            This logic balanced direct platform revenue with secondary market liquidity, positioning the album as the central transaction engine of the ecosystem.
          </p>
        </section>

        {/* Additional Desktop Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <MockupWindow src="/gols-bahia.png" alt="Gols Interface" />
          <MockupWindow src="/assets-buy.png" alt="Assets Interface" />
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
                Market Impact & Results
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
                    R$ <AnimatedNumber value={60} suffix="k+" />
                  </span>
                  <p className="text-lg text-[#a1a1a1] max-w-[250px] leading-snug">in Direct Revenue</p>
                </motion.div>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex flex-col items-center pt-10 md:pt-0"
                >
                  <span className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                    <AnimatedNumber value={3500} suffix="+" />
                  </span>
                  <p className="text-lg text-[#a1a1a1] max-w-[250px] leading-snug">New Users acquired</p>
                </motion.div>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex flex-col items-center pt-10 md:pt-0"
                >
                  <span className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                    +<AnimatedNumber value={15} suffix="%" />
                  </span>
                  <p className="text-lg text-[#a1a1a1] max-w-[250px] leading-snug">Increase in Secondary Market</p>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <section className="max-w-4xl pb-10">
          <SectionHeader label="Conclusion" title="Data-Driven Success" />
          <p className="text-lg text-[#a1a1a1] leading-relaxed italic">
            The success of the Digital Album was a result of combining data-driven design with a robust partnership strategy. While the interface ensured retention and conversion, ecosystem partners scaled visibility and results. This project demonstrated that bridging Web2 nostalgia with Web3 mechanics can create a powerful, sustainable revenue engine.
          </p>
        </section>

        {/* Project Navigation */}
        <section className="pt-20 border-t border-[#222] flex flex-col md:flex-row justify-between gap-8">
          <Link 
            to="/case-study/blinkplanet" 
            className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1"
          >
            <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
              <ChevronLeft size={20} />
              <span className="text-sm font-semibold uppercase tracking-widest">Previous Project</span>
            </div>
            <h4 className="text-2xl font-bold text-white">Blinkplanet Explorer</h4>
          </Link>
          
          <Link 
            to="/case-study/blinkplanet" 
            className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1 text-right items-end"
          >
            <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
              <span className="text-sm font-semibold uppercase tracking-widest">Next Project</span>
              <ChevronRight size={20} />
            </div>
            <h4 className="text-2xl font-bold text-white">Blinkplanet Explorer</h4>
          </Link>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
