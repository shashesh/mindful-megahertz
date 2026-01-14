# Mindful Megahertz

A modern Mindful Megahertz magazine website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Backend**: Notion API (via Netlify Functions)
- **Hosting**: Netlify
- **Linting**: ESLint 9 with React hooks and React Refresh plugins

## Prerequisites

- Node.js (v18 or higher recommended)
- npm
- Netlify CLI (`npm install -g netlify-cli`)
- Notion account with an integration

## Getting Started

### Installation

```bash
npm install
npm install -g netlify-cli
```

### Environment Variables

Create a `.env` file in the root directory:

```env
NOTION_API_KEY=secret_xxx
NOTION_DATABASE_ID=xxx
```

To get these values:
1. Create a Notion integration at https://www.notion.so/my-integrations
2. Create a database with the required properties (see Data Layer section)
3. Share the database with your integration
4. Copy the database ID from the URL

### Local Development

Run with Netlify CLI to enable serverless functions:

```bash
netlify dev
```

This starts both the Vite dev server and Netlify Functions locally. The app will be available at `http://localhost:8888`

### Production Build

Build the application for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Netlify

```bash
netlify deploy --prod
```

Or connect your GitHub repo to Netlify for automatic deployments.

## Available Scripts

| Command | Description |
|---------|-------------|
| `netlify dev` | Start local dev server with functions |
| `npm run dev` | Start Vite only (no API functions) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Development vs Production

| Aspect | Development | Production |
|--------|-------------|------------|
| Command | `netlify dev` | Netlify hosting |
| Server | Vite + Netlify Dev | Netlify CDN + Functions |
| API Calls | Local serverless functions | Netlify Functions |
| Source Maps | Enabled | Disabled |
| Build Output | N/A | `dist/` + `netlify/functions/` |

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
├── netlify/
│   └── functions/          # Serverless API functions
│       ├── notion-query.js # Query Notion database
│       └── notion-page.js  # Fetch page with content blocks
├── src/
│   ├── components/
│   │   ├── articles/       # Article display components
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── FeaturedArticleCard.tsx
│   │   │   └── SmallArticleCard.tsx
│   │   ├── ui/             # Reusable UI primitives
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   ├── Input.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Newsletter.tsx
│   ├── hooks/
│   │   └── useArticles.ts  # React hooks for data fetching
│   ├── services/
│   │   └── notion/         # Notion API integration
│   │       ├── blocks.ts   # Block-to-HTML converter
│   │       ├── client.ts   # API client
│   │       ├── index.ts    # Service exports
│   │       ├── transformers.ts
│   │       └── types.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ArticlePage.tsx
│   │   ├── CategoryPage.tsx
│   │   └── HomePage.tsx
│   ├── App.tsx             # Main app with routing logic
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles and Tailwind imports
│   ├── types.ts            # TypeScript type definitions
│   └── vite-env.d.ts       # Vite type declarations
└── netlify.toml            # Netlify configuration
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
| `netlify.toml` | Netlify build and functions configuration |
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |
| `tsconfig.json` | TypeScript base configuration |
| `tsconfig.app.json` | App-specific TypeScript settings |
| `tsconfig.node.json` | Node/Vite TypeScript settings |
| `eslint.config.js` | ESLint rules and plugins |

## Data Layer

Articles are fetched from a Notion database via Netlify Functions.

### Notion Database Properties

| Property | Type | Description |
|----------|------|-------------|
| Title | Title | Article title |
| Excerpt | Text | Short description |
| Category | Text | Article category |
| Author Name | Text | Author's name |
| Author Bio | Text | Author biography (optional) |
| Cover Image | URL | Cover image URL |
| Published | Date | Publication date |
| Read Time | Number | Minutes to read |
| Featured | Checkbox | Show in featured section |
| Editors Pick | Checkbox | Editor's pick badge |

### Article Content

The main article content is written in the **page body** (not a property). Supported blocks:
- Paragraphs, headings (H1, H2, H3)
- Bulleted and numbered lists
- Quotes and callouts
- Code blocks
- Images with captions
- Dividers

## Browser Support

Vite targets modern browsers supporting native ES modules:
- Chrome 87+
- Firefox 78+
- Safari 14+
- Edge 88+

## License

Private project.
