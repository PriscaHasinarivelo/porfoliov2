'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'fr' | 'en';

interface Translations {
  hero: {
    hello: string;
    im: string;
    role: string;
    role2: string;
    description: string;
    discover: string;
    followMe: string;
  };
  stats: {
    clients: string;
    projects: string;
    experience: string;
  };
  about: {
    subtitle: string;
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    skillsTitle: string;
    stats: {
      projects: string;
      years: string;
      clients: string;
    };
  };
  skills: {
    subtitle: string;
    title: string;
  };
  experience: {
    subtitle: string;
    title: string;
  };
  projects: {
    subtitle: string;
    title1: string;
    title2: string;
    viewAll: string;
    experienceTitle: string;
  };
  contact: {
    subtitle: string;
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
}

const translations: Record<Lang, Translations> = {
  fr: {
    hero: {
      hello: 'Bonjour, je suis',
      im: '',
      role: 'Prisca HASINARIVELO',
      role2: '',
      description: "Embarquons ensemble dans une aventure visuelle, où chaque pixel raconte une histoire de design réfléchi et de code robuste.",
      discover: 'Découvrir mon travail',
      followMe: 'Suivez-moi',
    },
    stats: {
      clients: 'Clients',
      projects: 'Projets',
      experience: "Années d'expérience",
    },
    about: {
      subtitle: 'À PROPOS',
      title1: 'Développeur',
      title2: 'Passionné',
      description1: "Diplômée de l'Ecole Nationale d'Informatique de Fianarantsoa, je possède plus de 5 ans d'expérience dans le développement d'applications web et mobiles.",
      description2: 'Mon approche combine technicité et créativité pour deliver des solutions qui répondent aux besoins réels des utilisateurs.',
      skillsTitle: 'Compétences',
      stats: {
        projects: 'Grands Projets',
        years: 'Ans Exp.',
        clients: 'Grandes Entreprises',
      },
    },
    skills: {
      subtitle: 'COMPÉTENCES',
      title: 'Tech Stack',
    },
    experience: {
      subtitle: 'PARCOURS',
      title: 'Expériences',
    },
    projects: {
      subtitle: 'PORTFOLIO',
      title1: 'Mes',
      title2: 'Projets',
      viewAll: 'Voir tout',
      experienceTitle: 'Expérience',
    },
    contact: {
      subtitle: 'CONTACT',
      title: 'Restons en contact',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      emailLabel: 'Envoyer un email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
  en: {
    hero: {
      hello: 'Hello, I am',
      im: '',
      role: 'Prisca HASINARIVELO',
      role2: '',
      description: "Let's embark on a visual adventure together, where every pixel tells a story of thoughtful design and robust code.",
      discover: 'Discover my work',
      followMe: 'Follow me',
    },
    stats: {
      clients: 'Clients',
      projects: 'Projects',
      experience: 'Years of experience',
    },
    about: {
      subtitle: 'ABOUT',
      title1: 'Passionate',
      title2: 'Developer',
      description1: "Graduate from the National School of Computer Science of Fianarantsoa, I have over 5 years of experience in web and mobile application development.",
      description2: 'My approach combines technicality and creativity to deliver solutions that meet the real needs of users.',
      skillsTitle: 'Skills',
      stats: {
        projects: 'Major Projects',
        years: 'Years Exp.',
        clients: 'Major Companies',
      },
    },
    skills: {
      subtitle: 'SKILLS',
      title: 'Tech Stack',
    },
    experience: {
      subtitle: 'JOURNEY',
      title: 'Experience',
    },
    projects: {
      subtitle: 'PORTFOLIO',
      title1: 'My',
      title2: 'Projects',
      viewAll: 'View all',
      experienceTitle: 'Experience',
    },
    contact: {
      subtitle: 'CONTACT',
      title: "Let's connect",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      emailLabel: 'Send email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}