# GitHub Copilot Instructions — DevLog.ai Web Frontend

## Project Overview

DevLog.ai is a web frontend for the AI Worklog Assistant — a system that helps software engineers record daily work, extract problem-solution knowledge, and search past solutions using AI. This React SPA communicates with the DevLog API backend (`devlog.ai-api`).

## Tech Stack

- **Framework**: React 19 with TypeScript (strict mode)
- **Build Tool**: Vite 7 with SWC (`@vitejs/plugin-react-swc`)
- **Styling**: Tailwind CSS (utility-first)
- **Icons**: Font Awesome 6.4 (via `@fortawesome/react-fontawesome` or CDN)
- **Fonts**: Inter (body), Space Grotesk (headings — public pages), JetBrains Mono (code blocks)
- **Charts**: Plotly.js (Insights page)
- **Routing**: React Router v7
- **State Management**: Zustand (lightweight global state) + React Query / TanStack Query (server state)
- **HTTP Client**: Axios or `fetch` with typed wrappers
- **Auth**: Supabase Auth client (`@supabase/supabase-js`) — JWT, email/password, GitHub/Google OAuth
- **Form Handling**: React Hook Form + Zod (validation)
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint 9 with TypeScript + React Hooks + React Refresh plugins
- **Package Manager**: pnpm

## Project Structure

```
devlog.ai-web/
├── public/
├── src/
│   ├── main.tsx                    # App entry point
│   ├── App.tsx                     # Root component with router
│   ├── index.css                   # Global styles / Tailwind directives
│   ├── assets/                     # Static assets (images, SVGs)
│   ├── config/
│   │   └── env.ts                  # Environment variables & API config
│   ├── lib/
│   │   ├── supabase.ts             # Supabase client instance
│   │   ├── api.ts                  # Axios/fetch instance with auth interceptor
│   │   └── utils.ts                # Shared utility functions
│   ├── hooks/
│   │   ├── useAuth.ts              # Auth state & actions hook
│   │   └── useWorklogs.ts          # Worklog query hooks
│   ├── stores/
│   │   └── authStore.ts            # Zustand auth store
│   ├── schemas/
│   │   ├── auth.ts                 # Zod schemas for auth forms
│   │   ├── worklog.ts              # Zod schemas for worklog forms
│   │   └── knowledge.ts            # Zod schemas for search forms
│   ├── types/
│   │   ├── worklog.ts              # Worklog & KnowledgeCard types
│   │   └── auth.ts                 # Auth types
│   ├── components/
│   │   ├── ui/                     # Reusable UI primitives (Button, Input, Card, Modal, Tag, etc.)
│   │   ├── layout/
│   │   │   ├── PublicLayout.tsx     # Layout for public pages (header + background blobs)
│   │   │   ├── AppLayout.tsx       # Layout for authenticated pages (sidebar + header)
│   │   │   ├── Sidebar.tsx         # App sidebar navigation
│   │   │   └── Header.tsx          # App top header with search
│   │   ├── auth/                   # Auth-related components (LoginForm, RegisterForm, SSOButtons)
│   │   ├── worklog/                # Worklog components (ChatInput, StructuredCard, LogList)
│   │   ├── knowledge/              # Knowledge components (SearchBar, KnowledgeCard, Filters)
│   │   ├── timeline/               # Timeline components (TimelineEntry, DaySummary)
│   │   └── insights/               # Insights components (StatCard, Charts)
│   ├── pages/
│   │   ├── public/
│   │   │   ├── WelcomePage.tsx      # Landing / marketing page
│   │   │   ├── SignInPage.tsx       # Login page
│   │   │   ├── CreateAccountPage.tsx # Registration page
│   │   │   └── OnboardingPage.tsx   # Onboarding wizard (Step 1 & 2)
│   │   └── app/
│   │       ├── DashboardPage.tsx    # Worklog dashboard / home
│   │       ├── WorkLogPage.tsx      # Chat-based work log entry
│   │       ├── KnowledgePage.tsx    # Knowledge base search
│   │       ├── TimelinePage.tsx     # Timeline view
│   │       └── InsightsPage.tsx     # Analytics & insights
│   └── routes/
│       └── index.tsx               # Route definitions with guards
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── package.json
```

## Design System

### Two Visual Languages

The app has two distinct design contexts — preserve this split intentionally:

#### Public Pages (Welcome, Sign In, Create Account, Onboarding)
- Background: beige `#F5F5F0` (`brand-light`)
- Headings: Space Grotesk (500–700)
- Body: Inter (300–700)
- Code: JetBrains Mono
- Dark mode support (class-based)
- Glassmorphism panels (`backdrop-blur-[16px]` + semi-transparent bg)
- Background blobs (large blurred circles for soft gradient backgrounds)
- Animations: fadeIn, slideUp, pulse-slow
- Custom shadows: soft, glow, green-glow
- Colors: `brand-black (#121212)`, `brand-dark (#1E1E1E)`, `brand-green (#E6F8D6)`, `brand-pink (#FCE1DC)`, `brand-beige (#FBE8D5)`, `brand-taskly-green (#86C25E)`

