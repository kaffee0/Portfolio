# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.1 portfolio website using the App Router, TypeScript, React 19, and Tailwind CSS v4.

## Commands

**Development:**
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

## Architecture

**Next.js App Router Structure:**
- Uses the `app/` directory pattern (not `pages/`)
- `src/app/layout.tsx` - Root layout with Geist font configuration
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles with Tailwind directives

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in tsconfig.json)

**Styling:**
- Tailwind CSS v4 (latest major version with PostCSS setup)
- Dark mode support via `dark:` classes
- Custom font variables: `--font-geist-sans` and `--font-geist-mono`

**TypeScript:**
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (Next.js specific)
