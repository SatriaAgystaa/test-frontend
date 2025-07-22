# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 music/mixtape platform application built with Vue 3, TypeScript, and Tailwind CSS. The project appears to be a marketplace or showcase website for DJs, mixtapes, and music albums.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview

# Install dependencies
npm install
```

**Note:** No linting or testing commands are currently configured. Consider adding ESLint and Vitest for code quality and testing.

## Architecture & Structure

### Core Technologies
- **Nuxt 3.17.7** - Vue.js meta-framework with SSR/SSG capabilities
- **Vue 3.5.17** - Progressive JavaScript framework
- **TypeScript** - Type safety enabled
- **Tailwind CSS** - Utility-first CSS framework
- **@nuxt/image** - Image optimization module

### Directory Structure

```
├── app.vue              # Root component with NuxtLayout and NuxtPage
├── layouts/            
│   └── default.vue      # Main layout with Header and Footer
├── pages/              
│   └── index.vue        # Homepage (file-based routing)
├── components/          # Organized by feature
│   ├── Album/          # AlbumCard, AlbumSection
│   ├── Artist/         # ArtistCard, ArtistCarousel
│   ├── Feature/        # FeatureCard, FeatureMagic, etc.
│   ├── Mixtape/        # MixtapeCard, MixtapeCover, etc.
│   ├── Testimonial/    # TestimonialCard, TestimonialSection
│   ├── Header.vue      
│   ├── Footer.vue      
│   └── ButtonPrimary.vue
├── data/               # TypeScript data modules
│   ├── albums.ts       
│   ├── artists.ts      
│   ├── genres.ts       
│   ├── mixtapes.ts     # Contains BPM, price, ratings, downloads
│   └── testimonials.ts 
├── assets/             
│   ├── css/           # font.css, tailwind.css
│   └── icons/         # Organized by type (Artists/, BaseIcons/, etc.)
└── public/            
    └── fonts/         # Geist and Glancyr font families
```

### Key Architectural Patterns

1. **Component Organization**: Components are grouped by feature/domain (Album, Artist, Mixtape, etc.)
2. **Data Management**: Centralized data in TypeScript modules under `/data`
3. **Asset Management**: Icons organized by category, custom fonts in public directory
4. **Styling**: Tailwind CSS with custom font configurations (Geist and Glancyr families)

### Custom Font Configuration

The project uses two custom font families configured in `tailwind.config.ts`:
- **Geist**: Multiple weights from thin (100) to black (900)
- **Glancyr**: Multiple weights from thin (100) to bold (700)

### Data Structure

Mixtape objects typically include:
```typescript
{
  id: number,
  title: string,
  artist: string,
  genre: string,
  bpm: number,
  price: number,
  rating: number,
  downloads: number,
  coverImage: string,
  // ... other properties
}
```

## Development Guidelines

1. **Component Creation**: Follow the existing pattern of organizing components by feature
2. **Icons**: Place new icons in appropriate subdirectories under `/assets/icons/`
3. **Data Files**: Add new data collections as TypeScript files in `/data/`
4. **Routing**: Create new pages in `/pages/` - Nuxt will automatically generate routes
5. **Images**: Use `@nuxt/image` component for optimized image loading

## Current State Notes

- The project is actively being developed (modified files in git status)
- No test framework is configured yet
- No linting rules are set up
- The README.md still contains default Nuxt starter content