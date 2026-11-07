export type ProjectCategory = 'all' | 'websites' | 'marketing' | 'growth';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'websites' | 'marketing' | 'growth';
  categoryLabel: string;
  tag: string;
  clientType: string;
  image: string;
  bottleneck: string;
  solution: string;
  harvest: string;
  tags: string[];
  ctaPreselect: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  initials: string;
  accent: string;
}

export interface BottleneckItem {
  id: string;
  problemTitle: string;
  problemQuote: string;
  pillar: 'Marketing' | 'Technology' | 'Growth';
  pillarColor: string;
  actionTitle: string;
  actionDescription: string;
  solutionHighlights: string[];
  ctaText: string;
  ctaTag: string;
}
