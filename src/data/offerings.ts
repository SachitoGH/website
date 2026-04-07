import coursGroupe from '../assets/images/cours-groupe.webp';
import coursSemiPrive from '../assets/images/cours-semi-prive.webp';
import coursPrive from '../assets/images/cours-prive.webp';
import tripImsouane from '../assets/images/trip-imsouane.webp';
import tripTaghazout from '../assets/images/trip-taghazout.webp';
import tripTamraght from '../assets/images/trip-tamraght.webp';
import sejourSemaine from '../assets/images/sejour-semaine.webp';
import sejourWeekend from '../assets/images/sejour-weekend.webp';
import sejourSurMesure from '../assets/images/sejour-sur-mesure.webp';
import expCamel from '../assets/images/exp-camel-ride.webp';
import expHorse from '../assets/images/exp-horse-ride.webp';
import expQuad from '../assets/images/exp-quad.webp';

export interface Offering {
  id: string;
  category: 'surf' | 'trips' | 'sejours' | 'experiences';
  title: string;
  titleEn?: string;
  price: string;
  image: any; // Astro Image metadata object
  fullDesc: string;
  fullDescEn?: string;
  features: string[];
  featuresEn?: string[];
  duration: string;
  durationEn?: string;
  level: string;
  levelEn?: string;
}

