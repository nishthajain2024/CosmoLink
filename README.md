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

