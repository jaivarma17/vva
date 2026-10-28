$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$decks = @(
  @{ File = "MOTHER ALL BUILT ARCHITECTURE.pptx"; Slug = "built-architecture"; Discipline = "architecture" },
  @{ File = "MOTHER ALL CONCEPTS ARCHITECTURE.pptx"; Slug = "concept-architecture"; Discipline = "architecture" },
  @{ File = "MOTHER only BUILT INTERIORS.pptx"; Slug = "built-interiors"; Discipline = "interiorDesign" },
  @{ File = "MOTHER only BUILT LANDSCAPES.pptx"; Slug = "built-landscapes"; Discipline = "landscape" },
  @{ File = "MOTHER only CONCEPT MASTERPLANS.pptx"; Slug = "concept-masterplans"; Discipline = "masterPlan" },
  @{ File = "MOTHER only CONCEPTS INTERIORS.pptx"; Slug = "concept-interiors"; Discipline = "interiorDesign" }
)

foreach ($deck in $decks) {
  if (-not (Test-Path (Join-Path $repoRoot $deck.File))) {
    throw "Required PowerPoint deck not found: $($deck.File)"
  }
}

$metadataJson = & node "scripts/project-metadata.js"
if ($LASTEXITCODE -ne 0) { throw "Could not read the project metadata." }
$projectMetadata = $metadataJson | ConvertFrom-Json

$projectList = [System.Collections.Generic.List[object]]::new()
foreach ($project in $projectMetadata.projects) { $projectList.Add($project) }
foreach ($project in $projectMetadata.data.additions) {
  if (-not ($projectList | Where-Object { $_.id -eq $project.id })) { $projectList.Add($project) }
}

$e59 = [pscustomobject]@{
  id = "e-59-greenwood"
  title = "E-59, Greenwood"
  location = "Gurugram"
  category = "residential"
  status = "built"
  services = [pscustomobject]@{
    architecture = $true
    interiorDesign = $false
    landscape = $false
    designBuild = $false
    masterPlan = $false
  }
  facts = @()
  short = ""
  lede = ""
  copy = @()
  gallery = @()
}
$projectList.Add($e59)

$aliases = @{
  "e59greenwoodgurugram" = "e-59-greenwood"
  "thegreensclubansalsgolfacademy" = "golf-academy-ansals"
  "greensclubansals" = "golf-academy-ansals"
  "27holegolfcoursemasterplanbangaluru" = "golf-course-masterplans"
  "9holegolfcourseresortmasterplansjanjera" = "golf-course-masterplans"
  "golfcoursemasterplankarnataka" = "golf-course-masterplans"
  "golfcoursemasterplansmaharashtraandbangaluru" = "golf-course-masterplans"
  "bliss400acregolfbasedintegratedwellnessretreatalwar" = "wellness-retreat-alwar"
  "mewatwellnessretreatalwar" = "mewat-wellness-retreat"
  "harvestgoldfarmbrijwasannewdelhi" = "harvest-gold-farm"
  "stitchingfactorypondicherrylouisvuitton" = "lv-stitching-unit"
  "louisvuittonmuseumfoundationparis" = "lv-museum-paris"
  "conservatory" = "conservatory-dlf"
  "campusinteriornamtech" = "namtech-campus-interiors"
  "skill40entrancecampusinteriors" = "namtech-campus-interiors"
  "starterhutgarryplayergolfcoursedlfgurugrambridgesbulkhead" = "bridges-bulkhead-garry-player-dlf"
  "bridgesbulkheadgarryplayergolfcoursedlfgurugram" = "bridges-bulkhead-garry-player-dlf"
  "vieweternesseclinic" = "eternesse-wellness-clinic-hyderabad"
  "frontelevationmeditationcentre" = "meditation-centre-maunam"
  "minalmodiresidencemandivillagenewdelhi" = "minal-modi-residence"
  "villrefurbishmentvillasdlfii" = "dlf-villa-refurbishment"
  "villa refurbishment" = "dlf-villa-refurbishment"
}

$fallbackSlides = @{
  "concept-architecture:28" = "golf-course-masterplans"
  "built-interiors:72" = "nirula-swatches-barista"
  "built-interiors:73" = "nirula-swatches-barista"
  "built-interiors:74" = "nirula-swatches-barista"
  "built-interiors:152" = "t-house-pune"
  "built-interiors:153" = "t-house-pune"
  "built-interiors:154" = "t-house-pune"
  "concept-masterplans:12" = "golf-course-masterplans"
  "concept-masterplans:13" = "golf-course-masterplans"
  "concept-interiors:22" = "eternesse-wellness-clinic-hyderabad"
  "concept-interiors:25" = "eternesse-wellness-clinic-hyderabad"
}

