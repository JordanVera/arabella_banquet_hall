export type PortfolioCategory = 'Weddings' | 'Styleshoots' | 'Events';

export type PortfolioProject = {
  slug: string;
  title: string;
  photographer: string;
  category: PortfolioCategory;
  cover: string;
  images: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'weddings',
    title: 'Wedding Florals',
    photographer: '',
    category: 'Weddings' as const,
    cover: '/portfolio/weddings/01.jpg',
    images: [
      '/portfolio/weddings/01.jpg',
      '/portfolio/weddings/02.jpg',
      '/portfolio/weddings/03.jpg',
      '/portfolio/weddings/04.jpg'
    ],
  },
  {
    slug: 'events',
    title: 'Events & Celebrations',
    photographer: '',
    category: 'Events' as const,
    cover: '/portfolio/events/01.jpg',
    images: [
      '/portfolio/events/01.jpg',
      '/portfolio/events/02.jpg',
      '/portfolio/events/03.jpg'
    ],
  },
  {
    slug: 'details',
    title: 'Floral Details',
    photographer: '',
    category: 'Styleshoots' as const,
    cover: '/portfolio/details/01.jpg',
    images: [
      '/portfolio/details/01.jpg',
      '/portfolio/details/02.jpg'
    ],
  },
];

export const PORTFOLIO_CATEGORIES: Array<'All' | PortfolioCategory> = [
  'All',
  'Events',
  'Styleshoots',
  'Weddings'
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 6);

export const HERO_IMAGES = [
  { src: '/portfolio/weddings/01.jpg', alt: 'Arabella Banquet Hall — Wedding Florals' },
  { src: '/portfolio/events/01.jpg', alt: 'Arabella Banquet Hall — Events & Celebrations' },
  { src: '/portfolio/details/01.jpg', alt: 'Arabella Banquet Hall — Floral Details' },
] as const;

export function getProject(slug: string) {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PORTFOLIO_PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  const last = PORTFOLIO_PROJECTS.length - 1;
  return {
    prev: PORTFOLIO_PROJECTS[index === 0 ? last : index - 1],
    next: PORTFOLIO_PROJECTS[index === last ? 0 : index + 1],
  };
}
