# Introduction

This document defines the "samenhangend model" (SAM): an overarching information model describing the coherence, i.e. the relationships between object types from heterogeneous data sources which are published together in a single orchestrated dataset. 

The data sources are 
- Addresses and buildings (BAG) 
- Large scale topography (BGT)
- Small scale topography (BRT)
- Cadastral registry: only the Cadastral Map (BRK, only DKK)
- Underground: geology + soil (BRO)
- Underground infrastructure networks (IMKL)
- Administrative boundaries (DisGeo Bestuurlijke gebieden)
- Spatial plans (IMRO)

## Overarching coherent model: requirements

### User-friendliness
The SAM information model should be user-friendly, i.e.: 
- Simplified structures for common use cases, like the `Address` class 
- Names that correspond with common language (colloquial names)

### Coherence between objects from different source models
The SAM information model should add useful relationships that exist inherently between objects, which are not currently defined in the source models. 

Background: because the source models were originally defined as silos, relationships between objects from different source registries are mostly unavailable right now. We have a requirement to add those relationships that are of value to users (definitely not all). 

### Cherry-picking
It should be possible to leave out properties in the SAM information model, that are present in the source model but not of interest to the users. 

### Link with source models
The SAM information model should not be completely independent / a completely new model, but should be linked to the source models.

The SAM model will re-use classes and properties from source models, and derive information from source models. SAM classes and properties should contain information about the source they depend on. 

### Maintainability
It should be possible to keep the SAM information model in sync / up to date with the source models without too much effort / impact. 

When changes in source models are published and implemented in data sources, the SAM information model should be updated to take those changes into account. 

The SAM model should therefore be actively maintained and changes in source models should result in notifications to the maintenance body. 

## Overarching coherent model: the basic idea

We will create a conceptual model and a logical model, both in UML. 

The conceptual model will be a valid [[MIM11]] model. It defines the concepts of our universe of discourse. It identifies the objects and their inherent relationships with other objects. In this conceptual model we will define relationships that are conceptually there, even though they may not be present in the source datasets, which were designed as silos.

This preliminary, partial sketch of the conceptual model contains a few object types from BAG, BRK, and DiSGeo: 

![Overview of the conceptual model](./media/sm2.png)

An assumption is that we have access to the (logical) information models for all source datasets. These are created using modeling language UML. 

**Question**: How do we model the relationships between object types in source registries? We considered two options:  
- Create subclasses (UML specialisations) of the source classes and add the relationships between these subclasses. 
- Don't use the source models directly, but make copies of all object types that we need in the overarching model. We then add the relationships between these copy classes. 

We decided to go for the second option, at least in the conceptual model. In the case of subclasses, in the MIM paradigm we would 'inherit' all properties of the superclasses, while we want only a selection of relevant properties. Also, conceptually we are not creating subclasses. What we actually want is to derive data from source data. We will model the dependency of our object types from source object types on the logical level, because there we are considering data. On the conceptual level we are only considering objects. 

Based on this conceptual model we will create a complete logical model. On this level we add data-registration concepts like history and provenance. The logical model also specifies how orchestrated data is related to source data. 

![logical objecttype including relation to source](./media/sm.png)

This is a (very) simplified view modeling the relation to source objects and probably not how we will  actually model it. 

We are planning to introduce a generic modeling pattern on the MIM level (metamodel) for provenance that can be applied to describe how orchestrated data was created from source data. A first version of this was created as part of our first use case, [Adresses](https://geonovum.github.io/WaU-UC1/#EAID_18371C99_5129_4c39_8E20_83CED8FF19B9). This 'lineage information' will also be available to users on request.

## Ideas for the logical model

<aside class="note">This section is very much a work in progress.</aside>

**Question**: How do we model, in the **SAM logical information model**, the missing relationships that we want to add between object types in source registries? 

Arnoud and Linda each created a first attempt at modeling this. 

### Linda's model: 

![logical model with dependencies to source models](./media/lm-lvdb.png)

In this model a WaU product model "SAM" is defined for the use case 'answer all questions' (the diagram is only showing a small part). In it, dependency relationships are used to express that the logical model SAM contains classes, which depend on (more specifically: are derived from) classes in source models. 

So e.g. WaU-SAM Woonplaats is derived from BAG `Woonplaats`. It does not inherit its attributes. And WaU-SAM `Gemeentegebied` is derived from a class with the same name in the source model DisGeo Bestuurlijke gebieden. 

WaU-SAM `Woonplaats` and `Gemeentegebied` also have the modeling pattern for specifying provenance on the data level. 

The special thing here is that WaU-SAM `Woonplaats` and `Gemeentegebied` have an association `binnen`. This is not present in the BAG or DiSGeo Bestuurlijke gebieden, but an addition owned by the WaU-SAM model. 

### Arnoud's model: 

![logical model with generalizations to source models](./media/lm-adb.png)

In this model generalisation relationships are used to explain how classes that are needed on the product level are related to classes in source models. 

E.g. a new class `Windturbine` which is declared a subclass of BGT `Pand`.

It seems to be doable to script a translation from this model, which is strictly not a correct UML model, to a working OWL ontology + SHACL. The UML model provides a nice visualization, the generated OWL/SHACL would then be the "real", formal logical model. This would also allow us to use the UML editor as an OWL editor.