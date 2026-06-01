import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { ShieldCheck, Flame, Compass, Target } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section 
      id="about-section" 
      className="relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none" />

      {/* Absolute Decorative 3D Images - Anchoring premium visual depth */}
      {/* Top-Left Moon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
            alt="Moon 3D Icon" 
            referrerPolicy="no-referrer"
            className="w-[110px] sm:w-[150px] md:w-[190px] h-auto object-contain drop-shadow-[0_8px_30px_rgba(255,255,255,0.06)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left 3D Object */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
            alt="Amorphous 3D Icon" 
            referrerPolicy="no-referrer"
            className="w-[90px] sm:w-[130px] md:w-[160px] h-auto object-contain drop-shadow-[0_8px_30px_rgba(119,33,177,0.2)]"
          />
        </FadeIn>
      </div>

      {/* Top-Right Lego */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
            alt="Lego 3D Icon" 
            referrerPolicy="no-referrer"
            className="w-[110px] sm:w-[150px] md:w-[190px] h-auto object-contain drop-shadow-[0_8px_30px_rgba(255,255,255,0.06)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right Group */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
            alt="Geometric 3D Group Icon" 
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[150px] md:w-[200px] h-auto object-contain drop-shadow-[0_8px_30px_rgba(182,0,168,0.2)]"
          />
        </FadeIn>
      </div>

      {/* Structured content container */}
      <div className="w-full max-w-5xl flex flex-col items-center relative z-20">
        
        {/* Subhead Tag */}
        <FadeIn delay={0} y={20} className="mb-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-purple-400 bg-purple-950/20 px-4 py-1.5 rounded-full border border-purple-800/30">
            STRATÉGIE & DESIGN
          </span>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.05} y={40} className="w-full text-center">
          <h2 
            className="hero-heading font-black uppercase leading-[0.95] tracking-tight select-none py-2"
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 150px)',
            }}
          >
            NOTRE PITCH
          </h2>
        </FadeIn>

        {/* Dynamic French character-by-character text block */}
        <div className="w-full max-w-[640px] text-center px-4 mt-8 sm:mt-10">
          <AnimatedText 
            text="Avec plus de cinq ans d&apos;expertise dans la création tridimensionnelle et le marketing digital à fort impact, nous façonnons l&apos;identité et l&apos;acquisition des marques les plus exigeantes du globe. Notre ambition est simple : propulser vos offres au sommet de la galaxie numérique."
            className="text-[#D7E2EA] font-medium leading-relaxed"
            id="about-animated-paragraph"
          />
        </div>

        {/* Beautiful high-end Bento features list to answer 'sell service features' requirement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-16 sm:mt-20">
          {/* Key point 1 */}
          <FadeIn delay={0.15} y={30}>
            <div className="group rounded-3xl p-6 sm:p-8 bg-zinc-950/75 border border-[#D7E2EA]/10 hover:border-purple-500/20 transition-all flex gap-5 items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-all" />
              <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 text-purple-400 flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-[#D7E2EA]/40 uppercase mb-1 block">Pilier 01</span>
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-2">Acquisition Stratégique</h3>
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 leading-relaxed uppercase">
                  Nous ne créons pas seulement du beau : nous structurons vos tunnels de conversion pour optimiser la rétention et maximiser les ventes auprès de votre cible d&apos;élites.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Key point 2 */}
          <FadeIn delay={0.25} y={30}>
            <div className="group rounded-3xl p-6 sm:p-8 bg-zinc-950/75 border border-[#D7E2EA]/10 hover:border-purple-500/20 transition-all flex gap-5 items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-2xl group-hover:bg-orange-500/10 transition-all" />
              <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 text-orange-400 flex-shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-[#D7E2EA]/40 uppercase mb-1 block">Pilier 02</span>
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-2">Expériences Immersives</h3>
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 leading-relaxed uppercase">
                  Chaque rendu tridimensionnel, chaque module de motion-design est conçu sur-mesure par Jack, directeur créatif principal de l&apos;agence, garantissant une unicité absolue.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Contact command */}
        <div className="mt-16 sm:mt-20">
          <FadeIn delay={0.35} y={20}>
            <ContactButton id="about-contact-button" onClick={onContactClick} />
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
