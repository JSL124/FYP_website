# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Wise Workout** (CSIT-26-S2-05) preliminary project website — a content-driven, multi-page Next.js site for advertising, presenting, and documenting a mobile fitness application. It is NOT a product platform. Optimize for clarity, presentation quality, and readability over complex interactivity.

Full project context, working agreements, and design guidelines are in [AGENTS.md](AGENTS.md). Read it before making significant changes.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run test         # Vitest (watch mode)
npm run test:ci      # Vitest (single run, used in CI)
npx vitest run app/page.test.tsx  # Run a single test file
```

CI (.github/workflows/ci.yml) runs `npm ci && npm run lint && npm run test:ci` on every push/PR. A change is not complete if it breaks this pipeline.

## Architecture

- **Stack**: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4
- **Path alias**: `@/*` maps to the project root (tsconfig paths)
- **Global layout**: `app/layout.tsx` — wraps all pages with Header, Footer, and DotGrid background
- **Docs sub-layout**: `app/docs/layout.tsx` — adds DocsSidebar for `/docs/*` routes
- **Content data**: `app/lib/constants.ts` — all project copy, features, steps, team, nav links, and footer columns are centralized here. Types live in `app/lib/types.ts`.
- **Shared components**: `app/components/` — reusable presentational components (Header, Footer, DotGrid, ScrollReveal, GradientCard, PlaceholderImage, SectionLabel, Divider, DocsSidebar)

### Route structure

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/features` | `app/features/page.tsx` |
| `/how-it-works` | `app/how-it-works/page.tsx` |
| `/docs` | `app/docs/page.tsx` |
| `/docs/user-manual` | `app/docs/user-manual/page.tsx` |
| `/docs/system-overview` | `app/docs/system-overview/page.tsx` |
| `/team` | `app/team/page.tsx` |
| `/demo` | `app/demo/page.tsx` |

## Testing

- **Runner**: Vitest with jsdom environment
- **Setup**: `vitest.setup.ts` (imports jest-dom matchers)
- **Libraries**: `@testing-library/react`, `@testing-library/jest-dom`
- Tests use `vi.mock` for Next.js modules (`next/link`, `next/navigation`)
- Tests live alongside the code they test (e.g., `app/page.test.tsx`)
- TDD-first: prefer writing/updating a test before making behavior changes

## Key Conventions

- **Content-first**: define the message and audience before building pages. This is a presentation site, not a feature app.
- **Centralized copy**: all text content goes in `app/lib/constants.ts`, not hardcoded in components.
- **Update AGENTS.md**: if a change affects architecture, workflow, or conventions, update AGENTS.md in the same commit.
