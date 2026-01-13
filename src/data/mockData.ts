import { Article, Category, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  title: 'Mindful Megahertz',
  description: 'A sophisticated magazine for the modern reader',
  logo: 'Mindful Megahertz',
  social: {
    twitter: '#',
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
};

export const categories: Category[] = [
  { id: '1', name: 'Culture', slug: 'culture' },
  { id: '2', name: 'Technology', slug: 'technology' },
  { id: '3', name: 'Design', slug: 'design' },
  { id: '4', name: 'Business', slug: 'business' },
  { id: '5', name: 'Lifestyle', slug: 'lifestyle' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Design in Modern Architecture',
    excerpt: 'Exploring how contemporary architects are reshaping our cities with environmentally conscious design principles that prioritize both aesthetics and sustainability.',
    content: 'Full article content would go here...',
    category: 'Design',
    author: {
      name: 'Sarah Mitchell',
      bio: 'Award-winning architecture critic and design journalist with over 15 years of experience covering contemporary design movements.',
    },
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true,
    editorsPick: true,
  },
  {
    id: '2',
    title: 'Inside the Creative Process: A Conversation with Leading Innovators',
    excerpt: 'We sit down with industry pioneers to discuss what drives creativity, how they overcome challenges, and their advice for the next generation.',
    content: 'Full article content would go here...',
    category: 'Culture',
    author: {
      name: 'James Anderson',
    },
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-14',
    readTime: 12,
    featured: true,
  },
  {
    id: '3',
    title: 'The Rise of Minimalist Living in Urban Spaces',
    excerpt: 'How city dwellers are embracing simplicity and finding freedom through intentional living and thoughtful space design.',
    content: 'Full article content would go here...',
    category: 'Lifestyle',
    author: {
      name: 'Emma Thompson',
    },
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-13',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Artificial Intelligence and the Evolution of Creative Work',
    excerpt: 'Examining the intersection of AI and human creativity, and what it means for the future of creative professions.',
    content: 'Full article content would go here...',
    category: 'Technology',
    author: {
      name: 'Michael Chen',
    },
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-12',
    readTime: 10,
  },
  {
    id: '5',
    title: 'Building Brands That Last: Lessons from Timeless Companies',
    excerpt: 'What makes a brand endure? We analyze the strategies of companies that have stood the test of time.',
    content: 'Full article content would go here...',
    category: 'Business',
    author: {
      name: 'David Rodriguez',
    },
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-11',
    readTime: 7,
  },
  {
    id: '6',
    title: 'The Art of Storytelling in Digital Media',
    excerpt: 'How content creators are adapting narrative techniques for the digital age and capturing attention in an oversaturated market.',
    content: 'Full article content would go here...',
    category: 'Culture',
    author: {
      name: 'Lisa Park',
    },
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-10',
    readTime: 9,
  },
  {
    id: '7',
    title: 'Designing for Accessibility: A Modern Imperative',
    excerpt: 'Why inclusive design is no longer optional, and how leading designers are making digital experiences accessible to everyone.',
    content: 'Full article content would go here...',
    category: 'Design',
    author: {
      name: 'Rachel Green',
    },
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-09',
    readTime: 11,
  },
  {
    id: '8',
    title: 'The Psychology of Color in Brand Identity',
    excerpt: 'Understanding how color choices influence perception and drive consumer behavior in the modern marketplace.',
    content: 'Full article content would go here...',
    category: 'Business',
    author: {
      name: 'Alex Johnson',
    },
    image: 'https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-08',
    readTime: 5,
  },
  {
    id: '9',
    title: 'Sustainable Fashion: Beyond the Buzzword',
    excerpt: 'A deep dive into the fashion industry\'s sustainability movement and the brands making genuine environmental impact.',
    content: 'Full article content would go here...',
    category: 'Lifestyle',
    author: {
      name: 'Sophie Martin',
    },
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-07',
    readTime: 8,
  },
];
