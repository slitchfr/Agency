import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, ShieldCheck, Zap, Space as SpaceIcon, Globe, Compass } from 'lucide-react';
import ContactButton from './ContactButton';

interface PricingSectionProps {
  onContactClick: () => void;
}

const pricingPlans = [
  {
    name: "Décollage",
    icon: Compass,
    price: "4 500 €",
    duration: "par projet",
    desc: "Idéal pour propulser une identité de marque moderne avec des assets 3D optimisés.",
    color: "from-zinc-500 via-zinc-400 to-zinc-600",
    glow: "rgba(255,255,255,0.02)",
    features: [
      "Direction artistique & Moodboard spatial",
      "Identité de marque & Logotype 3D",
      "3 Renders haute résolution exclusifs",
      "Intégration Web vitrine ultra-rapide (1 page)",
      "Optimisation SEO & Hébergement cloud",
      "Support premium pendant 30 jours"
    ]
  },
  {
    name: "Spatiale",
    icon: SpaceIcon,
    price: "8 900 €",
    duration: "par projet",
    desc: "Notre formule signature. Une immersion digitale absolue combinant 3D interactive & stratégie de conversion.",
    color: "from-purple-600 via-pink-600 to-amber-600",
    glow: "rgba(182, 0, 168, 0.15)",
    popular: true,
    features: [
      "Tout le pack Décollage inclus",
      "Identité de marque complète (Brand Book)",
      "Modélisation de 5 Objets / Scènes 3D",
      "1 Vidéo de Motion Design (15-30s)",
      "Site Web Immersif complet (Jusqu'à 5 pages)",
      "Effets d'animations au défilement (Scroll-Driven)",
      "Accompagnement marketing digital stratège (1 mois)",
      "Support dédié Slack 24/7"
    ]
  },
  {
    name: "Cosmos",
    icon: Globe,
    price: "Sur Mesure",
    duration: "",
    desc: "Pour les marques d'élite qui visent le sommet de la galaxie numérique. Expériences web 3D interactives de pointe.",
    color: "from-indigo-600 via-purple-600 to-pink-600",
    glow: "rgba(119, 33, 177, 0.2)",
    features: [
      "Conception tridimensionnelle sur-mesure",
      "Maillages 3D interactifs temps réel (Three.js/React-Three)",
      "Motion Design & Identité sonore de marque",
      "Stratégie de Growth Marketing multi-canaux",
      "Plateforme Web complexe (E-commerce / SaaS premium)",
      "Performances optimisées à l'extrême",
      "Audit UX psychologique des visiteurs",
      "Équipe dédiée & Support technique à vie"
    ]
  }
];

export default function PricingSection({ onContactClick }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section 
      id="services-section" // Link 'Price' to services/pricing block elegantly or make sure services sections are seamless
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeIn delay={0} y={30}>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-purple-400 bg-purple-950/40 px-4 py-1.5 rounded-full border border-purple-800/30">
              OFFRES & ACCOMPAGNEMENT
            </span>
          </FadeIn>
          
          <FadeIn delay={0.10} y={40} className="mt-4">
            <h2 
              className="hero-heading font-black uppercase leading-tight select-none"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 110px)',
              }}
            >
              INVESTISSEMENT
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="max-w-xl mx-auto mt-6 text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-widest font-light leading-relaxed">
            Des packages conçus pour convertir votre audience d&apos;élites. Pas de jargon complexe, juste un impact visuel inégalé.
          </FadeIn>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, i) => {
            const IconComponent = plan.icon;
            return (
              <FadeIn 
                key={plan.name}
                delay={i * 0.15}
                y={40}
                className="flex"
              >
                <div 
                  className={`relative w-full rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 bg-zinc-950/60 backdrop-blur-md border border-[#D7E2EA]/10 flex flex-col justify-between transition-all duration-500 hover:border-purple-500/30 group ${
                    plan.popular ? 'ring-2 ring-purple-600/50 shadow-[0_15px_40px_rgba(182,0,168,0.1)]' : ''
                  }`}
                  style={{
                    boxShadow: plan.popular ? `inset 0 0 30px rgba(119,33,177,0.1), 0 10px 30px ${plan.glow}` : `0 10px 30px ${plan.glow}`
                  }}
                >
                  {/* Subtle hover glow sphere */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent blur-2xl group-hover:from-purple-500/20 transition-all duration-500 rounded-full" />

                  {/* Top content */}
                  <div>
                    {plan.popular && (
                      <div className="absolute top-5 right-5 bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        Plus Demandé
                      </div>
                    )}

                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-purple-400">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-widest text-[#D7E2EA]">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="text-sm font-light text-[#D7E2EA]/60 leading-relaxed min-h-[50px] mb-6">
                      {plan.desc}
                    </p>

                    {/* Cost section */}
                    <div className="border-t border-[#D7E2EA]/10 pt-6 mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        {plan.duration && (
                          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">
                            {plan.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="flex flex-col gap-4 mb-10">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3.5 text-xs sm:text-sm text-[#D7E2EA]/80 font-light">
                          <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#D7E2EA]/10 w-full flex items-center justify-center">
                    <ContactButton 
                      id={`pricing-btn-${plan.name.toLowerCase()}`}
                      onClick={onContactClick} 
                      label={`S'engager · Pack ${plan.name}`}
                    />
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Security badge addon */}
        <FadeIn delay={0.4} y={20} className="w-full flex justify-center mt-12 sm:mt-16">
          <div className="flex items-center gap-3 bg-zinc-950/80 px-6 py-3 rounded-full border border-zinc-800 text-zinc-400 text-xs sm:text-sm tracking-wide">
            <ShieldCheck className="text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Tous nos contrats incluent une assurance de livraison et un accord de confidentialité stricte.</span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
