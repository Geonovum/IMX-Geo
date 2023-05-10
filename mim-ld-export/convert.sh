# Conversion of MIM UML to MIM-LD
# Used for local conversion
# Use pipeline version for automatic conversion in github
# Dependencies:
# - https://github.com/architolk/ea2rdf
# - https://github.com/architolk/rdf2rdf
# - https://github.com/architolk/mimtools
#

#Debug
#java -jar mim-ld-export/libs/ea2rdf.jar -e "../nen3610-2022-template.eap" > nen3610-2022-db.ttl

# First step: transform native EAP format to RDF
java -jar mim-ld-export/libs/ea2rdf.jar -ea -0 -e ea/imx-geo.eapx > mim-ld-export/temp/imx-geo-ea.ttl

# Second step: transform EA model in RDF to MIM in RDF
java -jar mim-ld-export/libs/rdf2rdf.jar mim-ld-export/temp/imx-geo-ea.ttl mim-ld-export/temp/imx-geo-mim-all.ttl mim-ld-export/libs/wau-ea2mim.yaml

# Third step: get only the NEN3610 Informatimodel from the EA model
java -jar mim-ld-export/libs/rdf2rdf.jar mim-ld-export/temp/imx-geo-mim-all.ttl mim-ld-export/model/imx-geo-mim.ttl mim-ld-export/libs/imx-geo-split.yaml

# Fourth step: transform MIM model in RDF to RDFS/OWL/SHACL ontology
java -jar mim-ld-export/libs/rdf2rdf.jar mim-ld-export/model/imx-geo-mim.ttl mim-ld-export/model/imx-geo-ont.ttl mim-ld-export/libs/wau-mim2onto.yaml

# Fifth step: specific NEN3610 steps
# java -jar mim-ld-export/libs/rdf2rdf.jar nen3610-2022-ont.ttl ../nen3610-2022-ontologie.ttl nen3610.yaml nen3610-2022-mim.ttl

# Sixth step: create diagram from ontology
# java -jar mim-ld-export/libs/rdf2xml.jar ../nen3610-2022-ontologie.ttl nen3610-2022-model.graphml mim-ld-export/libs/rdf2graphml.xsl

# Seventh step: create MD file for respec page
# java -jar mim-ld-export/libs/rdf2xml.jar ../nen3610-2022-ontologie.ttl ../respec/nen3610-2022-model.md ~/GITREPO/rdf2xml/rdf2md.xsl