#### App Pages (Dashboard, Work Log, Knowledge, Timeline, Insights)
- Background: `gray-50`
- Font: Inter only (300–700)
- No dark mode
- Clean, utilitarian cards on white
- Accent: `blue-600` to `purple-600` gradient for primary actions and logo
- Fixed sidebar (w-64) + top header layout

### Tailwind Custom Config

Extend Tailwind config with brand tokens:
```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        black: '#121212',
        dark: '#1E1E1E',
        gray: '#2D2D2D',
        light: '#F5F5F0',
        green: '#E6F8D6',
        pink: '#FCE1DC',
        beige: '#FBE8D5',
        accent: '#3B82F6',
        purple: '#8B5CF6',
        'taskly-green': '#86C25E',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Space Grotesk', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
}
```

### Icon Usage
- Font Awesome 6.4 icons throughout
- Key icons: `fa-brain` (app logo), `fa-robot` (AI avatar), `fa-chart-line` / `fa-plus` / `fa-search` / `fa-clock` / `fa-chart-bar` (sidebar nav)
- SSO: `fa-brands fa-github`, `fa-brands fa-google`

## Pages & Routes

| Route                | Page                  | Layout        | Auth Required |
|----------------------|-----------------------|---------------|---------------|
| `/`                  | WelcomePage           | PublicLayout   | No            |
| `/signin`            | SignInPage            | PublicLayout   | No            |
| `/register`          | CreateAccountPage     | PublicLayout   | No            |
| `/onboarding`        | OnboardingPage        | PublicLayout   | Yes           |
| `/dashboard`         | DashboardPage         | AppLayout      | Yes           |
| `/worklog`           | WorkLogPage           | AppLayout      | Yes           |
| `/knowledge`         | KnowledgePage         | AppLayout      | Yes           |
| `/timeline`          | TimelinePage          | AppLayout      | Yes           |
| `/insights`          | InsightsPage          | AppLayout      | Yes           |

## API Integration

### Backend Endpoints (devlog.ai-api)

| Method | Endpoint             | Description                          |
|--------|----------------------|--------------------------------------|
| POST   | `/auth/register`     | Register new user (via Supabase Auth)|
| POST   | `/auth/login`        | Login and receive JWT                |
| POST   | `/worklogs`          | Create worklog from raw text         |
| GET    | `/worklogs`          | List worklogs (filter by date range) |
| GET    | `/worklogs/:id`      | Get single worklog                   |
| POST   | `/knowledge/search`  | Semantic search over knowledge cards |

### API Client Pattern
```ts
// src/lib/api.ts
// Axios instance with baseURL from env, auth token interceptor
// Automatically attach Authorization: Bearer <token> from auth store
// Handle 401 responses by redirecting to /signin
```

### Environment Variables
```
VITE_API_URL=http://localhost:3000       # Backend API base URL
VITE_SUPABASE_URL=                       # Supabase project URL
VITE_SUPABASE_ANON_KEY=                  # Supabase public anon key
```

## Architecture Principles

- **Component-driven**: Build small, reusable UI components in `components/ui/`, compose them in feature components and pages
- **Colocation**: Keep feature-specific components close to their pages (e.g., `components/worklog/` for worklog page components)
- **Server state vs UI state**: Use TanStack Query for all API data (caching, refetching, optimistic updates); Zustand only for client-only state (auth, UI preferences)
- **Type safety end-to-end**: Define API response types in `types/`, validate with Zod at API boundaries
- **Protected routes**: Use a route guard component that checks auth state and redirects to `/signin`
- **Lazy loading**: Use `React.lazy()` + `Suspense` for page-level code splitting

## Coding Conventions

### General
- Use TypeScript strict mode — no `any` types
- Prefer functional components with hooks
- Use `async/await` for all async operations
- Use Zod schemas for form validation and API response parsing
- Return early from guards and validations

### Naming
- Files: `PascalCase.tsx` for components, `camelCase.ts` for utilities/hooks/stores
- Components: `PascalCase` — one component per file, filename matches component name
- Hooks: `useCamelCase` prefix
- Stores: `camelCaseStore.ts`
- Types/Interfaces: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Zod schemas: suffix with purpose (e.g., `loginSchema`, `worklogCreateSchema`)

### Component Patterns
```tsx
// Prefer named exports for components
export function MyComponent({ title }: MyComponentProps) { ... }

// Define props as interface or type above the component
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}
```

### Styling
- Use Tailwind CSS utility classes exclusively — no CSS modules, no styled-components
- Extract repeated class patterns into component abstractions, not utility classes
- Use `cn()` (clsx/tailwind-merge) helper for conditional class composition
- Responsive: mobile-first approach (`sm:`, `md:`, `lg:` breakpoints)

