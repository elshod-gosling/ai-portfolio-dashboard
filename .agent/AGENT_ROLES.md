# AI Triad Agent Roles & Research Matrix

This document defines the research-backed responsibilities, technical strengths, and collaboration boundaries for **Google Antigravity**, **Anthropic Claude**, and **OpenAI Codex** working concurrently within a Git Worktree environment.

---

## 1. Executive Research & Comparative Analysis

Each of the three AI systems represents a distinct design philosophy and agentic execution paradigm. Running all three in parallel allows each model to operate strictly in its area of greatest comparative advantage.

| Attribute | Google Antigravity (Gemini) | Anthropic Claude (Claude Code) | OpenAI Codex (o-series / GPT) |
| :--- | :--- | :--- | :--- |
| **Execution Environment** | Multi-Agent Platform & IDE (GUI + TUI + Subagents) | Deep Terminal Loop (`Plan -> Edit -> Test -> Fix`) | Fast Parallel Sandboxes & CLI Diffs |
| **Context Capacity** | **Ultra-Long (1M – 2M+ tokens)** | Large (200k tokens) with deep focus | Standard to Large (128k – 200k tokens) |
| **Multimodality** | **Native Multimodal** (Images, Video, PDFs, UI DOM) | Text & Vision (Screenshots) | Text & Structured JSON/Diffs |
| **Primary Strength** | **Whole-Repo Architecture, Visual QA & Orchestration** | **Intricate Logic, Correctness & Code Review** | **Rapid Scaffolding, Test Suites & Security Baseline** |
| **Benchmark Sweet Spot** | Full-stack scaffolding, multimodal verification, long-horizon planning | SWE-bench Verified, complex refactoring, race-condition detection | High-throughput generation, unit test coverage, schema defense |

---

## 2. In-Depth Agent Profiles & Responsibilities

### 🌌 1. Google Antigravity
> **Title:** Chief System Architect, Multimodal Ingestor & Visual Orchestrator  
> **Assigned Worktree:** `.worktrees/antigravity` (Branch: `agent/antigravity` or `main`)

#### Why Antigravity Excels:
- **Massive Context Window:** Capable of ingesting full documentation manuals, legacy codebases, database schemas, and multi-megabyte log files simultaneously without loss of nuance.
- **Visual & UI Verification:** Direct integration with headless browsers and visual DOM inspection allows Antigravity to visually verify layouts, responsive styling, and UI interactions that pure terminal agents cannot see.
- **Orchestration & Tool Chaining:** Native support for MCP servers, subagents (`invoke_subagent`), background tasks, and interactive artifacts makes it the ideal control tower.

#### Core Responsibilities:
1. **System Architecture & Specifications:** Author high-level architecture designs, API schemas (OpenAPI/GraphQL), entity-relationship models, and Architectural Decision Records (ADRs).
2. **Context Aggregation:** Parse large external SDK docs, requirement PDFs, design files (Figma screenshots/exports), and summarize them into concise implementation specs for Claude and Codex.
3. **UI / Frontend Prototyping & Visual QA:** Build frontend user interfaces, dashboards, and render components; verify visual fidelity and responsiveness via browser preview.
4. **Triad Coordination:** Maintain the central `.agent/TASK_BOARD.md`, dispatching discrete tasks to Claude and Codex and coordinating integration merges into `main`.

---

### 🧠 2. Anthropic Claude (Claude Code)
> **Title:** Principal Logic Engineer, Algorithm Specialist & Adversarial Reviewer  
> **Assigned Worktree:** `.worktrees/claude` (Branch: `agent/claude`)

#### Why Claude Excels:
- **Strict Logic & Instruction Adherence:** Highest benchmark consistency in complex multi-file logic changes without introducing regression bugs or hallucinations.
- **Autonomous Terminal Iteration Loop:** Claude Code excels in the `Plan -> Edit -> Test -> Fix` loop, relentlessly iterating until all type checks, linters, and unit tests pass cleanly before committing.
- **Adversarial Code Review:** Unrivaled at detecting subtle race conditions, off-by-one errors, state mutation bugs, and architectural drift.

