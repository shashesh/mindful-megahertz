# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start Vite dev server

# Build
npm run build        # Build for production

# Linting & Type Checking
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking (uses tsconfig.app.json)

# Preview production build
npm run preview      # Preview production build locally
```

## Architecture

This is a React magazine/Mindful Megahertz website built with Vite, TypeScript, and Tailwind CSS. It uses Supabase for backend services (client configured but not actively used in current mock data setup).

### Routing
The app uses a custom state-based routing system in `src/App.tsx` rather than a router library. Navigation is handled via:
- `PageState` type with `type: 'home' | 'article' | 'about' | 'category'`
- `handleNavigate()` for page navigation
- `handleArticleClick()` for article deep-links

### Component Structure
- **Pages** (`src/pages/`): Full page components (HomePage, ArticlePage, AboutPage, CategoryPage)
- **Components** (`src/components/`): Reusable UI components
  - `articles/`: Article card variants (FeaturedArticleCard, ArticleCard, SmallArticleCard)
  - `ui/`: Base components (Button, Input, Badge)
- **Data** (`src/data/mockData.ts`): Mock articles, categories, and site config

### Key Types
Defined in `src/types.ts`:
- `Article`: Core content type with author, category, timestamps, featured flags
- `Category`: Content categorization
- `SiteConfig`: Site-wide configuration

### Styling
- Tailwind CSS with default configuration
- Serif fonts for headings, sans-serif for body
- Gray-900/white color scheme
- Lucide React for icons
