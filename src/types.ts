export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  icon: string; // Lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  date: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  materialsList: string;
  preferredContact: 'phone' | 'whatsapp';
  deliveryRequired: boolean;
  deliveryAddress?: string;
}
