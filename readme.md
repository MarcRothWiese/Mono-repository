# Vue Monorepo (npm workspaces)

Simple Vue 3 + Vite monorepo using npm workspaces. It contains a demo application and a shared UI components package.

## Structure
```
.
├─ package.json            # workspaces: apps/*, packages/*
├─ tsconfig.base.json      # base TS config + @ui/* path alias
├─ apps/
│  └─ demo/                # Vite + Vue 3 + TS app
└─ packages/
   └─ ui-components/
      └─ src/              # shared Vue SFCs (e.g., BaseButton.vue)
```

## Requirements
- Node 18+ and npm 9+

## Setup
1) Install at the repo root: `npm install`
2) Run the demo app: `npm run dev -w apps/demo`
3) Build the demo app: `npm run build -w apps/demo`
4) Preview the build: `npm run preview -w apps/demo`

## Using shared UI in apps
- Import from the shared package via the alias configured in `tsconfig.base.json` and `apps/demo/vite.config.ts`:
  - `import { BaseButton } from '@ui/index'`
- The alias points to `packages/ui-components/src`, so components are used directly without a publish step.

## Notes
- Prefer a single root install and lockfile; local `apps/*/node_modules` can be removed.
- When adding new apps or packages, list them under the existing `workspaces` and mirror the alias if they consume `@ui/*`.
