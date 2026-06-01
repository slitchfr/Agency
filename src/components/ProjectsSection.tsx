import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import LiveProjectButton from './LiveProjectButton';
import FadeIn from './FadeIn';
import { ArrowUpRight, Cpu, Eye, Layers } from 'lucide-react';

const projects = [
  {
    num: "01",
    category: "Projet Partenaire",
    name: "Nextlevel Studio",
    tech: "Cycles Engine / 8K Renders",
    stat: "Conversion +45%",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    category: "Expérience de Marque",
    name: "Aura Brand Identity",
    tech: "Octane Render / Vecteur IA",
    stat: "Trafique +320%",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    category: "Projet Partenaire",
    name: "Solaris Digital",
    tech: "Unreal 5.4 / Web3 Integration",
    stat: "Reach Intégral",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

interface ProjectCardProps {
  project: typeof projects[number];
  index: number;
  totalCards: number;
  key?: string | number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the viewport specifically to animate scale
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.035;
  
  // Scale down from 1 to targetScale as we scroll down and leave this section
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, targetScale]);

  return (
    <div 
      ref={cardRef}
      className="relative w-full min-h-[90vh] md:min-h-screen flex items-start justify-center pb-12 pt-8"
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div 
        style={{ 
          scale,
          top: `${130 + index * 32}px`,
        }}
        className="sticky w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] border border-[#D7E2EA]/20 bg-[#0E0E10]/95 backdrop-blur-xl p-5 sm:p-7 md:p-10 lg:p-12 flex flex-col justify-between max-w-6xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative"
      >
        {/* Futuristic glowing node lines inside project cards */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Top row */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#D7E2EA]/10 pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Project Number */}
            <span 
              className="font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#D7E2EA]/30 leading-none select-none"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 100px)',
              }}
            >
              {project.num}
            </span>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-black">
                  {project.category}
                </span>
                <span className="w-1 h-1 bg-[#D7E2EA]/30 rounded-full" />
                <span className="text-[#D7E2EA]/40 text-[9px] font-mono tracking-widest uppercase">
                  {project.tech}
                </span>
              </div>
              <h3 className="text-[#D7E2EA] font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight uppercase leading-none">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Micro marketing telemetry block */}
            <div className="hidden md:flex flex-col text-right font-mono text-[9px] tracking-widest text-[#D7E2EA]/40 uppercase">
              <span className="text-[#B600A8] font-bold">RÉSULTAT DIRECT</span>
              <span>{project.stat}</span>
            </div>
            
            <LiveProjectButton label="Explorer l'Univers" href="https://motionsites.ai" />
          </div>
        </div>

        {/* Bottom row: Two-column grid with premium layout boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5 sm:gap-7 mt-8 items-stretch flex-1">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-5 sm:gap-7 justify-between h-full">
            <div 
              className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-zinc-950 border border-[#D7E2EA]/15 w-full relative group shadow-lg"
              style={{
                height: 'clamp(140px, 18vw, 240px)',
              }}
            >
              <div className="absolute inset-0 bg-[#0C0C0C]/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <p className="text-white text-xs uppercase font-bold tracking-widest flex items-center gap-1.5 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  <Eye className="w-3.5 h-3.5" /> ZOOM MACRO
                </p>
              </div>
              <img 
                src={project.images.col1_1} 
                alt={`${project.name} A`} 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div 
              className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-zinc-950 border border-[#D7E2EA]/15 w-full relative group shadow-lg"
              style={{
                height: 'clamp(170px, 24vw, 350px)',
              }}
            >
              <div className="absolute inset-0 bg-[#0C0C0C]/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <p className="text-white text-xs uppercase font-bold tracking-widest flex items-center gap-1.5 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  <Layers className="w-3.5 h-3.5" /> EXPLORATION MATÉRIAUX
                </p>
              </div>
              <img 
                src={project.images.col1_2} 
                alt={`${project.name} B`} 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall images */}
          <div className="md:col-span-6 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-zinc-950 border border-[#D7E2EA]/15 min-h-[280px] md:min-h-full relative group shadow-lg">
            <div className="absolute inset-0 bg-[#0C0C0C]/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <p className="text-white text-xs uppercase font-bold tracking-widest flex items-center gap-1.5 bg-black/60 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                <Cpu className="w-3.5 h-3.5 animate-pulse" /> RENDU CYBER SPATIAL 8K
              </p>
            </div>
            <img 
              src={project.images.col2} 
              alt={`${project.name} Large`} 
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] hover:scale-105 transition-transform duration-700 min-h-[280px] md:min-h-full"
            />
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section 
      id="projects-section" 
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 pb-32 px-5 sm:px-8 md:px-10 relative z-30"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header content with tags representing the agency focus */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={20} className="mb-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-purple-400 bg-purple-950/20 px-4 py-1.5 rounded-full border border-purple-800/30">
              RÉFÉRENCES IMMERSIVES
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1} y={40} className="w-full text-center">
            <h2 
              className="hero-heading font-black uppercase tracking-tight text-center leading-none select-none py-2"
              style={{
                fontSize: 'clamp(2.5rem, 9vw, 130px)',
              }}
            >
              RÉALISATIONS
            </h2>
          </FadeIn>
        </div>

        {/* Cards Stacking Parent with relative alignment */}
        <div className="relative flex flex-col items-center">
          {projects.map((proj, i) => (
            <ProjectCard 
              key={proj.num} 
              project={proj} 
              index={i} 
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
