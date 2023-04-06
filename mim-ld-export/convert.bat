REM  Conversion of MIM UML to MIM-LD
REM  Used for local conversion
REM  Use pipeline version for automatic conversion in github
REM  Dependencies:
REM  - https://github.com/architolk/ea2rdf
REM  - https://github.com/architolk/rdf2rdf
REM  - https://github.com/architolk/mimtools
REM 

REM Debug
REM java -jar libs/ea2rdf.jar -e "../nen3610-2022-template.eap" > nen3610-2022-db.ttl

REM  First step: transform native EAP format to RDF
 java -jar libs/ea2rdf.jar -ea -0 -e "../ea/imx-geo.eapx" > imx-geo-ea.ttl

REM  Second step: transform EA model in RDF to MIM in RDF
 java -jar libs/rdf2rdf.jar imx-geo-ea.ttl imx-geo-mim-all.ttl libs/ea2mim.yaml

REM  Third step: get only the NEN3610 Informatimodel from the EA model
java -jar libs/rdf2rdf.jar imx-geo-mim-all.ttl imx-geo-mim.ttl imx-geo-split.yaml

REM  Fourth step: transform MIM model in RDF to RDFS/OWL/SHACL ontology
 java -jar libs/rdf2rdf.jar imx-geo-mim.ttl imx-geo-ont.ttl libs/mim2onto.yaml

REM  Fifth step: specific IMX-Geo steps. Not yet clear if needed
REM java -jar libs/rdf2rdf.jar imx-geo-ont.ttl ../imx-geo-ontologie.ttl imx-geo.yaml imx-geo-mim.ttl

REM  Sixth step: create diagram from ontology
REM java -jar libs/rdf2xml.jar ../imx-geo-ontologie.ttl imx-geo-model.graphml libs/rdf2graphml.xsl

REM  Seventh step: create MD file for respec page
REM java -jar libs/rdf2xml.jar ../imx-geo-ontologie.ttl ../imx-geo-model.md libs/rdf2md.xsl
