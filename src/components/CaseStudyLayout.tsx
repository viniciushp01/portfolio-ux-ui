import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronUp } from 'lucide-react';
import { ScrollProgress } from './ScrollProgress';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  role: string;
  project: string;
  duration: string;
}

export function CaseStudyLayout({ children, title, subtitle, role, project, duration }: CaseStudyLayoutProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-40 pb-20">
      <ScrollProgress />
      <div className="px-4 md:px-8 lg:px-20 max-w-[1600px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#a1a1a1] hover:text-white transition-colors mb-12">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-[#a1a1a1] leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </header>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32 border-b border-[#222] pb-16">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Role</h3>
            <div className="w-12 h-1 bg-white mb-4 rounded-full"></div>
            <p className="text-[#a1a1a1] text-lg">{role}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Project</h3>
            <div className="w-12 h-1 bg-white mb-4 rounded-full"></div>
            <p className="text-[#a1a1a1] text-lg">{project}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Duration</h3>
            <div className="w-12 h-1 bg-white mb-4 rounded-full"></div>
            <p className="text-[#a1a1a1] text-lg">{duration}</p>
          </div>
        </div>

        {children}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-white text-black shadow-2xl transition-all duration-300 z-50 hover:scale-110 active:scale-95 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </main>
  );
}
