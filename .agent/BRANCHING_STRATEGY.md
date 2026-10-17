# Git Worktree Branching Strategy for Multi-Agent Workflows

This document establishes the git branching conventions, worktree lifecycle, and synchronization rules to guarantee zero file collisions between agents.

---

## 1. Directory Structure & Branch Mapping

```
ai-triad-repo/                          (Canonical Repo Root: Branch `main`)
│
├── .worktrees/
│   ├── antigravity/                    (Worktree: Branch `agent/antigravity`)
│   ├── claude/                         (Worktree: Branch `agent/claude`)
│   └── codex/                          (Worktree: Branch `agent/codex`)
```

- Each directory in `.worktrees/` is a genuine, independently checked-out working tree backed by the central `.git/` database in the repo root.
- All branches share identical commit history, blobs, and remotes.
- When an agent commits in its worktree, that commit is instantly visible to all other worktrees via `git log`.

---

## 2. Worktree Command Reference

### List all active worktrees
```powershell
git worktree list
```

### Add a new agent worktree
```powershell
# Create worktree linked to a new branch branching from main
git worktree add .worktrees/codex -b agent/codex main
```

### Remove a worktree safely
```powershell
# Once branch is merged into main and worktree is no longer needed
git worktree remove .worktrees/codex
git worktree prune
```

### Lock / Unlock a worktree (Prevent accidental deletion)
```powershell
git worktree lock .worktrees/claude --reason "Long running refactor in progress"
git worktree unlock .worktrees/claude
```

---

## 3. Merge & Rebase Policy

1. **Rebase Before Working:**
   Before an agent begins work in its worktree, it MUST rebase onto the latest `main`:
   ```powershell
   git fetch origin
   git rebase main
   ```
2. **Atomic Branch Commits:**
   Each agent commits with its tag prefix:
   - `[Antigravity]` for specs, UI, architecture, and orchestration.
   - `[Codex]` for scaffolds, tests, schemas, and migrations.
   - `[Claude]` for core logic, refactoring, and code review fixes.
3. **Never Force Push to `main`:**
   All merges into `main` must use pull requests or explicit non-fast-forward merge commits (`git merge --no-ff`) to preserve branch provenance and auditability.
4. **Lockfile & Dependency Strategy:**
   - Package additions must be initiated in `main` or by Antigravity first to prevent lockfile conflicts.
   - If an agent adds a dependency, it must notify the triad via `.agent/TASK_BOARD.md` so peer worktrees run `npm install` / `pip install`.
