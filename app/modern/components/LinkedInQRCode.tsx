'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LinkedInQRCodeProps {
  activeSection: number;
}

// LinkedIn icon as SVG
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const LINKEDIN_URL = 'https://www.linkedin.com/in/prisca-hasinarivelo-13368b144/';

// About section index is 0 (corresponds to "About" nav item)
const ABOUT_SECTION_INDEX = 0;

export default function LinkedInQRCode({ activeSection }: LinkedInQRCodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile/tablet viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close expanded view when changing sections
  useEffect(() => {
    setIsExpanded(false);
  }, [activeSection]);

  // Generate QR code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(LINKEDIN_URL)}`;

  // Only show on About section (index 1) and on desktop
  const shouldShow = activeSection === ABOUT_SECTION_INDEX && !isMobile;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 hidden lg:block"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          exit={{ 
            opacity: 0, 
            y: 20, 
            scale: 0.9,
            pointerEvents: 'none'
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Floating container */}
          <motion.div
            className="relative group"
            animate={{
              y: isExpanded ? 0 : [0, -4, 0],
            }}
            transition={{
              y: isExpanded ? { duration: 0.2 } : { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
        {/* Main QR Container */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
        >
          {/* Glassmorphism Card */}
          <div className={`
            relative overflow-hidden rounded-2xl 
            bg-white/10 backdrop-blur-md 
            border border-white/20 
            shadow-lg shadow-black/20
            transition-all duration-300
            ${isExpanded ? 'p-4' : 'p-3'}
          `}>
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#ffa101]/20 to-[#b3dee5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            />

            {/* QR Code Image - Clickable to expand */}
            <motion.div
              animate={{
                width: isExpanded ? 140 : 60,
                height: isExpanded ? 140 : 60,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={qrCodeUrl}
                alt="LinkedIn QR Code"
                className="w-full h-full object-contain rounded-lg bg-white p-1"
              />
              
              {/* LinkedIn icon overlay when collapsed */}
              {!isExpanded && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-[#0077b5] flex items-center justify-center shadow-md">
                    <LinkedinIcon className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Label */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-2"
              animate={{
                opacity: isExpanded ? 1 : 0.8,
              }}
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
              <span className={`text-white/80 text-xs font-medium ${isExpanded ? 'block' : 'hidden sm:block'}`}>
                {isExpanded ? 'Scannez pour connecter' : 'LinkedIn'}
              </span>
            </motion.div>

            {/* Expanded hint */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center relative z-50 pointer-events-auto"
              >
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-50 inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white text-sm font-medium rounded-full hover:bg-[#006396] transition-colors cursor-pointer pointer-events-auto"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  Voir le profil
                </a>
              </motion.div>
            )}
          </div>

          {/* Corner accent */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-[#ffa101]/40 rounded-br-xl pointer-events-none" />
        </motion.div>

        {/* Click hint tooltip */}
        {!isExpanded && (
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span className="text-xs px-2 py-1 rounded-full backdrop-blur-sm bg-[#ffa101]/90 text-[#31525b] font-medium shadow-lg">
              Cliquez pour agrandir
            </span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )}
  </AnimatePresence>
  );
}

