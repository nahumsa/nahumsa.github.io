# Purpose

This document defines how an automated coding agent should operate when contributing to this project. The goal is to ensure consistent, maintainable, and idiomatic React + Tailwind CSS code that aligns with the project’s standards.

# Tech Stack

- **Frontend Framework:** React (Functional Components, Hooks)
- **Styling:** Tailwind CSS
- **Language:** TypeScript (preferred) or JavaScript
- **State Management:** React hooks (useState, useEffect, useContext, etc.)
- **Build Tool:** (Vite / Next.js / CRA – specify if applicable)

# General Coding Principles

The agent should:

- Prefer clarity over cleverness
- Write small, composable components
- Avoid premature optimization
- Follow existing project patterns and conventions
- Minimize unnecessary dependencies
- Keep diffs focused and easy to review

# React Guidelines

## Component Design

- Use functional components only
- Keep components:
  - Under ~200 lines when possible
  - Focused on a single responsibility
- Extract reusable logic into:
  - Custom hooks
  - Utility functions
  - Shared components

## Hooks

- Follow the Rules of Hooks
- Prefer:
  - `useEffect` for side effects
  - `useMemo` / `useCallback` only when justified
- Clean up effects where necessary

## Props & State

- Use explicit, descriptive prop names
- Avoid deeply nested props
- Lift state up only when needed
- Prefer controlled components for forms

# Tailwind CSS Guidelines

## Styling Rules

- Use Tailwind utility classes instead of custom CSS whenever possible
- Avoid inline styles (`style={{ ... }}`) unless strictly necessary
- Prefer semantic layout patterns:
  - `flex`, `grid`, `gap`, `space-*`
- Keep class lists readable:
  - Group by layout → spacing → typography → colors → effects

**Example:**

```html
<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
```

## Reusability

- Extract repeated class combinations into:
  - Reusable components
  - Tailwind `@apply` (only if already used in the project)
- Do not invent new design tokens unless instructed

## Accessibility (Required)

The agent must:

- Use semantic HTML elements (button, nav, header, etc.)
- Ensure:
  - Clickable elements are keyboard-accessible
  - `aria-*` attributes where appropriate
  - Visible focus states
  - Associate labels with form inputs

# File & Folder Conventions

- Follow the existing project structure. If none exists, default to:

  ```
  src/
    components/
    hooks/
    pages/
    utils/
    styles/
  ```

- Component files: `PascalCase.tsx`
- Hooks: `useSomething.ts`
- Utilities: `camelCase.ts`

# TypeScript Guidelines (If Applicable)

- Prefer explicit types for:
  - Props
  - Function return values
- Avoid `any`
- Use interfaces for public shapes
- Use type inference for local variables when obvious

# Testing (If Present)

- Write tests only when requested or when modifying critical logic
- Prefer testing behavior over implementation
- Follow existing test patterns

# What the Agent Should NOT Do

The agent should not:

- Rewrite unrelated code
- Change formatting or lint rules unnecessarily
- Introduce new libraries without approval
- Over-abstract simple logic
- Remove comments or TODOs without addressing them

# Communication Expectations

When proposing changes, the agent should:

- Explain what was changed and why
- Call out assumptions
- Flag potential follow-ups or tradeoffs
- Ask for clarification if requirements are ambiguous

# Completion Checklist

Before submitting output, the agent should verify:

- Code builds without errors
- Components are readable and idiomatic
- Tailwind classes follow project style
- No unused imports or dead code
- Accessibility requirements are met

