# CosmoLink — UI Design Documentation

This folder tracks the **iterative Figma design process** for all 6 CosmoLink screens.

## Folder Structure

```
docs/design/
├── figma-v1-original/     ← First Figma prototype screens
│   ├── Dashboard.png
│   ├── Upload Dataset.png
│   ├── MST Engine.png
│   ├── Graph Visualizer.png
│   ├── History and Reports.png
│   └── Settings.png
│
└── figma-v2-updated/      ← Improved and refined mockups
    ├── Dashboard-v2.jpg
    ├── Upload Dataset-v2.jpg
    ├── MST Engine-v2.jpg
    ├── Graph Visualizer-v2.jpg
    ├── History and Reports-v2.jpg
    └── Settings-v2.jpg
```

## Design System Tokens

| Token | Value | Usage |
|---|---|---|
| Background | `#090d16` | Page canvas |
| Primary Accent | `#38bdf8` cyan | CTAs, active nav |
| Secondary | `#818cf8` purple | Secondary buttons |
| Tertiary | `#c084fc` pink | Gradient endpoint |
| Success | `#34d399` green | Status badges |
| Card Style | glassmorphism blur(16px) | All cards |
| Heading Font | Outfit 700 | Page/card titles |
| Body Font | Inter 400-600 | Labels, body |

## What Changed v1 -> v2

| Screen | v1 | v2 Improvements |
|---|---|---|
| Dashboard | Sidebar nav, network KPIs | Top nav, astronomy KPIs, MST canvas preview |
| Upload Dataset | Drag-drop + data table | Format guide card + file status feedback |
| MST Engine | Pipeline steps + sliders | Segmented algorithm toggle, 2D/3D, live preview |
| Graph Visualizer | Full-screen, minimal sidebar | 70/30 split, stats + controls + export sidebar |
| History & Reports | Dense table | Table-as-cards with search/filter bar |
| Settings | API keys + hardware focus | 4 grouped cards: Appearance, Data, Compute, Account |
