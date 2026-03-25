import React from 'react';
import { Link } from 'react-router-dom';
import { Particles } from './Particles';
import { Work } from '../types';

interface WorkCardProps {
  work: Work;
}

export const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const { title, description, tags, imageBgColor, imageUrl, imageClassName, logoUrl, logoClassName, hasParticles, linkTo } = work;
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#111111] border border-[#222] rounded-[2rem] p-4 lg:p-6 items-center transition-transform duration-300 hover:-translate-y-1 hover:border-[#333]">
      <div className={`w-full lg:w-1/2 rounded-2xl overflow-hidden relative aspect-[4/3] lg:aspect-auto lg:h-[400px] flex items-center justify-center ${imageBgColor}`}>
        {hasParticles && (
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color="#ffffff"
            refresh
          />
        )}
        {logoUrl && (
          <img 
            src={logoUrl} 
            alt={`${title} logo`} 
            className={`absolute z-20 ${logoClassName || 'w-32 top-8'}`} 
            referrerPolicy="no-referrer"
          />
        )}
        <img 
          src={imageUrl} 
          alt={title} 
          className={`z-10 transition-transform duration-500 ${imageClassName || 'relative w-[85%] h-[85%] rounded-xl shadow-2xl object-cover hover:scale-105'}`} 
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 py-4 lg:pr-8">
        <h3 className="text-2xl lg:text-4xl font-bold leading-tight text-white">
          {title}
        </h3>
        <p className="text-[#a1a1a1] text-lg leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span key={index} className="px-4 py-2 rounded-full border border-[#333] text-sm text-[#ccc] bg-[#1a1a1a]">
              {tag}
            </span>
          ))}
        </div>
        {linkTo ? (
          <Link to={linkTo} className="mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-[#e0e0e0] transition-colors">
            View Case
          </Link>
        ) : (
          <button className="mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-[#e0e0e0] transition-colors">
            View Case
          </button>
        )}
      </div>
    </div>
  );
}
