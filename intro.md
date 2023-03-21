# Introduction

This document defines the Information model for cross-domain data queries - Geospatial (IMX-Geo): an overarching information model describing the relationships between object types from heterogeneous governmental data sources ("Base registries") for geospatial data. The goal is to support users in asking cross-registry questions. The data is served from the source registries on demand via orchestration mechanisms, using product API interfaces that cross source data boundaries. 

The cross-domain model should: 
- **Guide the way for people**: people who design product APIs or other products based on the orchestration endpoint should be able to read IMX-Geo to understand what data is available, which objects are related to which, and how to navigate the paths through the data to assemble the data they want. 
- **Inform machines**: the orchestration engine should be able to read IMX-Geo to understand the relationships between objects and the navigation paths that exist through the data. E.g., IMX-Geo can keep the orchestration engine up to date if any changes in the underlying data sources occur. 

The data sources are: 
- Addresses and buildings (BAG) 
- Large scale topography (BGT)
- Small scale topography (BRT)
- Cadastral registry: only the Cadastral Map (BRK, only DKK)
- Underground infrastructure networks (IMKL)
- Spatial plans (IMRO)
- Administrative boundaries (DisGeo Bestuurlijke gebieden)
- Underground: geology + soil (BRO)
