# 🌐 AI Triad Website Engineering Blueprint

This guide specifies how to harness your **Google Antigravity**, **Anthropic Claude**, and **OpenAI Codex** subscriptions to build, test, and ship your website with zero friction.

---

## 1. How Each AI Connects to Your Repo

### 🌌 1. Google Antigravity (Gemini)
- **Role:** System Architect, Visual QA Lead & Project Orchestrator
- **How to Connect:**
  - You are already running in Antigravity IDE!
  - Antigravity operates from the repository root: `c:\Users\elsho\Documents\gemini\ai-triad-repo` (or `.worktrees/antigravity`).
  - Antigravity uses its built-in browser tools, artifact generator, and subagent orchestration.

### 🧠 2. Anthropic Claude (Claude Code)
- **Role:** Principal Logic Engineer & Adversarial Code Reviewer
- **How to Connect:**
  - Open terminal and navigate into Claude's dedicated worktree:
    ```powershell
    cd c:\Users\elsho\Documents\gemini\ai-triad-repo\.worktrees\claude
    claude
    ```
  - Claude automatically loads `CLAUDE.md`, binds to `agent/claude`, and uses port `3002`.

### ⚡ 3. OpenAI Codex (OpenAI CLI / Copilot Agent / ChatGPT)
- **Role:** High-Velocity Scaffolder, API Builder & Test Synthesizer
- **How to Connect:**
  - In a separate terminal or VS Code window, open Codex's dedicated worktree:
    ```powershell
    cd c:\Users\elsho\Documents\gemini\ai-triad-repo\.worktrees\codex
    ```
  - Use the Codex CLI, GitHub Copilot workspace agent, or ChatGPT code sandbox pointed to this directory.
  - Codex reads `CODEX.md`, operates on `agent/codex`, and uses port `3003`.

---

## 2. Recommended Website Technology Stack

| Layer | Recommended Choice | Rationale for AI Collaboration |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router) or Vite + React / Astro** | Universal TypeScript support across all 3 AI models |
| **Styling** | **Tailwind CSS + Lucide Icons + shadcn/ui** | Codex and Claude generate Tailwind classes with 99%+ accuracy |
| **State & Logic** | **Zustand / TanStack Query** | Clean modular state that Claude can audit without boilerplate clutter |
| **Validation** | **Zod** | Codex excels at auto-generating Zod schemas for forms and API routes |
| **Database (Optional)** | **Supabase / Prisma / SQLite** | High schema reliability across Codex and Antigravity |

---

## 3. The 4-Stage Website Assembly Workflow

### Stage 1: Design System & Wireframes (Lead: Antigravity)
- **Antigravity** defines:
  - Typography, color theme, design tokens in `tailwind.config.ts`.
  - Component tree hierarchy (`Navbar`, `Hero`, `Features`, `Pricing`, `Footer`).
  - Route structure (`/`, `/about`, `/contact`, `/dashboard`).
  - Contracts & props written to `src/types/`.

### Stage 2: Scaffolding, Components & Tests (Lead: Codex)
- **Codex** runs in `.worktrees/codex`:
  - Rapidly generates the JSX/TSX component markup with Tailwind classes.
  - Creates API routes and database models.
  - Writes full unit test suites for components using Vitest / React Testing Library.
  - Commits with `feat(scaffold): generate landing components [Codex]`.

### Stage 3: Core Logic, State & Code Review (Lead: Claude)
- **Claude** runs in `.worktrees/claude`:
  - Pulls Codex's branch (`git merge agent/codex`).
  - Implements interactive state (modal toggles, dark/light theme, filtering, cart logic).
  - Performs adversarial code review: checks accessibility (`aria-*`), catches re-render loops, and fixes edge cases.
  - Runs `npm test` repeatedly until all tests pass.
  - Commits with `feat(logic): verify state machine & accessibility [Claude]`.

### Stage 4: Visual QA & Main Merge (Lead: Antigravity)
- **Antigravity** runs in `.worktrees/antigravity` or root:
  - Pulls Claude's verified branch (`git merge agent/claude`).
  - Starts local development server on `PORT=3001 npm run dev`.
  - Visually inspects the website in the browser: tests responsive mobile layouts, checks console errors, and verifies spacing and fonts.
  - Merges into `main`: `powershell .\scripts\merge-agent.ps1 -Agent antigravity`.
