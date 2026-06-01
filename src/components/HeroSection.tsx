import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Satellite, RefreshCw, Menu, X, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const [localTime, setLocalTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] text-[#D7E2EA] select-none">
      
      {/* Absolute Dynamic Space background elements */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-950/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-950/10 blur-[130px] pointer-events-none" />

      {/* 1. Master Floating Capsule Navbar */}
      <div className="w-full flex justify-center px-4 sm:px-6 pt-5 sm:pt-7 z-50 relative pointer-events-none">
        <FadeIn
          as="nav"
          delay={0}
          y={-15}
          className="w-full max-w-6xl flex justify-between items-center px-5 sm:px-8 py-3.5 sm:py-4 bg-[#111113]/85 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl relative pointer-events-auto"
        >
          {/* Left: Brand + Spatial Indicator */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleScrollTo('hero')}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center p-[1px] group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-[#0C0C0C] rounded-full flex items-center justify-center">
                <Satellite className="w-3.5 h-3.5 text-pink-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm uppercase tracking-[0.2em] text-white">
                STRIMY
              </span>
              <span className="text-[9px] text-[#D7E2EA]/40 tracking-wider uppercase font-light">
                Digital Marketing Spatialisé
              </span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-xs sm:text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/70">
            <button
              onClick={() => handleScrollTo('about-section')}
              className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all cursor-pointer"
            >
              À Propos
            </button>
            <button
              onClick={() => handleScrollTo('services-section')}
              className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all cursor-pointer"
            >
              Tarifs
            </button>
            <button
              onClick={() => handleScrollTo('projects-section')}
              className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all cursor-pointer"
            >
              Projets
            </button>
          </div>

          {/* Right: Telemetry/Time + Action */}
          <div className="flex items-center gap-4">
            
            {/* Live Paris Node indicator */}
            <div className="hidden sm:flex flex-col items-end text-right font-mono text-[10px] text-[#D7E2EA]/40 tracking-widest border-r border-[#D7E2EA]/10 pr-4">
              <div className="flex items-center gap-1.5 uppercase font-semibold text-white/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                NODE PAR_HQ
              </div>
              <div>{localTime || "12:00:00"}</div>
            </div>

            {/* Main CTA in nav */}
            <button 
              onClick={onContactClick} 
              className="hidden lg:flex items-center h-9 px-5 rounded-full border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-semibold uppercase tracking-widest text-[10px] transition-all duration-300 shadow-md cursor-pointer"
            >
              Lancer Projet
            </button>

            {/* Mobile Menu trigger */}
            <button 
              className="md:hidden p-2 text-[#D7E2EA] hover:text-white bg-zinc-900 rounded-full border border-zinc-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>
        </FadeIn>
      </div>

      {/* Mobile Drawer Dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-4 right-4 bg-[#111113]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 z-50 flex flex-col gap-5 text-sm uppercase tracking-widest font-semibold shadow-2xl md:hidden"
          >
            <button onClick={() => handleScrollTo('about-section')} className="text-left w-full hover:text-purple-400 py-1 border-b border-white/5">À Propos</button>
            <button onClick={() => handleScrollTo('services-section')} className="text-left w-full hover:text-purple-400 py-1 border-b border-white/5">Tarifs</button>
            <button onClick={() => handleScrollTo('projects-section')} className="text-left w-full hover:text-purple-400 py-1 border-b border-white/5">Récents Projets</button>
            <button onClick={onContactClick} className="text-left w-full text-purple-400">Demander un Devis</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Portrait (Centered absolutely behind text on top of background) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full">
        <FadeIn
          delay={0.65}
          y={40}
          className="pointer-events-auto"
        >
          <Magnet
            padding={160}
            strength={3.5}
            activeTransition="transform 0.25s ease-out"
            inactiveTransition="transform 0.5s ease-in-out"
          >
            <div className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] xl:w-[500px] max-w-full relative group">
              {/* Futuristic orbit radar absolute circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-dashed border-purple-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-orange-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Jack spatial pilot"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(182,0,168,0.35)] hover:scale-105 transition-transform"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 3. Epic Central Heading Layout */}
      <div className="w-full px-4 sm:px-10 flex-1 flex flex-col justify-center items-center relative overflow-visible z-20 pointer-events-none">
        
        {/* Floating status tag */}
        <FadeIn delay={0.12} y={15} className="mb-4">
          <div className="px-3.5 py-1.5 rounded-full border border-[#B600A8]/30 bg-purple-950/20 backdrop-blur-sm flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-300">
              VITESSE MARKETING INTERSIDÉRAL
            </span>
          </div>
        </FadeIn>

        {/* Big Agency Core Title */}
        <div className="overflow-hidden w-full py-2">
          <FadeIn
            as="h1"
            delay={0.25}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-[0.9] text-center w-full text-[12vw] sm:text-[13vw] md:text-[14.5vw] lg:text-[15.5vw] select-none"
          >
            STRIMY AGENCY
          </FadeIn>
        </div>

        {/* Short dynamic service details in subtitle */}
        <FadeIn delay={0.4} y={20} className="w-full max-w-2xl text-center">
          <p className="font-medium text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/60 max-w-[650px] mx-auto mt-2 leading-relaxed">
            CRÉATION TRIDIMENSIONNELLE · MULTIVERS VISUEL · PERFORMANCE DIGITALE EXTRÊME
          </p>
        </FadeIn>
      </div>

      {/* 4. Bottom Metrics Panel / Selling Points */}
      <div className="w-full px-6 sm:px-10 pb-7 sm:pb-8 md:pb-10 flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-6 relative z-20">
        
        {/* Left Side: Conversion and details box */}
        <div className="flex flex-col gap-2">
          <FadeIn
            as="p"
            delay={0.45}
            y={20}
            className="text-[#D7E2EA] font-light uppercase tracking-wider leading-snug text-left select-none"
            style={{
              fontSize: 'clamp(0.75rem, 1.2vw, 1.35rem)',
              maxWidth: 'clamp(200px, 25vw, 340px)',
            }}
          >
            Une ingénierie de marque immersive propulsée vers des performances d&apos;acquisition d&apos;élites.
          </FadeIn>
        </div>

        {/* Center: Interactive Micro-widgets or numbers */}
        <div className="hidden lg:flex items-center gap-10">
          <FadeIn delay={0.5} y={20} className="flex flex-col">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 leading-none">
              +140%
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#D7E2EA]/40 font-bold mt-1">
              CONVERSION MÉDIA
            </span>
          </FadeIn>
          
          <FadeIn delay={0.55} y={20} className="flex flex-col">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 leading-none">
              4.9/5
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#D7E2EA]/40 font-bold mt-1">
              SATISFACTION CLIENTS
            </span>
          </FadeIn>
          
          <FadeIn delay={0.6} y={20} className="flex flex-col">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 leading-none">
              &lt; 24H
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#D7E2EA]/40 font-bold mt-1">
              PROTOTYPAGE RAPIDE
            </span>
          </FadeIn>
        </div>

        {/* Right Side: Primary CTA */}
        <FadeIn
          delay={0.5}
          y={20}
          className="self-center sm:self-auto"
        >
          <ContactButton id="hero-contact-button" onClick={onContactClick} />
        </FadeIn>
      </div>

    </section>
  );
}
