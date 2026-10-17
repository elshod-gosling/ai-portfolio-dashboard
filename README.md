# 🚀 AI Triad Collaborative Workspace: Website Project
### Google Antigravity • Anthropic Claude • OpenAI Codex

This repository is an engineered, multi-agent software development environment powered by **Git Worktrees**. It enables **three leading AI systems** to collaborate simultaneously on building a full-stack website without file collisions, merge conflicts, or port contention.

---

## 🏛️ AI Team Responsibilities for Building Your Website

| AI Agent | Lead Role | Specific Website Responsibilities | Working Directory |
| :--- | :--- | :--- | :--- |
| **Google Antigravity** | **System Architect & Visual QA** | • Wireframing, UI/UX structure, and component tree design<br>• Ingesting brand design guidelines, assets, and PDFs<br>• Visual QA via browser inspection (verifying DOM, layout, responsiveness)<br>• Central backlog coordination & release management | Root / `.worktrees/antigravity`<br>*(Branch: `agent/antigravity`)* |
| **OpenAI Codex** | **High-Velocity Scaffolder & Tester** | • Scaffolding UI components & Tailwind CSS layouts<br>• Writing backend API routes, server actions, and DB schemas<br>• Generating complete unit & integration test suites (>85% coverage)<br>• Implementing Zod/Pydantic validation schemas & security headers | `.worktrees/codex`<br>*(Branch: `agent/codex`)* |
| **Anthropic Claude** | **Principal Logic & Adversarial Reviewer** | • Implementing complex business & state logic (auth, cart, filtering)<br>• Adversarial code review of Codex's code before merge<br>• Root-cause debugging of tricky edge cases & race conditions<br>• Running autonomous `Plan -> Edit -> Test -> Fix` loops | `.worktrees/claude`<br>*(Branch: `agent/claude`)* |

---

## ⚡ Quickstart: Setting Up the Worktrees

### 1. Initialize the Worktrees
From the repository root, run the setup script:
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-worktrees.ps1
```
This automatically:
- Creates the branches: `agent/antigravity`, `agent/claude`, `agent/codex`.
- Provisions `.worktrees/antigravity`, `.worktrees/claude`, `.worktrees/codex`.
- Assigns non-conflicting local dev ports (`3001`, `3002`, `3003`).

### 2. Connect and Push to GitHub
When you are ready to link this repo to your GitHub account:
```powershell
# Option A: Using GitHub CLI (Recommended)
gh auth login
gh repo create ai-website-project --public --source=. --remote=origin --push

# Option B: Manual git remote
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
git push origin agent/antigravity agent/claude agent/codex
```

### 3. Launching Your AI Sessions
Run the launcher script to open separate terminals directly in each agent's environment:
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\launch-agents.ps1
```
Or navigate manually:
- **Claude Code:**
  ```powershell
  cd .worktrees/claude
  claude
  ```
- **OpenAI Codex / Copilot:**
  ```powershell
  cd .worktrees/codex
  # Use Codex CLI or point your Copilot/ChatGPT sandbox here
  ```
- **Antigravity:**
  Keep Antigravity open in the root or `.worktrees/antigravity` to oversee planning, UI preview, and merging.

---

## 🔄 Daily Collaboration Lifecycle

1. **Plan & Specify (Antigravity):**
   Antigravity creates/updates specifications in `.agent/TASK_BOARD.md` and defines component interfaces in `main`.
2. **Implement & Test (Codex):**
   Codex syncs (`git rebase main`), rapidly scaffolds the code, writes unit tests, and commits to `agent/codex`.
3. **Refine & Review (Claude):**
   Claude pulls Codex's branch, performs adversarial review, implements complex logic, runs the test suite until green, and commits to `agent/claude`.
4. **Visual QA & Release (Antigravity):**
   Antigravity merges Claude's branch into `agent/antigravity`, launches the local server on `http://localhost:3001`, inspects visual rendering in the browser, and merges into `main`.

---

## 📁 Repository Structure

```
ai-triad-repo/
├── .agent/
│   ├── AGENT_ROLES.md          # In-depth research & RACI matrix
│   ├── WORKFLOW.md             # Triad pipeline & handoff protocol
│   ├── TASK_BOARD.md           # Active task tracking board
│   └── BRANCHING_STRATEGY.md   # Git worktree lifecycle documentation
├── .worktrees/                 # Isolated worktree checkouts (gitignored)
│   ├── antigravity/            # Port 3001
│   ├── claude/                 # Port 3002
│   └── codex/                  # Port 3003
├── scripts/
│   ├── setup-worktrees.ps1     # Provision worktrees
│   ├── launch-agents.ps1       # Spawn agent terminals
│   ├── sync-worktree.ps1       # Rebase agent branch onto main
│   └── merge-agent.ps1         # Merge verified branch into main
├── ANTIGRAVITY.md              # Instructions for Antigravity
├── CLAUDE.md                   # Instructions for Claude Code
├── CODEX.md                    # Instructions for OpenAI Codex
├── .gitignore
└── README.md
```