$stopWords = @("the", "and", "of", "for", "from", "with", "by", "at", "in", "on", "to", "a", "an", "project", "plan", "master", "built", "proposed", "residence", "interiors", "interior", "architecture", "architectural", "development", "resort", "based", "golf", "course", "unit", "offices", "corporate", "hotel", "retreat", "wellness", "spa", "centre", "center", "village", "community", "farm", "villa", "villas", "house", "homes", "design", "views", "view", "new", "only")

function Normalize-Text([string]$text) {
  $normalized = $text.Normalize([Text.NormalizationForm]::FormD)
  $normalized = [regex]::Replace($normalized, "\p{Mn}", "")
  return ([regex]::Replace($normalized.ToLowerInvariant(), "[^a-z0-9]", ""))
}

function Get-Tokens([string]$text) {
  $normalized = $text.ToLowerInvariant().Replace("&", " and ")
  $tokens = [regex]::Matches($normalized, "[a-z0-9]+") | ForEach-Object { $_.Value }
  return @($tokens | Where-Object { $_.Length -gt 1 -and $stopWords -notcontains $_ } | Select-Object -Unique)
}

function Find-ProjectId([string]$label) {
  $normalizedLabel = Normalize-Text $label
  if ($normalizedLabel -eq "louisvuitton") { return "lv-stitching-unit" }
  $matchingAliases = @($aliases.Keys | Where-Object { $normalizedLabel.Contains($_) } | Sort-Object Length -Descending)
  if ($matchingAliases.Count -gt 0) { return $aliases[$matchingAliases[0]] }

  $labelTokens = @(Get-Tokens $label)
  $ranked = foreach ($project in $projectList) {
    $projectTokens = @(Get-Tokens ($project.id.Replace("-", " ") + " " + $project.title))
    $overlap = @($projectTokens | Where-Object { $labelTokens -contains $_ }).Count
    if ($overlap -eq 0) { continue }
    $score = $overlap / [math]::Sqrt([math]::Max(1, $projectTokens.Count * $labelTokens.Count))
    [pscustomobject]@{ Id = $project.id; Score = $score; Overlap = $overlap }
  }
  $ranked = @($ranked | Sort-Object Score -Descending)
  if ($ranked.Count -eq 0 -or $ranked[0].Score -lt 0.30) { return $null }
  if ($ranked.Count -gt 1 -and ($ranked[0].Score - $ranked[1].Score) -lt 0.06) { return $null }
  return $ranked[0].Id
}

Add-Type -AssemblyName System.Drawing
$outputRoot = Join-Path $repoRoot "assets\img\projects\ppt-slides"
$temporaryImage = Join-Path $env:TEMP "vva-ppt-slide-export.jpg"
$imageEncoder = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$imageParameters = New-Object Drawing.Imaging.EncoderParameters(1)
$imageParameters.Param[0] = New-Object Drawing.Imaging.EncoderParameter([Drawing.Imaging.Encoder]::Quality, [long]86)
$allOverrides = [ordered]@{}
$projectImages = @{}
$unmatched = [System.Collections.Generic.List[string]]::new()
$powerpoint = New-Object -ComObject PowerPoint.Application

