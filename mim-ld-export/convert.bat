
REM  First step: transform native EAP format to RDF
java -jar mim-ld-export/libs/ea2rdf.jar -e "ea/imx-geo.eapx" > mim-ld-export/temp/imx-geo-ea.ttl

REM  Second step: transform EA model in RDF to MIM in RDF
java -jar mim-ld-export/libs/rdf2rdf.jar mim-ld-export/temp/imx-geo-ea.ttl mim-ld-export/temp/imx-geo-mim-all.ttl mim-ld-export/libs/wau-ea2mim.yaml

REM  Third step: get only the Informatiemodel of interest from the EA model
java -jar mim-ld-export/libs/rdf2rdf.jar mim-ld-export/temp/imx-geo-mim-all.ttl mim-ld-export/model/imx-geo-mim.ttl mim-ld-export/libs/imx-geo-split.yaml

REM  Fourth step: transform MIM model in RDF to RDFS/OWL/SHACL ontology
java -jar mim-ld-export/libs/rdf2rdf.jar mim-ld-export/model/imx-geo-mim.ttl mim-ld-export/model/imx-geo-ont.ttl mim-ld-export/libs/wau-mim2onto.yaml

@REM REM  Fifth step: specific IMX-Geo steps. Not yet clear if needed
@REM REM java -jar libs/rdf2rdf.jar imx-geo-ont.ttl ../imx-geo-ontologie.ttl imx-geo.yaml imx-geo-mim.ttl

@REM REM  Sixth step: create diagram from ontology
@REM REM java -jar libs/rdf2xml.jar ../imx-geo-ontologie.ttl imx-geo-model.graphml libs/rdf2graphml.xsl

@REM REM  Seventh step: create MD file for respec page (werkt nog niet)
@REM REM java -jar libs/rdf2xml.jar ../imx-geo-ontologie.ttl ../imx-geo-model.md libs/rdf2md.xsl