import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, User, FileText } from 'lucide-react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '5 000 € - 10 000 €',
    service: 'Modélisation 3D & Motion',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    // Simulate premium agency request submitting
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      budget: '5 000 € - 10 000 €',
      service: 'Modélisation 3D & Motion',
      details: '',
    });
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0C0C0C]/85 backdrop-blur-md z-50 cursor-pointer"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 190 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[500px] bg-[#0E0E10] border-l border-white/10 text-[#D7E2EA] z-50 shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto"
          >
            
            {/* Header */}
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-5">
                <div className="flex flex-col">
                  <span className="font-black text-lg tracking-[0.2em] text-white">
                    STRIMY BRIEF
                  </span>
                  <span className="text-[9px] text-purple-400 font-mono uppercase tracking-widest mt-0.5">
                    Configurateur de Projet
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:scale-105 cursor-pointer text-[#D7E2EA] transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  <p className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest font-light mb-8 leading-relaxed">
                    Remplissez ce formulaire d&apos;objectifs pour propulser votre marque. Jack et son équipe analysent vos besoins sous 12h.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-purple-400" />
                        Quel est votre nom ?
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marc d'Albret"
                        className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-purple-400" />
                        Votre adresse e-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marc@entreprise.com"
                        className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    {/* Budget Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70">
                        Budget Estimé
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['3k € - 5k €', '5k € - 10k €', '10k € - 25k €', '25k € +'].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-3 py-2.5 text-xs font-semibold uppercase rounded-xl transition-all border ${
                              formData.budget === b
                                ? 'bg-gradient-to-r from-purple-900/60 to-[#B600A8]/45 border-[#B600A8] text-white shadow-md'
                                : 'bg-transparent border-zinc-900 text-[#D7E2EA]/60 hover:bg-zinc-900 hover:text-white'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70">
                        Votre besoin principal
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                      >
                        <option value="Modélisation 3D & Motion">Modélisation 3D & Motion</option>
                        <option value="Rendu & Éclairage Élite">Rendu & Éclairage Élite</option>
                        <option value="Branding Spatial Complet">Branding Spatial Complet</option>
                        <option value="Expérience Web Immersive">Expérience Web Immersive</option>
                        <option value="Autre demande">Autre demande sur-mesure</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-purple-400" />
                        Détails & Ambitions du Projet
                      </label>
                      <textarea
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Décrivez votre vision, vos objectifs ou vos délais..."
                        className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        type="submit"
                        disabled={loading}
                        className="relative group w-full flex items-center justify-center gap-3.5 rounded-full cursor-pointer bg-[#000000] text-white font-bold uppercase tracking-[0.15em] text-xs px-8 py-4 focus:outline-none border border-white/20 overflow-hidden shadow-lg"
                      >
                        {/* Shimmer overlay effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-70 group-hover:opacity-100 transition-all" />
                        {loading ? (
                          <span className="relative z-10">Transmission en cours...</span>
                        ) : (
                          <>
                            <span className="relative z-10">Envoyer mon Brief</span>
                            <Send className="w-3.5 h-3.5 text-purple-400 relative z-10 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center mt-12 py-10 px-4 bg-zinc-950/60 rounded-3xl border border-white/10 shadow-inner">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  >
                    <CheckCircle2 className="text-[#B600A8] w-16 h-16 mb-4 drop-shadow-[0_0_15px_#B600A8]" />
                  </motion.div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#D7E2EA] mb-2">
                    Transmission Réussie !
                  </h3>
                  <p className="text-sm text-[#D7E2EA]/60 leading-relaxed max-w-sm mb-6">
                    Merci {formData.name}, Strimy a bien reçu votre configurateur. Un directeur de projet se mettra en relation avec vous sous 12h pour amorcer votre projet.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-xs uppercase font-semibold text-purple-400 hover:text-purple-300 tracking-widest transition-colors cursor-pointer"
                  >
                    Envoyer un nouveau brief
                  </button>
                </div>
              )}
            </div>

            {/* Footer details */}
            <div className="border-t border-white/5 pt-6 mt-8 flex flex-col gap-2.5 text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">
              <div className="flex items-center gap-2 text-[11px] text-zinc-500 mb-1">
                <ShieldCheck className="w-4 h-4 text-purple-500" />
                <span>CONFIDENTIALITÉ STRICTE SÉCURISÉE NT-7</span>
              </div>
              <div className="flex justify-between">
                <span>STRIMY DIGITALE HQ</span>
                <span>PARIS / SPATIAL NODE</span>
              </div>
              <div className="flex justify-between">
                <span>PRODUCTIONS &copy; 2026</span>
                <span>TOUS DROITS RÉSERVÉS</span>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
