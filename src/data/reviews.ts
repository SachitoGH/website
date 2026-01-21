export interface Review {
  author: string;
  text: string;
  rating: number;
  source?: 'Google' | 'TripAdvisor';
}

export const reviews: Review[] = [
  {
    author: "Sarah M.",
    text: "Une expérience inoubliable ! La surf house est un petit paradis de calme. L'équipe est aux petits soins et les tajines du soir sont incroyables.",
    rating: 5,
    source: "Google"
  },
  {
    author: "Kevin « The Shark »",
    text: "J'ai bu plus d'eau que l'océan n'en contient, mais j'ai fini par tenir debout 3 secondes. Le prof a une patience d'ange, même quand je lui ai envoyé ma planche dans les côtes. Désolé encore !",
    rating: 4,
    source: "Google"
  },
  {
    author: "Thomas B.",
    text: "Meilleur spot de Sidi Kaouki. J'ai progressé super vite grâce au coaching vidéo. Les vagues étaient parfaites pour mon niveau intermédiaire.",
    rating: 5,
    source: "TripAdvisor"
  },
  {
    author: "Marie-Thérèse",
    text: "Je suis venue pour accompagner mon petit-fils. Je n'ai pas surfé mais le thé à la menthe est le meilleur du Maroc. Par contre, les jeunes font un peu de bruit en rentrant de session, mais ils sont mignons.",
    rating: 4,
    source: "Google"
  },
  {
    author: "Julien & Léa",
    text: "On devait rester 3 jours, on est restés une semaine. Tout est dit. L'ambiance familiale nous a tout de suite mis à l'aise.",
    rating: 5,
    source: "TripAdvisor"
  },
  {
    author: "Ben (UK)",
    text: "The surf is great, but let's be honest: I'm only here for the breakfast. I've been dreaming about that honey and those pancakes since I left. 10/10 would eat again.",
    rating: 5,
    source: "Google"
  },
  {
    author: "Marc D.",
    text: "Le matériel est top qualité et les moniteurs sont super pédagogues. Merci à toute l'équipe pour cette semaine de rêve.",
    rating: 5,
    source: "Google"
  },
  {
    author: "Chloé « Pieds Salés »",
    text: "Points positifs : les vagues, les gens, le roof-top. Point négatif : je n'arrive plus à m'habituer à la vie de bureau depuis mon retour. Ma patronne vous déteste. Merci pour tout !",
    rating: 5,
    source: "TripAdvisor"
  },
  {
    author: "Sophie L.",
    text: "Un lieu magique loin du tumulte d'Essaouira. Le rooftop pour le coucher de soleil après la session, c'est juste le bonheur.",
    rating: 5,
    source: "Google"
  },
  {
    author: "Jean-Pierre",
    text: "Le spot est incroyable. J'ai mis 4 étoiles car j'ai perdu mes lunettes de soleil dans un wipe-out mémorable, mais l'équipe n'y est pour rien. Super ambiance !",
    rating: 4,
    source: "Google"
  },
  {
    author: "Camille R.",
    text: "Premier surf trip solo et je ne me suis jamais sentie seule. On rencontre plein de gens sympas à la surf house. Je reviendrai l'année prochaine !",
    rating: 5,
    source: "TripAdvisor"
  },
  {
    author: "Lucas P.",
    text: "Super organisation pour le trip à Imsouane. On a surfé la baie toute la journée. Rapport qualité/prix imbattable.",
    rating: 5,
    source: "Google"
  },
  {
    author: "Antoine S.",
    text: "J'ai essayé de draguer une chèvre sur la plage pendant que j'attendais ma session, elle ne m'a pas calculé. Sinon le surf était top et l'accueil super cool. Je recommande.",
    rating: 5,
    source: "Google"
  },
  {
    author: "Famille Martin",
    text: "Nos ados ont adoré les cours de surf et nous la balade à cheval. C'est l'endroit parfait pour des vacances actives en famille.",
    rating: 5,
    source: "TripAdvisor"
  }
];