### State Management
- **Zustand**: Auth state, sidebar open/close, theme preference
- **TanStack Query**: All server data (worklogs, knowledge cards, search results)
- **Local state**: Form inputs, UI toggles within a component

### Error Handling
- API errors caught in TanStack Query `onError` callbacks or error boundaries
- Show toast notifications for user-facing errors
- Display structured error messages from API (`{ detail: "..." }`)
- Use React Error Boundaries for unexpected rendering errors

### Forms
- Use React Hook Form with Zod resolver for all forms
- Validate on blur + submit
- Show inline field errors below inputs
- Disable submit button while submitting

## Key Page Behaviors

### Work Log Page (Chat-based UI)
- Chat interface: user types raw text → AI responds with structured worklog
- AI message shows color-coded cards: Task (blue), Problem (orange), Solution (green)
- AI suggestions bar: clickable prompt chips ("Add implementation details", "Specify time spent", etc.)
- Auto-detected tags displayed as removable pills
- Recent logs preview below chat

### Knowledge Page (Search)
- Large search input with recent searches as suggestion pills
- Collapsible filters panel: tags, date range, project, sort
- Results as knowledge cards: Problem (red), Root Cause (orange), Solution (green)
- Each card shows tags, view count, helpful count, bookmark button

### Dashboard
- Today's AI summary paragraph + 3 stat cards (Tasks, Problems Solved, Solutions Found)
- Recent Problems list + Recent Solutions list (green border, "SOLVED" badge)
- Weekly activity bar chart + top tags

### Insights
- 4 KPI stat cards with trend indicators
- Charts: Work Activity (line/area), Technologies (pie), Common Problems (bar)
- Top Solutions ranked list, Most Used Tags with progress bars
- AI insights panel (3 cards: Productivity Trend, Focus Area, Top Skill)

## Shared Layouts

### PublicLayout
- Fixed top header with glassmorphism blur
- Logo: `fa-memory` icon + "DevLog.ai" text
- Nav: Features, How it works, Pricing
- Right: theme toggle, Sign in, "Get Started" button
- Mobile: hamburger with slide-in menu
- Background decorative blobs

### AppLayout
- Fixed left sidebar (w-64): logo (`fa-brain` + "WorklogAI"), 5 nav items, user profile at bottom
- Top header: mobile hamburger, page title, search input, notification bell
- Active sidebar item: `text-blue-600 bg-blue-50`
- Mobile: sidebar collapsed, toggleable with overlay backdrop

## Security

- Store Supabase JWT tokens via Supabase client (handles storage automatically)
- Never store tokens in localStorage manually — use Supabase session management
- Attach auth token to all API requests via interceptor
- Handle 401 by clearing auth state and redirecting to `/signin`
- Sanitize user-generated content before rendering (prevent XSS)
- Only use `VITE_`-prefixed env vars (Vite exposes these to client)
- Never store `SUPABASE_SERVICE_ROLE_KEY` in the frontend

## Performance

- Page-level code splitting with `React.lazy()`
- TanStack Query caching with `staleTime` configured per query
- Debounce search inputs (300ms)
- Virtualize long lists if > 100 items
- Optimize images: use WebP, lazy loading

## Testing

- Unit tests for hooks, stores, and utility functions
- Component tests with React Testing Library (test user behavior, not implementation)
- Mock API calls with MSW (Mock Service Worker) for integration tests
- Test files mirror source: `src/components/ui/__tests__/Button.test.tsx`

## Language

- Code: English (variables, functions, comments)
- UI text: English (can be localized later)
- Git commits: English, conventional commits format (`feat:`, `fix:`, `docs:`, etc.)

## UI Reference

The `uxpilot-export-1772963053538/` folder contains exported HTML mockups from UXPilot. Use these as the source of truth for visual design and layout:

| File | Page |
|------|------|
| `1-AI Worklog - Create Account.html` | Registration page |
| `2-AI Worklog - Onboarding - Step.html` | Onboarding step 2 (Preferences) |
| `3-AI Worklog - Onboarding - Step.html` | Onboarding step 1 (Setup Workspace) |
| `4-AI Worklog - Welcome.html` | Landing / Welcome page |
| `5-AI Worklog 2 - Work Log.html` | Work Log chat UI |
| `6-AI Worklog 2 - Worklog Dashboa.html` | Dashboard |
| `7-AI Worklog - Sign In.html` | Sign In page |
| `8-AI Worklog 2 - Knowledge Base.html` | Knowledge Base search |
| `9-AI Worklog 2 - Timeline Overvi.html` | Timeline view |
| `10-AI Worklog 2 - Insights Overvi.html` | Insights / Analytics |

When implementing a page, read the corresponding HTML file first to match the exact layout, spacing, colors, and components.
