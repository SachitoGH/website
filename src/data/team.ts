export interface TeamMember {
  name: string;
  role: string;
  roleEn?: string;
  image: string;
  bio?: string;
  bioEn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Salim",
    role: "Moniteur Certifié & Co-Fondateur",
    roleEn: "Certified Instructor & Co-Founder",
    image: "", // pas d'image
    bio: "Originaire de Safi, Salim est tombé dans le surf très jeune. Champion à trois reprises dans sa jeunesse, il transmet aujourd'hui son expérience avec une approche technique et humaine.",
    bioEn: "Originally from Safi, Salim fell into surfing at a very young age. A three-time champion in his youth, he now shares his experience with a technical and human approach."
  },
  {
    name: "Lili",
    role: "Co-Fondatrice & Organisation",
    roleEn: "Co-Founder & Organization",
    image: "", // pas d'image
    bio: "Ancienne professeure de natation, Lili s'est naturellement tournée vers l'océan avant de tomber amoureuse du surf et de l'énergie qu'il procure. Elle gère la Surf House et la vie du camp.",
    bioEn: "A former swimming teacher, Lili naturally turned to the ocean before falling in love with surfing and its energy. She manages the Surf House and camp life."
  }
];
