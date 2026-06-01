/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection';
import ContactDrawer from './components/ContactDrawer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div 
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] selection:bg-purple-900/40 selection:text-white relative w-full" 
      style={{ overflowX: 'clip' }}
    >
      
      {/* 1. Hero Section */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Pricing Section (Prestations & Formules) */}
      <PricingSection onContactClick={() => setIsContactOpen(true)} />

      {/* 6. Projects Section */}
      <ProjectsSection />

      {/* 7. Footer Section (Enhanced Experience Add-on) */}
      <FooterSection onContactClick={() => setIsContactOpen(true)} />

      {/* 8. Contact Drawer (Enhanced Experience Add-on) */}
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

    </div>
  );
}
