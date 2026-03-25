import { Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-4 md:px-8 lg:px-20 max-w-[1600px] mx-auto pt-[120px] md:pt-[152px] lg:pt-[160px] pb-12 lg:pb-0">
      <div className="mt-12 lg:mt-10 max-w-4xl">
        <h1 className="text-[clamp(48px,8vw,92px)] font-semibold leading-[0.95] tracking-[-3px] mb-12">
          Hi, I'm Vinicius.<br />
          <span className="text-[#a1a1a1]">Product Designer</span>
        </h1>

        <div className="flex flex-wrap gap-4 mb-20">
          <a 
            href="mailto:viniciushp183@gmail.com" 
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm font-bold tracking-[0.5px] rounded-full hover:-translate-y-0.5 hover:bg-[#e0e0e0] transition-all duration-300"
          >
            Send me a message
          </a>
          <a 
            href="https://www.linkedin.com/in/viniciushper/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#333] bg-[#1a1a1a] text-white px-8 py-4 text-sm font-bold tracking-[0.5px] rounded-full hover:-translate-y-0.5 hover:bg-[#222] transition-all duration-300"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        <div className="max-w-[550px] text-lg leading-[1.6] text-[#a1a1a1] space-y-5">
          <p>Focused on solving complex problems and creating solutions that go beyond UI.</p>
          <p>With 4 years of experience, I help scale products through user-centered design and a strong business mindset.</p>
        </div>
      </div>
    </section>
  );
}
