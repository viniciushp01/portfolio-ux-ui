import { Hero } from '../components/Hero';
import { WorkCard } from '../components/WorkCard';
import { About } from '../components/About';
import { SELECTED_WORKS } from '../constants/works';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Selected Works Section */}
      <section id="selected-works" className="px-4 md:px-8 lg:px-20 max-w-[1600px] mx-auto py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Selected Works</h2>
        
        <div className="flex flex-col gap-10 lg:gap-16">
          {SELECTED_WORKS.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>
      </section>

      <About />
    </main>
  );
}
