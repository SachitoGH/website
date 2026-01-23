export interface TeamMember {
  name: string;
  role: string;
  roleEn?: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Yassine",
    role: "Fondateur & Head Coach",
    roleEn: "Founder & Head Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  },
  {
    name: "Sarah",
    role: "Manager Surf House",
    roleEn: "Surf House Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
  },
  {
    name: "Omar",
    role: "Surf Guide",
    roleEn: "Surf Guide",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
  },
  {
    name: "Karim",
    role: "Chef Cuisinier",
    roleEn: "Head Chef",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
  }
];
