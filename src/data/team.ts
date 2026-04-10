export interface TeamMember {
  name: string;
  role: string;
  roleEn?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Salim",
    role: "Moniteur Certifié & Co-Fondateur",
    roleEn: "Certified Instructor & Co-Founder",
  },
  {
    name: "Lili",
    role: "Organisation & Co-Fondatrice",
    roleEn: "Organization & Co-Founder",
  }
];
