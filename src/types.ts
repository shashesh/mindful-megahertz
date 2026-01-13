export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  image: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  editorsPick?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  logo: string;
  social: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}
