# Design of the semantic model

We will create a concept scheme ([[MIM11]] level 1) in SKOS; a UML conceptual model (MIM level 2) and a UML logical model (MIM level 3). In very general terms the roles of these models are:

- The SKOS concept scheme describes the concepts that play a role in our universe of discourse. 
- The conceptual model defines the classes of our universe of discourse.
- The logical model describes the shapes of the data. 

The most important one is the logical model, which sits between the source registry models on the one hand, and on the other hand the product models that define what data is served to the users. 

## Concept scheme

Design principles: 
- The concept scheme is created in SKOS [[skos-reference]]. 
- The SAM concept scheme contains only those concepts that play a role in the SAM universe of discourse but have not been coined elsewhere in the context of the Dutch base registries. I.e.: we only coin those concepts that do NOT have an exact match with an existing concept (again, in the context of the Dutch base registries). This saves work and maintenance. We will find out if this is workable.
- We create the concept scheme manually, we do not generate it from a UML model. The reason is that we want to be able to link related concepts in ways not supported in UML (see next point). 
- Concepts will have matching relationships (`broadMatch`, `narrowMatch`, `closeMatch`, `relatedMatch`) with existing concepts from the Dutch base registries where appropriate. Note: `exactMatch` is excluded (see point 2).
- Both the conceptual and the logical model have annotations containing the uris of concepts from a Dutch base registry or from the SAM concept scheme. These are entered in the MIM metaproperty `begrip`. Every class and property has this metadata. 

<aside class="issue">A separate concept scheme, with terms in Dutch and English, must be created for the <a href="https://geonovum.github.io/WaU-LIN/">Lineage model</a>. The W3C PROV-ontology [[prov-o]] will be used as a starting point (although this is an ontology, not a concept scheme). </aside>

The work-in-progress version of the concept scheme can be viewed [[here]](https://begrippen.geostandaarden.nl/)(https://begrippen.geostandaarden.nl/sm/nl/). 

<aside class="example" id="ex-demolition">
The concept "sloopjaar" (@EN: demolition year) is coined in the SAM concept scheme, because it does not exist as such in the BAG base registry although buildings do get demolished. The BAG does, however, have a building status "demolished" which, using the change history of the BAG, makes it possible to derive the demolition year of the building. This is indicated with the <code>relatedMatch</code> property.

<pre>
@prefix bk: &lt;https://begrippen.geostandaarden.nl/sam/id/begrippenkader/> .
@prefix : &lt;https://begrippen.geostandaarden.nl/sam/id/begrip/> .
@prefix rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#>.
@prefix skos: &lt;http://www.w3.org/2004/02/skos/core#>.

:sloopjaar
   a skos:Concept ;
   skos:definition "Het jaar dat de sloop van een gebouw is voltooid."@nl ;
   skos:prefLabel "sloopjaar"@nl ;
   rdfs:label "sloopjaar" ;
   skos:inScheme bk:WaU-SAM ;
   skos:relatedMatch &lt;http://bag.basisregistraties.overheid.nl/id/begrip/PandGesloopt> ;
.
</pre>
</aside>

<aside class="example" id="ex-concept">
The concept "bouwjaar" is already defined in the BAG concept scheme and is referenced from the conceptual SAM model. 

<figure>
<img src="./media/ex-concept.png">
<figcaption>Bouwjaar property in CM with reference to BAG concept</figcaption>
</figure>
</aside>

## Conceptual model

<aside class="issue">
TBD: rewrite this section. 

In this section, we list a set of design principles, and described a few modeling attempts, but these may not hold. We are now first working out, how the semantic model plays its role on the logical level. When we got that figured out, we will return to the conceptual model. We retain the old design principles and modeling attempts for now, they may or may not still be valid. 
</aside>

Conceptual modeling principles:
<ol>
   <li>The conceptual model will be a valid UML [[MIM11]] model  on MIM level 2, with the exception that we may define extensions of MIM if we need them.</li>
   <li>The conceptual model defines the classes of our universe of discourse (see [scope]#introduction). It identifies the object types and their inherent properties, including relationships with other objects. </li>
   <li>The conceptual model describes how the classes in our universe of discourse relate to each other. These relationships can cross the boundaries of individual base registries.</li>
   <li>We relate all object types and properties to corresponding SKOS concepts as described in the previous section. </li>
   <li>In this conceptual model we will define relationships between objects if they are relevant for users, even though they may not be present in the source datasets (which were designed as silos).</li>
   <li>We re-use object types from source registries by making copies of them. </li>
   <li>We model the relationships between object types in different source registries by adding these to the copied classes. More on these last two points below.</li>
</ol>

This preliminary, partial sketch of the conceptual model contains a few object types from BAG, BRK, and DiSGeo. It is only a sketch of how object types from different base registries could be related.

![Overview of the conceptual model](./media/sm2.png)

An assumption is that we have access to the information models for all source datasets. These are created using modeling language UML. 

**Question**: How do we model the relationships between object types in source registries? We considered two options:  
- Create subclasses (UML specialisations) of the source classes and add the relationships between these subclasses. 
- Don't use the source models directly, but make copies of all object types that we need in the overarching model. We then add the relationships between these copy classes. 

We decided to go for the second option, at least in the conceptual model. In the case of subclasses, in the MIM paradigm we would 'inherit' all properties of the superclasses, while we want only a selection of relevant properties. Also, conceptually we are not creating subclasses. What we actually want is to derive data from source data. We will model the dependency of our object types from source object types on the logical level, because there we are considering data. On the conceptual level we are only considering objects. 


The conceptual model will be a 'product model' defining the objects in user friendly terms (satisfying requirements <a href="#user-friendliness"></a>, <a href="#coherence-between-objects-from-different-source-models"></a> and <a href="#cherry-picking"></a> ). 

<aside class="issue">
"The conceptual model will be a 'product model'"

This is questionable. 
</aside>

## Logical model
The logical model defines the shapes of the data. On this level we add data-registration concepts like history and provenance. The logical model also specifies how orchestrated data is related to source data. It sits between the source models on the one hand and the product models on the other hand. 

This logical model must satisfy all requirements in <a href="#semantic-model-requirements"></a>. I.e we want to be able to add relationships, without changing source models, but retain a link TO source model classes we derive information from; in a machine readable way, but also usable for developers. The maintenance requirement is less important, because the source models do not change often, once standardized. 

We are planning to introduce a generic modeling pattern on the MIM level (metamodel) for provenance that can be applied to describe how orchestrated data was created from source data. A first version of this was created as part of our first use case, [Adresses](https://geonovum.github.io/WaU-UC1/#EAID_18371C99_5129_4c39_8E20_83CED8FF19B9). This provenance or lineage information will also be available to users on request. The Lineage model is developed separately in the [WaU-LIN repository](https://github.com/geonovum/WaU-LIN).

This is the current attempt at creating the semantic model on the logical level: 

![semantic model, logical (MIM level 3)](./media/lm-semanticmodel-overview.png)

The following elements are important to discuss: 
- Entry point classes
- Generalizations
- Traces

**Entry point classes** are classes we add in the semantic model. In the example above, Gebouw is an entry class. Entry classes are not present in a source model, but they may be a subclass of a class in a source model. They always have a MIM Begrip containing the URI of either a concept in a source model, or a concept coined in the context of SAM. 

**Generalization**: use when inheriting and adding properties

**Trace links**: retrieving  information from a source. Every `<<trace>>` relationship indicates that a mapping is needed with a source class.



