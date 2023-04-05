# Conversion of MIM UML to MIM-LD
# Used for local conversion
# Use pipeline version for automatic conversion in github
# Dependencies:
# - https://github.com/architolk/ea2rdf
# - https://github.com/architolk/rdf2rdf
# - https://github.com/architolk/mimtools
#

#Debug
#java -jar libs/ea2rdf.jar -e "../nen3610-2022-template.eap" > nen3610-2022-db.ttl

# First step: transform native EAP format to RDF
java -jar libs/ea2rdf.jar -ea -e "../nen3610-2022-template.eap" > nen3610-2022-ea.ttl

# Second step: transform EA model in RDF to MIM in RDF
java -jar libs/rdf2rdf.jar nen3610-2022-ea.ttl nen3610-2022-mim-all.ttl libs/ea2mim.yaml

# Third step: get only the NEN3610 Informatimodel from the EA model
java -jar libs/rdf2rdf.jar nen3610-2022-mim-all.ttl nen3610-2022-mim.ttl nen3610-split.yaml

# Fourth step: transform MIM model in RDF to RDFS/OWL/SHACL ontology
java -jar libs/rdf2rdf.jar nen3610-2022-mim.ttl nen3610-2022-ont.ttl libs/mim2onto.yaml

# Fifth step: specific NEN3610 steps
java -jar libs/rdf2rdf.jar nen3610-2022-ont.ttl ../nen3610-2022-ontologie.ttl nen3610.yaml nen3610-2022-mim.ttl

# Sixth step: create diagram from ontology
java -jar libs/rdf2xml.jar ../nen3610-2022-ontologie.ttl nen3610-2022-model.graphml libs/rdf2graphml.xsl

# Seventh step: create MD file for respec page
java -jar libs/rdf2xml.jar ../nen3610-2022-ontologie.ttl ../respec/nen3610-2022-model.md ~/GITREPO/rdf2xml/rdf2md.xsl
