import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <>
      <span className="text-sm font-semibold tracking-widest uppercase text-[#a1a1a1] mb-4 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
        {title}
      </h2>
    </>
  );
}
