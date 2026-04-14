# AGENTS.md

## Purpose

This file is the working context index for the repository. It exists to help an agent or contributor understand the project quickly, follow the same engineering rules, and keep important decisions visible as the codebase evolves.

This repository is for a preliminary project website focused on advertisement, introduction, and online documentation. It is not a feature-heavy service web app. The default mindset should be presentation, explanation, and trust-building.

## Project Identity

- **Project ID**: FYP-26-S2-38
- **Title**: A Mobile Application for Wise Workout
- **Tagline**: Smart fitness tracking powered by sensor data, personalized plans, and social motivation
- **Core Features**:
  1. Exercise data collection from phone sensors and wearables (Wi-Fi, Bluetooth)
  2. Exercise effect estimation (calories, heart rate, short-term and long-term analysis)
  3. Fitness advice and customizable fitness plan scheduling
  4. Smart reminders for exercise and rest breaks
  5. Social media integration and competitions between users

## Project Snapshot

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4
- Current scope: multi-page project website for advertisement, presentation, and online documentation
- Site structure: multi-page (Landing, Features, How It Works, Docs, Team, Demo)
- Docs structure: includes overview, user manual, system overview, meeting minutes index, and meeting minute detail pages
- Global layout: `app/layout.tsx` (shared Header, Footer, DotGrid)
- Global styles: `app/globals.css`
- Content data: `app/lib/constants.ts`

## Primary Goal

This website is not a product platform with heavy workflows or user management.

Its primary purpose is to:

- present the project clearly
- advertise the project to viewers
- explain the project in an organized way
- provide lightweight online documentation
- build trust and interest quickly

Optimize for clarity, readability, structure, and presentation quality over complex interactivity.

## Product Framing

The website should feel like a mix of:

- a landing page
- a project showcase
- a light documentation site

A first-time visitor should be able to understand quickly:

- what the project is
- why it matters
- what problem it solves
- what features it has
- how it works at a high level
- where to find more detailed documentation

Communication takes priority over complexity.

## Working Agreements

### Content First

- Treat this project as content-first, not code-first.
- Before building new pages or sections, define the message, audience, required sections, and desired visitor action.
- Plan structure and wording before visual polish.

### Audience Awareness

- Default audiences include lecturers, tutors, evaluators, teammates, collaborators, potential users, project reviewers, and portfolio viewers.
- Do not assume prior project knowledge.
- Write and structure content so a first-time visitor can follow it without extra explanation.

### Narrative Before Features

- Prefer a clear information hierarchy over adding features.
- The homepage should communicate, in order when possible:
  - what the project is
  - why it exists
  - what makes it useful or interesting
  - how it works
  - where to learn more
- A visitor should not need to hunt for the basic story.

### TDD First

- Prefer writing or updating a test before making behavior changes.
- Every meaningful UI or logic change should either add a test or explain why a test is not practical yet.
- Keep tests close to the code they validate unless a broader `tests/` structure becomes necessary.

### CI Baseline

- GitHub Actions runs on every `push` and `pull_request`.
- The current validation pipeline is:
  - `npm ci`
  - `npm run lint`
  - `npm run test:ci`
- A change is not considered complete if it breaks this pipeline.

### Documentation Discipline

- If a code change materially affects architecture, workflow, conventions, or important assumptions, update this file in the same change.
- Keep entries high signal. This file should explain the repo, not mirror every diff.
- Prefer short factual notes over long prose.

## Information Architecture Guidelines

The site uses a multi-page structure:

| Route | Purpose |
|---|---|
| `/` | Landing/marketing homepage |
| `/features` | Detailed feature breakdown (5 core features) |
| `/how-it-works` | System workflow, architecture overview |
| `/docs` | Documentation hub (index) |
| `/docs/user-manual` | User manual with screenshots and usage instructions |
| `/docs/meeting-minutes` | Meeting minutes index with all recorded meetings |
| `/docs/meeting-minutes/[slug]` | Detailed documentation page for an individual meeting |
| `/docs/system-overview` | Architecture, tech stack, data flow |
| `/team` | Team members, supervisor, project info |
| `/demo` | Presentation-friendly scrollable walkthrough |

Navigation should make it easy to move between these pages. The site should have a clear narrative flow from promotion to explanation to documentation.

## Landing Page Expectations

The landing page should include:

- a clear project title
- a short one-line value proposition
- a concise explanation of the problem or purpose
- a visible call to action such as `View Documentation`, `See Features`, `Explore Demo`, or `Learn More`

The top section should explain the project quickly without forcing deep scrolling before the basics are clear.

## Documentation Guidelines

Documentation is part of the website, not a separate deliverable. The site must provide basic online documentation alongside promotion.

### Documentation must include:
- Feature explanations with descriptions of each functionality
- Usage instructions (how to use the system, navigate key features)
- Screenshots of various functionalities with descriptions (placeholder images until real screenshots are ready)
- Simple workflow/system flow explanations
- Example usage scenarios where appropriate

