import React from 'react';

export interface Work {
  title: string;
  description: string;
  tags: string[];
  imageBgColor: string;
  imageUrl: string;
  imageClassName?: string;
  logoUrl?: string;
  logoClassName?: string;
  hasParticles?: boolean;
  linkTo?: string;
}

export interface CaseStudyHeroData {
  type: 'phones' | 'window';
  phones?: Array<{
    id: string;
    src: string;
    alt: string;
    targetX: string;
    targetY: number;
    rotate: number;
    zIndex: number;
    delay: number;
  }>;
  windowImage?: string;
  windowAlt?: string;
  glowColor: string;
  bgColor: string;
}

export interface CaseStudySection {
  label: string;
  title: string;
  content: React.ReactNode | string;
  type?: 'text' | 'list' | 'image' | 'grid';
  items?: string[];
  image?: {
    src: string;
    alt: string;
    type?: 'mockup' | 'full' | 'grid';
    gridImages?: Array<{ src: string; alt: string }>;
  };
}

export interface CaseStudyResult {
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  format?: boolean;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  project: string;
  duration: string;
  hero: CaseStudyHeroData;
  sections: CaseStudySection[];
  resultsTitle: string;
  results: CaseStudyResult[];
  footerSections?: CaseStudySection[];
  nextProject: {
    title: string;
    slug: string;
  };
  previousProject: {
    title: string;
    slug: string;
  };
}
