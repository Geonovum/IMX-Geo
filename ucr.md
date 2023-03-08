# Requirements

## Product model requirements

### User-friendliness
The product model should be user-friendly, i.e.: 
- Simplified structures for common use cases, like the `Address` class 
- Names that correspond with common language, e.g. `straatnaam` instead of `Openbare ruimte naam`. 

### Cherry-picking
It should be possible to leave out properties in a product model, that are present in the source model but not of interest to the users. 

## Semantic model requirements

### Aid data discovery
The semantic model should be user-friendly as well. In this case that means developers should be able to read the model easily to discover the paths leading to the information they want. 

### Coherence between objects from different source models
The SAM information model should add useful relationships that exist inherently between objects, but are not currently defined in the source models. 

Background: because the source models were originally defined as silos, relationships between objects from different source registries are mostly unavailable right now. We have a requirement to add those relationships that are of value to users (definitely not all). 

### Coherence in extra layer
The added relationships between SAM and source models cannot change the source object types as this goes against maintenance and ownership principles. The additional relationships must be added in a separate semantic layer. 

### Link with source models
The SAM information model should not be completely independent / a completely new model, but should be linked to the source models.

The SAM model will re-use classes and properties from source models, and derive information from source models. SAM classes and properties should contain information about the source they depend on. 

### Machine readability
The links between objects/properties in the SAM model and objects/properties in source models should be machine readable. This opens up possibilities to automate things for the knowledge graph and the orchestration. 

### Maintainability
It should be possible to keep the SAM information model in sync / up to date with the source models without too much effort / impact. 

When changes in source models are published and implemented in data sources, the SAM information model should be updated to take those changes into account. 
