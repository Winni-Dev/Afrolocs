import { Product, Hairstyle } from '../types';

export const siteConfig = {
  salonName: "Afrolocs",
  phone: import.meta.env.VITE_WHATSAPP_NUMBER || "+22558233440",
  address: " Abidjan, Côte d'Ivoire",
  email: "contact@salonafro.com",
  socialMedia: {
    instagram: "https://www.instagram.com/afrolocs_?igsh=MWJwZGg5dG00cmE4aA==",
    facebook: "https://facebook.com/salonafro",
    tiktok: "https://www.tiktok.com/@afrolocs1?_r=1&_t=ZM-91woTuRfO4u"
  },
  hours: {
    weekdays: "9h00 - 19h00",
    saturday: "9h00 - 18h00",
    sunday: "Fermé"
  },
  description: "Spécialistes en locks et tresses africaines depuis plus de 5 ans. Nous allions tradition et modernité pour sublimer votre beauté naturelle."
};

export const products: Product[] = [
  {
    id: "1",
    name: "Lock Logy – Eau de Rose Loc Mist",
    price: 15000,
    description: "Brume légère à l’eau de rose qui hydrate, rafraîchit et parfume délicatement les locs. Apaise le cuir chevelu et laisse vos locs doux, brillants et revitalisés.",
    image: "/images/products/huile-naturelle.jpg",
    category: "Soins",
    features: ["100% naturel", "Hydratation intense", "Sans produits chimiques"]
  },
  // {
  //   id: "2",
  //   name: "Taliah Love My Locs – Gro Loc Drops",
  //   price: 8000,
  //   description: "Sérum léger spécialement conçu pour stimuler la croissance des locs, hydrater le cuir chevelu et réduire les démangeaisons. Enrichi en huiles naturelles, il renforce les racines et laisse les locs plus saines, douces et nourries. Idéal pour tous les types de locs.",
  //   image: "/IMAGES/img1.jpeg",
  //   category: "Styling",
  //   features: ["Tenue longue durée", "Texture naturelle", "Sans résidu"]
  // },

  {
    id: "2",
    name: "Taliah Love My Locs – Gro Loc Drops",
    price: 8000,
    description: "Sérum léger spécialement conçu pour stimuler la croissance des locs, hydrater le cuir chevelu et réduire les démangeaisons. Enrichi en huiles naturelles, il renforce les racines et laisse les locs plus saines, douces et nourries. Idéal pour tous les types de locs.",
    image: "/IMAGES/produis1.jpeg",
    category: "Soins",
    features: ["Tenue longue durée", "Texture naturelle", "Sans résidu"]
  },
  {
    id: "3",
    name: "Jamaican Mango & Lime – Island Oil",
    price: 12000,
    description: "Huile légère et nourrissante formulée pour hydrater les locs, apaiser le cuir chevelu et donner un éclat naturel. Enrichie en huiles tropicales, elle adoucit, renforce et aide à prévenir la casse sans laisser de résidu.",
    image: "/images/products/shampooing.jpg",
    category: "Soins",
    features: ["Doux et nourrissant", "Préserve les locks", "pH équilibré"]
  },
  {
    id: "4",
    name: "Aloe Locks – Shampooing Purifiant",
    price: 5000,
    description: "Shampooing doux et purifiant enrichi à l’aloe vera, conçu pour nettoyer en profondeur les locs et le cuir chevelu tout en les hydratant. Laisse les cheveux frais, légers et revitalisés.",
    image: "/images/products/karite.jpg",
    category: "Soins",
    features: ["100% pur et naturel", "Hydratation profonde", "Multi-usage"]
  },
  {
    id: "5",
    name: "Jamaican Mango & Lime – Locking Gel",
    price: 15000,
    description: "Gel coiffant spécialement conçu pour définir et maintenir les locs. Offre une tenue ferme tout en nourrissant les cheveux et le cuir chevelu, pour des locs saines et bien entretenues.",
    image: "/images/products/spray-hydratant.jpg",
    category: "Soins",
    features: ["Léger et non gras", "Usage quotidien", "Rafraîchissant"]
  },
  {
    id: "6",
    name: "Shine N Jam – Conditioning Gel Extra Hold",
    price: 9000,
    description: "Gel coiffant à tenue extra-forte qui définit et maintient les locs, twists et braids tout en hydratant et protégeant le cuir chevelu. Laisse les cheveux brillants, doux et sans résidu.",
    image: "/images/products/aloevera.jpg",
    category: "Soins",
    features: ["Apaisant", "Sans alcool", "Multi-fonctions"]
  },
  // {
  //   id: "7",
  //   name: "Kit Démarrage Locks",
  //   price: 35000,
  //   description: "Kit complet pour débuter vos locks avec tous les produits essentiels",
  //   image: "/images/products/kit-locks.jpg",
  //   category: "Kits",
  //   features: ["Produits complémentaires", "Guide d'utilisation", "Économique"]
  // },
   {
    id: "7",
    name: "Aloe Locs – Gelée Hibiscus",
    price: 8000,
    description: "Gelée coiffante enrichie à l’aloe vera et à l’hibiscus pour définir et maintenir les locs, twists et braids. Hydrate, adoucit et apporte brillance naturelle sans résidu.",
    image: "/images/products/kit-locks.jpg",
    category: "Soins",
    features: ["Produits complémentaires", "Guide d'utilisation", "Économique"]
  },
  // {
  //   id: "8",
  //   name: "Huile de Ricin Jamaïcaine",
  //   price: 11000,
  //   description: "Huile de ricin pure pour stimuler la pousse et renforcer les cheveux",
  //   image: "/images/products/ricin.jpg",
  //   category: "Soins",
  //   features: ["Stimule la pousse", "Renforce les cheveux", "100% pure"]
  // }
];

