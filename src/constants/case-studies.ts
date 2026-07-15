import { CaseStudyData } from '../types';

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  'teamapp': {
    slug: 'teamapp',
    title: "TeamApp",
    subtitle: "Designing a coach-athlete management system that started as a headcount problem and grew into the operational backbone of a real fitness community.",
    role: "Product Designer",
    project: "Mobile App · Functional Fitness Community, Belo Horizonte",
    duration: "Since April 2026",
    hero: {
      type: 'banner',
      bannerImage: '/hero-teamapp.png',
      bannerAlt: 'TeamApp athlete homepage open on a phone, held in hand at an outdoor training space',
      bannerTitle: 'TeamApp',
      bannerSubtitle: 'Ready to challenge your limits?',
      glowColor: "#22d3ee",
      bgColor: "#050505"
    },
    sections: [
      {
        label: "The Challenge",
        title: "It wasn't about attendance tracking — it was about planning",
        content: "The first version of this problem wasn't about attendance tracking — it was about planning. The coach didn't know how many students to expect for weekend classes until they showed up, which meant last-minute workout changes with people already on-site. That single blind spot pointed to a bigger pattern: across 180 athletes and 3 coaches, everything ran on WhatsApp and memory — attendance, payments, trial-class follow-up, and knowing which athletes were quietly drifting away. The app grew to solve each of these, in the order the coach actually hit them.",
        type: 'text'
      },
      {
        label: "Key Decisions",
        title: "Check-in was built to solve a planning problem first — then became the foundation for retention",
        content: "A rough headcount guess wasn't enough for the coach to plan a workout around. That's why check-in is a three-step flow: the coach publishes the day's slots, the athlete confirms interest, and the coach validates real presence afterward. Only confirmed check-ins count, which produces attendance data reliable enough to build on — the same data that later powers the ranking below.",
        type: 'text',
        image: {
          src: '',
          alt: 'Check-in flow screens',
          type: 'grid',
          gridImages: [
            { src: '/teamapp-aluno-checkin.jpg', alt: 'Athlete check-in confirmation' },
            { src: '/teamapp-coach-presenca.jpg', alt: 'Coach validating athlete presence' }
          ]
        }
      },
      {
        label: "Key Decisions",
        title: "A monthly ranking, proposed as a retention lever and approved by the coach",
        content: "Once attendance data was reliable, I proposed turning it into a monthly ranking — athletes ranked by days trained in the month, with a prize for whoever finishes first. It's a known pattern in wellness and fitness products: visible progress against peers is one of the more consistent ways to turn a workout into a habit. The coach approved it, and the effect went beyond the leaderboard itself — it gave the community something to talk about and tease each other over, and by the coach's own read, it visibly pushed more athletes to show up for class.",
        type: 'text',
        image: {
          src: '',
          alt: 'Monthly ranking screens',
          type: 'grid',
          gridImages: [
            { src: '/teamapp-ranking.jpg', alt: 'Monthly ranking, top position' },
            { src: '/teamapp-ranking-posicao-aluno.jpg', alt: "Athlete's own position on the ranking" }
          ]
        }
      },
      {
        label: "Key Decisions",
        title: "Payment became a gate, not just a ledger",
        content: "Payment used to mean the coach manually re-reading WhatsApp threads to remember who had paid. Now due dates live in the app, athletes send proof of payment through a button that opens WhatsApp directly to the coach, and he updates status from there. The consequence that mattered most: check-in is now blocked for athletes with overdue payments, closing a gap where people kept training while behind on fees.",
        type: 'text',
        image: {
          src: '',
          alt: 'Payment screens',
          type: 'grid',
          gridImages: [
            { src: '/teamapp-aluno-pagamento.jpg', alt: 'Athlete payment proof submission' },
            { src: '/teamapp-coach-pagamentos.jpg', alt: 'Coach payment and due-date control' }
          ]
        }
      },
      {
        label: "Key Decisions",
        title: "Flagging athletes before they disappear",
        content: "An athlete who's gone 7 days without a class and is also behind on payment is unlikely to come back on their own. Those athletes are now highlighted in both the student management screen and the financial screen, giving the coach a reason to reach out before losing them for good instead of noticing months later.",
        type: 'text',
        image: {
          src: '',
          alt: 'Student management screen with churn risk highlighted',
          type: 'grid',
          gridImages: [
            { src: '/teamapp-coach-alunos.jpg', alt: 'Student management, churn risk flagged' }
          ]
        }
      },
      {
        label: "Key Decisions",
        title: "Trial classes as a small sales funnel",
        content: "Trial athletes used to leave no trace once the class ended. Now the coach can add them with their WhatsApp contact and follow up directly on whether they're converting — turning a one-off visit into a tracked step instead of a guess.",
        type: 'text',
        image: {
          src: '',
          alt: 'Trial athlete screens',
          type: 'grid',
          gridImages: [
            { src: '/teamapp-coach-trial-add.jpg', alt: 'Adding a trial athlete with contact info' },
            { src: '/teamapp-coach-trial.jpg', alt: 'Trial athlete follow-up list' }
          ]
        }
      },
      {
        label: "Key Decisions",
        title: "Team Run as an opt-in layer, not a default",
        content: "Since Team Run is a distinct group from the core functional program, running features stay invisible until an athlete opts in. Inside it, athletes share their own runs to motivate each other, the coach publishes weekly running plans for whoever opted in, and can schedule group runs — a weekend session everyone trains together, for example.",
        type: 'text',
        image: {
          src: '',
          alt: 'Team Run screens',
          type: 'grid',
          gridImages: [
            { src: '/teamapp-aluno-teamrun.jpg', alt: 'Team Run collective feed' },
            { src: '/teamapp-aluno-teamrun-opt.jpg', alt: 'Team Run opt-in screen' }
          ]
        }
      },
      {
        label: "Key Decisions",
        title: "Building like the product had to survive contact with real devices, not just Figma",
        content: "Every feature moved through a staging environment — its own database included — before ever touching production, and testing was never assumed to be platform-agnostic: the same component was checked on both Android and iOS, since the two render and break in different ways. Broken components caught in that loop fed straight back into the design — spacing, states, and edge cases got refined until they held up on every device, not just in the mockup. It's not the part of the job most designers show, but it's what makes handoff with developers fast: decisions arrive already tested against how the product actually behaves, not just how it looks.",
        type: 'text'
      }
    ],
    footerSections: [
      {
        label: "Learnings",
        title: "This wasn't built from a single discovery sprint",
        content: "This wasn't built from a single discovery sprint — it grew one real operational headache at a time, starting from a coach who just wanted to know how many people were showing up on Saturday. Payments, churn flags, and trial follow-up all trace back to something the coach was already doing badly by hand. The ranking is the exception worth calling out: it's the one decision that wasn't a fix for an existing pain, but a retention mechanic I proposed on top of data the app already had.",
        type: 'text'
      }
    ],
    sectionParticles: false,
    nextProject: { title: "Blinkplanet Explorer", slug: "blinkplanet" },
    previousProject: { title: "Blinkplanet Álbum Feature", slug: "album" }
  },
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
    previousProject: { title: "TeamApp", slug: "teamapp" }
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
    nextProject: { title: "TeamApp", slug: "teamapp" },
    previousProject: { title: "Blinkplanet Explorer", slug: "blinkplanet" }
  }
};
