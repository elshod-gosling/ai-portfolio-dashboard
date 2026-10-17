# launch-agents.ps1
# Opens dedicated PowerShell sessions or tabs for each agent in its own isolated worktree.

[CmdletBinding()]
param(
    [switch]$ClaudeOnly,
    [switch]$CodexOnly,
    [switch]$AntigravityOnly
)

$repoRoot = (git rev-parse --show-toplevel 2>$null)
if (-not $repoRoot) {
    Write-Error "Not inside a git repository!"
}

Set-Location $repoRoot

function Start-AgentTerminal {
    param(
        [string]$AgentName,
        [string]$WorktreeDir,
        [string]$CommandToRun,
        [string]$Color
    )

    $fullPath = Resolve-Path $WorktreeDir -ErrorAction SilentlyContinue
    if (-not $fullPath) {
        Write-Warning "Worktree directory '$WorktreeDir' does not exist yet. Please run ./scripts/setup-worktrees.ps1 first."
        return
    }

    $title = "Agent: $AgentName ($WorktreeDir)"
    $cmd = "Set-Location '$fullPath'; Write-Host '=========================================' -ForegroundColor $Color; Write-Host ' Welcome to $AgentName Worktree Session' -ForegroundColor $Color; Write-Host ' Directory: $fullPath' -ForegroundColor $Color; Write-Host '=========================================' -ForegroundColor $Color; $CommandToRun"

    Write-Host "[*] Launching terminal for $AgentName..." -ForegroundColor $Color
    Start-Process powershell.exe -ArgumentList "-NoExit", "-Command", $cmd
}

if ($ClaudeOnly) {
    Start-AgentTerminal -AgentName "Claude Code" -WorktreeDir ".worktrees/claude" -CommandToRun "claude" -Color "Magenta"
    return
}

if ($CodexOnly) {
    Start-AgentTerminal -AgentName "OpenAI Codex" -WorktreeDir ".worktrees/codex" -CommandToRun "Write-Host 'Ready for Codex CLI / Copilot Agent...'" -Color "Green"
    return
}

if ($AntigravityOnly) {
    Start-AgentTerminal -AgentName "Antigravity Worktree" -WorktreeDir ".worktrees/antigravity" -CommandToRun "Write-Host 'Antigravity workspace ready...'" -Color "Cyan"
    return
}

# Default: Launch both Claude and Codex terminal windows
Start-AgentTerminal -AgentName "Claude Code" -WorktreeDir ".worktrees/claude" -CommandToRun "claude" -Color "Magenta"
Start-AgentTerminal -AgentName "OpenAI Codex" -WorktreeDir ".worktrees/codex" -CommandToRun "Write-Host 'Ready for Codex CLI / Copilot Agent...'" -Color "Green"

Write-Host "`n[OK] Spawned agent sessions. Antigravity can continue coordinating in the root/IDE." -ForegroundColor Cyan
