# merge-agent.ps1
# Safely merges an agent's worktree branch into the canonical main branch.

[CmdletBinding()]
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("claude", "codex", "antigravity")]
    [string]$Agent,

    [string]$Message = ""
)

$repoRoot = (git rev-parse --show-toplevel 2>$null)
if (-not $repoRoot) {
    Write-Error "Not inside a git repository!"
}

Set-Location $repoRoot

$branch = "agent/$Agent"

if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = "feat: integrate verified updates from $Agent into main"
}

Write-Host "Merging $branch into main..." -ForegroundColor Cyan

# Ensure main is active and clean
git checkout main
$status = (git status --porcelain)
if ($status) {
    Write-Error "Working directory on main has uncommitted changes! Commit or stash them first."
}

# Perform merge with explicit commit
try {
    git merge $branch --no-ff -m "$Message"
    Write-Host "[✓] Successfully merged $branch into main!" -ForegroundColor Green
    Write-Host "Updating worktree status on TASK_BOARD.md..." -ForegroundColor DarkGray
} catch {
    Write-Error "Merge conflict encountered. Please inspect and resolve conflicts manually."
}
