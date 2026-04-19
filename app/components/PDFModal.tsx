'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl = '/asset/cv/CV-HASINARIVELO.pdf' }: PDFModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-[95vw] h-[90vh] max-w-6xl bg-[#1a1a2e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1a1a2e]">
              <h3 className="text-white font-semibold text-lg">
                CV - Prisca HASINARIVELO
              </h3>
              <div className="flex items-center gap-3">
                {/* Download Button */}
                <motion.a
                  href={pdfUrl}
                  download="CV-HASINARIVELO.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffa101]/10 border border-[#ffa101]/30 text-[#ffa101] text-sm font-medium hover:bg-[#ffa101]/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger</span>
                </motion.a>

                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[calc(100%-72px)] bg-white">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="CV Preview"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
