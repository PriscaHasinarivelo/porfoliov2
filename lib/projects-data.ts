export interface Project {
  id: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'backend';
}

export const projects: Project[] = [
  {
    id: 'marketplace-interesting',
    title: {
      fr: 'Marketplace "Interesting"',
      en: 'Interesting Marketplace',
    },
    description: {
      fr: 'Application mobile et web de marketplace avec système de réservation, paiement Stripe, et certification des vendeurs. Stack: React Native, Next.js, NestJS, PostgreSQL.',
      en: 'Mobile and web marketplace app with booking system, Stripe payments, and seller certification. Stack: React Native, Next.js, NestJS, PostgreSQL.',
    },
    image: '/projects/marketplace.png',
    tags: ['React Native', 'Next.js', 'NestJS', 'PostgreSQL', 'Stripe'],
    category: 'mobile',
    featured: true,
  },
  {
    id: 'erp-soprasteria',
    title: {
      fr: 'Système ERP Enterprise',
      en: 'Enterprise ERP System',
    },
    description: {
      fr: 'Développement et maintenance de modules ERP pour Soprasteria. Création de nouvelles fonctionnalités, migration, et intégration avec des services SOAP/REST.',
      en: 'Development and maintenance of ERP modules for Soprasteria. New feature creation, migration, and integration with SOAP/REST services.',
    },
    image: '/projects/erp.png',
    tags: ['Java RCP', 'Spring', 'SOAP', 'REST', 'Progress', 'Jenkins'],
    category: 'backend',
    featured: true,
  },
  {
    id: 'gestion-commerciale',
    title: {
      fr: 'Logiciel Gestion Commerciale',
      en: 'Commercial Management Software',
    },
    description: {
      fr: 'Re-conception et migration complète d\'un logiciel de gestion commerciale. Migration technologique avec modernisation de l\'architecture.',
      en: 'Complete re-conception and migration of commercial management software. Technology migration with architecture modernization.',
    },
    image: '/projects/gestion.png',
    tags: ['Java', 'PHP/Laravel', 'AngularJS', 'PostgreSQL', 'Git'],
    category: 'web',
    featured: true,
  },
  {
    id: 'portfolio-v1',
    title: {
      fr: 'Portfolio V1',
      en: 'Portfolio V1',
    },
    description: {
      fr: 'Première version de mon portfolio avec animations Framer Motion, glassmorphism, et design responsive.',
      en: 'First version of my portfolio with Framer Motion animations, glassmorphism, and responsive design.',
    },
    image: '/projects/portfolio-v1.png',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    category: 'web',
    featured: false,
  },
  {
    id: 'crm-yas',
    title: {
      fr: 'Développement CRM',
      en: 'CRM Development',
    },
    description: {
      fr: 'Développement CRM chez YAS Madagascar avec Scala et technologies modernes.',
      en: 'CRM Development at YAS Madagascar with Scala and modern technologies.',
    },
    image: '/projects/crm.png',
    tags: ['Scala', 'Java', 'CRM', 'Enterprise'],
    category: 'backend',
    featured: false,
  },
  {
    id: 'ads-platform',
    title: {
      fr: 'Plateforme Publicitaire',
      en: 'Advertising Platform',
    },
    description: {
      fr: 'Plateforme de gestion de campagnes publicitaires avec analytics et dashboard en temps réel.',
      en: 'Advertising campaign management platform with analytics and real-time dashboard.',
    },
    image: '/projects/ads.png',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Analytics'],
    category: 'web',
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category);
