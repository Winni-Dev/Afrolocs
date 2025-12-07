export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  features?: string[];
}

export interface Hairstyle {
  id: string;
  name: string;
  duration: string;
  price?: number;
  image: string | { type: 'video'; src: string };
  category: string;
  description?: string;
}

export interface AppointmentForm {
  fullName: string;
  phone: string;
  hairstyleType: string;
  date: string;
  time: string;
  message: string;
}

export interface OrderForm {
  productName: string;
  fullName: string;
  phone: string;
  address: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  startingPrice: number;
}


export interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalProducts: number;
}

export interface HairstyleModalProps {
  isOpen: boolean;
  onClose: () => void;
  hairstyle: Hairstyle | null;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalHairstyles: number;
}