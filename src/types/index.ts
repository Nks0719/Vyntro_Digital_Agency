export interface ServiceItem {
  id: string;
  name: string;
  category: 'all' | 'performance' | 'organic' | 'creative' | 'tech';
  shortDesc: string;
  iconName: string;
  whatWeDo: string[];
  benefits: string[];
  startingPrice?: string;
  ctaText: string;
  badge?: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string[];
  results: string[];
  tags: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  isRecommended?: boolean;
  description: string;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LeadFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  website?: string;
  industry: string;
  services: string[];
  budget: string;
  projectGoal: string;
  message: string;
}
