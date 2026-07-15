import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { MockupWindow } from './MockupWindow';
import { Particles } from './Particles';
import { CaseStudySection } from '../types';

interface ContentSectionProps {
  section: CaseStudySection;
  accentColor?: string;
  showParticles?: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ section, accentColor = '#7c3aed', showParticles = true }) => {
  return (
    <div className="space-y-16">
      <section className="max-w-4xl">
        <SectionHeader label={section.label} title={section.title} />
        {typeof section.content === 'string' ? (
          <p className="text-lg text-[#a1a1a1] leading-relaxed">
            {section.content}
          </p>
        ) : (
          section.content
        )}

        {section.type === 'list' && section.items && (
          <ul className="mt-8 space-y-4 text-lg text-[#a1a1a1] leading-relaxed list-disc pl-6">
            {section.items.map((item, idx) => {
              const [bold, rest] = item.split(': ');
              return (
                <li key={idx}>
                  <strong className="text-white">{bold}:</strong> {rest}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {section.image && (
        <>
          {section.image.type === 'mockup' && (
            <MockupWindow src={section.image.src} alt={section.image.alt} className="mb-16" />
          )}

          {section.image.type === 'grid' && (
            <div 
              className="w-full rounded-[2rem] overflow-hidden relative py-[45px] md:py-[67px] flex items-center justify-center border border-[#222]"
              style={{ background: `radial-gradient(ellipse at top, ${accentColor}26 0%, #050505 55%, #000000 100%)` }}
            >
              <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
              {showParticles && (
                <Particles
                  className="absolute inset-0 z-0 opacity-60"
                  quantity={100}
                  ease={80}
                  color="#ffffff"
                  refresh
                />
              )}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60%] max-w-[1000px] blur-[120px] rounded-full pointer-events-none z-0"
                style={{ backgroundColor: `${accentColor}33` }}
              ></div>

              <div className="relative z-10 w-full px-[17px] md:px-[34px]">
                <div className={`grid gap-[17px] md:gap-[22px] mx-auto ${
                  section.image.gridImages?.length === 4
                    ? 'max-w-[700px] lg:max-w-[900px] grid-cols-2 xl:grid-cols-4'
                    : section.image.gridImages?.length === 1
                    ? 'max-w-[196px] lg:max-w-[240px] grid-cols-1'
                    : section.image.gridImages?.length === 2
                    ? 'max-w-[455px] lg:max-w-[520px] grid-cols-1 sm:grid-cols-2'
                    : 'max-w-[700px] lg:max-w-[820px] grid-cols-1 md:grid-cols-3'
                }`}>
                  {section.image.gridImages?.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                      className="relative w-full rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)]"
                    >
                      <div className="absolute top-1 md:top-2 inset-x-0 h-2 md:h-2 w-[35%] bg-[#1a1a1a] z-20 rounded-full mx-auto shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"></div>
                      <img src={img.src} alt={img.alt} className="w-full h-auto block rounded-[0.75rem] sm:rounded-[1.25rem]" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
