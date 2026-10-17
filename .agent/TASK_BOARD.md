# AI Triad Active Task Board

Use this board to track task assignments, worktree status, and handoffs between **Antigravity**, **Codex**, and **Claude**.

---

## Active Sprints / Tasks

| Task ID | Feature / Component | Assigned Agent | Worktree Branch | Status | Next Hand-off |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **TASK-001** | Multi-Agent Worktree Architecture & Repository Setup | Antigravity | `main` | `In Progress` | User Review |
| **TASK-002** | Initial Core Schema & Project Scaffolding | Codex | `agent/codex` | `Queued` | Claude Review |
| **TASK-003** | Domain Logic & Security Guard Verification | Claude | `agent/claude` | `Queued` | Antigravity QA |
| **TASK-004** | End-to-End Visual Integration & Smoke Test | Antigravity | `agent/antigravity` | `Queued` | Release to Main |

---

## Status Legend
- `Queued`: Task is specified and waiting for prerequisites.
- `In Progress`: Agent is actively working inside its assigned worktree.
- `Ready for Review`: Agent finished implementation; waiting for peer review.
- `In Review`: Peer agent (typically Claude for code, Antigravity for UI) is reviewing.
- `Blocked`: Requires user input or dependency completion.
- `Completed`: Merged into canonical `main` branch.

---

## New Task Template

When creating a new task, copy and fill this template:

```markdown
### [TASK-XXX] <Feature Name>
- **Goal:** <One-sentence summary of the objective>
- **Lead Architect (Antigravity):** Define contracts, types, and acceptance criteria.
- **Implementer (Codex):** Scaffold endpoints, ORM models, and write test suites.
- **Reviewer / Refactorer (Claude):** Audit logic, verify edge cases, and run test-fix loop.
- **QA & Merging (Antigravity):** Run visual/browser checks and merge to main.
- **Files Touched:**
  - `path/to/spec.ts`
  - `path/to/implementation.ts`
  - `path/to/test.spec.ts`
```
