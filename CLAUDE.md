# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: Use `pnpm` (required, version 9.15.3)
**Node Version**: 20.19.0 (strictly enforced)

**Common Commands**:

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (runs TypeScript check first)
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm storybook` - Run Storybook for component development
- `pnpm generate-api-models` - Generate API types from OpenAPI spec using Orval

## Architecture Overview

**Frontend Stack**: React 19 + TypeScript + Vite + TanStack Router
**Styling**: Vanilla Extract CSS-in-JS
**State Management**:

- Server state: TanStack Query
- Client state: Zustand
- Forms: React Hook Form + Zod validation
  **API Client**: ky HTTP client
  **Testing**: Vitest + Playwright + Storybook + MSW
  **WebSocket**: STOMP.js for real-time features

**Key Architectural Patterns**:

- Feature-based organization in `src/features/` for domain-specific logic
- Shared components in `src/components/` with co-located styles and stories
- Auto-generated API types from OpenAPI spec via Orval
- File-based routing with TanStack Router
- Real-time match recording via WebSocket connections

## Project Structure

```
src/
├── apis/           # Auto-generated API clients and types (Orval)
├── features/       # Feature-specific components and logic
│   ├── matchRecord/       # Real-time match recording functionality
│   ├── playerLineupEdit/  # Player lineup management
│   └── playerSubstitution/ # Player substitution logic
├── components/     # Reusable UI components
├── routes/         # TanStack Router route definitions
├── stores/         # Zustand global state stores
├── hooks/          # Custom React hooks
├── utils/          # Utility functions and helpers
├── constants/      # Application constants
└── styles/         # Global styles and theme (Vanilla Extract)
```

## Coding Standards

**Language**: All code comments and responses should be in Korean
**Styling**: Always use Vanilla Extract, import as `import * as styles`
**Components**: Use function declarations, never React.FC
**State**: Zustand for client state, TanStack Query for server state
**Forms**: React Hook Form + Zod validation schemas
**Error Handling**: React Query error boundaries + notistack for notifications

**Import Rules**:

- Use absolute imports with `@/` prefix for cross-directory imports
- Use relative imports for sibling/child files
- Prefer barrel exports: `export * from` pattern
- Import order: external libraries → internal modules → types

**File Naming**:

- Components: PascalCase directories with `index.ts`, `Component.tsx`, `Component.css.ts`
- Routes: `route.tsx` with `-components/` subdirectory
- Styles: Always `ComponentName.css.ts`

## WebSocket Integration

The app uses STOMP over WebSocket for real-time features, particularly match recording. Key files:

- `src/apis/websockets/` - WebSocket client setup and type-safe wrappers
- `src/features/matchRecord/` - Real-time match state synchronization

## API Management

API types are auto-generated from OpenAPI spec at `https://dev-api.matchday-planner.com/v3/api-docs`

- Run `pnpm generate-api-models` to regenerate types
- All API interfaces are in `src/apis/models/`
- HTTP client setup in `src/apis/http.ts` using ky

## Testing Strategy

- Unit tests: Vitest for logic and hooks
- Component tests: Storybook for visual testing and documentation
- E2E tests: Playwright for critical user flows
- API mocking: MSW for development and testing
