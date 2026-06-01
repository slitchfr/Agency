import React from 'react';
import FadeIn from './FadeIn';

interface FooterSectionProps {
  onContactClick: () => void;
}

export default function FooterSection({ onContactClick }: FooterSectionProps) {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-white/5 pt-24 pb-12 px-6 sm:px-10 relative z-30 select-none">
      <div className="max-w-6xl mx-auto flex flex-col justify-between h-full gap-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <h3 
              className="hero-heading font-black uppercase text-4xl sm:text-5xl tracking-tighter leading-none cursor-pointer"
              onClick={() => handleScrollTo('hero')}
            >
              STRIMY
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-xs text-[#D7E2EA]/60 uppercase tracking-widest">
              Une agence de marketing digital spatiale concevant des expériences 3D inoubliables, des interfaces ultra-fluides et des identités de marque d&apos;élites pour l&apos;ère cybernétique.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-2.5">
            <span className="text-xs uppercase tracking-widest font-black text-purple-400 mb-1.5">
              Navigation
            </span>
            <button
              onClick={() => handleScrollTo('hero')}
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors cursor-pointer text-left self-start"
            >
              Retour en haut
            </button>
            <button
              onClick={() => handleScrollTo('about-section')}
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors cursor-pointer text-left self-start"
            >
              Notre vision
            </button>
            <button
              onClick={() => handleScrollTo('services-section')}
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors cursor-pointer text-left self-start"
            >
              Prestations & Formules
            </button>
            <button
              onClick={() => handleScrollTo('projects-section')}
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors cursor-pointer text-left self-start"
            >
              Réalisations récentes
            </button>
          </div>

          {/* Links Col 2 */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-2.5">
            <span className="text-xs uppercase tracking-widest font-black text-purple-400 mb-1.5">
              Contact & Socials
            </span>
            <button
              onClick={onContactClick}
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors text-left self-start cursor-pointer"
            >
              Initier un nouveau brief
            </button>
            <a
              href="mailto:contact@strimy.agency"
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors text-left self-start"
            >
              contact@strimy.agency
            </a>
            <a
              href="https://twitter.com/strimy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors text-left self-start"
            >
              X / Twitter
            </a>
            <a
              href="https://instagram.com/strimy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase font-light text-[#D7E2EA]/75 hover:text-white transition-colors text-left self-start"
            >
              Instagram
            </a>
          </div>

          {/* Location Col */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-2 text-right md:text-left">
            <span className="text-xs uppercase tracking-widest font-black text-purple-400 mb-1.5">
              Siège Social
            </span>
            <address className="not-italic text-sm font-light select-none text-[#D7E2EA]/60 uppercase tracking-widest leading-loose">
              75001 PARIS<br />
              FRANCE / EUROPE<br />
              NODE_SPATIAL_A
            </address>
          </div>

        </div>

        {/* Lower row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-widest opacity-40 uppercase">
          <span>&copy; {new Date().getFullYear()} STRIMY AGENCY. TOUS DROITS RÉSERVÉS.</span>
          <span>CONÇU POUR LES MARQUES AMBITIEUSES DE PAR LE GLOBE.</span>
        </div>

      </div>
    </footer>
  );
}
