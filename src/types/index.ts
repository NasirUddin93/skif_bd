export interface Event {
  id: string;
  title: string;
  slug: string;
  startDate: string;
  endDate: string;
  location: string;
  category: 'national' | 'international' | 'seminar' | 'training-camp';
  isRegistrationOpen: boolean;
  description: string;
  featuredImage: string;
  venue?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: 'news' | 'press-release' | 'highlight';
  author: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  rank: string;
  image: string;
  email?: string;
  phone?: string;
}

export interface Dojo {
  id: string;
  name: string;
  division: string;
  district: string;
  address: string;
  chiefInstructor: string;
  contactPhone: string;
  trainingDays: string[];
  mapUrl: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
}
