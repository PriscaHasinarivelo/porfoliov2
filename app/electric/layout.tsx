'use client';

import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import CursorTracker from './components/CursorTracker';

export default function ElectricLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="electric-portfolio min-h-screen">
        <CursorTracker />
        <Navigation />
        {children}
      </div>
    </LanguageProvider>
  );
}