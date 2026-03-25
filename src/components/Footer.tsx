import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm text-[#a1a1a1]">
          © {new Date().getFullYear()} Vinicius Pereira. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/viniciushper/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a1a1a1] hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:viniciushp183@gmail.com" 
            className="text-[#a1a1a1] hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