try {
  foreach ($deck in $decks) {
    $presentationPath = Join-Path $repoRoot $deck.File
    $presentation = $powerpoint.Presentations.Open($presentationPath, $true, $false, $false)
    $slideCount = $presentation.Slides.Count
    $currentProjectId = $null
    $exported = 0

    try {
      for ($slideNumber = 1; $slideNumber -le $slideCount; $slideNumber++) {
        if ($slideNumber -eq 1) { continue }

        $slide = $presentation.Slides.Item($slideNumber)
        $footerText = [System.Collections.Generic.List[string]]::new()
        $allText = [System.Collections.Generic.List[string]]::new()
        foreach ($shape in $slide.Shapes) {
          if ($shape.HasTextFrame -and $shape.TextFrame.HasText) {
            $text = $shape.TextFrame.TextRange.Text.Trim()
            if ($text) {
              $allText.Add($text)
              if ($shape.Top -gt ($presentation.PageSetup.SlideHeight * 0.78)) { $footerText.Add($text) }
            }
          }
        }

        $label = $footerText -join " | "
        $projectId = if ($label) { Find-ProjectId $label } else { $null }
        if (-not $projectId -and $allText.Count -gt 0) {
          $projectId = Find-ProjectId ($allText -join " | ")
        }
        if ($projectId) {
          $currentProjectId = $projectId
        } else {
          $fallbackKey = "$($deck.Slug):$slideNumber"
          if ($fallbackSlides.ContainsKey($fallbackKey)) {
            $projectId = $fallbackSlides[$fallbackKey]
            $currentProjectId = $projectId
          } elseif (-not $label -and $currentProjectId) {
            $projectId = $currentProjectId
          } elseif ($label) {
            $unmatched.Add("$($deck.Slug) slide $slideNumber [$label]")
          }
        }

        if (-not $projectId) { continue }

        $slide.Export($temporaryImage, "JPG", 1600, 900)
        $sourceImage = [Drawing.Bitmap]::FromFile($temporaryImage)
        try {
          $sourceHeight = [int][math]::Floor($sourceImage.Height * 0.86)
          $sampledContent = 0
          for ($y = 0; $y -lt $sourceHeight; $y += 8) {
            for ($x = 0; $x -lt $sourceImage.Width; $x += 8) {
              $pixel = $sourceImage.GetPixel($x, $y)
              if ($pixel.R -lt 247 -or $pixel.G -lt 247 -or $pixel.B -lt 247) { $sampledContent++ }
            }
          }
          if ($sampledContent -lt 80) { continue }

          $projectDirectory = Join-Path $outputRoot $projectId
          New-Item -ItemType Directory -Path $projectDirectory -Force | Out-Null
          $filename = "$($deck.Slug)-$("{0:D3}" -f $slideNumber).jpg"
          $targetImage = Join-Path $projectDirectory $filename
          $destination = New-Object Drawing.Bitmap(1400, [int][math]::Round(1400 * $sourceHeight / $sourceImage.Width))
          try {
            $graphics = [Drawing.Graphics]::FromImage($destination)
            try {
              $graphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
              $graphics.DrawImage($sourceImage, [Drawing.Rectangle]::new(0, 0, $destination.Width, $destination.Height), [Drawing.Rectangle]::new(0, 0, $sourceImage.Width, $sourceHeight), [Drawing.GraphicsUnit]::Pixel)
              $destination.Save($targetImage, $imageEncoder, $imageParameters)
            } finally {
              $graphics.Dispose()
            }
          } finally {
            $destination.Dispose()
          }

          if (-not $projectImages.ContainsKey($projectId)) {
            $projectImages[$projectId] = @{ all = [System.Collections.Generic.List[string]]::new(); disciplines = @{} }
          }
          $relativePath = "assets/img/projects/ppt-slides/$projectId/$filename"
          $projectImages[$projectId].all.Add($relativePath)
          if (-not $projectImages[$projectId].disciplines.ContainsKey($deck.Discipline)) {
            $projectImages[$projectId].disciplines[$deck.Discipline] = [System.Collections.Generic.List[string]]::new()
          }
          $projectImages[$projectId].disciplines[$deck.Discipline].Add($relativePath)
          $exported++
        } finally {
          $sourceImage.Dispose()
        }
      }
    } finally {
      $presentation.Close()
    }

    Write-Output "$($deck.File): exported $exported slide images"
  }
} finally {
  $powerpoint.Quit()
  $imageParameters.Dispose()
}

if ($unmatched.Count -gt 0) {
  Write-Warning "Slides with labels that did not match a project:"
  $unmatched | ForEach-Object { Write-Warning $_ }
}

$serviceNames = @("architecture", "interiorDesign", "landscape", "masterPlan")
foreach ($projectId in $projectImages.Keys) {
  $images = $projectImages[$projectId]
  $disciplines = [ordered]@{}
  foreach ($service in $serviceNames) {
    if ($images.disciplines.ContainsKey($service)) {
      $disciplines[$service] = @($images.disciplines[$service])
    }
  }
  $allOverrides[$projectId] = [ordered]@{
    image = $images.all[0]
    gallery = @($images.all | Select-Object -Skip 1)
    disciplines = $disciplines
  }
}

$order = @($projectMetadata.data.order)
if ($order -notcontains $e59.id) { $order += $e59.id }
$heroIds = @($projectMetadata.data.homeHeroIds)
if ($heroIds -notcontains $e59.id) { $heroIds += $e59.id }
$additions = @($projectMetadata.data.additions | Where-Object { $_.id -ne $e59.id }) + @($e59)
$newData = [ordered]@{
  order = $order
  homeHeroIds = $heroIds
  additions = $additions
  overrides = $allOverrides
}
$json = $newData | ConvertTo-Json -Depth 100 -Compress
$dataPath = Join-Path $repoRoot "scripts\ppt-project-data.js"
Set-Content -Path $dataPath -Value "window.pptProjectData = $json;" -Encoding UTF8

$projectImages.Keys | Sort-Object | ForEach-Object {
  $count = $projectImages[$_].all.Count
  Write-Output "$_`: $count slides"
}
Write-Output "Updated $dataPath"