export const hairstyles: Hairstyle[] = [
  {
    id: "1",
    name: "Retwist",
    duration: "3-4 heures",
    price: 7000,
    image: "/images/hairstyles/locks-traditionnelles.jpg",
    category: "Locks",
    description: "Retwist classiques réalisées avec expertise et soin"
  },
  // {
  //   id: "2",
  //   name: "Tresses Cornrows",
  //   duration: "2-3 heures",
  //   price: 18000,
  //   image: "/images/hairstyles/cornrows.jpg",
  //   category: "Tresses",
  //   description: "Tresses traditionnelles africaines aux motifs variés"
  // },

  {
    id: "2",
    name: "Départ au crochet",
    duration: "2-3 heures",
    price: 30000,
    image: "/images/hairstyles/cornrows.jpg",
    category: "Locks",
    description: "Départ au crochet nettes et régulières"
  },
  {
    id: "3",
    name: "Départ en Twists",
    duration: "4-5 heures",
    price: 30000,
    image: "/images/hairstyles/locks-crochet.jpg",
    category: "Locks",
    description: "Technique moderne pour des locks nettes et régulières"
  },
  // {
  //   id: "4",
  //   name: "Box Braids Classiques",
  //   duration: "5-6 heures",
  //   price: 35000,
  //   image: "/images/hairstyles/box-braids.jpg",
  //   category: "Tresses",
  //   description: "Tresses box braids élégantes et durables"
  // },

  {
    id: "4",
    name: "Vanille",
    duration: "2-3 heures",
    price: 10000,
    image: "/images/hairstyles/box-braids.jpg",
    category: "Locks",
    description: "vanille élégantes et durables"
  },
  // {
  //   id: "5",
  //   name: "Soins et Entretien Locks",
  //   duration: "1-2 heures",
  //   price: 12000,
  //   image: "/images/hairstyles/locks-soins.jpg",
  //   category: "Entretien",
  //   description: "Service complet d'entretien et de soins pour vos locks"
  // },
  {
    id: "5",
    name: "Départ en vanille",
    duration: "2-5 heures",
    price: 25000,
    image: "/images/hairstyles/locks-soins.jpg",
    category: "Locks",
    description: "Départ en vanille nettes et régulières"
  },
  // {
  //   id: "6",
  //   name: "Tresses Fulani",
  //   duration: "3-4 heures",
  //   price: 22000,
  //   image: "/images/hairstyles/fulani.jpg",
  //   category: "Tresses",
  //   description: "Tresses ethniques inspirées de la culture peule"
  // },
   {
    id: "6",
    name: "Interlocking",
    duration: "1-2 heures",
    price: 5000,
    image: "/images/hairstyles/fulani.jpg",
    category: "Locks",
    description: " ethniques proffessionnelles et realisées avec soin"
  },
  // {
  //   id: "7",
  //   name: "Locks Diamants",
  //   duration: "4-5 heures",
  //   price: 32000,
  //   image: "/images/hairstyles/locks-diamants.jpg",
  //   category: "Locks",
  //   description: "Locks stylisées avec motifs géométriques modernes"
  // },
  // {
  //   id: "8",
  //   name: "Tresses Goddess",
  //   duration: "6-7 heures",
  //   price: 40000,
  //   image: "/images/hairstyles/goddess.jpg",
  //   category: "Locks",
  //   description: "Tresses sophistiquées avec rajouts et ornements"
  // },
  {
    id: "9",
    name: "Barels",
    duration: "3-4 heures",
    price: 10000,
    image: "/images/hairstyles/locks-nattes.jpg",
    category: "Locks",
    description: "Barels élégantes avec finition soignée"
  },
  {
    id: "10",
    name: "Vanille",
    duration: "2-3 heures",
    price: 10000,
    image: "/images/hairstyles/tresses-collées.jpg",
    category: "Locks",
    description: "Vanille élégantes et durables"
  },
  // {
  //   id: "11",
  //   name: "Consultation Initiale",
  //   duration: "30-45 min",
  //   price: 5000,
  //   image: "/images/hairstyles/consultation.jpg",
  //   category: "Consultation",
  //   description: "Première consultation pour définir votre projet capillaire"
  // },

   {
    id: "11",
    name: "Retwist",
    duration: "30-45 min",
    price: 7000,
    image: "/images/hairstyles/consultation.jpg",
    category: "Locks",
    description: "Retwist rapides pour entretenir vos locks "
  },
  {
    id: "12",
    name: "Micro twists",
    duration: "5-6 heures",
    price: 30000,
    image: "/images/hairstyles/dreadlocks-creatives.jpg",
    category: "Locks",
    description: "Micro twists fins et élégants pour un style sophistiqué"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Aïcha T.",
    comment: "Je viens régulièrement pour l'entretien de mes locks depuis 2 ans. Un service impeccable et des conseils précieux !",
    rating: 5,
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Mohamed K.",
    comment: "Les tresses fulani réalisées sont magnifiques et tiennent parfaitement. Je recommande vivement !",
    rating: 5,
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Fatou S.",
    comment: "Produits naturels de qualité et expertise rare. Mon salon de confiance pour mes locks.",
    rating: 5,
    date: "2024-01-08"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Sarah Koné",
    role: "Spécialiste Locks",
    experience: "8 ans d'expérience",
    specialty: "Locks traditionnelles et créatives",
    image: "/images/team/sarah.jpg"
  },
  {
    id: 2,
    name: "Amara Diarra",
    role: "Expert Tresses",
    experience: "6 ans d'expérience",
    specialty: "Tresses ethniques et modernes",
    image: "/images/team/amara.jpg"
  },
  {
    id: 3,
    name: "Jasmine Bamba",
    role: "Conseillère Soins",
    experience: "5 ans d'expérience",
    specialty: "Soins naturels et entretien",
    image: "/images/team/jasmine.jpg"
  }
];

export const services = [
  {
    id: 1,
    name: "Création de Locks",
    description: "Démarrage et création de locks sur mesure",
    duration: "3-6 heures",
    startingPrice: 25000
  },
  {
    id: 2,
    name: "Tresses Africaines",
    description: "Tresses traditionnelles et modernes",
    duration: "2-7 heures",
    startingPrice: 15000
  },
  {
    id: 3,
    name: "Entretien Locks",
    description: "Soins et maintenance régulière",
    duration: "1-3 heures",
    startingPrice: 12000
  },
  {
    id: 4,
    name: "Consultation",
    description: "Conseils personnalisés pour votre projet",
    duration: "30-45 min",
    startingPrice: 5000
  }
];