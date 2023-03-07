# Introduction

This document defines the "semantic model" (SAM): an overarching information model describing the relationships between object types from heterogeneous governmental data sources ("Base registries"). The goal is to get the data from the source registries via orchestration mechanisms on demand, using product API interfaces that cross source data boundaries. 

The semantic model should: 
- **Guide the way for people**: people who design product APIs or other products based on the orchestration endpoint should be able to read the semantic model to find out which objects are related to which, and how to navigate the paths through the data to assemble the data they want. 
- **Inform machines**: the semantic model should inform the orchestration engine of the relationships between objects and of the navigation paths that exist through the data. E.g., the semantic model can keep the orkestration engine up to date if any changes in the underlying data sources occur. 

The data sources are: 
- Addresses and buildings (BAG) 
- Large scale topography (BGT)
- Small scale topography (BRT)
- Cadastral registry: only the Cadastral Map (BRK, only DKK)
- Underground infrastructure networks (IMKL)
- Spatial plans (IMRO)
- Administrative boundaries (DisGeo Bestuurlijke gebieden)
- Underground: geology + soil (BRO)
