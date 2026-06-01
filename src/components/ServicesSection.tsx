import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Box, Play, Sparkles, Orbit, Smartphone, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    num: "01",
    name: "Modélisation 3D Custom",
    desc: "Création d'objets tridimensionnels haut de gamme, personnages et maquettes d'environnements spatiaux configurés pour de l'immersion interactive Web, Gaming & Réalité Augmentée.",
    icon: Box,
    badge: "Spatial 3D"
  },
  {
    num: "02",
    name: "Rendus Haute Couture",
    desc: "Production audiovisuelle de scènes et mockups d'un réalisme frappant. Matériaux exclusifs, physiques optiques calibrées de précision pour ébahir vos clients.",
    icon: Sparkles,
    badge: "Ray-Tracing"
  },
  {
    num: "03",
    name: "Motion Design Immersif",
    desc: "Mises en mouvement de schémas, reveal de logo spatio-temporel et animations narratives de produits pour dynamiser les récits de votre marque unique.",
    icon: Play,
    badge: "60 FPS"
  },
  {
    num: "04",
    name: "Identité de Marque Spatiale",
    desc: "Ingénierie de marque globale (architecture de logo, palettes chromatiques nocturnes, pack typographique premium) pour marquer durablement le subconscient de l'utilisateur.",
    icon: Orbit,
    badge: "Branding"
  },
  {
    num: "05",
    name: "Web & Expériences Cyber",
    desc: "Conception, développement et déploiement de portails internet à très fort taux de conversion, optimisés pour la fluidité des micro-interactions immersives.",
    icon: Smartphone,
    badge: "UI / UX Elite"
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="services-section" 
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32 w-full relative z-20 overflow-hidden"
    >
      
      {/* Background design accents */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-zinc-100/40 blur-[100px] pointer-events-none" />

      {/* Container */}
      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Subhead tag */}
        <FadeIn delay={0} y={20} className="mb-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0B0B0C] bg-zinc-100 px-4 py-1.5 rounded-full border border-zinc-200">
            STRIMY CAPABILITIES
          </span>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05} y={40} className="w-full text-center">
          <h2 
            className="font-black uppercase tracking-tight text-[#0C0C0C] leading-[0.95] mb-16 sm:mb-20 md:mb-24 select-none"
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 130px)',
            }}
          >
            PRESTATIONS
          </h2>
        </FadeIn>

        {/* Dynamic Interactive Services List */}
        <div className="w-full flex flex-col border-t border-[#0C0C0C]/10">
          {servicesData.map((service, i) => {
            const IconComponent = service.icon;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full border-b border-[#0C0C0C]/10 transition-all duration-500 relative group cursor-pointer overflow-hidden py-8 sm:py-10 md:py-12"
              >
                {/* Visual expansion backdrop on hover */}
                <div 
                  className="absolute inset-0 bg-neutral-50/80 transition-all duration-500 -z-10" 
                  style={{
                    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'bottom',
                  }}
                />

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 px-2 sm:px-6 relative z-10">
                  
                  {/* Left row info */}
                  <div className="flex items-center gap-6 sm:gap-10 flex-1">
                    
                    {/* Number + Indicator */}
                    <div className="flex items-center gap-4">
                      <span 
                        className={`font-black leading-none select-none transition-colors duration-400 ${
                          isHovered ? 'text-purple-600' : 'text-[#0C0C0C]'
                        }`}
                        style={{
                          fontSize: 'clamp(2.5rem, 8vw, 110px)',
                        }}
                      >
                        {service.num}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <h3 
                          className="font-bold uppercase text-[#0C0C0C] tracking-tight group-hover:text-purple-900 transition-colors"
                          style={{
                            fontSize: 'clamp(1rem, 2.2vw, 1.85rem)',
                          }}
                        >
                          {service.name}
                        </h3>
                        {/* Elite label badge */}
                        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-500 border border-zinc-200">
                          {service.badge}
                        </span>
                      </div>
                      
                      <p 
                        className="font-light text-zinc-600 leading-relaxed max-w-2xl text-xs sm:text-sm md:text-base"
                      >
                        {service.desc}
                      </p>
                    </div>

                  </div>

                  {/* Right: Premium Hover Icon/Metric */}
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <div className={`p-4 rounded-full border transition-all duration-400 ${
                      isHovered ? 'bg-purple-600 border-purple-500 text-white rotate-45 scale-110' : 'bg-transparent border-[#0C0C0C]/10 text-[#0C0C0C]/40'
                    }`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
