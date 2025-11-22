import { Product, Hairstyle } from '../types';

export const siteConfig = {
  salonName: "Afrolocs",
  phone: import.meta.env.VITE_WHATSAPP_NUMBER || "2250102030405",
  address: "123 Avenue de la Coiffure, Abidjan, Côte d'Ivoire",
  email: "contact@salonafro.com",
  socialMedia: {
    instagram: "https://instagram.com/salonafro",
    facebook: "https://facebook.com/salonafro",
    tiktok: "https://tiktok.com/@salonafro"
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
    name: "Huile Capillaire Naturelle",
    price: 15000,
    description: "Huile nourrissante 100% naturelle pour locks et tresses, enrichie en karité et coco",
    image: "/images/products/huile-naturelle.jpg",
    category: "Soins",
    features: ["100% naturel", "Hydratation intense", "Sans produits chimiques"]
  },
  {
    id: "2",
    name: "Cire à Locks Fixante",
    price: 8000,
    description: "Cire fixante naturelle pour maintenir et discipliner vos locks toute la journée",
    image: "/images/products/cire-locks.jpg",
    category: "Styling",
    features: ["Tenue longue durée", "Texture naturelle", "Sans résidu"]
  },
  {
    id: "3",
    name: "Shampooing Hydratant Afro",
    price: 12000,
    description: "Nettoyant doux spécialement formulé pour les cheveux africains texturés",
    image: "/images/products/shampooing.jpg",
    category: "Soins",
    features: ["Doux et nourrissant", "Préserve les locks", "pH équilibré"]
  },
  {
    id: "4",
    name: "Beurre de Karité Pur",
    price: 10000,
    description: "Beurre de karité 100% pur pour une hydratation intense et naturelle",
    image: "/images/products/karite.jpg",
    category: "Soins",
    features: ["100% pur et naturel", "Hydratation profonde", "Multi-usage"]
  },
  {
    id: "5",
    name: "Spray Hydratant Quotidien",
    price: 9000,
    description: "Spray léger pour l'hydratation quotidienne des locks et tresses",
    image: "/images/products/spray-hydratant.jpg",
    category: "Soins",
    features: ["Léger et non gras", "Usage quotidien", "Rafraîchissant"]
  },
  {
    id: "6",
    name: "Gel Aloe Vera Naturel",
    price: 7000,
    description: "Gel d'aloe vera pur pour apaiser le cuir chevelu et hydrater les pointes",
    image: "/images/products/aloevera.jpg",
    category: "Soins",
    features: ["Apaisant", "Sans alcool", "Multi-fonctions"]
  },
  {
    id: "7",
    name: "Kit Démarrage Locks",
    price: 35000,
    description: "Kit complet pour débuter vos locks avec tous les produits essentiels",
    image: "/images/products/kit-locks.jpg",
    category: "Kits",
    features: ["Produits complémentaires", "Guide d'utilisation", "Économique"]
  },
  {
    id: "8",
    name: "Huile de Ricin Jamaïcaine",
    price: 11000,
    description: "Huile de ricin pure pour stimuler la pousse et renforcer les cheveux",
    image: "/images/products/ricin.jpg",
    category: "Soins",
    features: ["Stimule la pousse", "Renforce les cheveux", "100% pure"]
  }
];

export const hairstyles: Hairstyle[] = [
  {
    id: "1",
    name: "Locks Traditionnelles",
    duration: "3-4 heures",
    price: 25000,
    image: "/images/hairstyles/locks-traditionnelles.jpg",
    category: "Locks",
    description: "Locks classiques réalisées avec expertise et soin"
  },
  {
    id: "2",
    name: "Tresses Cornrows",
    duration: "2-3 heures",
    price: 18000,
    image: "/images/hairstyles/cornrows.jpg",
    category: "Tresses",
    description: "Tresses traditionnelles africaines aux motifs variés"
  },
  {
    id: "3",
    name: "Locks au Crochet",
    duration: "4-5 heures",
    price: 30000,
    image: "/images/hairstyles/locks-crochet.jpg",
    category: "Locks",
    description: "Technique moderne pour des locks nettes et régulières"
  },
  {
    id: "4",
    name: "Box Braids Classiques",
    duration: "5-6 heures",
    price: 35000,
    image: "/images/hairstyles/box-braids.jpg",
    category: "Tresses",
    description: "Tresses box braids élégantes et durables"
  },
  {
    id: "5",
    name: "Soins et Entretien Locks",
    duration: "1-2 heures",
    price: 12000,
    image: "/images/hairstyles/locks-soins.jpg",
    category: "Entretien",
    description: "Service complet d'entretien et de soins pour vos locks"
  },
  {
    id: "6",
    name: "Tresses Fulani",
    duration: "3-4 heures",
    price: 22000,
    image: "/images/hairstyles/fulani.jpg",
    category: "Tresses",
    description: "Tresses ethniques inspirées de la culture peule"
  },
  {
    id: "7",
    name: "Locks Diamants",
    duration: "4-5 heures",
    price: 32000,
    image: "/images/hairstyles/locks-diamants.jpg",
    category: "Locks",
    description: "Locks stylisées avec motifs géométriques modernes"
  },
  {
    id: "8",
    name: "Tresses Goddess",
    duration: "6-7 heures",
    price: 40000,
    image: "/images/hairstyles/goddess.jpg",
    category: "Tresses",
    description: "Tresses sophistiquées avec rajouts et ornements"
  },
  {
    id: "9",
    name: "Locks Nattées",
    duration: "3-4 heures",
    price: 28000,
    image: "/images/hairstyles/locks-nattes.jpg",
    category: "Locks",
    description: "Locks travaillées en nattes pour un style unique"
  },
  {
    id: "10",
    name: "Tresses Collées",
    duration: "2-3 heures",
    price: 15000,
    image: "/images/hairstyles/tresses-collées.jpg",
    category: "Tresses",
    description: "Tresses plaquées pour un effet sleek et moderne"
  },
  {
    id: "11",
    name: "Consultation Initiale",
    duration: "30-45 min",
    price: 5000,
    image: "/images/hairstyles/consultation.jpg",
    category: "Consultation",
    description: "Première consultation pour définir votre projet capillaire"
  },
  {
    id: "12",
    name: "Dreadlocks Créatives",
    duration: "5-6 heures",
    price: 38000,
    image: "/images/hairstyles/dreadlocks-creatives.jpg",
    category: "Locks",
    description: "Dreadlocks artistiques avec motifs et formes originales"
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