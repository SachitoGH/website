export interface Offering {
  id: string;
  category: 'surf' | 'trips' | 'sejours' | 'experiences';
  title: string;
  titleEn?: string; // Ajout
  price: string;
  image: string;
  shortDesc: string;
  shortDescEn?: string; // Ajout
  fullDesc: string;
  fullDescEn?: string; // Ajout
  features: string[];
  featuresEn?: string[]; // Ajout
  duration: string;
  durationEn?: string; // Ajout
  level: string;
  levelEn?: string; // Ajout
}

export const offerings: Offering[] = [
  /* -------------------------
     CATEGORIE : SURF
  ------------------------- */
  {
    id: 'surf-group',
    category: 'surf',
    title: 'Cours Collectif',
    titleEn: 'Group Lesson',
    price: '30€',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Apprenez à surfer dans une ambiance conviviale.',
    shortDescEn: 'Learn to surf in a friendly atmosphere.',
    fullDesc: 'L\'option idéale pour débuter ou progresser en s\'amusant. Nos groupes sont limités à 6 personnes par moniteur pour garantir sécurité et conseils personnalisés. Échauffement, théorie sur le sable et pratique dans l\'eau.',
    fullDescEn: 'The ideal option to start or progress while having fun. Our groups are limited to 6 people per instructor to ensure safety and personalized advice. Warm-up, theory on the sand, and practice in the water.',
    features: ['Petit groupe (max 6)', 'Planche & Combi incluses', 'Assurance'],
    featuresEn: ['Small group (max 6)', 'Board & Wetsuit included', 'Insurance'],
    duration: '2h',
    level: 'Tous niveaux',
    levelEn: 'All levels'
  },
  {
    id: 'surf-private',
    category: 'surf',
    title: 'Cours Privé',
    titleEn: 'Private Lesson',
    price: '50€',
    image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Un coaching exclusif pour une progression rapide.',
    shortDescEn: 'Exclusive coaching for rapid progression.',
    fullDesc: 'Avoir un coach rien que pour soi change tout. Analyse technique poussée, choix de vague optimisé et feedback immédiat après chaque vague. Idéal pour passer un cap technique ou pour ceux qui veulent une attention totale.',
    fullDescEn: 'Having a coach all to yourself changes everything. In-depth technical analysis, optimized wave selection, and immediate feedback after every wave. Ideal for breaking through a plateau or for those who want total attention.',
    features: ['100% Personnalisé', 'Analyse vidéo possible', 'Choix du spot'],
    featuresEn: ['100% Personalized', 'Video analysis available', 'Spot choice'],
    duration: '2h',
    level: 'Tous niveaux',
    levelEn: 'All levels'
  },
  {
    id: 'surf-semiprivate',
    category: 'surf',
    title: 'Cours Semi-Privé',
    titleEn: 'Semi-Private Lesson',
    price: '40€',
    image: 'https://images.unsplash.com/photo-1718947693081-5316df704705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyZiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
    shortDesc: 'Partagez un coach en duo ou trio.',
    shortDescEn: 'Share a coach as a duo or trio.',
    fullDesc: 'Le compromis parfait entre le cours privé et le collectif. Venez en couple ou entre amis (2 à 3 personnes max) et profitez d\'un coaching resserré tout en partageant vos sessions.',
    fullDescEn: 'The perfect compromise between private and group lessons. Come as a couple or with friends (2 to 3 people max) and enjoy focused coaching while sharing your sessions.',
    features: ['Idéal couples/amis', 'Progression rapide', 'Ambiance cool'],
    featuresEn: ['Ideal for couples/friends', 'Fast progression', 'Cool vibes'],
    duration: '2h',
    level: 'Tous niveaux',
    levelEn: 'All levels'
  },

  /* -------------------------
     CATEGORIE : TRIPS
  ------------------------- */
  {
    id: 'trip-imsouane',
    category: 'trips',
    title: 'Day Trip Imsouane',
    titleEn: 'Imsouane Day Trip',
    price: '60€',
    image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Surfez la plus longue droite du Maroc.',
    shortDescEn: 'Surf the longest right-hand wave in Morocco.',
    fullDesc: 'Une journée inoubliable dans la baie magique d\'Imsouane. Départ le matin, surf toute la journée sur ce longboard wave mythique, déjeuner poisson grillé inclus face à la mer.',
    fullDescEn: 'An unforgettable day in the magical bay of Imsouane. Departure in the morning, surf all day on this legendary longboard wave, grilled fish lunch included facing the sea.',
    features: ['Transport AR', 'Déjeuner inclus', 'Guiding'],
    featuresEn: ['Round-trip transport', 'Lunch included', 'Guiding'],
    duration: '1 Journée',
    durationEn: '1 Day',
    level: 'Intermédiaire',
    levelEn: 'Intermediate'
  },
  {
    id: 'trip-taghazout',
    category: 'trips',
    title: 'Trip to Taghazout',
    titleEn: 'Trip to Taghazout',
    price: '70€',
    image: 'https://images.unsplash.com/photo-1538053367502-742497073841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFnaGF6b3V0fGVufDB8fDB8fHww',
    shortDesc: 'Pèlerinage au cœur du surf marocain.',
    shortDescEn: 'Pilgrimage to the heart of Moroccan surf.',
    fullDesc: 'Découvrez la capitale du surf au Maroc. Nous vous emmenons surfer les spots légendaires comme Panorama ou Hash Point, suivi d\'une visite du village vibrant de Taghazout et ses skateparks.',
    fullDescEn: 'Discover the surf capital of Morocco. We take you to surf legendary spots like Panorama or Hash Point, followed by a visit to the vibrant village of Taghazout and its skateparks.',
    features: ['Visite Anchor Point', 'Transport Confort', 'Découverte culturelle'],
    featuresEn: ['Visit Anchor Point', 'Comfort Transport', 'Cultural discovery'],
    duration: '1 Journée',
    durationEn: '1 Day',
    level: 'Intermédiaire / Avancé',
    levelEn: 'Intermediate / Advanced'
  },
  {
    id: 'trip-tamaraght',
    category: 'trips',
    title: 'Trip to Tamaraght',
    titleEn: 'Trip to Tamaraght',
    price: '70€',
    image: 'https://images.unsplash.com/photo-1672753047642-d7d556483ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyb2MlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D',
    shortDesc: 'Surf et chill à Banana Village.',
    shortDescEn: 'Surf and chill at Banana Village.',
    fullDesc: 'Juste à côté de Taghazout mais plus relax, Tamaraght offre des spots incroyables comme Banana Point ou Devil\'s Rock. Une journée sous le signe de la détente et de belles vagues.',
    fullDescEn: 'Just next to Taghazout but more relaxed, Tamaraght offers incredible spots like Banana Point or Devil\'s Rock. A day dedicated to relaxation and beautiful waves.',
    features: ['Spots variés', 'Ambiance locale', 'Transport inclus'],
    featuresEn: ['Varied spots', 'Local vibe', 'Transport included'],
    duration: '1 Journée',
    durationEn: '1 Day',
    level: 'Tous niveaux',
    levelEn: 'All levels'
  },
  {
    id: 'trip-secret',
    category: 'trips',
    title: 'Surf the Secret Spot',
    titleEn: 'Surf the Secret Spot',
    price: '80€',
    image: 'https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyb2MlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D',
    shortDesc: 'Loin de la foule, juste vous et l\'océan.',
    shortDescEn: 'Far from the crowd, just you and the ocean.',
    fullDesc: 'Faites confiance à nos guides locaux. Selon la houle et le vent, nous vous emmenons 4x4 vers des plages cachées et non balisées. Une aventure sauvage pour surfer des vagues vierges.',
    fullDescEn: 'Trust our local guides. Depending on the swell and wind, we take you by 4x4 to hidden, unmarked beaches. A wild adventure to surf virgin waves.',
    features: ['Aventure 4x4', 'Spot désert', 'Pique-nique sauvage'],
    featuresEn: ['4x4 Adventure', 'Desert spot', 'Wild picnic'],
    duration: '1 Journée',
    durationEn: '1 Day',
    level: 'Intermédiaire',
    levelEn: 'Intermediate'
  },

  /* -------------------------
     CATEGORIE : SEJOURS
  ------------------------- */
  {
    id: 'sejour-immersion',
    category: 'sejours',
    title: 'Semaine Immersion',
    titleEn: 'Immersion Week',
    price: '450€',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    shortDesc: '7 jours de surf, yoga et détente.',
    shortDescEn: '7 days of surf, yoga, and relaxation.',
    fullDesc: 'Vivez au rythme des marées. Hébergement à la Surf House, cours quotidiens, matériel à disposition 24/7 et soirées feu de camp sous les étoiles. La formule tout compris pour déconnecter.',
    fullDescEn: 'Live to the rhythm of the tides. Accommodation at the Surf House, daily lessons, equipment available 24/7, and campfire evenings under the stars. The all-inclusive formula to disconnect.',
    features: ['Hébergement 7 nuits', 'Cours quotidiens', 'Petit-déjeuner'],
    featuresEn: ['7 nights Accommodation', 'Daily lessons', 'Breakfast included'],
    duration: '7 Jours',
    durationEn: '7 Days',
    level: 'Tous niveaux',
    levelEn: 'All levels'
  },
  {
    id: 'sejour-weekend',
    category: 'sejours',
    title: 'Weekend Surf Camp',
    titleEn: 'Weekend Surf Camp',
    price: '160€',
    image: 'https://images.unsplash.com/photo-1537519646099-335112f03225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cmZ8ZW58MHx8MHx8fDA%3D',
    shortDesc: 'Un shot de surf express.',
    shortDescEn: 'An express surf shot.',
    fullDesc: 'Arrivez le vendredi soir, repartez le dimanche. Deux jours intenses de surf et de soleil pour recharger les batteries. Idéal pour les locaux ou les voyageurs pressés.',
    fullDescEn: 'Arrive Friday evening, leave Sunday. Two intense days of surf and sun to recharge your batteries. Ideal for locals or travelers in a hurry.',
    features: ['2 Nuits Hébergement', '2 Cours de Surf', 'Matériel illimité'],
    featuresEn: ['2 Nights Accommodation', '2 Surf Lessons', 'Unlimited Equipment'],
    duration: '2 Jours',
    durationEn: '2 Days',
    level: 'Tous niveaux',
    levelEn: 'All levels'
  },
  {
    id: 'sejour-libre',
    category: 'sejours',
    title: 'Formule Libre',
    titleEn: 'Free Soul Package',
    price: '300€',
    image: 'https://images.unsplash.com/photo-1665523183215-2ad73406bd0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZiUyMGhvdXNlfGVufDB8fDB8fHww',
    shortDesc: 'Juste le gîte et le matériel.',
    shortDescEn: 'Just accommodation and gear.',
    fullDesc: 'Pour les surfeurs autonomes qui n\'ont pas besoin de cours. Profitez de l\'hébergement à la Surf House et de l\'accès illimité à notre quiver de planches (shortboards, longboards, mousses).',
    fullDescEn: 'For autonomous surfers who don\'t need lessons. Enjoy accommodation at the Surf House and unlimited access to our quiver of boards (shortboards, longboards, foamies).',
    features: ['Hébergement 7 nuits', 'Matériel illimité', 'Conseils spots'],
    featuresEn: ['7 nights Accommodation', 'Unlimited Equipment', 'Spot advice'],
    duration: '7 Jours',
    durationEn: '7 Days',
    level: 'Autonome',
    levelEn: 'Autonomous'
  },

  /* -------------------------
     CATEGORIE : EXPERIENCES
  ------------------------- */
  {
    id: 'exp-sandboarding',
    category: 'experiences',
    title: 'Surf Dune',
    titleEn: 'Sandboarding',
    price: '20€',
    image: 'https://plus.unsplash.com/premium_photo-1722112701073-6fef5a7ddf68?q=80&w=687&auto=format&fit=crop',
    shortDesc: 'Glissez sur les dunes dorées face à l\'océan.',
    shortDescEn: 'Slide down golden dunes facing the ocean.',
    fullDesc: 'Quand les vagues se calment, grimpez sur les grandes dunes et dévalez la pente face au coucher du soleil. Fous rires et photos incroyables garantis.',
    fullDescEn: 'When the waves calm down, climb the big dunes and slide down the slope facing the sunset. Laughter and incredible photos guaranteed.',
    features: ['Planche incluse', 'Spot vue mer', 'Coucher de soleil'],
    featuresEn: ['Board included', 'Sea view spot', 'Sunset'],
    duration: '2h',
    durationEn: '2h',
    level: 'Fun / Tous niveaux',
    levelEn: 'Fun / All levels'
  },
  {
    id: 'exp-camel',
    category: 'experiences',
    title: 'Camel Ride',
    titleEn: 'Camel Ride',
    price: '25€',
    image: 'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Balade traditionnelle au coucher du soleil.',
    shortDescEn: 'Traditional sunset ride.',
    fullDesc: 'L\'expérience incontournable du Maroc. Une promenade paisible à dos de dromadaire le long de la plage infinie de Sidi Kaouki. Magique au moment où le soleil touche l\'horizon.',
    fullDescEn: 'The must-do experience in Morocco. A peaceful ride on a dromedary along the endless beach of Sidi Kaouki. Magical the moment the sun touches the horizon.',
    features: ['Guide local', 'Balade plage', 'Thé à la menthe'],
    featuresEn: ['Local guide', 'Beach ride', 'Mint tea'],
    duration: '1h30',
    durationEn: '1h30',
    level: 'Détente',
    levelEn: 'Relaxation'
  },
  {
    id: 'exp-horse',
    category: 'experiences',
    title: 'Horse Ride',
    titleEn: 'Horse Ride',
    price: '35€',
    image: 'https://images.unsplash.com/photo-1614513017278-bb97772e9db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2UlMjByaWRlJTIwbWFyb2N8ZW58MHx8MHx8fDA%3D',
    shortDesc: 'Galop sur la plage sauvage.',
    shortDescEn: 'Gallop on the wild beach.',
    fullDesc: 'Que vous soyez cavalier débutant ou émérite, découvrez la sensation de liberté ultime en chevauchant de superbes chevaux arabes-barbes sur le sable mouillé.',
    fullDescEn: 'Whether you are a beginner or an expert rider, discover the ultimate feeling of freedom riding superb Arab-Barb horses on the wet sand.',
    features: ['Chevaux dressés', 'Moniteur équestre', 'Casque fourni'],
    featuresEn: ['Trained horses', 'Equestrian instructor', 'Helmet provided'],
    duration: '1h30',
    durationEn: '1h30',
    level: 'Tous niveaux',
    levelEn: 'All levels'
  },
  {
    id: 'exp-quad',
    category: 'experiences',
    title: 'Quad Adventure',
    titleEn: 'Quad Adventure',
    price: '45€',
    image: 'https://images.unsplash.com/photo-1701257868711-e9bbfb8b22fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhZCUyMG1hcm9jfGVufDB8fDB8fHww',
    shortDesc: 'Adrénaline entre plage et forêt.',
    shortDescEn: 'Adrenaline between beach and forest.',
    fullDesc: 'Explorez l\'arrière-pays de Sidi Kaouki, traversez les forêts d\'arganiers et foncez sur les dunes. Une manière dynamique de découvrir les paysages sauvages de la région.',
    fullDescEn: 'Explore the hinterland of Sidi Kaouki, cross argan forests and race over the dunes. A dynamic way to discover the wild landscapes of the region.',
    features: ['Guide motorisé', 'Équipement sécurité', 'Parcours varié'],
    featuresEn: ['Motorized guide', 'Safety gear', 'Varied route'],
    duration: '2h',
    durationEn: '2h',
    level: 'Permis non requis',
    levelEn: 'No license required'
  },
  {
    id: 'exp-picnic',
    category: 'experiences',
    title: 'Sunset Picnic',
    titleEn: 'Sunset Picnic',
    price: '30€',
    image: 'https://plus.unsplash.com/premium_photo-1663119029722-0da758fa1181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljbmljJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D',
    shortDesc: 'Dîner berbère face à l\'océan.',
    shortDescEn: 'Berber dinner facing the ocean.',
    fullDesc: 'Nous installons un campement éphémère confortable sur la plage. Tapis, coussins, tajine maison et feu de camp pour clôturer la journée en beauté.',
    fullDescEn: 'We set up a comfortable ephemeral camp on the beach. Rugs, cushions, homemade tajine, and a campfire to end the day beautifully.',
    features: ['Repas complet', 'Feu de camp', 'Installation cozy'],
    featuresEn: ['Full meal', 'Campfire', 'Cozy setup'],
    duration: 'Soirée',
    durationEn: 'Evening',
    level: 'Romantique / Convivial',
    levelEn: 'Romantic / Friendly'
  }
];