export const offerings: Offering[] = [
  {
    id: 'cours-groupe',
    category: 'surf',
    title: 'Cours de surf en groupe',
    titleEn: 'Group surf lessons',
    price: '30€',
    image: coursGroupe,
    fullDesc: "Apprenez à surfer dans une ambiance conviviale et détendue (3 personnes ou plus). Tarifs : 1h - 30€ / 6h - 80€ / 12h - 150€.",
    fullDescEn: "Learn to surf in a friendly and relaxed atmosphere (3 people or more). Prices: 1h - 30€ / 6h - 80€ / 12h - 150€.",
    features: ["Matériel fourni", "Consignes de sécurité"],
    featuresEn: ["Equipment provided", "Safety instructions"],
    duration: "2 heures",
    durationEn: "2 hours",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'cours-semi-prive',
    category: 'surf',
    title: 'Cours de surf semi-privé',
    titleEn: 'Semi-private surf lesson',
    price: '40€',
    image: coursSemiPrive,
    fullDesc: "Idéal pour les couples ou amis. Tarifs : 1h - 40€ / 6h - 110€ / 12h - 210€.",
    fullDescEn: "Ideal for couples or friends. Prices: 1h - 40€ / 6h - 110€ / 12h - 210€.",
    features: ["Accompagnement personnalisé"],
    featuresEn: ["Personalized coaching"],
    duration: "2 heures",
    durationEn: "2 hours",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'cours-prive',
    category: 'surf',
    title: 'Cours de surf privé',
    titleEn: 'Private surf lesson',
    price: '50€',
    image: coursPrive,
    fullDesc: "Le cours privé est la meilleure option pour un apprentissage personnalisé. Tarifs : 1h - 50€ / 6h - 140€ / 12h - 260€.",
    fullDescEn: "Private lessons are the best option for personalized learning. Prices: 1h - 50€ / 6h - 140€ / 12h - 260€.",
    features: ["Coaching sur mesure"],
    featuresEn: ["Tailored coaching"],
    duration: "2 heures",
    durationEn: "2 hours",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'trip-imsouane',
    category: 'trips',
    title: 'Surf Trip à Imsouane',
    titleEn: 'Surf Trip to Imsouane',
    price: '75€',
    image: tripImsouane,
    fullDesc: "Découvrez Imsouane, réputé pour ses vagues longues. Tarifs : 1 pers - 105€ / 2 pers - 85€ / 3+ pers - 75€.",
    fullDescEn: "Discover Imsouane, famous for its long waves. Prices: 1 p - 105€ / 2 p - 85€ / 3+ p - 75€.",
    features: ["Transport inclus", "2 sessions"],
    featuresEn: ["Transport included", "2 sessions"],
    duration: "1 journée",
    durationEn: "1 day",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'trip-taghazout',
    category: 'trips',
    title: 'Surf Trip Taghazout (2 Jours)',
    titleEn: '2-Day Surf Trip Taghazout',
    price: '190€',
    image: tripTaghazout,
    fullDesc: "Vivez l'expérience du village de surf le plus célèbre. Tarifs : 2 pers - 220€ / 3+ pers - 190€.",
    fullDescEn: "Experience the most famous surf village. Prices: 2 p - 220€ / 3+ p - 190€.",
    features: ["Hébergement 1 nuit", "Transport"],
    featuresEn: ["Accommodation 1 night", "Transport"],
    duration: "2 jours / 1 nuit",
    durationEn: "2 days / 1 night",
    level: "Intermédiaire",
    levelEn: "Intermediate"
  },
  {
    id: 'trip-tamraght',
    category: 'trips',
    title: 'Surf Trip Tamraght (2 Jours)',
    titleEn: '2-Day Surf Trip Tamraght',
    price: '190€',
    image: tripTamraght,
    fullDesc: "Village de surf authentique entre montagne et océan. Tarifs : 2 pers - 220€ / 3+ pers - 190€.",
    fullDescEn: "Authentic surf village between mountains and ocean. Prices: 2 p - 220€ / 3+ p - 190€.",
    features: ["Hébergement 1 nuit", "Sessions encadrées"],
    featuresEn: ["Accommodation 1 night", "Coached sessions"],
    duration: "2 jours / 1 nuit",
    durationEn: "2 days / 1 night",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'sejour-semaine',
    category: 'sejours',
    title: 'Séjour Surf - La Semaine',
    titleEn: 'Surf Stay - One Week',
    price: 'Sur devis',
    image: sejourSemaine,
    fullDesc: "Vivez l'expérience d'un véritable surf camp pendant une semaine.",
    fullDescEn: "Experience a real surf camp for a week.",
    features: ["7 nuits", "6 cours", "Matériel"],
    featuresEn: ["7 nights", "6 lessons", "Gear"],
    duration: "7 nuits",
    durationEn: "7 nights",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'sejour-weekend',
    category: 'sejours',
    title: 'Séjour Surf - Week-end',
    titleEn: 'Surf Stay - Weekend Escape',
    price: 'Sur devis',
    image: sejourWeekend,
    fullDesc: "La formule parfaite pour une escapade courte mais intense.",
    fullDescEn: "The perfect short but intense getaway.",
    features: ["2 nuits", "2 cours", "Matériel"],
    featuresEn: ["2 nights", "2 lessons", "Gear"],
    duration: "2 nuits",
    durationEn: "2 nights",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'sejour-libre',
    category: 'sejours',
    title: 'Séjour Surf - Formule Libre',
    titleEn: 'Surf Stay - Flexible Package',
    price: 'Sur devis',
    image: sejourSurMesure,
    fullDesc: "Composez votre séjour à votre rythme.",
    fullDescEn: "Create your own stay at your own pace.",
    features: ["Hébergement flexible", "Cours à la demande"],
    featuresEn: ["Flexible housing", "Lessons on demand"],
    duration: "Sur mesure",
    durationEn: "Custom",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'exp-camel',
    category: 'experiences',
    title: 'Camel Ride',
    titleEn: 'Camel Ride',
    price: '25€',
    image: expCamel,
    fullDesc: "Promenade paisible à dos de dromadaire le long de la plage.",
    fullDescEn: "Peaceful dromedary ride along the beach.",
    features: ["Guide local", "Coucher de soleil"],
    featuresEn: ["Local guide", "Sunset"],
    duration: "1h30",
    durationEn: "1h30",
    level: "Détente",
    levelEn: "Relaxation"
  },
  {
    id: 'exp-horse',
    category: 'experiences',
    title: 'Horse Ride',
    titleEn: 'Horse Ride',
    price: '35€',
    image: expHorse,
    fullDesc: "Galop sur la plage sauvage de Sidi Kaouki.",
    fullDescEn: "Gallop on the wild beach of Sidi Kaouki.",
    features: ["Chevaux arabes-barbes", "Tous niveaux"],
    featuresEn: ["Arab-Barb horses", "All levels"],
    duration: "1h30",
    durationEn: "1h30",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'exp-quad',
    category: 'experiences',
    title: 'Quad Adventure',
    titleEn: 'Quad Adventure',
    price: '45€',
    image: expQuad,
    fullDesc: "Explorez l'arrière-pays entre plage et forêt d'arganiers.",
    fullDescEn: "Explore the hinterland between beach and argan forest.",
    features: ["Guide motorisé", "Adrénaline"],
    featuresEn: ["Motorized guide", "Adrenaline"],
    duration: "2h",
    durationEn: "2h",
    level: "Pas de permis requis",
    levelEn: "No license required"
  }
];
