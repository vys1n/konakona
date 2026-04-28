# Graph Report - .  (2026-04-28)

## Corpus Check
- Corpus is ~3,303 words - fits in a single context window. You may not need a graph.

## Summary
- 56 nodes · 35 edges · 16 communities detected
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Next.js Ecosystem & Configuration|Next.js Ecosystem & Configuration]]
- [[_COMMUNITY_Search Feature & Utilities|Search Feature & Utilities]]
- [[_COMMUNITY_Location Utilities|Location Utilities]]
- [[_COMMUNITY_Graphify Integration|Graphify Integration]]
- [[_COMMUNITY_Root Layout|Root Layout]]
- [[_COMMUNITY_Home Page|Home Page]]
- [[_COMMUNITY_Types Page|Types Page]]
- [[_COMMUNITY_Footer Component|Footer Component]]
- [[_COMMUNITY_Header Component|Header Component]]
- [[_COMMUNITY_Hero Component|Hero Component]]
- [[_COMMUNITY_Maps Integration|Maps Integration]]
- [[_COMMUNITY_Tailwind CSS|Tailwind CSS]]
- [[_COMMUNITY_shadcnui|shadcn/ui]]
- [[_COMMUNITY_TanStack Query|TanStack Query]]
- [[_COMMUNITY_Zustand|Zustand]]
- [[_COMMUNITY_Razorpay SDK|Razorpay SDK]]

## God Nodes (most connected - your core abstractions)
1. `Next.js Framework` - 6 edges
2. `SearchResults()` - 4 edges
3. `cn()` - 3 edges
4. `formatLocationDisplay()` - 3 edges
5. `graphify-out` - 3 edges
6. `RootLayout()` - 2 edges
7. `Home()` - 2 edges
8. `TypesPage()` - 2 edges
9. `SearchPage()` - 2 edges
10. `normalizeLocationSearch()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Next.js (App Router)` --semantically_similar_to--> `Next.js Framework`  [INFERRED] [semantically similar]
  tech_stack.txt → NEXT.md
- `TypeScript` --conceptually_related_to--> `Next.js Framework`  [INFERRED]
  tech_stack.txt → NEXT.md
- `Next.js Agent Rules` --references--> `Next.js Framework`  [EXTRACTED]
  AGENTS.md → NEXT.md
- `SearchResults()` --calls--> `formatLocationDisplay()`  [INFERRED]
  src/app/search/page.js → src/lib/location.js
- `Claude Agents Configuration` --references--> `Next.js Agent Rules`  [EXTRACTED]
  CLAUDE.md → AGENTS.md

## Hyperedges (group relationships)
- **Project Technology Stack** — tech_stack_nextjs, tech_stack_typescript, tech_stack_tailwind_css, tech_stack_shadcn_ui, tech_stack_tanstack_query, tech_stack_zustand, tech_stack_react_leaflet, tech_stack_google_maps_api, tech_stack_razorpay_sdk [EXTRACTED 1.00]

## Communities

### Community 0 - "Next.js Ecosystem & Configuration"
Cohesion: 0.25
Nodes (8): Next.js Agent Rules, Claude Agents Configuration, app/page.js, Geist Font, Next.js Framework, Vercel Platform, Next.js (App Router), TypeScript

### Community 1 - "Search Feature & Utilities"
Cohesion: 0.33
Nodes (3): cn(), SearchPage(), SearchResults()

### Community 2 - "Location Utilities"
Cohesion: 0.67
Nodes (2): formatLocationDisplay(), normalizeLocationSearch()

### Community 3 - "Graphify Integration"
Cohesion: 0.5
Nodes (4): GRAPH_REPORT.md, Graphify Integration, graphify-out, wiki/index.md

### Community 4 - "Root Layout"
Cohesion: 0.67
Nodes (1): RootLayout()

### Community 5 - "Home Page"
Cohesion: 0.67
Nodes (1): Home()

### Community 6 - "Types Page"
Cohesion: 0.67
Nodes (1): TypesPage()

### Community 7 - "Footer Component"
Cohesion: 0.67
Nodes (1): Footer()

### Community 8 - "Header Component"
Cohesion: 0.67
Nodes (1): Header()

### Community 9 - "Hero Component"
Cohesion: 0.67
Nodes (1): Hero()

### Community 10 - "Maps Integration"
Cohesion: 1.0
Nodes (2): Google Maps API, React Leaflet

### Community 19 - "Tailwind CSS"
Cohesion: 1.0
Nodes (1): Tailwind CSS

### Community 20 - "shadcn/ui"
Cohesion: 1.0
Nodes (1): shadcn/ui

### Community 21 - "TanStack Query"
Cohesion: 1.0
Nodes (1): TanStack Query

### Community 22 - "Zustand"
Cohesion: 1.0
Nodes (1): Zustand

### Community 23 - "Razorpay SDK"
Cohesion: 1.0
Nodes (1): Razorpay SDK

## Knowledge Gaps
- **16 isolated node(s):** `Graphify Integration`, `GRAPH_REPORT.md`, `wiki/index.md`, `app/page.js`, `Geist Font` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Location Utilities`** (4 nodes): `location.js`, `formatLocationDisplay()`, `normalizeLocationSearch()`, `location.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Root Layout`** (3 nodes): `RootLayout()`, `layout.js`, `layout.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Home Page`** (3 nodes): `Home()`, `page.js`, `page.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Types Page`** (3 nodes): `page.js`, `page.js`, `TypesPage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Footer Component`** (3 nodes): `Footer.js`, `Footer()`, `Footer.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Header Component`** (3 nodes): `Header.js`, `Header()`, `Header.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Component`** (3 nodes): `Hero()`, `Hero.js`, `Hero.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Maps Integration`** (2 nodes): `Google Maps API`, `React Leaflet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind CSS`** (1 nodes): `Tailwind CSS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `shadcn/ui`** (1 nodes): `shadcn/ui`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `TanStack Query`** (1 nodes): `TanStack Query`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Zustand`** (1 nodes): `Zustand`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Razorpay SDK`** (1 nodes): `Razorpay SDK`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SearchResults()` connect `Search Feature & Utilities` to `Location Utilities`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `formatLocationDisplay()` connect `Location Utilities` to `Search Feature & Utilities`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Next.js Framework` (e.g. with `Next.js (App Router)` and `TypeScript`) actually correct?**
  _`Next.js Framework` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `SearchResults()` (e.g. with `formatLocationDisplay()` and `cn()`) actually correct?**
  _`SearchResults()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Graphify Integration`, `GRAPH_REPORT.md`, `wiki/index.md` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._