import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  id?: string;
  onClick?: () => void;
  href?: string;
  label?: string;
}

export default function LiveProjectButton({ id, onClick, href, label = "Explorer l'Expérience" }: LiveProjectButtonProps) {
  const ButtonContent = () => (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: 'rgba(182, 0, 168, 0.8)', boxShadow: '0 0 15px rgba(182, 0, 168, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] font-semibold uppercase tracking-widest text-xs sm:text-sm px-6 py-2.5 sm:px-8 sm:py-3 justify-center items-center inline-flex gap-2 transition-all cursor-pointer bg-[#0C0C0C]/50 backdrop-blur-sm group-hover:text-white"
    >
      <span className="relative z-10">{label}</span>
      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/70 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </motion.div>
  );

  if (href) {
    return (
      <a id={id} href={href} target="_blank" rel="noopener noreferrer" className="inline-block group">
        <ButtonContent />
      </a>
    );
  }

  return (
    <button id={id} onClick={onClick} className="inline-block focus:outline-none group">
      <ButtonContent />
    </button>
  );
}
