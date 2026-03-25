import { Work } from '../types';

export const SELECTED_WORKS: Work[] = [
  {
    title: "Bringing 7,000+ new users to BlinkPlanet Marketplace through Explorer social-app",
    description: "App designed to drive user acquisition and ecosystem conversion for BlinkPlanet’s Web3 Marketplace",
    tags: ["Gamification", "WEB3", "Web App"],
    imageBgColor: "bg-[#050505]",
    logoUrl: "/explorer-logo.png",
    logoClassName: "w-[65%] max-w-[300px] top-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-transform duration-500 hover:scale-105",
    imageUrl: "/hero-image.png",
    imageClassName: "absolute bottom-0 w-[60%] max-w-[350px] h-auto object-cover rounded-t-xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] translate-y-4 hover:-translate-y-2",
    hasParticles: true,
    linkTo: "/case-study/blinkplanet"
  },
  {
    title: "Generating R$60k+ in digital asset sales.",
    description: "BlinkPlanet feature designed to transform nostalgia-driven collecting into a revenue engine",
    tags: ["Web3", "Interface Architecture", "UX Design"],
    imageBgColor: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a] via-[#050505] to-[#000000]",
    imageUrl: "/gif-album.gif",
    imageClassName: "relative w-[85%] h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover hover:scale-105 transition-transform duration-500 z-10",
    hasParticles: true,
    linkTo: "/case-study/album"
  }
];
