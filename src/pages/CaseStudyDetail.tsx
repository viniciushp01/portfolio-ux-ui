import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { ContentSection } from '../components/ContentSection';
import { ResultsImpact } from '../components/ResultsImpact';
import { CASE_STUDIES } from '../constants/case-studies';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? CASE_STUDIES[slug] : null;

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div key={slug}>
      <CaseStudyLayout
        title={data.title}
        subtitle={data.subtitle}
        role={data.role}
        project={data.project}
        duration={data.duration}
      >
      <CaseStudyHero hero={data.hero} />

      <div className="space-y-32">
        {data.sections.map((section, idx) => (
          <ContentSection key={idx} section={section} />
        ))}

        <ResultsImpact title={data.resultsTitle} results={data.results} />
        
        {data.footerSections && data.footerSections.map((section, idx) => (
          <ContentSection key={`footer-${idx}`} section={section} />
        ))}

        {/* Project Navigation */}
        <section className="pt-20 border-t border-[#222] flex flex-col md:flex-row justify-between gap-8 pb-10">
          {data.previousProject.slug === data.nextProject.slug ? (
            <>
              <Link 
                to="/" 
                className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1"
              >
                <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
                  <ChevronLeft size={20} />
                  <span className="text-sm font-semibold uppercase tracking-widest">Back to Works</span>
                </div>
                <h4 className="text-2xl font-bold text-white">Full Portfolio</h4>
              </Link>
              
              <Link 
                to={`/case-study/${data.nextProject.slug}`} 
                className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1 text-right items-end"
              >
                <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
                  <span className="text-sm font-semibold uppercase tracking-widest">Next Project</span>
                  <ChevronRight size={20} />
                </div>
                <h4 className="text-2xl font-bold text-white">{data.nextProject.title}</h4>
              </Link>
            </>
          ) : (
            <>
              <Link 
                to={`/case-study/${data.previousProject.slug}`} 
                className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1"
              >
                <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
                  <ChevronLeft size={20} />
                  <span className="text-sm font-semibold uppercase tracking-widest">Previous Project</span>
                </div>
                <h4 className="text-2xl font-bold text-white">{data.previousProject.title}</h4>
              </Link>
              
              <Link 
                to={`/case-study/${data.nextProject.slug}`} 
                className="group flex flex-col gap-4 p-8 rounded-3xl border border-[#222] bg-[#0a0a0a] hover:border-[#444] transition-all duration-300 flex-1 text-right items-end"
              >
                <div className="flex items-center gap-2 text-[#a1a1a1] group-hover:text-white transition-colors">
                  <span className="text-sm font-semibold uppercase tracking-widest">Next Project</span>
                  <ChevronRight size={20} />
                </div>
                <h4 className="text-2xl font-bold text-white">{data.nextProject.title}</h4>
              </Link>
            </>
          )}
        </section>
      </div>
    </CaseStudyLayout>
  </div>
);
}
