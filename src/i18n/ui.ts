export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    //NAVBAR
    'nav.home': 'Accueil',
    'nav.surf': 'Surf',
    'nav.trips': 'Trips',
    'nav.stays': 'Séjours',
    'nav.experiences': 'Expériences',
    'nav.surf-house': 'Surf House',
    'nav.about': 'À propos',
    'nav.book': 'Réserver',
    // FOOTER
    'footer.location': 'Sidi Kaouki, Essaouira, Maroc',
    'footer.rights': 'Sidi Surf. Toutes vagues réservées.',
    // --- BOOKING MODAL ---
    'booking.title': 'Réserver votre vague',
    'booking.subtitle': 'Dites-nous en plus sur votre projet de voyage.',
    'booking.label.name': 'Nom complet',
    'booking.placeholder.name': 'Ex: Sarah Martin',
    'booking.label.email': 'Email',
    'booking.placeholder.email': 'Ex: sarah@email.com',
    'booking.label.arrival': 'Arrivée',
    'booking.label.guests': 'Voyageurs',
    'booking.label.interest': 'Formule souhaitée',
    'booking.label.message': 'Message (Optionnel)',
    'booking.placeholder.message': 'Niveau de surf, questions...',
    'booking.submit': 'Envoyer la demande',
    'booking.subtext': "Aucun paiement requis pour l'instant",
    'booking.success.title': 'Message reçu !',
    'booking.success.text': 'Merci. Notre équipe va étudier votre demande et vous répondra sous 24h.',
    'booking.success.back': 'Retour au site',

    // Options Voyageurs
    'booking.guests.1': '1 personne',
    'booking.guests.2': '2 personnes',
    'booking.guests.3': '3 personnes',
    'booking.guests.group': '4+ groupe',

    // Options Formules
    'booking.interest.general': 'Je ne sais pas encore / Autre',
    'booking.interest.surf': 'Cours de Surf',
    'booking.interest.trips': 'Surf Trip / Guiding',
    'booking.interest.sejours': 'Séjour Complet',
    'booking.interest.experiences': 'Expérience (Surf dune, camel...)',
    'booking.interest.housing': 'Hébergement seul',

    // Messages JS
    'booking.js.sending': 'Envoi...',
    'booking.js.error': 'Une erreur s\'est produite. Veuillez réessayer.',
    // Team
    'team.title': "L'Équipe",
    // instafeed
    'insta.follow': 'Suivez-nous',
    //Card
    'card.starting': 'À partir de',
    'card.learnMore': 'En savoir plus',
    //Review
    'reviews.title': "Le livre d'Or",
    'reviews.subtitle': "Ce que nos surfeurs disent de nous",
    'reviews.tripadvisor': "Voir sur TripAdvisor",
    'reviews.google': "Voir sur Google",
  },
  en: {
    // NAVBAR
    'nav.home': 'Home',
    'nav.surf': 'Surf',
    'nav.trips': 'Trips',
    'nav.stays': 'Stays',
    'nav.experiences': 'Experiences',
    'nav.surf-house': 'Surf House',
    'nav.about': 'About',
    'nav.book': 'Book Now',
    // FOOTER
    'footer.location': 'Sidi Kaouki, Essaouira, Morocco',
    'footer.rights': 'Sidi Surf. All waves reserved.',
    // --- BOOKING MODAL ---
    'booking.title': 'Book your wave',
    'booking.subtitle': 'Tell us more about your trip.',
    'booking.label.name': 'Full Name',
    'booking.placeholder.name': 'Ex: Sarah Martin',
    'booking.label.email': 'Email',
    'booking.placeholder.email': 'Ex: sarah@email.com',
    'booking.label.arrival': 'Arrival',
    'booking.label.guests': 'Guests',
    'booking.label.interest': 'Package interested in',
    'booking.label.message': 'Message (Optional)',
    'booking.placeholder.message': 'Surf level, questions...',
    'booking.submit': 'Send Request',
    'booking.subtext': "No payment required yet",
    'booking.success.title': 'Message received!',
    'booking.success.text': 'Thanks. Our team will review your request and reply within 24h.',
    'booking.success.back': 'Back to site',

    // Options Guests
    'booking.guests.1': '1 person',
    'booking.guests.2': '2 people',
    'booking.guests.3': '3 people',
    'booking.guests.group': '4+ group',

    // Options Interests
    'booking.interest.general': 'Not sure yet / Other',
    'booking.interest.surf': 'Surf Lessons',
    'booking.interest.trips': 'Surf Trip / Guiding',
    'booking.interest.sejours': 'Full Stay',
    'booking.interest.experiences': 'Experience (Sandboarding, camel...)',
    'booking.interest.housing': 'Accommodation only',

    // JS Messages
    'booking.js.sending': 'Sending...',
    'booking.js.error': 'An error occurred. Please try again.',
    // Team
    'team.title': "The Team",
    // instafeed
    'insta.follow': 'Follow us',
    //Card
    'card.starting': 'From',
    'card.learnMore': 'Learn more',
    // Review
    'reviews.title': "Guestbook",
    'reviews.subtitle': "What our surfers say about us",
    'reviews.tripadvisor': "See on TripAdvisor",
    'reviews.google': "See on Google",
  },
} as const;
