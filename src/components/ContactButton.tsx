import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles } from 'lucide-react';

interface ContactButtonProps {
  id?: string;
  onClick?: () => void;
  label?: string;
}

export default function ContactButton({ id, onClick, label = "Lancer notre Brief" }: ContactButtonProps) {
  return (
    <div className="relative group inline-block select-none">
      {/* Dynamic Background Glow element */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#A855F7] via-[#B600A8] to-[#BE4C00] opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 rounded-full" />
      
      {/* Main button frame */}
      <motion.button
        id={id || "contact-button"}
        onClick={onClick}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex items-center justify-center gap-3.5 rounded-full cursor-pointer bg-[#0E0E10] text-[#FFFFFF] font-semibold uppercase tracking-[0.14em] text-xs sm:text-sm px-7 py-3 sm:px-9 sm:py-4 focus:outline-none border border-white/20 overflow-hidden"
      >
        {/* Shimmer overlay effect */}
        <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D7E2EA]/50 to-transparent" />
        <span className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-orange-500/10" />

        {/* Dynamic icon indicator with spin interaction */}
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B600A8] opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B600A8]"></span>
        </span>

        <span className="flex items-center gap-2">
          {label}
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          </motion.span>
        </span>

        {/* Elegant right arrow element */}
        <Compass className="w-4 h-4 text-[#D7E2EA] group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
      </motion.button>
    </div>
  );
}
