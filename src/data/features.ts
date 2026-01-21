// src/data/features.ts

export const homeFeatures = [
  {
    title: "Moniteurs Certifiés",
    description: "Diplômés ISA avec plus de 10 ans d'expérience locale.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z" // Éclair
  },
  {
    title: "Petits Groupes",
    description: "Maximum 4 élèves par moniteur pour une progression rapide.",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // Groupe
  },
  {
    title: "Matériel Premium",
    description: "Combinaisons neuves et planches adaptées à votre niveau.",
    iconPath: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" // Trophée/Outils
  },
  {
    title: "Spot de Rêve",
    description: "Accès direct à la plage. Pas de marche, pas de stress.",
    iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" // Localisation
  }
];

export const contactFeatures = [
  {
    title: "Email",
    description: "", // Non utilisé car mode lien
    iconPath: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    link: {
        url: "mailto:temp@gmail.com",
        text: "temp@gmail.com",
        subText: "Réponse sous 24h"
    }
  },
  {
    title: "WhatsApp",
    description: "",
    iconPath: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
    link: {
        url: "https://wa.me/212600000000",
        text: "+212 6 00 00 00",
        subText: "Direct & Rapide"
    }
  },
  {
    title: "Localisation",
    description: "",
    iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
    link: {
        url: "https://maps.google.com/?q=Sidi+Kaouki",
        text: "Sidi Kaouki",
        subText: "Maroc • Essaouira"
    }
  }
];

export const houseFeatures = [
  {
    title: "Wifi Fibre",
    description: "Une connexion haut débit stable dans toute la maison, idéale pour le télétravail entre deux sessions.",
    iconPath: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a9.75 9.75 0 0113.788 0M1.924 8.674a14.25 14.25 0 0120.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
  },
  {
    title: "Petit-déjeuner Bio",
    description: "Produits locaux, miel d'argan, amlou et fruits frais pour faire le plein d'énergie avant d'aller surfer.",
    iconPath: "M12 3v18M3 12h18M5.25 5.25l13.5 13.5M18.75 5.25L5.25 18.75" // Icône simplifiée (ou utilisez une icône de tasse/bol)
  },
  {
    title: "Rangement Planches",
    description: "Un espace sécurisé et ventilé pour rincer et stocker votre matériel personnel en toute sérénité.",
    iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];
