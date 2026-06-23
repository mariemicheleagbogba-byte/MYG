export interface ServiceOption {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  atHomeEligible: boolean;
  category: string;
  group?: string;
  originalPrice?: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  imageAddress: string;
  options: ServiceOption[];
}

export interface Booking {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceName: string;
  optionName: string;
  optionPrice: number;
  optionDuration: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // HH:MM
  status: 'pending_deposit' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  service: string;
  content: string;
  date: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyInfo {
  name: string;
  owner: string;
  address: string;
  city: string;
  instagram: string;
  snapchat: string;
  email: string;
  phone: string;
  tiktok: string;
  workingHours: {
    day: string;
    hours: string;
  }[];
}
