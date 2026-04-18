'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('portfolio-lang') as Language;
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang: 'fr', setLang: () => {}, t: () => '' }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

const translations = {
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      work: 'Projets',
      contact: 'Contact',
      resume: 'CV',
    },
    hero: {
      hello: 'Bonjour,',
      im: 'Je suis',
      role: 'Développeuse',
      role2: 'Full Stack',
      description: "Embarquons ensemble dans une aventure visuelle, où chaque pixel raconte une histoire de design réfléchi et de code robuste.",
      discover: 'Découvrir',
      followMe: 'Suivez-moi',
    },
    stats: {
      clients: 'Clients Satisfaits',
      projects: 'Projets Réalisés',
      experience: 'Années d\'expérience',
    },
    about: {
      subtitle: 'À PROPOS DE MOI',
      title1: 'Créer des Expériences',
      title2: 'Digitales',
      description1: 'Développeuse Full Stack passionnée avec plus de 5 ans d\'expérience dans la construction d\'applications web et mobiles évolutives. Je me spécialise dans la création de solutions élégantes qui combinent un design magnifique avec une fonctionnalité puissante.',
      description2: 'Mon parcours dans la tech a commencé avec le développement Java, et j\'ai depuis élargi mon expertise aux frameworks JavaScript modernes, aux technologies cloud et au développement mobile. Je crois en l\'écriture de code propre et maintenable.',
      stats: {
        projects: 'Projets',
        years: 'Années Exp.',
        clients: 'Clients',
      },
      skillsTitle: 'Compétences Techniques',
    },
    projects: {
      subtitle: 'PORTFOLIO',
      title1: 'Projets',
      title2: 'Réalisés',
      experienceTitle: 'Expérience',
    },
    contact: {
      subtitle: 'CONTACT',
      title1: 'Travaillons',
      title2: 'Ensemble',
      description: 'Vous avez un projet en tête ? Créons quelque chose d\'incroyable ensemble. Je suis toujours ouverte à discuter de nouvelles opportunités.',
      form: {
        title: 'Envoyer un Message',
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Discussion de projet',
        message: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet...',
        send: 'Envoyer',
      },
      info: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
      },
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      work: 'Work',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      hello: 'Hello,',
      im: "I'm",
      role: 'A Full Stack',
      role2: 'Developer',
      description: "Let's embark on a visual adventure together, where every pixel tells a story of thoughtful design and robust code.",
      discover: 'Discover More',
      followMe: 'Follow Me',
    },
    stats: {
      clients: 'Happy Clients',
      projects: 'Projects Done',
      experience: 'Years Experience',
    },
    about: {
      subtitle: 'ABOUT ME',
      title1: 'Crafting Digital',
      title2: 'Experiences',
      description1: 'Passionate Full Stack Developer with 5+ years of experience building scalable web and mobile applications. I specialize in creating elegant solutions that combine beautiful design with powerful functionality.',
      description2: 'My journey in tech started with Java development, and I\'ve since expanded my expertise to modern JavaScript frameworks, cloud technologies, and mobile development. I believe in writing clean, maintainable code.',
      stats: {
        projects: 'Projects',
        years: 'Years Exp.',
        clients: 'Clients',
      },
      skillsTitle: 'Technical Skills',
    },
    projects: {
      subtitle: 'PORTFOLIO',
      title1: 'Featured',
      title2: 'Projects',
      experienceTitle: 'Experience',
    },
    contact: {
      subtitle: 'GET IN TOUCH',
      title1: "Let's Work",
      title2: 'Together',
      description: 'Have a project in mind? Let\'s create something amazing together. I\'m always open to discussing new opportunities.',
      form: {
        title: 'Send a Message',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Project discussion',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
    },
  },
};
