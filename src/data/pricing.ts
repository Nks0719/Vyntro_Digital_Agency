import type { PricingTier } from '../types';

export const pricingData: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹9,999',
    period: '/month',
    isRecommended: false,
    description: 'Essential digital visibility package designed for local businesses and emerging brands.',
    features: [
      'Social Media Management',
      'Creative Graphic Designs',
      'Consistent Weekly Posting',
      'Community & Engagement Monitoring',
      'Monthly Performance Summary',
      'Dedicated Account Coordinator'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹24,999',
    period: '/month',
    isRecommended: true,
    description: 'Comprehensive multi-channel expansion engine for businesses eager to scale inbound leads.',
    features: [
      'Social Media Marketing & Content',
      'Search Engine Optimization (SEO)',
      'Meta & Google Ads Management',
      'Creative Ad Copy & Visuals',
      'Targeted Audience Research',
      'Bi-Weekly Strategy & Reporting Calls',
      'Priority Campaign Optimization'
    ],
    ctaText: 'Choose Growth'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹49,999',
    period: '/month',
    isRecommended: false,
    description: 'All-inclusive digital growth solution designed for established enterprises seeking market dominance.',
    features: [
      'Complete Digital Marketing Solution',
      'Advanced Multi-Channel Ad Funnels',
      'High-Impact Video & Reels Production',
      'Full Technical & On-Page SEO Overhaul',
      'Conversion Rate Optimization (CRO)',
      'AI-Powered Marketing Automation',
      'Dedicated Senior Strategist & Rapid Support'
    ],
    ctaText: 'Go Premium'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom Quote',
    period: '',
    isRecommended: false,
    description: 'Bespoke strategic marketing infrastructure for large corporations, institutions, and multi-location brands.',
    features: [
      'Custom Strategy & End-to-End Execution',
      'Dedicated Cross-Functional Marketing Team',
      'Custom Web & Funnel Development',
      'Omnichannel Performance Engineering',
      'Real-Time Reporting Dashboard Access',
      'SLA-Backed Performance Management',
      'Executive Strategy Sessions'
    ],
    ctaText: 'Talk To Us'
  }
];
