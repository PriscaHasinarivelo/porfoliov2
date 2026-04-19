'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface WelcomeDialogProps {
  onExplore: () => void;
}

export default function WelcomeDialog({ onExplore }: WelcomeDialogProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already seen the welcome dialog
    const hasSeenWelcome = sessionStorage.getItem('portfolio-welcome-seen');
    if (!hasSeenWelcome) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleExplore = () => {
    setIsDismissed(true);
    sessionStorage.setItem('portfolio-welcome-seen', 'true');
    setTimeout(() => {
      setIsVisible(false);
      onExplore();
    }, 300);
  };

  const handleSkip = () => {
    setIsDismissed(true);
    sessionStorage.setItem('portfolio-welcome-seen', 'true');
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDismissed ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-[#31525b]/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleSkip}
          />

          {/* Floating Container */}
          <motion.div
            className="relative w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{
              opacity: isDismissed ? 0 : 1,
              scale: isDismissed ? 0.9 : 1,
              y: isDismissed ? 30 : 0,
            }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glassmorphism Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffa101]/10 via-transparent to-[#b3dee5]/10 opacity-50" />

                {/* Animated background shapes */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#ffa101]/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#b3dee5]/20 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                />

                {/* Content */}
                <div className="relative p-8 md:p-12 text-center">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffa101] to-[#ff7b35] mb-6 shadow-lg shadow-[#ffa101]/30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Main Title */}
                  <motion.h1
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Bienvenue sur{" "}
                    <span className="gradient-text-orange">mon portfolio</span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    className="text-white/70 text-lg mb-8 max-w-sm mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Découvrez mes projets et compétences
                  </motion.p>

                  {/* CTA Button */}
                  <motion.button
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ffa101] to-[#ff7b35] text-[#31525b] font-semibold rounded-full overflow-hidden shadow-lg shadow-[#ffa101]/30 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(255, 161, 1, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleExplore}
                  >
                    {/* Button glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      initial={{ x: "-200%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.6 }}
                    />

                    <span className="relative">Explorer</span>
                    <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Skip link */}
                  <motion.button
                    className="block mx-auto mt-6 text-white/40 text-sm hover:text-white/70 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleSkip}
                  >
                    Passer l&apos;introduction
                  </motion.button>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#ffa101]/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#ffa101]/30 rounded-br-3xl" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
