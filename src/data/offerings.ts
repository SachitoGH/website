export interface Offering {
  id: string;
  category: 'surf' | 'trips' | 'sejours' | 'experiences';
  title: string;
  price: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  duration: string;
  level: string;
}

export const offerings: Offering[] = [
  {
    id: 'surf-debutant',
    category: 'surf',
    title: 'Initiation Surf',
    price: '30€',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Découvrez vos premières vagues en toute sécurité.',
    fullDesc: 'Nos instructeurs certifiés vous accompagnent pour vos premières mousses. Analyse du spot, sécurité et fun garantis sur la plage de Sidi Kaouki.',
    features: ['Planche & Combi incluses', 'Assurance', 'Moniteur certifié'],
    duration: '2h',
    level: 'Débutant'
  },
  {
    id: 'trip-imsouane',
    category: 'trips',
    title: 'Day Trip Imsouane',
    price: '60€',
    image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Surfez la plus longue droite du Maroc.',
    fullDesc: 'Une journée inoubliable dans la baie magique d\'Imsouane. Départ le matin, surf toute la journée, déjeuner poisson grillé inclus.',
    features: ['Transport AR', 'Déjeuner inclus', 'Guiding'],
    duration: '1 Journée',
    level: 'Intermédiaire'
  },
  {
    id: 'sejour-immersion',
    category: 'sejours',
    title: 'Semaine Immersion',
    price: '450€',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    shortDesc: '7 jours de surf, yoga et détente.',
    fullDesc: 'Vivez au rythme des marées. Hébergement à la Surf House, cours quotidiens et soirées feu de camp sous les étoiles.',
    features: ['Hébergement 7 nuits', 'Cours quotidiens', 'Petit-déjeuner'],
    duration: '7 Jours',
    level: 'Tous niveaux'
  },
  {
    id: 'exp-diner',
    category: 'experiences',
    title: 'Dîner Berbère',
    price: '25€',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Cuisine traditionnelle locale.',
    fullDesc: 'Partagez un couscous ou un tajine traditionnel préparé avec amour, sur notre terrasse vue mer au coucher du soleil.',
    features: ['Repas complet', 'Thé à la menthe', 'Musique live'],
    duration: 'Soirée',
    level: 'Gourmand'
  }
];
