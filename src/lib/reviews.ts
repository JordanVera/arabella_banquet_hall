export type Review = {
  author: string;
  date: string;
  rating: number;
  text: string;
};

export const GOOGLE_REVIEWS = {
  rating: 4.9,
  count: 250,
  url: 'https://www.google.com/maps/search/Arabella+Banquet+Hall,+9230+Jensen+Dr,+Houston,+TX+77093/reviews',
};

export const FEATURED_REVIEWS: Review[] = [
  {
    author: 'Atly Guest',
    date: 'Houston, TX',
    rating: 5,
    text: "The owners and staff here are so welcoming and helpful for your party.",
  },
  {
    author: 'Atly Guest',
    date: 'Houston, TX',
    rating: 5,
    text: "It\'s like family here; they make your celebration feel so special.",
  },
  {
    author: 'Atly Guest',
    date: 'Houston, TX',
    rating: 5,
    text: "It\'s so elegant and beautifully maintained.",
  },
  {
    author: 'Google Reviewer',
    date: 'Houston, TX',
    rating: 5,
    text: "Modern event venue with spacious layout and elegant decor featuring two bars and a catering kitchen. Professional security and thoughtful amenities.",
  },
  {
    author: 'Google Reviewer',
    date: 'Houston, TX',
    rating: 5,
    text: "Clean, well-organized facilities with ample parking. Beautiful and well-maintained event spaces that photograph exceptionally well.",
  },
  {
    author: 'Google Reviewer',
    date: 'Houston, TX',
    rating: 5,
    text: "Professional service from initial tour through the final send-off. Full-service banquet hosting with in-house catering, bar service, and dedicated event staff.",
  },
];
