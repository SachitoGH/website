export interface Review {
  author: string;
  text: string;
  textEn?: string;
  rating: number;
  source?: 'Google' | 'TripAdvisor';
}

export const reviews: Review[] = [
  {
    author: "Clara L.",
    rating: 5,
    source: "TripAdvisor",
    text: "Je recommande vivement le duo de choc de Global Surf Sidi Kaouki, Lili et Salim, à l'écoute et aux petits soins pour notre surf trip ! Surf tous les jours dans un contexte de rêve, matériel au top, ambiance à la cool mêlée au professionnalisme. Prenez contact avec eux si vous voulez progresser en surf et connaître tous les bons plans du coin !",
    textEn: "I highly recommend the amazing duo at Global Surf Sidi Kaouki, Lili and Salim — so attentive and caring throughout our surf trip! Surfing every day in a dream setting, top-quality gear, relaxed vibes mixed with real professionalism. Reach out to them if you want to progress in surfing and discover all the best spots in the area!",
  },
  {
    author: "Jean-Stanislas B.",
    rating: 5,
    source: "TripAdvisor",
    text: "Vous allez passer un moment en famille, apprendre enfin à vous lever sur votre planche de surf. Parfaite aussi bien pour les adultes que pour les enfants. Les explications sont claires et adaptées à tous les niveaux, le matériel est très bon, ce qui permet de prendre confiance très rapidement. Un souvenir inoubliable, rempli de rires et de belles sensations.",
    textEn: "You'll have a wonderful family time and finally learn to stand up on a surfboard. Perfect for both adults and children. The explanations are clear and adapted to all levels, the equipment is great, which lets you build confidence quickly. An unforgettable memory full of laughter and amazing sensations.",
  },
  {
    author: "Loris B.",
    rating: 5,
    source: "TripAdvisor",
    text: "J'ai fait du surf pour la première fois de ma vie à Sidi Kaouki, Salim mon moniteur a su me donner les bons conseils pour que je réussisse à me lever sur la planche et profiter de l'océan comme il se doit ! Merci Salim",
    textEn: "I surfed for the very first time in Sidi Kaouki. Salim, my instructor, gave me exactly the right advice to get me standing on the board and truly enjoying the ocean the way it deserves. Thank you Salim!",
  },
  {
    author: "Jeremie L.",
    rating: 5,
    source: "TripAdvisor",
    text: "Salim est présent mais vous laisse faire votre truc. Super coaching, bon pour apprendre à choisir les vagues. A vraiment su s'adapter à nous. La cerise sur le gâteau c'est le sourire non stop. Un joyeux personnage qui fait très bien son job.",
    textEn: "Salim is there when you need him but lets you do your thing. Great coaching, really helpful for learning to read waves. He genuinely adapted to us. The cherry on top is the non-stop smile — a cheerful guy who does his job brilliantly.",
  },
  {
    author: "Ocean V.",
    rating: 5,
    source: "TripAdvisor",
    text: "J'ai eu une expérience incroyable avec Salim. Les cours sont toujours aussi supers, joyeux, intéressants, j'ai appris des manœuvres super rapidement (cutback) et je lis bien la vague maintenant. Merci pour la progression de ouf, on reviendra, on recommande et surtout beaucoup de love pour cette semaine !",
    textEn: "I had an incredible experience with Salim. The lessons are so great, fun and interesting — I learned manoeuvres super quickly (cutback) and can now properly read waves. Thanks for the insane progression, we'll be back, we highly recommend, and so much love for this week!",
  },
  {
    author: "Lauris D.",
    rating: 5,
    source: "TripAdvisor",
    text: "Plusieurs cours de surf avec Global Surf, tout était parfait. Je recommande pour la qualité du coaching, l'organisation et la bonne ambiance !",
    textEn: "Several surf lessons with Global Surf — everything was perfect. I recommend for the quality of the coaching, the organisation and the great atmosphere!",
  },
];
