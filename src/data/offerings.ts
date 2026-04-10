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

import type { ImageMetadata } from 'astro';

export interface Offering {
  id: string;
  category: 'surf' | 'trips' | 'sejours' | 'experiences';
  title: string;
  titleEn?: string;
  image?: ImageMetadata;
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
    fullDesc: "Apprenez à surfer dans une ambiance conviviale et détendue. Les cours en groupe sont parfaits pour partager l'expérience avec d'autres passionnés, progresser ensemble et profiter pleinement de l'énergie de l'océan.\n\nEncadré par un moniteur certifié, vous apprendrez les bases essentielles du surf : lecture des vagues, position sur la planche, take-off et premières sensations de glisse, le tout dans un cadre sécurisé et adapté à votre niveau.\n\nChaque session dure environ 1 heure, incluant présentation du matériel, consignes de sécurité, échauffement et pratique dans l'eau. Tout le matériel est fourni.",
    fullDescEn: "Learn to surf in a friendly and relaxed atmosphere. Group lessons are perfect for sharing the experience with other surf enthusiasts, progressing together and fully enjoying the energy of the ocean.\n\nSupervised by a certified instructor, you will learn the essential basics of surfing: reading the waves, positioning on the board, take-off and your first gliding sensations, all in a safe environment adapted to your level.\n\nEach session lasts about 1 hour, including equipment introduction, safety instructions, warm-up and practice in the water. All equipment is provided.",
    packs: [
      { label: "1h", price: 30 },
      { label: "6h", price: 80 },
      { label: "12h", price: 150 }
    ],
    tieredPricing: [
      { guests: "1-5 pers", price: 30 },
      { guests: "6+ pers", price: 25 }
    ],
    features: ["Max 10 personnes", "Moniteur certifié", "Matériel inclus", "Échauffement inclus"],
    featuresEn: ["Max 10 people", "Certified instructor", "Equipment included", "Warm-up included"],
    duration: "1h",
    durationEn: "1h",
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
    fullDesc: "Idéal pour les couples, amis ou membres d'une même famille, le cours semi-privé permet de bénéficier d'un accompagnement plus personnalisé tout en partageant l'expérience à deux.\n\nVotre moniteur adapte les conseils et les exercices à votre rythme pour vous aider à progresser rapidement et prendre confiance dans l'eau. Vous apprendrez les fondamentaux du surf, de la prise de vague au passage debout sur la planche.\n\nChaque session dure environ 1 heure, comprenant l'explication du matériel, les règles de sécurité, l'échauffement et la session dans l'océan. Le matériel et l'encadrement par un professeur certifié sont inclus.",
    fullDescEn: "Ideal for couples, friends or family members, the semi-private lesson offers a more personalized experience while sharing the session with one other person.\n\nYour instructor adapts the guidance and exercises to your pace to help you progress quickly and build confidence in the water. You will learn the fundamentals of surfing, from catching waves to standing up on the board.\n\nEach session lasts about 1 hour, including equipment explanation, safety rules, warm-up and the session in the ocean. Equipment and supervision by a certified instructor are included.",
    packs: [
      { label: "1h", price: 40 },
      { label: "6h", price: 110 },
      { label: "12h", price: 210 }
    ],
    features: ["2 personnes", "Moniteur certifié", "Matériel inclus", "Suivi personnalisé"],
    featuresEn: ["2 people", "Certified instructor", "Equipment included", "Personalized coaching"],
    duration: "1h",
    durationEn: "1h",
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
    fullDesc: "Le cours privé est la meilleure option pour un apprentissage entièrement personnalisé. Que vous soyez débutant ou que vous souhaitiez perfectionner votre technique, le moniteur se concentre entièrement sur votre progression.\n\nGrâce à un accompagnement sur mesure, vous pourrez travailler les bases du surf ou améliorer des points précis : lecture des vagues, positionnement, take-off et timing.\n\nChaque session dure environ 1 heure, incluant présentation du matériel, consignes de sécurité, échauffement et pratique dans l'eau. Tout le matériel est fourni et l'enseignement est assuré par un professeur de surf certifié.",
    fullDescEn: "The private lesson is the best option for fully personalized learning. Whether you are a beginner or want to improve your technique, the instructor focuses entirely on your progress.\n\nWith tailored coaching, you can work on the basics of surfing or improve specific skills: wave reading, positioning, take-off and timing.\n\nEach session lasts about 1 hour, including equipment introduction, safety instructions, warm-up and practice in the water. All equipment is provided and the lesson is led by a certified surf instructor.",
    packs: [
      { label: "1h", price: 50 },
      { label: "6h", price: 140 },
      { label: "12h", price: 260 }
    ],
    features: ["1 personne", "Moniteur certifié", "Matériel inclus", "Programme sur mesure"],
    featuresEn: ["1 person", "Certified instructor", "Equipment included", "Tailored program"],
    duration: "1h",
    durationEn: "1h",
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
    fullDesc: "Si vous cherchez nature sauvage, plages désertes et authenticité, Tafedna est le surf trip parfait. Ce petit village de pêcheurs encore préservé offre des paysages magnifiques et des spots de surf tranquilles, loin de l'agitation touristique. Le trajet fait déjà partie de l'aventure avec une route côtière spectaculaire.\n\nÀ l'arrivée, vous profitez d'une première session de surf encadrée, idéale pour apprendre ou progresser dans un cadre détendu. Nous partageons ensuite un déjeuner face à l'océan, avant de retourner à l'eau pour une seconde session de surf l'après-midi, afin de profiter pleinement des vagues. La journée se termine tranquillement autour d'un thé marocain traditionnel, face à l'océan, avant le retour.",
    fullDescEn: "If you are looking for wild nature, deserted beaches and authenticity, Tafedna is the perfect surf trip. This small, still-preserved fishing village offers magnificent scenery and quiet surf spots, far from the tourist bustle. The drive itself is already part of the adventure with a spectacular coastal road.\n\nOn arrival, you enjoy a first guided surf session, ideal for learning or progressing in a relaxed setting. We then share a lunch facing the ocean, before heading back into the water for a second afternoon surf session. The day ends quietly over a traditional Moroccan tea, facing the ocean, before the return journey.",
    tieredPricing: [
      { guests: "1 pers", price: 100 },
      { guests: "2 pers", price: 80 },
      { guests: "3+ pers", price: 70 }
    ],
    features: ["Transport inclus", "2 sessions de surf encadrées", "Déjeuner face à l'océan", "Thé marocain traditionnel"],
    featuresEn: ["Transport included", "2 guided surf sessions", "Lunch facing the ocean", "Traditional Moroccan tea"],
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
    fullDesc: "Découvrez Imsouane, l'un des spots de surf les plus célèbres du Maroc, réputé pour ses vagues longues et parfaites. Ce surf trip est idéal pour vivre l'expérience d'une vague mythique dans un cadre naturel spectaculaire.\n\nNous partons le matin pour une belle route le long de la côte Atlantique jusqu'au charmant village de pêcheurs d'Imsouane. Une fois arrivés, vous profitez d'une première session de surf encadrée, avec les conseils de nos moniteurs pour vous aider à progresser et attraper les meilleures vagues. Après la session, nous prenons un déjeuner face à l'océan, moment parfait pour se reposer avant de repartir à l'eau pour la session de surf de l'après-midi. Pour terminer la journée en douceur, nous partageons un thé à la menthe traditionnel avec vue sur la mer avant de reprendre la route.",
    fullDescEn: "Discover Imsouane, one of Morocco's most famous surf spots, renowned for its long and perfect waves. This surf trip is ideal for experiencing a legendary wave in a spectacular natural setting.\n\nWe set off in the morning along a beautiful coastal road to the charming fishing village of Imsouane. On arrival, you enjoy a first guided surf session, with our instructors' tips to help you progress and catch the best waves. After the session, we share a lunch facing the ocean — the perfect moment to rest before heading back into the water for the afternoon surf session. To end the day gently, we share a traditional mint tea with a sea view before heading home.",
    tieredPricing: [
      { guests: "1 pers", price: 105 },
      { guests: "2 pers", price: 85 },
      { guests: "3+ pers", price: 75 }
    ],
    features: ["Transport inclus", "2 sessions de surf encadrées", "Déjeuner face à l'océan", "Thé à la menthe traditionnel"],
    featuresEn: ["Transport included", "2 guided surf sessions", "Lunch facing the ocean", "Traditional mint tea"],
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
    fullDesc: "Vivez l'expérience du village de surf le plus célèbre du Maroc : Taghazout, un lieu mythique qui attire des surfeurs du monde entier. Ce surf trip de 2 jours et 1 nuit vous permet de profiter pleinement de l'ambiance surf locale tout en découvrant plusieurs spots réputés de la région.\n\nPendant le séjour, vous profitez de plusieurs sessions de surf encadrées, adaptées à votre niveau, avec les conseils de nos moniteurs pour améliorer votre technique et prendre plus de vagues. Entre les sessions, vous pourrez vous détendre, profiter des paysages de l'Atlantique et savourer de bons repas dans l'atmosphère conviviale de Taghazout. En fin de journée, place à la détente avec un thé à la menthe marocain, parfait pour conclure une journée de surf.",
    fullDescEn: "Experience the most famous surf village in Morocco: Taghazout, a legendary spot that attracts surfers from around the world. This 2-day, 1-night surf trip lets you fully immerse yourself in the local surf atmosphere while discovering several renowned spots in the region.\n\nDuring the stay, you enjoy multiple guided surf sessions adapted to your level, with our instructors' tips to improve your technique and catch more waves. Between sessions, you can relax, take in the Atlantic scenery and enjoy great meals in the friendly atmosphere of Taghazout. At the end of the day, unwind over a traditional Moroccan mint tea — the perfect way to close a day of surfing.",
    tieredPricing: [
      { guests: "2 pers", price: 220 },
      { guests: "3+ pers", price: 190 }
    ],
    features: ["Hébergement (1 nuit)", "Transport inclus", "Sessions de surf encadrées", "Repas", "Thé à la menthe"],
    featuresEn: ["Accommodation (1 night)", "Transport included", "Guided surf sessions", "Meals", "Mint tea"],
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
    fullDesc: "Situé entre montagne et océan, Tamraght est un village de surf authentique réputé pour ses nombreux spots adaptés à tous les niveaux. Ce surf trip de 2 jours et 1 nuit est idéal pour vivre pleinement l'ambiance surf marocaine tout en progressant dans l'eau.\n\nDurant ces deux jours, vous profitez de plusieurs sessions de surf avec coaching, pour améliorer votre technique et gagner en confiance. La région offre une grande variété de spots, parfaits pour s'adapter aux conditions et au niveau de chacun. Entre les sessions, vous pourrez profiter de repas locaux, de magnifiques vues sur l'océan et de l'atmosphère relax du village. Et comme toute bonne journée de surf au Maroc, l'expérience se termine autour d'un thé à la menthe face à l'océan.",
    fullDescEn: "Nestled between mountain and ocean, Tamraght is an authentic surf village known for its many spots suited to all levels. This 2-day, 1-night surf trip is ideal for fully experiencing the Moroccan surf lifestyle while progressing in the water.\n\nOver two days, you enjoy multiple coached surf sessions to improve your technique and build confidence. The region offers a wide variety of spots, perfect for adapting to conditions and every level. Between sessions, enjoy local meals, magnificent ocean views and the relaxed village atmosphere. And like any great surf day in Morocco, the experience ends over a mint tea facing the ocean.",
    tieredPricing: [
      { guests: "2 pers", price: 220 },
      { guests: "3+ pers", price: 190 }
    ],
    features: ["Hébergement (1 nuit)", "Transport inclus", "Sessions de surf avec coaching", "Repas locaux", "Thé à la menthe"],
    featuresEn: ["Accommodation (1 night)", "Transport included", "Coached surf sessions", "Local meals", "Mint tea"],
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
    fullDesc: "Certains spots ne se trouvent pas sur une carte… ils se découvrent. Avec Surf the Secret Spot, nous vous emmenons surfer dans un lieu discret de la région, choisi en fonction des conditions de houle pour offrir les meilleures vagues du moment. L'emplacement reste volontairement confidentiel afin de préserver la magie et la tranquillité du spot.\n\nAprès la session, nous prenons le temps de nous détendre dans un endroit magnifique, loin de la foule, pour partager un thé marocain traditionnel face à l'océan. Une expérience simple, authentique et un peu secrète… comme les meilleures sessions de surf.",
    fullDescEn: "Some surf spots can't be found on a map… they have to be discovered. With Surf the Secret Spot, we take you to a hidden wave somewhere along the coast. The location changes depending on the swell to make sure you score the best waves of the day. The exact spot stays secret to preserve its magic and peaceful atmosphere.\n\nAfter the surf session, we relax in a beautiful hidden place away from the crowds, sharing a traditional Moroccan mint tea while enjoying the ocean view. A simple, authentic and slightly secret surf experience… just like the best surf sessions should be.",
    features: ["Spot confidentiel", "Session de surf encadrée", "Thé marocain face à l'océan"],
    featuresEn: ["Secret location", "Guided surf session", "Moroccan tea with ocean view"],
    duration: "Demi-journée",
    durationEn: "Half day",
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
    fullDesc: "La formule idéale pour vivre l'expérience complète du surf camp. Pendant une semaine, vous séjournez dans notre surf house et profitez d'un programme équilibré entre surf, détente et découverte de la région. Chaque journée est rythmée par les sessions de surf, les repas partagés et l'ambiance conviviale du camp.\n\nAu cours du séjour, nous vous emmenons également découvrir la magnifique ville d'Essaouira lors d'une visite guidée.",
    fullDescEn: "The perfect package to fully experience the surf camp lifestyle. During the week, you'll stay at our surf house and enjoy a balanced program combining surf sessions, relaxation and local discovery. Days are organized around surf lessons, shared meals and the friendly surf camp atmosphere.\n\nDuring the stay, we also take you to explore the beautiful coastal city of Essaouira with a guided visit.",
    features: ["7 nuits à la surf house", "6 cours de surf avec nos moniteurs", "Matériel de surf pendant les cours", "Demi-pension (6 jours)", "Visite guidée d'Essaouira"],
    featuresEn: ["7 nights at the surf house", "6 surf lessons with our instructors", "Surf equipment during lessons", "Half-board for 6 days", "Guided visit of Essaouira"],
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
    fullDesc: "La formule parfaite pour une escapade surf courte mais intense. Pendant deux jours, vous séjournez à la surf house et profitez de sessions de surf encadrées par nos moniteurs.\n\nEntre les sessions, vous pourrez vous détendre, profiter de l'ambiance du camp et partager les repas avec le groupe. Un week-end idéal pour déconnecter, découvrir le surf ou simplement profiter de l'océan.",
    fullDescEn: "The perfect option for a short but unforgettable surf getaway. During your stay, you'll spend two nights at the surf house and enjoy surf lessons guided by our instructors.\n\nBetween sessions, you can relax, enjoy the atmosphere and share meals with the group. A great option to disconnect, try surfing or simply enjoy the ocean.",
    features: ["2 nuits à la surf house", "2 cours de surf encadrés", "Matériel de surf pendant les cours", "Accès à la vie et à l'ambiance du surf camp"],
    featuresEn: ["2 nights at the surf house", "2 surf lessons with instructors", "Surf equipment during lessons", "Access to the surf house and surf camp atmosphere"],
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
    fullDesc: "Vous souhaitez organiser votre séjour à votre rythme ? La formule libre vous permet de composer votre expérience surf selon vos envies. Choisissez simplement la durée de votre séjour et profitez d'un équilibre entre sessions de surf, moments de détente et vie à la surf house.\n\nCette formule est parfaite pour ceux qui veulent voyager librement tout en profitant de l'expérience surf camp. Tarif : 90€/jour (nuit, cours et demi-pension), dégressif à 80€/jour à partir du 4ème jour.",
    fullDescEn: "Want to create your own surf experience? The flexible package allows you to organize your stay according to your plans. Choose the number of nights you want and enjoy a balanced experience between surf sessions, relaxation and surf house life.\n\nPerfect for travelers who want freedom while enjoying the surf camp experience. Rate: 90€/day (accommodation, lesson and half-board), reduced to 80€/day from the 4th day onwards.",
    features: ["Hébergement à la surf house", "Cours de surf encadrés", "Matériel de surf pendant les cours", "Demi-pension"],
    featuresEn: ["Accommodation at the surf house", "Surf lessons with instructors", "Surf equipment during lessons", "Half-board meals"],
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
