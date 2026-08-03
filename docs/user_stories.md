# User Stories

This document summarizes the user stories created for the CosmoLink project.

All user stories have been created as GitHub Issues and managed using GitHub Projects.
# User Stories

> **Note:** These user stories have been migrated to GitHub Issues for project tracking. GitHub Issues are the primary source for managing and tracking project progress.

---

# Epic 1: Dataset Management

## User Story 1: Upload Galaxy Dataset

**As an** astronomy researcher,  
**I want to** upload a galaxy dataset,  
**So that** I can analyze cosmic filament structures.

### Acceptance Criteria

- Users can upload datasets in CSV format.
- System validates supported file types.
- Upload progress is displayed.
- Uploaded dataset is stored temporarily for analysis.

---

## User Story 2: Validate Dataset Format

**As an** astronomy researcher,  
**I want the system to** validate uploaded datasets,  
**So that** I can avoid processing invalid files.

### Acceptance Criteria

- System checks file format.
- Required columns are validated.
- Invalid datasets display meaningful error messages.
- Users are prompted to upload a valid dataset.

---

## User Story 3: Preview Uploaded Dataset

**As a** university student,  
**I want to** preview the uploaded dataset,  
**So that** I can verify the data before analysis.

### Acceptance Criteria

- First few rows of the dataset are displayed.
- Column names are visible.
- Users can confirm or cancel the upload.
- Preview loads before analysis begins.

---

## User Story 4: Filter Galaxy Dataset

**As an** astronomy researcher,  
**I want to** filter galaxies using selected criteria,  
**So that** I can analyze specific regions of interest.

### Acceptance Criteria

- Users can filter by galaxy properties.
- Filters update the dataset preview.
- Multiple filters can be applied simultaneously.
- Filters can be reset.

---

## User Story 5: Search for Galaxy

**As a** university student,  
**I want to** search for a galaxy by name or ID,  
**So that** I can quickly locate it.

### Acceptance Criteria

- Search supports galaxy ID or name.
- Matching galaxies are highlighted.
- No-results message appears if nothing is found.

---

# Epic 2: MST Analysis

## User Story 6: Generate Minimum Spanning Tree

**As an** astronomy researcher,  
**I want to** generate a Minimum Spanning Tree from galaxy data,  
**So that** I can identify cosmic filament structures.

### Acceptance Criteria

- System processes uploaded datasets.
- MiSTree generates the MST successfully.
- Results are displayed after completion.
- Errors are reported if processing fails.

---

## User Story 7: Configure MST Parameters

**As an** astronomy researcher,  
**I want to** modify analysis parameters,  
**So that** I can optimize filament detection for different datasets.

### Acceptance Criteria

- Users can modify supported parameters.
- Default values are available.
- Selected parameters are used during analysis.

---

## User Story 8: Show Analysis Progress

**As an** astronomy researcher,  
**I want to** see analysis progress,  
**So that** I know how long processing will take.

### Acceptance Criteria

- Progress bar updates in real time.
- Percentage completion is displayed.
- Completion notification is shown.

---

## User Story 9: Compare Analysis Results

**As an** astronomy researcher,  
**I want to** compare results from multiple datasets,  
**So that** I can identify structural differences.

### Acceptance Criteria

- Users can select multiple completed analyses.
- Results are displayed side by side.
- Statistical differences are highlighted.

---

# Epic 3: Visualization & Results

## User Story 10: Display Filament Visualization

**As an** astronomy researcher,  
**I want to** visualize detected cosmic filaments,  
**So that** I can interpret large-scale galaxy structures.

### Acceptance Criteria

- Filaments are displayed clearly.
- MST edges are visible.
- Visualization updates after analysis.

---

## User Story 11: Interactive Visualization Controls

**As a** university student,  
**I want to** zoom and pan the visualization,  
**So that** I can closely examine filament structures.

### Acceptance Criteria

- Zoom controls are available.
- Users can pan the graph.
- Reset view option is provided.

---

## User Story 12: Highlight Galaxy Clusters

**As an** astronomy researcher,  
**I want** galaxy clusters to be highlighted,  
**So that** I can study their relationship with cosmic filaments.

### Acceptance Criteria

- Galaxy clusters are visually distinguished.
- Cluster highlighting can be toggled.

---

## User Story 13: Display Galaxy Details

**As a** university student,  
**I want to** click on a galaxy and view its details,  
**So that** I can better understand the dataset.

### Acceptance Criteria

- Clicking a galaxy opens an information panel.
- Galaxy properties are displayed.
- Panel can be closed.

---

## User Story 14: View Statistical Summary

**As a** university student,  
**I want to** view summary statistics,  
**So that** I can understand the characteristics of the dataset.

### Acceptance Criteria

- Total galaxies are displayed.
- Number of filaments is shown.
- Average branch length is calculated.

---

## User Story 15: Export Analysis Results

**As an** astronomy researcher,  
**I want to** export analysis results,  
**So that** I can use them in research publications.

### Acceptance Criteria

- Results can be exported as CSV.
- Export completes successfully.
- Download starts automatically.

---

## User Story 16: Save Filament Image

**As a** cosmology educator,  
**I want to** save visualization images,  
**So that** I can include them in lectures.

### Acceptance Criteria

- Visualization can be saved as PNG.
- High-resolution export is supported.

---

## User Story 17: Generate Analysis Report

**As an** astronomy researcher,  
**I want the system to** generate a report,  
**So that** I can summarize my findings.

### Acceptance Criteria

- Report contains statistics and images.
- Report is downloadable as PDF.

---

# Epic 4: User Experience & Learning

## User Story 18: View Saved Analyses

**As an** astronomy researcher,  
**I want to** access previous analyses,  
**So that** I can continue my work later.

### Acceptance Criteria

- Saved analyses are listed.
- Users can reopen previous results.

---

## User Story 19: Explain MST Concepts

**As a** cosmology educator,  
**I want** explanations of MST concepts,  
**So that** I can teach students effectively.

### Acceptance Criteria

- Educational explanations are available.
- Concepts are displayed with diagrams.

---

## User Story 20: Guided Learning Mode

**As a** university student,  
**I want** a guided tutorial,  
**So that** I can learn how cosmic filament detection works.

### Acceptance Criteria

- Step-by-step guidance is provided.
- Users can skip the tutorial.

---

## User Story 21: Load Sample Dataset

**As a** university student,  
**I want to** load a sample dataset,  
**So that** I can practice using the application.

### Acceptance Criteria

- Sample dataset loads with one click.
- Users can immediately begin analysis.

---

## User Story 22: Display Error Messages

**As a** university student,  
**I want** clear error messages,  
**So that** I know how to correct mistakes.

### Acceptance Criteria

- Errors describe the problem.
- Suggestions for fixing the issue are provided.

---

## User Story 23: Secure User Login

**As an** astronomy researcher,  
**I want to** securely log in,  
**So that** my projects and datasets remain protected.

### Acceptance Criteria

- Users can log in with valid credentials.
- Invalid logins display appropriate error messages.
- Sessions remain secure.

---

## User Story 24: Share Analysis Results

**As a** cosmology educator,  
**I want to** share visualizations and reports,  
**So that** students can access learning materials.

### Acceptance Criteria

- Reports and images can be shared.
- Shareable links or downloadable files are generated.

---

## User Story 25: Access Help Guide

**As a** university student,  
**I want access to** documentation and help resources,  
**So that** I can use the software without difficulty.

### Acceptance Criteria

- Help documentation is searchable.
- FAQs are available.
- Contact/support information is provided.
