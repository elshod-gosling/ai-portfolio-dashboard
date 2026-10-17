# setup-worktrees.ps1
# Automates the creation and setup of Git Worktrees for Antigravity, Claude, and Codex.

[CmdletBinding()]
param(
    [string]$BaseBranch = "main"
)

$ErrorActionPreference = "Stop"

$repoRoot = (git rev-parse --show-toplevel 2>$null)
if (-not $repoRoot) {
    Write-Error "Not inside a git repository! Please run this script from inside the repository."
}

Set-Location $repoRoot

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  AI Triad Git Worktree Setup (Antigravity + Claude + Codex)" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Verify that the repository has at least one commit
$commitCount = (git rev-list --count HEAD 2>$null)
if (-not $commitCount -or [int]$commitCount -eq 0) {
    Write-Host "[*] No initial commit found. Creating initial commit on $BaseBranch..." -ForegroundColor Yellow
    git add .
    git commit -m "chore: initialize repository and multi-agent coordination system"
}

# 2. Define the worktree matrix
$agents = @(
    @{ Name = "antigravity"; Branch = "agent/antigravity"; Dir = ".worktrees/antigravity"; Port = 3001 },
    @{ Name = "claude";      Branch = "agent/claude";      Dir = ".worktrees/claude";      Port = 3002 },
    @{ Name = "codex";       Branch = "agent/codex";       Dir = ".worktrees/codex";       Port = 3003 }
)

# 3. Create .worktrees folder if missing
if (-not (Test-Path ".worktrees")) {
    New-Item -ItemType Directory -Path ".worktrees" -Force | Out-Null
}

# 4. Provision each agent's branch and worktree
foreach ($agent in $agents) {
    $dir = $agent.Dir
    $branch = $agent.Branch
    $name = $agent.Name

    Write-Host "`n---> Configuring Worktree for: $name" -ForegroundColor Green
    Write-Host "     Target Directory: $dir"
    Write-Host "     Target Branch:    $branch"

    # Check if branch exists
    $branchExists = (git branch --list $branch)
    if (-not $branchExists) {
        Write-Host "     Creating branch '$branch' from '$BaseBranch'..." -ForegroundColor DarkGray
        git branch $branch $BaseBranch
    }

    # Check if worktree directory already exists
    if (Test-Path $dir) {
        Write-Host "     [✓] Worktree directory already exists." -ForegroundColor Yellow
    } else {
        Write-Host "     Creating git worktree at '$dir'..." -ForegroundColor Cyan
        git worktree add $dir $branch
        Write-Host "     [✓] Successfully provisioned worktree." -ForegroundColor Green
    }

    # Generate a local .env.local with isolated port
    $envPath = Join-Path $dir ".env.local"
    if (-not (Test-Path $envPath)) {
        "PORT=$($agent.Port)`nAGENT_NAME=$name`nWORKTREE_ROLE=$($name.ToUpper())" | Out-File -FilePath $envPath -Encoding utf8
        Write-Host "     [✓] Configured local dev port ($($agent.Port)) in $envPath" -ForegroundColor DarkGray
    }
}

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "  Worktree Setup Complete! Current Git Worktrees:" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
git worktree list

Write-Host "`nNext steps to launch agents:" -ForegroundColor Yellow
Write-Host "  - Antigravity: Open repo root or .worktrees/antigravity in Antigravity"
Write-Host "  - Claude:      cd .worktrees/claude && claude"
Write-Host "  - Codex:       cd .worktrees/codex && codex"
Write-Host "  - Or run:      powershell -ExecutionPolicy Bypass -File ./scripts/launch-agents.ps1"
