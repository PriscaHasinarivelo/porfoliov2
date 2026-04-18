'use client';

type Language = 'fr' | 'en';

interface LanguageSwitcherProps {
  onLanguageChange: (lang: Language) => void;
  currentLang: Language;
}

export default function LanguageSwitcher({ onLanguageChange, currentLang }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 p-1 rounded-full"
      style={{
        background: 'rgba(0, 212, 255, 0.1)',
        border: '1px solid rgba(0, 212, 255, 0.2)',
      }}
    >
      <button
        onClick={() => onLanguageChange('fr')}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
          currentLang === 'fr'
            ? 'bg-[#00D4FF] text-[#0A0A0F]'
            : 'text-white/60 hover:text-white'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
          currentLang === 'en'
            ? 'bg-[#00D4FF] text-[#0A0A0F]'
            : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
