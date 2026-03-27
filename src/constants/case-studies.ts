import { CaseStudyData } from '../types';

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  'blinkplanet': {  
    slug: 'blinkplanet',
    title: "Blinkplanet Explorer",
    subtitle: "App designed to drive user acquisition and ecosystem conversion for BlinkPlanet’s Web3 Marketplace",
    role: "Product Designer",
    project: "WEB3 Telegram APP",
    duration: "2025",
    hero: {
      type: 'phones',
      phones: [
        { id: 'monad', src: '/homepage-monad.png', alt: 'Monad', targetX: "-140%", targetY: 24, rotate: -12, zIndex: 10, delay: 0.1 },
        { id: 'default', src: '/homepage-default.png', alt: 'Default', targetX: "-50%", targetY: 0, rotate: -6, zIndex: 30, delay: 0.2 },
        { id: 'exo', src: '/homepage-exo.png', alt: 'Exo', targetX: "50%", targetY: 8, rotate: 6, zIndex: 20, delay: 0.3 },
        { id: 'blinkday', src: '/homepage-blinkday.png', alt: 'Blinkday', targetX: "140%", targetY: 32, rotate: 12, zIndex: 10, delay: 0.4 }
      ],
      glowColor: "#7c3aed",
      bgColor: "#050505"
    },
    sections: [
      {
        label: "The Challenge",
        title: "How to scale user acquisition for BlinkPlanet?",
        content: "The Web3 ecosystem evolves rapidly, but onboarding traditional users remains a major hurdle. With the rise of Telegram Web Apps (tap-to-earn style), there was a prime opportunity to attract highly engaged users. My challenge as a Product Designer was to figure out how to build a social app that wasn't just a 'clicker,' but a powerful traffic and conversion engine to strengthen the BlinkPlanet ecosystem.",
        type: 'text'
      },
      {
        label: "Discovery",
        title: "Initial Strategy",
        content: "I analyzed the explosion of Telegram communities using simple reward mechanics for retention. My hypothesis was that integrating a Social App directly with BlinkPlanet would significantly reduce Customer Acquisition Cost (CAC). Due to an aggressive time-to-market, I collaborated with the team to prioritize a High-Fidelity MVP. I chose this approach to ensure a premium first impression and allow for live iterations based on real-time user feedback.",
        type: 'text'
      },
      {
        label: "MVP",
        title: "First Version",
        content: "I built the product's foundation on classic gamification mechanics to drive immediate engagement, with the core goal of converting casual visitors into active participants.",
        type: 'list',
        items: [
          "Tapping & Tasks: Instant point gratification.",
          "Ranking & Referral: Driving organic virality.",
          "Shop (Digital Assets): Direct exposure to the parent platform's marketplace.",
          "Skins: UI customization as a visual retention tool."
        ],
        image: {
          src: '',
          alt: 'MVP Screens',
          type: 'grid',
          gridImages: [
            { src: '/old-home.png', alt: 'Home Screen' },
            { src: '/tasks.png', alt: 'Tasks Screen' },
            { src: '/referral.png', alt: 'Referral Screen' },
            { src: '/Leaderboard.png', alt: 'Leaderboard Screen' }
          ]
        }
      },
      {
        label: "Iteration",
        title: "Data driven iteration: The turning point",
        content: "Beyond refining UI components, I decided to shift the user experience from 'passive clicking' to an 'active strategy'. To achieve this, I integrated key business goals into the UX, introducing three core experience layers:",
        type: 'list',
        items: [
          "Gamified Missions & Social Challenges: Shifting the focus from solo farming to collaborative, community-driven play.",
          "Asset Ownership Integration: Linking gameplay success directly to BlinkPlanet’s collections and events.",
          "Solving the Web3 Friction (BPX Points Utility): I mapped a flow where users could exchange earned BPX Points for gas fees. This design choice removed one of the biggest friction points in Web3 adoption—the need to hold crypto for every transaction.",
        ],
        image: {
          src: '',
          alt: 'Iteration Screens',
          type: 'grid',
          gridImages: [
            { src: '/bpx_tapping.gif', alt: 'Tapping Interaction' },
            { src: '/gif-skins.gif', alt: 'Skins Showcase' },
            { src: '/blink-runner.gif', alt: 'Runner Gameplay' }
          ]
        }
      },
      {
        label: "The Conclusion",
        title: "Strategy Outcome",
        content: "By aligning the gamified UX with clear performance goals, my design solution transformed the interface into a sustainable monetization engine. It extended user lifetime value and successfully positioned BlinkPlanet as a highly accessible bridge between traditional users and Web3 experiences.",
        type: 'text'
      },
    ],
    resultsTitle: "Market Impact & Results",
    results: [
      { value: 7000, suffix: "+", description: "Unique users reached at launch." },
      { value: 38, suffix: "%", description: "User migration rate from the social app to the main platform." },
      { value: 889, format: false, description: "Digital assets sold, generating direct revenue impact." }
    ],
    footerSections: [
      {
        label: "Learnings",
        title: "Strategic Evolution & UX Leadership",
        content: "Leading the BPX project enhanced my strategic communication with stakeholders and validated the impact of documenting high-performance usability logic. Most importantly, it sharpened my logical thinking in seamlessly integrating core business needs with a meaningful end-user experience. By applying Design Thinking, I translated raw data into creative solutions, precisely adapting the product to evolving challenges. This journey proved that combining grounded design with rapid feedback loops is the key to solid, scalable results.",
        type: 'text'
      }
    ],
    nextProject: { title: "Blinkplanet Álbum Feature", slug: "album" },
    previousProject: { title: "Blinkplanet Álbum Feature", slug: "album" }
  },
  'album': {
    slug: 'album',
    title: "Blinkplanet Álbum Feature",
    subtitle: "Transforming nostalgia-driven collecting into a revenue engine, generating R$60k+ in digital asset sales.",
    role: "Product Designer",
    project: "Digital Album for a Web3 Marketplace",
    duration: "4 months",
    hero: {
      type: 'window',
      windowImage: '/gif-album.gif',
      windowAlt: 'Album Interface',
      glowColor: "#3b82f6",
      bgColor: "#050505"
    },
    sections: [
      {
        label: "The Challenge",
        title: "Bridging the gap between Web2 and Web3",
        content: "Web3 marketplaces often face retention challenges. After the initial purchase, users frequently disengage until the next speculation opportunity arises. The goal of this project was to break the 'cold' nature of purely financial transactions by creating an emotional, recurring experience, bringing the nostalgia of physical sticker albums (Web2) into the digital landscape (Web3).",
        type: 'text'
      },
      {
        label: "Strategy",
        title: "Leveraging the Power of Nostalgia",
        content: "We identified that the most effective way to educate and engage users was through Emotional Design. By utilizing the familiar mental model of physical sticker albums, we simplified the digital transition.",
        type: 'list',
        items: [
          "The Trigger: Gamification based on scarcity and rewards (prizes for completing the album).",
          "The Objective: To transform an NFT purchase into a meaningful step within a playful collection, significantly increasing User LTV (Lifetime Value)."
        ],
        image: {
          src: '/bahia-cover.png',
          alt: 'Album Cover Interface',
          type: 'mockup'
        }
      },
      {
        label: "Delivery & Execution",
        title: "Agile Prototyping & Architecture",
        content: "Facing an aggressive time-to-market, I prioritized a High-Fidelity MVP. Instead of lengthy wireframing cycles, we moved straight to high-fidelity prototypes. This allowed for rapid usability testing and immediate transition to development, ensuring the creative vision was maintained despite the tight deadline.",
        type: 'list',
        items: [
          "Single-Page Experience: Designed a unified layout to maintain user focus and ensure a fluid visual distribution of stickers.",
          "Bookmark System: To streamline navigation within a vast inventory, I implemented a side-marker system for quick category jumps.",
          "Constant Feedback: Integrated a persistent progress bar in the footer, turning the navigation into a visual journey of achievement."
        ],
        image: {
          src: '/index_bahia_desktop.png',
          alt: 'Strategic Routing Interface',
          type: 'mockup'
        }
      },
      {
        label: "Results",
        title: "Strategic Routing & Conversion",
        content: "To convert the desire for collecting into actual revenue, I designed a Smart Routing flow for empty album slots. This logic balanced direct platform revenue with secondary market liquidity, positioning the album as the central transaction engine of the ecosystem.",
        type: 'text',
        image: {
          src: '',
          alt: 'Additional Desktop Mockups',
          type: 'grid',
          gridImages: [
            { src: '/gols-bahia.png', alt: 'Gols Interface' },
            { src: '/assets-buy.png', alt: 'Assets Interface' }
          ]
        }
      }
    ],
    resultsTitle: "Market Impact & Results",
    results: [
      { value: 60, prefix: "R$ ", suffix: "k+", description: "in Direct Revenue" },
      { value: 3500, suffix: "+", description: "New Users acquired" },
      { value: 15, prefix: "+", suffix: "%", description: "Increase in Secondary Market" }
    ],
    nextProject: { title: "Blinkplanet Explorer", slug: "blinkplanet" },
    previousProject: { title: "Blinkplanet Explorer", slug: "blinkplanet" }
  }
};
