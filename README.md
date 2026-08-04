# CosmoLink

CosmoLink is a web application that helps astronomers visualize galaxy distributions and discover cosmic filament structures using the Minimum Spanning Tree (MST) algorithm.

## 🏗️ System Architecture

![CosmoLink Architecture Diagram](./architecture/CosmoLink_Architecture_Diagram.png)

### Key Architecture Components:
- **Frontend**: HTML / CSS / JavaScript Web Application featuring dataset upload, interactive dashboards, and result visualization.
- **Backend**: FastAPI REST API handling user authentication, dataset validation, business logic, and dataset imports.
- **Mistree Engine**: Core processing module executing Minimum Spanning Tree algorithms, filament detection, and graph calculations.
- **Database & Cache**: SQLite database for persistent storage (Users, Datasets, Reports) and Redis cache for session data and fast retrieval of recent analysis.
- **External Integration**: Support for astronomical data sources such as SDSS and DESI.
- **Infrastructure**: Containerized with Docker & Nginx for smooth deployment on local or cloud hosting environments.

## 💻 Frontend Application Screens

The web application (`/app`) features 6 modern, dark cosmic-themed interactive screens with glassmorphism design and live canvas MST graph simulations:

1. **📊 Dashboard (`app/index.html`)**: Overview of active datasets, completed analyses, detected filaments, and interactive galaxy MST canvas simulation.
2. **📁 Upload Dataset (`app/upload.html`)**: Drag & drop CSV/FITS dataset loader, column schema mapper, and external archive importers (SDSS, DESI, Gaia).
3. **⚡ MST Engine (`app/analysis.html`)**: Algorithm parameter sliders ($d_{\text{cut}}$, smoothing factor, distance metrics) and pipeline progress timeline.
4. **🔭 Graph Visualizer (`app/results.html`)**: High-res interactive canvas visualization of minimum spanning tree galaxy filaments with zoom/pan and redshift filters.
5. **📜 History & Reports (`app/history.html`)**: Log of past analysis runs with PDF report export, CSV filament downloads, and JSON graph exports.
6. **⚙️ Settings (`app/settings.html`)**: Researcher profile management, SDSS/DESI API key configuration, and hardware acceleration options.
