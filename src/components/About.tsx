import { Download } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-[#f5f5f0] text-black">
      <div className="px-4 md:px-8 lg:px-20 max-w-[1600px] mx-auto py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-2/3 flex flex-col items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">About</h2>
          <div className="text-lg md:text-xl leading-relaxed text-[#333] space-y-6 max-w-3xl">
            <p>
              My journey began with a degree in Psychology, which gave me a unique, analytical perspective on human behavior and decision-making. I integrated this background with Graphic Design and later consolidated my expertise in UX/UI Design.
            </p>
            <p>
              This hybrid foundation allows me to lead design processes with a deep understanding of user psychology. With over 4 years of experience as a Product Designer, I leverage this background to build interfaces that are not just visually compelling, but strategically grounded in user cognition. My focus is on decoding complex business requirements into digital products that deliver the perfect balance of empathy, scalability, and measurable business outcomes.
            </p>
          </div>
          <a 
            href="/CV_ViniciusPereira_EN.pdf" 
            download="CV_ViniciusPereira_EN.pdf"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#222] transition-all"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-gray-200">
            <img 
              src="/about-profile.jpeg" 
              alt="About Vinicius" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/profile/800/800';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
