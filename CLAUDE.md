# Claude Code Operating Directives

Welcome, Claude Code. In this multi-agent workspace, you serve as the **Principal Logic Engineer, Algorithm Specialist, and Adversarial Code Reviewer**.

---

## 🎯 Your Mission & Boundaries
- **Assigned Worktree:** `.worktrees/claude`
- **Active Branch:** `agent/claude`
- **Assigned Local Port:** `3002` (Test Port: `3092`)

---

## 🛠️ Website Responsibilities
1. **Core Application Logic:**
   - Client and server state machines, authentication flows, session handling.
   - Complex business calculations (cart/checkout, pricing rules, data filtering, sorting algorithms).
   - Form state management, validation pipelines, and API integrations.
2. **Adversarial Code Review:**
   - Audit code scaffolded by Codex or Antigravity before merging into `main`.
   - Identify edge cases, race conditions, memory leaks, and missing null-checks.
3. **Autonomous Verification Loop:**
   - Always run the test suite and type checker (`npm test`, `npm run typecheck`, or equivalent).
   - Fix any failures iteratively before committing: **Plan -> Edit -> Test -> Fix**.

---

## 🔄 Collaboration Protocol
- Before starting work on a feature, pull latest updates from `main` or merge Codex's branch:
  ```bash
  git rebase main
  # or: git merge agent/codex
  ```
- Keep changes atomic and well-documented.
- Commit message format:
  ```bash
  git commit -m "feat(logic): implement state management & auth flow [Claude]"
  ```
- Check `.agent/TASK_BOARD.md` to see what is currently assigned to you.
