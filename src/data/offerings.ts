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
  image: any;
  fullDesc: string;
  fullDescEn?: string;
  features: string[];
  featuresEn?: string[];
  duration: string;
  durationEn?: string;
  level: string;
  levelEn?: string;
  priceDisplay: string;
  packs?: { label: string; price: number }[];
  tieredPricing?: { guests: string; price: number }[];
}

export const offerings: Offering[] = [
  // --- SURF ---
  {
    id: 'cours-collectif',
    category: 'surf',
    title: 'Cours Collectifs',
    titleEn: 'Group Lessons',
    priceDisplay: '30€',
    image: coursGroupe,
    fullDesc: "Cours collectifs (max 10 personnes). Tarif dégressif à partir de 6 personnes et plus : 25€/pers.",
    fullDescEn: "Group lessons (max 10 people). Discount for 6+ people: 25€/p.",
    packs: [
      { label: "Session 2h", price: 30 },
      { label: "Pack 6h", price: 80 },
      { label: "Pack 12h", price: 145 }
    ],
    tieredPricing: [
      { guests: "1-5 pers", price: 30 },
      { guests: "6+ pers", price: 25 }
    ],
    features: ["Max 10 personnes", "Matériel inclus"],
    featuresEn: ["Max 10 people", "Equipment included"],
    duration: "2h",
    durationEn: "2h",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'cours-semi-prive',
    category: 'surf',
    title: 'Cours Semi-Privé',
    titleEn: 'Semi-Private Lessons',
    priceDisplay: '40€',
    image: coursSemiPrive,
    fullDesc: "Cours de surf pour 2 personnes.",
    fullDescEn: "Surf lessons for 2 people.",
    packs: [
      { label: "Session 2h", price: 40 },
      { label: "Pack 6h", price: 110 },
      { label: "Pack 12h", price: 200 }
    ],
    features: ["2 personnes", "Matériel inclus"],
    featuresEn: ["2 people", "Equipment included"],
    duration: "2h",
    durationEn: "2h",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'cours-prive',
    category: 'surf',
    title: 'Cours Privé',
    titleEn: 'Private Lessons',
    priceDisplay: '50€',
    image: coursPrive,
    fullDesc: "Cours individuel personnalisé.",
    fullDescEn: "Individual personalized lesson.",
    packs: [
      { label: "Session 2h", price: 50 },
      { label: "Pack 6h", price: 140 },
      { label: "Pack 12h", price: 260 }
    ],
    features: ["1 personne", "Matériel inclus"],
    featuresEn: ["1 person", "Equipment included"],
    duration: "2h",
    durationEn: "2h",
    level: "Tous niveaux",
    levelEn: "All levels"
  },

  // --- TRIPS ---
  {
    id: 'trip-tafedna',
    category: 'trips',
    title: 'Surf Trip Tafedna',
    titleEn: 'Tafedna Surf Trip',
    priceDisplay: 'À partir de 70€',
    image: tripImsouane,
    fullDesc: "Trip d'une journée à Tafedna. Session de surf et thé inclus.",
    fullDescEn: "Full day trip to Tafedna. Surf session and tea included.",
    tieredPricing: [
      { guests: "1 pers", price: 100 },
      { guests: "2 pers", price: 80 },
      { guests: "3+ pers", price: 70 }
    ],
    features: ["Transport inclus", "Session de surf", "Thé"],
    featuresEn: ["Transport included", "Surf session", "Tea"],
    duration: "1 journée",
    durationEn: "1 day",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'trip-imsouane',
    category: 'trips',
    title: 'Surf Trip Imsouane',
    titleEn: 'Imsouane Surf Trip',
    priceDisplay: 'À partir de 75€',
    image: tripImsouane,
    fullDesc: "Trip d'une journée à Imsouane.",
    fullDescEn: "Full day trip to Imsouane.",
    tieredPricing: [
      { guests: "1 pers", price: 105 },
      { guests: "2 pers", price: 85 },
      { guests: "3+ pers", price: 75 }
    ],
    features: ["Transport inclus", "Session de surf"],
    featuresEn: ["Transport included", "Surf session"],
    duration: "1 journée",
    durationEn: "1 day",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'trip-taghazout',
    category: 'trips',
    title: 'Trip Taghazout (2j)',
    titleEn: 'Taghazout Trip (2d)',
    priceDisplay: 'À partir de 190€',
    image: tripTaghazout,
    fullDesc: "Trip de 2 jours (1 nuit) en full pack. Minimum 2 personnes.",
    fullDescEn: "2-day trip (1 night) full pack. Min 2 people.",
    tieredPricing: [
      { guests: "2 pers", price: 220 },
      { guests: "3+ pers", price: 190 }
    ],
    features: ["Hébergement (1 nuit)", "Transport inclus", "Full Pack"],
    featuresEn: ["Accommodation (1 night)", "Transport included", "Full Package"],
    duration: "2 jours / 1 nuit",
    durationEn: "2 days / 1 night",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'trip-tamraght',
    category: 'trips',
    title: 'Trip Tamraght (2j)',
    titleEn: 'Tamraght Trip (2d)',
    priceDisplay: 'À partir de 190€',
    image: tripTamraght,
    fullDesc: "Trip de 2 jours (1 nuit) en full pack. Minimum 2 personnes.",
    fullDescEn: "2-day trip (1 night) full pack. Min 2 people.",
    tieredPricing: [
      { guests: "2 pers", price: 220 },
      { guests: "3+ pers", price: 190 }
    ],
    features: ["Hébergement (1 nuit)", "Transport inclus", "Full Pack"],
    featuresEn: ["Accommodation (1 night)", "Transport included", "Full Package"],
    duration: "2 jours / 1 nuit",
    durationEn: "2 days / 1 night",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'surf-secret-spot',
    category: 'trips',
    title: 'Surf Secret Spot',
    titleEn: 'Secret Spot Session',
    priceDisplay: '50€',
    image: tripImsouane,
    fullDesc: "Session de surf sur un spot secret avec thé inclus.",
    fullDescEn: "Surf session on a secret spot with tea included.",
    features: ["Session de surf", "Thé"],
    featuresEn: ["Surf session", "Tea"],
    duration: "Session",
    durationEn: "Session",
    level: "Tous niveaux",
    levelEn: "All levels"
  },

  // --- SEJOURS ---
  {
    id: 'sejour-semaine',
    category: 'sejours',
    title: 'La Semaine Surf',
    titleEn: 'The Surf Week',
    priceDisplay: '490€',
    image: sejourSemaine,
    fullDesc: "Séjour de 7 jours incluant l'hébergement à la Surf House, une visite guidée d'Essaouira, 6 cours de surf et la demi-pension (6 jours).",
    fullDescEn: "7-day stay including Surf House accommodation, Essaouira guided tour, 6 surf lessons and half-board (6 days).",
    features: ["7 nuits", "6 cours de surf", "Demi-pension (6j)", "Visite Essaouira"],
    featuresEn: ["7 nights", "6 surf lessons", "Half-board (6d)", "Essaouira Tour"],
    duration: "7 jours",
    durationEn: "7 days",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'sejour-weekend',
    category: 'sejours',
    title: 'Week-end Surf',
    titleEn: 'Surf Weekend',
    priceDisplay: '180€',
    image: sejourWeekend,
    fullDesc: "Séjour de 2 nuits incluant 2 cours de surf.",
    fullDescEn: "2-night stay including 2 surf lessons.",
    features: ["2 nuits", "2 cours de surf"],
    featuresEn: ["2 nights", "2 surf lessons"],
    duration: "2 nuits",
    durationEn: "2 nights",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'sejour-libre',
    category: 'sejours',
    title: 'Formule Libre',
    titleEn: 'Flexible Stay',
    priceDisplay: 'À partir de 80€/j',
    image: sejourSurMesure,
    fullDesc: "Formule à la carte : 90€/jour (nuit, cours et demi-pension). Tarif dégressif à 80€/jour à partir du 4ème jour. Note : Le nombre de cours et de demi-pensions correspond au nombre de nuits moins un.",
    fullDescEn: "A la carte formula: 90€/day (night, lesson and half-board). Discount to 80€/day from the 4th day. Note: Number of lessons and meals equals number of nights minus one.",
    features: ["Hébergement", "Cours de surf", "Demi-pension"],
    featuresEn: ["Accommodation", "Surf lessons", "Half-board"],
    duration: "Sur mesure",
    durationEn: "Custom",
    level: "Tous niveaux",
    levelEn: "All levels"
  },

  // --- EXPERIENCES ---
  {
    id: 'exp-camel',
    category: 'experiences',
    title: 'Camel Ride',
    titleEn: 'Camel Ride',
    priceDisplay: '15€',
    image: expCamel,
    fullDesc: "Balade à dromadaire sur la plage.",
    fullDescEn: "Camel ride on the beach.",
    tieredPricing: [
      { guests: "1 heure", price: 15 },
      { guests: "2 heures", price: 25 },
      { guests: "Sunset (1h30)", price: 30 }
    ],
    features: ["Balade sur la plage"],
    featuresEn: ["Beach ride"],
    duration: "1h - 2h",
    durationEn: "1h - 2h",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'exp-horse',
    category: 'experiences',
    title: 'Horse Ride',
    titleEn: 'Horse Ride',
    priceDisplay: '20€',
    image: expHorse,
    fullDesc: "Balade à cheval sur la plage.",
    fullDescEn: "Horse ride on the beach.",
    tieredPricing: [
      { guests: "1 heure", price: 20 },
      { guests: "2 heures", price: 35 },
      { guests: "Sunset (1h30)", price: 40 }
    ],
    features: ["Balade sur la plage"],
    featuresEn: ["Beach ride"],
    duration: "1h - 2h",
    durationEn: "1h - 2h",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'exp-quad',
    category: 'experiences',
    title: 'Quad Adventure',
    titleEn: 'Quad Adventure',
    priceDisplay: '40€',
    image: expQuad,
    fullDesc: "Sortie en quad.",
    fullDescEn: "Quad outing.",
    tieredPricing: [
      { guests: "1 heure", price: 40 },
      { guests: "2 heures", price: 60 }
    ],
    features: ["Sortie Quad"],
    featuresEn: ["Quad outing"],
    duration: "1h - 2h",
    durationEn: "1h - 2h",
    level: "Tous niveaux",
    levelEn: "All levels"
  },
  {
    id: 'exp-hammam',
    category: 'experiences',
    title: 'Hammam Traditionnel',
    titleEn: 'Traditional Hammam',
    priceDisplay: '20€',
    image: expCamel,
    fullDesc: "Séance de hammam traditionnel.",
    fullDescEn: "Traditional hammam session.",
    tieredPricing: [
      { guests: "Séance", price: 20 }
    ],
    features: ["Gommage au savon noir"],
    featuresEn: ["Black soap scrub"],
    duration: "1h",
    durationEn: "1h",
    level: "Détente",
    levelEn: "Relaxation"
  },
];