#### Core Responsibilities:
1. **Core Business Logic & Algorithms:** Write high-stakes algorithms, state machines, financial/mathematical logic, and complex data pipeline transformations.
2. **Adversarial Code Review:** Act as the final gatekeeper for code drafted by Codex or Antigravity, auditing PRs for boundary bugs, memory leaks, and edge cases.
3. **Complex Refactoring & Technical Debt:** Safely untangle tightly-coupled legacy code, extract interfaces, and modernize code patterns without breaking existing contracts.
4. **Knotty Root-Cause Debugging:** Trace and resolve asynchronous bugs, intermittent concurrency issues, and tricky system integration faults.

---

### ⚡ 3. OpenAI Codex (Copilot / o-series CLI)
> **Title:** High-Velocity Implementation Engine, Test Synthesizer & Security Guard  
> **Assigned Worktree:** `.worktrees/codex` (Branch: `agent/codex`)

#### Why Codex Excels:
- **Raw Throughput & Speed:** Exceptionally rapid generation of clean, structured diffs for well-defined interface contracts.
- **Comprehensive Test Synthesis:** Excels at generating exhaustive test suites (unit tests, integration tests, mock objects, fuzz tests, edge-case coverage).
- **Security Foundations:** Demonstrates high benchmark compliance in defensive coding—input validation (Zod, Pydantic), authentication state guards, rate limiting, and sanitization.

#### Core Responsibilities:
1. **Rapid Scaffolding & Boilerplate:** Rapidly implement database schemas, ORM models, DTOs, CRUD endpoints, and repetitive API routes from Antigravity's specifications.
2. **Exhaustive Test Suite Creation:** Author complete unit and regression test matrices covering 90%+ code coverage for components written by any agent.
3. **Defensive Validation & Security Guards:** Implement schema validation layers, sanitization middlewares, auth guards, and OWASP compliance rules.
4. **Maintenance & Tooling Automation:** Generate CI/CD scripts, Dockerfiles, database seeders, migration scripts, and dependency upgrades.

---

## 3. RACI Responsibility Assignment Matrix

| Engineering Phase / Task | Antigravity | Claude | Codex |
| :--- | :---: | :---: | :---: |
| **Requirements Analysis & Tech Spec** | **A / R** | C | I |
| **API Contract & Schema Definition** | **A / R** | C | I |
| **Frontend UI / Visual Prototyping** | **A / R** | I | C |
| **Visual QA & Browser Testing** | **A / R** | I | I |
| **Rapid API & CRUD Scaffolding** | I | C | **A / R** |
| **Database Migrations & Models** | C | C | **A / R** |
| **Exhaustive Unit & Fuzz Tests** | I | C | **A / R** |
| **Input Validation & Security Guards**| C | C | **A / R** |
| **Core Domain Logic & Algorithms** | C | **A / R** | C |
| **Deep Code Review & Auditing** | I | **A / R** | I |
| **Complex Refactoring & Bug Fixing** | C | **A / R** | C |
| **Final Integration & Release Merge** | **A / R** | C | I |

*Legend: **R** = Responsible (does the work), **A** = Accountable (approves/owns outcome), **C** = Consulted (provides input/review), **I** = Informed (receives notification).*

---

## 4. Operational Guardrails

1. **No Shared Worktrees:** Agents must NEVER operate directly within another agent's worktree.
2. **Contract-First Development:** Antigravity defines the contract (types/interfaces/specs) before Codex scaffolds or Claude writes core logic.
3. **Claude Review Mandate:** High-complexity code drafted by Codex must be reviewed by Claude before being merged into `main`.
4. **Isolated Ports:** Each worktree must configure unique local ports (e.g. Antigravity: `3000`, Claude: `3001`, Codex: `3002`) to allow simultaneous test execution without port-binding conflicts.
