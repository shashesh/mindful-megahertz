# Mindful Megahertz

A modern Mindful Megahertz magazine website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Backend**: Supabase (configured, using mock data)
- **Linting**: ESLint 9 with React hooks and React Refresh plugins

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Development vs Production

| Aspect | Development | Production |
|--------|-------------|------------|
| Server | Vite dev server with HMR | Static files served from `dist/` |
| Source Maps | Enabled | Disabled |
| Minification | No | Yes |
| Bundle | Unbundled ES modules | Optimized chunks |
| Build Output | N/A | `dist/index.html`, `dist/assets/` |

## Project Architecture

### Routing

The app uses a custom state-based routing system instead of a router library. Navigation is managed in `src/App.tsx`:

```typescript
type PageType = 'home' | 'article' | 'about' | 'category';

interface PageState {
  type: PageType;
  articleId?: string;
  category?: string;
}
```

Navigation functions:
- `handleNavigate(destination)` - Navigate to pages
- `handleArticleClick(articleId)` - Open article detail view
- `handleBack()` - Return to home

### Directory Structure

```
src/
├── components/
│   ├── articles/           # Article display components
│   │   ├── ArticleCard.tsx
│   │   ├── FeaturedArticleCard.tsx
│   │   └── SmallArticleCard.tsx
│   ├── ui/                 # Reusable UI primitives
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Newsletter.tsx
├── data/
│   └── mockData.ts         # Mock articles, categories, site config
├── pages/
│   ├── AboutPage.tsx
│   ├── ArticlePage.tsx
│   ├── CategoryPage.tsx
│   └── HomePage.tsx
├── App.tsx                 # Main app with routing logic
├── main.tsx                # React entry point
├── index.css               # Global styles and Tailwind imports
├── types.ts                # TypeScript type definitions
└── vite-env.d.ts           # Vite type declarations
```

### Core Types

Defined in `src/types.ts`:

```typescript
interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; avatar?: string; bio?: string };
  image: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  editorsPick?: boolean;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

interface SiteConfig {
  title: string;
  description: string;
  logo: string;
  social: { twitter?: string; instagram?: string; facebook?: string; linkedin?: string };
}
```

### Components

#### Pages
- **HomePage**: Hero section, featured article, article grid, sidebar with popular stories
- **ArticlePage**: Full article view with author info and related articles
- **CategoryPage**: Filtered article listing by category
- **AboutPage**: Site information and team details

#### UI Components
- **Button**: Variants (primary, secondary, outline, text) and sizes (sm, md, lg)
- **Input**: Form input with Tailwind styling
- **Badge**: Category/tag labels

#### Article Cards
- **FeaturedArticleCard**: Large format for featured content
- **ArticleCard**: Standard grid card with image
- **SmallArticleCard**: Compact list format for sidebars

### Styling

- **Tailwind CSS** for utility-first styling
- **Design System**:
  - Primary colors: Gray-900 (dark), White (light)
  - Typography: Serif fonts for headings, system sans-serif for body
  - Spacing: Consistent 4px grid system
- **Responsive**: Mobile-first with breakpoints at `sm`, `md`, `lg`
- **Icons**: Lucide React icon library

### Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |
| `tsconfig.json` | TypeScript base configuration |
| `tsconfig.app.json` | App-specific TypeScript settings |
| `tsconfig.node.json` | Node/Vite TypeScript settings |
| `eslint.config.js` | ESLint rules and plugins |

## Data Layer

Currently using mock data in `src/data/mockData.ts`. The app is configured for Supabase integration:

- **Articles**: 9 sample articles across 5 categories
- **Categories**: Culture, Technology, Design, Business, Lifestyle
- **Site Config**: Title, description, social links

To connect to Supabase, configure the client in your environment and replace mock data imports with Supabase queries.

## Browser Support

Vite targets modern browsers supporting native ES modules:
- Chrome 87+
- Firefox 78+
- Safari 14+
- Edge 88+

## License

Private project.
