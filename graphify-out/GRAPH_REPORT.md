# Graph Report - konakona  (2026-05-07)

## Corpus Check
- 24 files · ~7,050 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 64 nodes · 42 edges · 11 communities detected
- Extraction: 69% EXTRACTED · 31% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]

## God Nodes (most connected - your core abstractions)
1. `createClient()` - 7 edges
2. `Next.js Framework` - 6 edges
3. `SearchResults()` - 4 edges
4. `middleware()` - 3 edges
5. `GET()` - 3 edges
6. `graphify-out` - 3 edges
7. `SignupPage()` - 2 edges
8. `LoginPage()` - 2 edges
9. `HostPage()` - 2 edges
10. `cn()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Framework` --semantically_similar_to--> `Next.js (App Router)`  [INFERRED] [semantically similar]
  NEXT.md → tech_stack.txt
- `Next.js Framework` --conceptually_related_to--> `TypeScript`  [INFERRED]
  NEXT.md → tech_stack.txt
- `Next.js Agent Rules` --references--> `Next.js Framework`  [EXTRACTED]
  AGENTS.md → NEXT.md
- `middleware()` --calls--> `createClient()`  [INFERRED]
  src/middleware.js → src/lib/supabase/server.js
- `SignupPage()` --calls--> `createClient()`  [INFERRED]
  src/app/signup/page.js → src/lib/supabase/server.js

## Hyperedges (group relationships)
- **Project Technology Stack** — tech_stack_nextjs, tech_stack_typescript, tech_stack_tailwind_css, tech_stack_shadcn_ui, tech_stack_tanstack_query, tech_stack_zustand, tech_stack_react_leaflet, tech_stack_google_maps_api, tech_stack_razorpay_sdk [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.2
Nodes (4): GET(), formatLocationDisplay(), cn(), SearchResults()

### Community 1 - "Community 1"
Cohesion: 0.2
Nodes (5): HostPage(), Header(), LoginPage(), SignupPage(), createClient()

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (8): Next.js Agent Rules, Claude Agents Configuration, app/page.js, Geist Font, Next.js Framework, Vercel Platform, Next.js (App Router), TypeScript

### Community 3 - "Community 3"
Cohesion: 0.5
Nodes (2): middleware(), updateSession()

### Community 4 - "Community 4"
Cohesion: 0.5
Nodes (4): GRAPH_REPORT.md, Graphify Integration, graphify-out, wiki/index.md

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (2): Google Maps API, React Leaflet

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (1): Tailwind CSS

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (1): shadcn/ui

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (1): TanStack Query

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (1): Zustand

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (1): Razorpay SDK

## Knowledge Gaps
- **16 isolated node(s):** `Graphify Integration`, `GRAPH_REPORT.md`, `wiki/index.md`, `app/page.js`, `Geist Font` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 3`** (4 nodes): `middleware.js`, `middleware.js`, `middleware()`, `updateSession()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `Google Maps API`, `React Leaflet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `Tailwind CSS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `shadcn/ui`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `TanStack Query`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `Zustand`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `Razorpay SDK`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `createClient()` connect `Community 1` to `Community 0`, `Community 3`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `GET()` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `createClient()` (e.g. with `middleware()` and `SignupPage()`) actually correct?**
  _`createClient()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Next.js Framework` (e.g. with `Next.js (App Router)` and `TypeScript`) actually correct?**
  _`Next.js Framework` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `SearchResults()` (e.g. with `GET()` and `formatLocationDisplay()`) actually correct?**
  _`SearchResults()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `middleware()` (e.g. with `updateSession()` and `createClient()`) actually correct?**
  _`middleware()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `GET()` (e.g. with `SearchResults()` and `createClient()`) actually correct?**
  _`GET()` has 2 INFERRED edges - model-reasoned connections that need verification._