### User Manual section (rubric-critical):
- Explain how to use the prototype step by step
- Include a section for each major feature (data collection, exercise analysis, fitness plans, reminders, social features)
- Each section: heading, 1-2 paragraph description, screenshot placeholder, and key points as bullets
- Use short sections, headings, bullet points, and visuals for quick understanding

### Documentation structure:
- Landing page provides simple overview only — do not overload with technical content
- Documentation pages provide detailed explanation
- Include a "How It Works" section with system flow or architecture diagram
- Keep content presentation-friendly (scrollable during live demo)

### General documentation style:
- Keep documentation easy to scan
- Use clear headings, short sections, and plain language
- Use screenshots or diagrams when they explain better than text alone
- Separate promotional overview from technical detail
- Avoid turning documentation into one large page — use sub-pages

## Design and Brand Guidelines

### Visual Tone

- Aim for a clean, modern, readable, professional presentation.
- Avoid visual clutter, excessive animation, or playful layouts unless the brand explicitly calls for it.
- Trust and clarity matter more than flashy effects.

### Consistency

- Maintain consistency in colors, typography, button styles, spacing, card styles, icon style, and heading hierarchy.
- The site should feel like one coherent project, not disconnected sections.

### Identity

- Keep project name, tagline, accent color, writing tone, and visual language consistent.
- Even at an early stage, the site should make the project feel recognizable and presentable.

## Accessibility and Responsiveness

- Use semantic HTML where practical.
- Maintain proper heading hierarchy.
- Ensure sufficient color contrast.
- Use clear button labels and descriptive link text.
- Add alt text for meaningful images.
- Keep layouts mobile-friendly with readable text and tap-safe controls.
- Check that hero sections, navigation, screenshots, and documentation blocks remain usable on desktop, tablet, and mobile.

## Interaction and Engineering Guidelines

### Minimal Interactivity By Default

- Add interaction only when it improves understanding.
- Good defaults include collapsible FAQs, tabbed feature explanations, screenshot carousels, theme toggles, and documentation sidebar navigation.
- Avoid novelty interactions that do not improve comprehension.

### Performance-Friendly Implementation

- Prefer lightweight, maintainable solutions.
- Optimize images.
- Avoid unnecessary large dependencies.
- Keep animations subtle and limited.
- Do not introduce heavy components without a clear content or communication benefit.

### SEO and Shareability

- Use meaningful page titles and meta descriptions.
- Add Open Graph metadata where appropriate.
- Keep heading structure strong and URLs clean when possible.
- Treat shareability as part of project presentation quality.

### Next.js Mindset

- Treat the site primarily as a static or mostly static, content-driven website.
- Prefer reusable presentational components, clear page routing, and maintainable section-based layouts.
- Avoid product-platform complexity unless the site requirements clearly justify it.

## Presentation Support

The website doubles as a presentation tool during project evaluation:
- Pages should be scrollable and readable when projected
- Demo page should support a natural walkthrough flow
- Feature and documentation pages should work as visual aids during explanation
- Content should be presentation-friendly: large text, clear sections, visual hierarchy

## Delivery Priorities

When building incrementally, prefer this order:

1. Infrastructure (shared components, layout, constants)
2. Landing page with Wise Workout content
3. Features page
4. How It Works page
5. Documentation section (hub, user manual, system overview)
6. Team and Demo pages
7. Visual refinements and polish

This order makes the site presentable early.

## Writing Style

- Keep copy concise, confident, professional, and easy to understand.
- Prefer plain language over academic or overly technical wording on landing pages.
- Put technical depth in documentation pages rather than the homepage.

## Common Mistakes To Avoid

- overloading the homepage with too much text
- mixing technical documentation into every section
- using inconsistent spacing or typography
- adding unnecessary backend complexity
- creating unclear navigation
- prioritizing animation over clarity
- writing vague marketing copy that says very little

The website should make the project easier to understand, not harder.

## Definition of Success

A successful version of this website should let a first-time visitor answer these questions quickly:

- What is this project?
- Why does it matter?
- What does it do?
- How does it work at a high level?
- Where can I read more?

If the site answers those clearly, it is already doing its job well.

## Testing Notes

- Test runner: `vitest`
- DOM environment: `jsdom`
- UI testing helpers: Testing Library and `@testing-library/jest-dom`
- Current example coverage:
  - `app/page.test.tsx` verifies the landing page headline and supporting copy

## Commands

```bash
npm run dev
npm run lint
npm run test
npm run test:ci
```

## Update Log

### 2026-04-14 (v2)

- Added Wise Workout project identity (FYP-26-S2-38) and core feature list.
- Restructured information architecture from single-page to multi-page (8 routes).
- Expanded documentation guidelines to match professor's rubric requirements (user manual, screenshots, system overview).
- Added presentation support section for live demo/evaluation use.
- Updated delivery priorities to reflect multi-page implementation phases.

### 2026-04-14 (v1)

- Added a basic TDD/CI foundation with Vitest, Testing Library, and a first page test.
- Added `.github/workflows/ci.yml` so lint and tests run on every push and pull request.
- Established this file as the persistent context document that should be updated when important implementation changes land.
- Reframed this file around a preliminary project website goal: promotion, explanation, lightweight documentation, and professional presentation over service-app complexity.
