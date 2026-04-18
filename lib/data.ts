export interface Experience {
  company: string;
  role: { fr: string; en: string };
  period: string;
  mission: { fr: string; en: string };
  technologies?: string[];
  tools?: string[];
  languages?: string[];
  database?: string[];
}

export interface Education {
  school: string;
  degree: { fr: string; en: string };
  obtainedDate: string;
  period: string;
}

export interface SkillCategory {
  category: { fr: string; en: string };
  skills: string[];
}

export interface Certificate {
  name: string;
  url: string;
}

export interface Interest {
  name: { fr: string; en: string };
  icon: string;
}

export const portfolioData = {
  personal: {
    name: 'Prisca HASINARIVELO',
    title: { fr: 'Développeur Confirmé', en: 'Confirmed Developer' },
    about: {
      fr: 'Passionnée par le développement, je suis toujours prête à relever de nouveaux défis, à apprendre de nouvelles choses, à partager mes connaissances, à écouter les équipes et ouverte à de nouvelles opportunités de carrière.',
      en: 'Passionate about development, I am always ready to take on new challenges, learn new things, share knowledge, listen to teams, and open to new career opportunities.'
    },
    email: 'priscahasinarivelo@gmail.com',
    address: 'Alarobia Antananarivo',
    phone: '+261 340 474 299',
    linkedin: 'https://www.linkedin.com/in/prisca-hasinarivelo-13368b144/',
    portfolio: 'https://porfoliopriscahasinarivelo.web.app/',
    github: 'https://github.com/PriscaHasinarivelo/',
  },

  hero: {
    greeting: { fr: 'Bonjour, je suis', en: 'Hello, I am' },
    name: 'Prisca HASINARIVELO',
    title: { fr: 'Développeur Confirmé', en: 'Confirmed Developer' },
    subtitle: {
      fr: 'Passionnée par le développement web et mobile',
      en: 'Passionate about web and mobile development'
    },
    cta: { fr: 'Voir mon travail', en: 'View my work' },
  },

  about: {
    title: { fr: 'À propos de moi', en: 'About Me' },
    description: {
      fr: 'Développeur confirmée avec une solide expérience en développement Java et web. Passionnée par les nouvelles technologies, je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences et contribuer à des projets innovants.',
      en: 'Confirmed developer with solid experience in Java and web development. Passionate about new technologies, I am always looking for new challenges to improve my skills and contribute to innovative projects.'
    },
  },

  experiences: [
    {
      company: 'YAS Madagascar',
      role: { fr: 'Développeur JAVA/Scala', en: 'JAVA/Scala Developer' },
      period: 'Mai 2025 - Présent',
      mission: { fr: 'Développement CRM', en: 'CRM Development' },
    },
    {
      company: 'SNEDAMADA/Soprasteria Nantes',
      role: { fr: 'Ingénieur d\'étude et de développement', en: 'Study and Development Engineer' },
      period: 'Mars 2020 - Juin 2024',
      mission: { fr: 'Développement ERP (Création, évolution et maintenance de modules)', en: 'ERP Development (Creation, evolution and module maintenance)' },
      technologies: ['JAVA RCP', 'Spring', 'XML', 'PROGRESS', 'SOAP', 'REST'],
      tools: ['Jenkins', 'Icescrum', 'CVS', 'GIT', 'IBM Rational', 'SOAPUI', 'Eclipse', 'Sonar', 'TU', 'Maven'],
    },
    {
      company: 'EASY PARK/FUNRECO',
      role: { fr: 'Développeur Junior', en: 'Junior Developer' },
      period: 'Mars 2019 - Janvier 2020',
      mission: { fr: 'Re-conception et migration d\'un logiciel de gestion commerciale', en: 'Re-conception and migration of a commercial management software' },
      languages: ['JAVA', 'PHP/Laravel', 'AngularJS', 'GIT'],
      database: ['PostgreSQL'],
    },
    {
      company: 'EASY PARK/FUNRECO',
      role: { fr: 'Stagiaire Développeur', en: 'Developer Intern' },
      period: 'Février 2018 - Février 2019',
      mission: { fr: 'Re-conception et migration d\'un logiciel de gestion commerciale', en: 'Re-conception and migration of a commercial management software' },
      languages: ['JAVA', 'PHP/Laravel', 'AngularJS', 'GIT'],
      database: ['PostgreSQL'],
    },
  ],

  education: [
    {
      school: 'Ecole Nationale d\'Informatique de l\'Université de Fianarantsoa Madagascar',
      degree: { fr: 'Master Professionnel en Informatique Générale', en: 'Professional Master in General Informatics' },
      obtainedDate: 'Février 2019',
      period: 'Mars 2017 - Février 2019',
    },
    {
      school: 'Ecole Nationale d\'Informatique de l\'Université de Fianarantsoa Madagascar',
      degree: { fr: 'Licence Professionnelle en Informatique Générale', en: 'Professional Bachelor in General Informatics' },
      obtainedDate: 'Mars 2017',
      period: 'Mars 2014 - Mars 2017',
    },
  ],

  skills: [
    {
      category: { fr: 'Langages', en: 'Languages' },
      skills: ['JAVA (Spring Boot, J2EE, JAVA Web, JAVA Swing, Scala, Primefaces)'],
    },
    {
      category: { fr: 'Technologies Web', en: 'Web Technologies' },
      skills: ['PHP', 'JAVASCRIPT', 'HTML & CSS', 'XML', 'JSON', 'REACT', 'ANGULAR', 'Tailwind'],
    },
    {
      category: { fr: 'Bases de données', en: 'Databases' },
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: { fr: 'Versioning', en: 'Versioning' },
      skills: ['CVS', 'GITHUB', 'GITLAB', 'GIT'],
    },
    {
      category: { fr: 'Web Services', en: 'Web Services' },
      skills: ['SOAP', 'REST', 'Microservices'],
    },
    {
      category: { fr: 'Outils', en: 'Tools' },
      skills: ['Jenkins', 'Icescrum', 'IBM Rational', 'SOAPUI', 'Eclipse', 'Sonar', 'Maven'],
    },
    {
      category: { fr: 'Méthodologie', en: 'Methodology' },
      skills: ['AGILE', 'UML'],
    },
  ],

  certificates: [
    {
      name: 'JAVA',
      url: 'https://api2.sololearn.com/v2/certificates/CC-AMGWZEWS/image/png',
    },
    {
      name: 'SQL',
      url: 'https://api2.sololearn.com/v2/certificates/CC-99CMCW7I/image/png',
    },
  ],

  interests: [
    { name: { fr: 'Jardinage', en: 'Gardening' }, icon: '🌱' },
    { name: { fr: 'Cuisine', en: 'Cooking' }, icon: '🍳' },
    { name: { fr: 'Chant', en: 'Singing' }, icon: '🎵' },
    { name: { fr: 'DIY', en: 'DIY' }, icon: '🔧' },
  ],

  languages: {
    title: { fr: 'Langues', en: 'Languages' },
    list: ['Malagasy', 'Français', 'Anglais'],
  },

  contact: {
    title: { fr: 'Contact', en: 'Contact' },
    subtitle: {
      fr: 'N\'hésitez pas à me contacter pour collaborer sur vos projets',
      en: 'Feel free to contact me to collaborate on your projects'
    },
  },

  navigation: {
    home: { fr: 'Accueil', en: 'Home' },
    about: { fr: 'À propos', en: 'About' },
    experience: { fr: 'Expériences', en: 'Experience' },
    education: { fr: 'Formations', en: 'Education' },
    skills: { fr: 'Compétences', en: 'Skills' },
    certificates: { fr: 'Certificats', en: 'Certificates' },
    interests: { fr: 'Intérêts', en: 'Interests' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
};
