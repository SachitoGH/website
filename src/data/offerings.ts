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
  /* -------------------------
     CATEGORIE : SURF
  ------------------------- */
  {
    id: 'surf-group',
    category: 'surf',
    title: 'Cours Collectif',
    price: '30€',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Apprenez à surfer dans une ambiance conviviale.',
    fullDesc: 'L\'option idéale pour débuter ou progresser en s\'amusant. Nos groupes sont limités à 6 personnes par moniteur pour garantir sécurité et conseils personnalisés. Échauffement, théorie sur le sable et pratique dans l\'eau.',
    features: ['Petit groupe (max 6)', 'Planche & Combi incluses', 'Assurance'],
    duration: '2h',
    level: 'Tous niveaux'
  },
  {
    id: 'surf-private',
    category: 'surf',
    title: 'Cours Privé',
    price: '50€',
    image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Un coaching exclusif pour une progression rapide.',
    fullDesc: 'Avoir un coach rien que pour soi change tout. Analyse technique poussée, choix de vague optimisé et feedback immédiat après chaque vague. Idéal pour passer un cap technique ou pour ceux qui veulent une attention totale.',
    features: ['100% Personnalisé', 'Analyse vidéo possible', 'Choix du spot'],
    duration: '2h',
    level: 'Tous niveaux'
  },
  {
    id: 'surf-semiprivate',
    category: 'surf',
    title: 'Cours Semi-Privé',
    price: '40€',
    image: 'https://images.unsplash.com/photo-1718947693081-5316df704705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyZiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
    shortDesc: 'Partagez un coach en duo ou trio.',
    fullDesc: 'Le compromis parfait entre le cours privé et le collectif. Venez en couple ou entre amis (2 à 3 personnes max) et profitez d\'un coaching resserré tout en partageant vos sessions.',
    features: ['Idéal couples/amis', 'Progression rapide', 'Ambiance cool'],
    duration: '2h',
    level: 'Tous niveaux'
  },

  /* -------------------------
     CATEGORIE : TRIPS
  ------------------------- */
  {
    id: 'trip-imsouane',
    category: 'trips',
    title: 'Day Trip Imsouane',
    price: '60€',
    image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Surfez la plus longue droite du Maroc.',
    fullDesc: 'Une journée inoubliable dans la baie magique d\'Imsouane. Départ le matin, surf toute la journée sur ce longboard wave mythique, déjeuner poisson grillé inclus face à la mer.',
    features: ['Transport AR', 'Déjeuner inclus', 'Guiding'],
    duration: '1 Journée',
    level: 'Intermédiaire'
  },
  {
    id: 'trip-taghazout',
    category: 'trips',
    title: 'Trip to Taghazout',
    price: '70€',
    image: 'https://images.unsplash.com/photo-1538053367502-742497073841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFnaGF6b3V0fGVufDB8fDB8fHww',
    shortDesc: 'Pèlerinage au cœur du surf marocain.',
    fullDesc: 'Découvrez la capitale du surf au Maroc. Nous vous emmenons surfer les spots légendaires comme Panorama ou Hash Point, suivi d\'une visite du village vibrant de Taghazout et ses skateparks.',
    features: ['Visite Anchor Point', 'Transport Confort', 'Découverte culturelle'],
    duration: '1 Journée',
    level: 'Intermédiaire / Avancé'
  },
  {
    id: 'trip-tamaraght',
    category: 'trips',
    title: 'Trip to Tamaraght',
    price: '70€',
    image: 'https://images.unsplash.com/photo-1672753047642-d7d556483ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyb2MlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D',
    shortDesc: 'Surf et chill à Banana Village.',
    fullDesc: 'Juste à côté de Taghazout mais plus relax, Tamaraght offre des spots incroyables comme Banana Point ou Devil\'s Rock. Une journée sous le signe de la détente et de belles vagues.',
    features: ['Spots variés', 'Ambiance locale', 'Transport inclus'],
    duration: '1 Journée',
    level: 'Tous niveaux'
  },
  {
    id: 'trip-secret',
    category: 'trips',
    title: 'Surf the Secret Spot',
    price: '80€',
    image: 'https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyb2MlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D',
    shortDesc: 'Loin de la foule, juste vous et l\'océan.',
    fullDesc: 'Faites confiance à nos guides locaux. Selon la houle et le vent, nous vous emmenons 4x4 vers des plages cachées et non balisées. Une aventure sauvage pour surfer des vagues vierges.',
    features: ['Aventure 4x4', 'Spot désert', 'Pique-nique sauvage'],
    duration: '1 Journée',
    level: 'Intermédiaire'
  },

  /* -------------------------
     CATEGORIE : SEJOURS
  ------------------------- */
  {
    id: 'sejour-immersion',
    category: 'sejours',
    title: 'Semaine Immersion',
    price: '450€',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    shortDesc: '7 jours de surf, yoga et détente.',
    fullDesc: 'Vivez au rythme des marées. Hébergement à la Surf House, cours quotidiens, matériel à disposition 24/7 et soirées feu de camp sous les étoiles. La formule tout compris pour déconnecter.',
    features: ['Hébergement 7 nuits', 'Cours quotidiens', 'Petit-déjeuner'],
    duration: '7 Jours',
    level: 'Tous niveaux'
  },
  {
    id: 'sejour-weekend',
    category: 'sejours',
    title: 'Weekend Surf Camp',
    price: '160€',
    image: 'https://images.unsplash.com/photo-1537519646099-335112f03225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cmZ8ZW58MHx8MHx8fDA%3D',
    shortDesc: 'Un shot de surf express.',
    fullDesc: 'Arrivez le vendredi soir, repartez le dimanche. Deux jours intenses de surf et de soleil pour recharger les batteries. Idéal pour les locaux ou les voyageurs pressés.',
    features: ['2 Nuits Hébergement', '2 Cours de Surf', 'Matériel illimité'],
    duration: '2 Jours',
    level: 'Tous niveaux'
  },
  {
    id: 'sejour-libre',
    category: 'sejours',
    title: 'Formule Libre',
    price: '300€',
    image: 'https://images.unsplash.com/photo-1665523183215-2ad73406bd0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZiUyMGhvdXNlfGVufDB8fDB8fHww',
    shortDesc: 'Juste le gîte et le matériel.',
    fullDesc: 'Pour les surfeurs autonomes qui n\'ont pas besoin de cours. Profitez de l\'hébergement à la Surf House et de l\'accès illimité à notre quiver de planches (shortboards, longboards, mousses).',
    features: ['Hébergement 7 nuits', 'Matériel illimité', 'Conseils spots'],
    duration: '7 Jours',
    level: 'Autonome'
  },

  /* -------------------------
     CATEGORIE : EXPERIENCES
  ------------------------- */
  {
    id: 'exp-sandboarding',
    category: 'experiences',
    title: 'Surf Dune',
    price: '20€',
    image: 'https://plus.unsplash.com/premium_photo-1722112701073-6fef5a7ddf68?q=80&w=687&auto=format&fit=crop',
    shortDesc: 'Glissez sur les dunes dorées face à l\'océan.',
    fullDesc: 'Quand les vagues se calment, grimpez sur les grandes dunes et dévalez la pente face au coucher du soleil. Fous rires et photos incroyables garantis.',
    features: ['Planche incluse', 'Spot vue mer', 'Coucher de soleil'],
    duration: '2h',
    level: 'Fun / Tous niveaux'
  },
  {
    id: 'exp-camel',
    category: 'experiences',
    title: 'Camel Ride',
    price: '25€',
    image: 'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Balade traditionnelle au coucher du soleil.',
    fullDesc: 'L\'expérience incontournable du Maroc. Une promenade paisible à dos de dromadaire le long de la plage infinie de Sidi Kaouki. Magique au moment où le soleil touche l\'horizon.',
    features: ['Guide local', 'Balade plage', 'Thé à la menthe'],
    duration: '1h30',
    level: 'Détente'
  },
  {
    id: 'exp-horse',
    category: 'experiences',
    title: 'Horse Ride',
    price: '35€',
    image: 'https://images.unsplash.com/photo-1614513017278-bb97772e9db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2UlMjByaWRlJTIwbWFyb2N8ZW58MHx8MHx8fDA%3D',
    shortDesc: 'Galop sur la plage sauvage.',
    fullDesc: 'Que vous soyez cavalier débutant ou émérite, découvrez la sensation de liberté ultime en chevauchant de superbes chevaux arabes-barbes sur le sable mouillé.',
    features: ['Chevaux dressés', 'Moniteur équestre', 'Casque fourni'],
    duration: '1h30',
    level: 'Tous niveaux'
  },
  {
    id: 'exp-quad',
    category: 'experiences',
    title: 'Quad Adventure',
    price: '45€',
    image: 'https://images.unsplash.com/photo-1701257868711-e9bbfb8b22fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhZCUyMG1hcm9jfGVufDB8fDB8fHww',
    shortDesc: 'Adrénaline entre plage et forêt.',
    fullDesc: 'Explorez l\'arrière-pays de Sidi Kaouki, traversez les forêts d\'arganiers et foncez sur les dunes. Une manière dynamique de découvrir les paysages sauvages de la région.',
    features: ['Guide motorisé', 'Équipement sécurité', 'Parcours varié'],
    duration: '2h',
    level: 'Permis non requis'
  },
  {
    id: 'exp-picnic',
    category: 'experiences',
    title: 'Sunset Picnic',
    price: '30€',
    image: 'https://plus.unsplash.com/premium_photo-1663119029722-0da758fa1181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljbmljJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D',
    shortDesc: 'Dîner berbère face à l\'océan.',
    fullDesc: 'Nous installons un campement éphémère confortable sur la plage. Tapis, coussins, tajine maison et feu de camp pour clôturer la journée en beauté.',
    features: ['Repas complet', 'Feu de camp', 'Installation cozy'],
    duration: 'Soirée',
    level: 'Romantique / Convivial'
  }
];
