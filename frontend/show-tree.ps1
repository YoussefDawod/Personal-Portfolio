$excludeDirs = @('node_modules', 'dist', '.git', '.vscode', '.idea')
$includeFiles = @('.gitignore', 'eslint.config.js', 'index.html', 'package.json', 'package-lock.json', 'README.md', 'show-tree.ps1', 'vite.config.js')
$includeDirs = @('public', 'src', 'assets', 'icons', 'images', 'components', 'pages', 'styles')

function Show-Tree {
    param (
        [string]$path,
        [int]$level = 0
    )

    $indent = " " * ($level * 2)
    $items = Get-ChildItem -Path $path

    foreach ($item in $items) {
        if ($item.PSIsContainer) {
            if ($excludeDirs -notcontains $item.Name) {
                Write-Output "$indent+---$($item.Name)"
                Show-Tree -path $item.FullName -level ($level + 1)
            }
        }
        else {
            if ($includeFiles -contains $item.Name -or $includeDirs -contains (Split-Path $path -Leaf)) {
                Write-Output "$indent|   $($item.Name)"
            }
        }
    }
}

Show-Tree -path .