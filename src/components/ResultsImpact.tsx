import { motion } from 'motion/react';
import { AnimatedNumber } from './AnimatedNumber';
import { CaseStudyResult } from '../types';

interface ResultsImpactProps {
  title: string;
  results: CaseStudyResult[];
}

export function ResultsImpact({ title, results }: ResultsImpactProps) {
  return (
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#222]">
            {results.map((result, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className={`flex flex-col items-center pt-6 md:pt-0 ${idx > 0 ? 'pt-10' : ''}`}
              >
                <span className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                  <AnimatedNumber 
                    value={result.value} 
                    suffix={result.suffix} 
                    prefix={result.prefix} 
                    format={result.format} 
                  />
                </span>
                <p className="text-lg text-[#a1a1a1] max-w-[250px] leading-snug">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
