import { Download } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-[#f5f5f0] text-black">
      <div className="px-4 md:px-8 lg:px-20 max-w-[1600px] mx-auto py-24 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-24">
        {/* Mobile/tablet only: title, then image, before the text block */}
        <h2 className="lg:hidden w-full text-3xl font-clash font-bold uppercase tracking-[0.02em]">About</h2>
        <div className="lg:hidden w-full">
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-gray-200">
            <img 
              src="/about-profile.jpg" 
              alt="About Vinicius" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/profile/800/800';
              }}
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col items-start gap-8">
          <h2 className="hidden lg:block text-3xl md:text-5xl font-clash font-bold uppercase tracking-[0.02em]">About</h2>
          <div className="text-lg md:text-xl leading-relaxed text-[#333] space-y-6 max-w-3xl">
            <p>
              My journey began with a degree in Psychology, which gave me a unique, analytical perspective on human behavior and decision-making. I integrated this background with Graphic Design and later consolidated my expertise in UX/UI Design.
            </p>
            <p>
              This hybrid foundation shapes how I work: before proposing a solution, I build well-formed research hypotheses and run interviews that surface the real problem — not just the one stated in the brief. I bring three things to every team: clarity to translate business logic into user experience, genuine listening through real research, and persistence to keep going until the right problem is solved.
            </p>
            <p>
              With over 5 years of experience, I help SaaS products — B2B and B2C — grow through better acquisition and retention, with my experience in wellness and fitness, including gamification logic for engagement.
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

        {/* Desktop only: image in its own right-hand column */}
        <div className="hidden lg:flex w-full lg:w-1/3 justify-end">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-gray-200">
            <img 
              src="/about-profile.jpg" 
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
