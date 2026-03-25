import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full flex flex-col z-50">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-20 py-6 md:py-10 w-full bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5">
        <Link 
          to="/" 
          className="text-sm font-semibold tracking-[1px] uppercase z-50 hover:opacity-70 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Vinicius H.
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 md:gap-10">
          <Link to="/#selected-works" className="text-white text-[13px] uppercase tracking-[0.5px] opacity-80 hover:opacity-100 transition-opacity">
            Selected works
          </Link>
          <Link to="/#about" className="text-white text-[13px] uppercase tracking-[0.5px] opacity-80 hover:opacity-100 transition-opacity">
            About
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="sm:hidden text-white opacity-80 hover:opacity-100 transition-opacity z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-8 py-10 bg-[#0d0d0d] border-b border-[#222] sm:hidden w-full shadow-2xl absolute top-full left-0"
          >
            <Link to="/#selected-works" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[13px] uppercase tracking-[1px] opacity-80 hover:opacity-100 transition-opacity">
              Selected works
            </Link>
            <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[13px] uppercase tracking-[1px] opacity-80 hover:opacity-100 transition-opacity">
              About
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
