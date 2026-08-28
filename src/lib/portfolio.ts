export type PortfolioCategory = 'Weddings' | 'Details' | 'Events';

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
    title: 'Weddings',
    photographer: '',
    category: 'Weddings' as const,
    cover: '/portfolio/weddings/01.jpg',
    images: [
      '/portfolio/weddings/01.jpg',
      '/portfolio/weddings/02.jpg',
      '/portfolio/weddings/03.jpg',
      '/portfolio/weddings/04.jpg',
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
      '/portfolio/events/03.jpg',
    ],
  },
  {
    slug: 'details',
    title: 'The Space',
    photographer: '',
    category: 'Details' as const,
    cover: '/portfolio/details/01.jpg',
    images: ['/portfolio/details/01.jpg', '/portfolio/details/02.jpg'],
  },
];

export const PORTFOLIO_CATEGORIES: Array<'All' | PortfolioCategory> = [
  'All',
  'Events',
  'Details',
  'Weddings',
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 6);

export const HERO_IMAGES = [
  {
    src: '/portfolio/weddings/01.jpg',
    alt: 'Wedding reception at Arabella Banquet Hall in Houston',
  },
  {
    src: '/portfolio/events/01.jpg',
    alt: 'Private celebration hosted at Arabella Banquet Hall',
  },
  {
    src: '/portfolio/details/01.jpg',
    alt: 'Interior details of Arabella Banquet Hall',
  },
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
