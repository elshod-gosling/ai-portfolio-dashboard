# sync-worktree.ps1
# Syncs an agent worktree with the latest commits from the main branch.

[CmdletBinding()]
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("claude", "codex", "antigravity")]
    [string]$Agent
)

$repoRoot = (git rev-parse --show-toplevel 2>$null)
if (-not $repoRoot) {
    Write-Error "Not inside a git repository!"
}

$worktreeDir = Join-Path $repoRoot ".worktrees/$Agent"
if (-not (Test-Path $worktreeDir)) {
    Write-Error "Worktree directory '$worktreeDir' not found! Run setup-worktrees.ps1 first."
}

Write-Host "Syncing worktree for $Agent with main branch..." -ForegroundColor Cyan

Push-Location $worktreeDir
try {
    git fetch origin 2>$null
    git rebase main
    Write-Host "[OK] Successfully rebased $Agent onto latest main." -ForegroundColor Green
} catch {
    Write-Error "Failed to rebase $Agent. Please resolve any conflicts manually."
} finally {
    Pop-Location
}
