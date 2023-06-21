# Mapping properties to external standardized properties

## Spatial relationships

The IMX-Geo model introduces several spatial relationships between object types. We want to model these according to the Simple Features topological relationships (also included in NEN 3610 and GeoSPARQL), so we have to consider for each of these relationships, which topological relationship is the correct one. 

To understand the topological relationships we looked at [DE-9DIM on wikipedia](https://en.wikipedia.org/wiki/DE-9IM): 
- `Contains`: a geometry contains another geometry. There are no points of the contained geometry that lie outside the boundary of the containing geometry. 
- `Overlaps`: two overlapping geometries have some points in common, and have the same dimension; their intersection also has the same dimension. 
- `Intersects` is very broad: two geometries have at least one point in common. 
- `Touches`: two geometries have at least one point in common, but the interiors do not intersect.

The IMX-Geo currently has these spatial relationships:
- `ligtInGemeentegebied`: Perceel objects `within` a Gemeentegebied. They never overlap.
- `gebouwBinnenKlicMelding`: Gebouw objects `within` a Klicmelding area, or having `overlap` with it. 
- `adresBinnenKlicMelding` Adres objects `within` a Klicmelding area, or having `overlap` with it.
- `bevatBouwwerk`: Perceel objects or Terrein objects that `contain` a Bouwwerk or have Bouwwerk objects that `overlap` with it.
- `ligtInWaterschap`: Perceel objects that are `within` a Waterschapsgebied.
- `heeftBestemming`: Perceel objects that are `within` a Bestemming or `overlap` with it.
- Terrein `bevat`: Terrein objects that `contain` Landschapselement objects.
- `heeftAlsOndergrondOnderTerrein`: Terrein objects that `contain` or have `overlap` with Ondergrond objects. 
- `heeftAlsNabijWater`: Terrein objects that are nearby Water objects. However, there is no GeoSPARQL relation that has this meaning. As far as I know only http://www.geonames.org/ontology#nearby expresses this.
- `heeftBestemming`: Perceel objects that `contain` or have `overlap` with Bestemming objects. 
- `heeftBeperking`: Probably not a spatial relationship. Todo check.
- RegistratieveRuimte `bevat`: Registratieve ruimte objects (subclasses) that `contain` Perceel objects.
- `ligtAan`: Adres objects that `touch` a Weg object? I am not sure this is what is meant.

## Property mapping
This section lists the properties contained in IMX-Geo that are mapped to external, standardized properties. This mapping is present in the IMX-Geo model. A tagged value `uri` is used for this. 

Generic mapping of properties that occur in different classes: 
- **geometrie**: `geosparql:hasGeometry`
- **identificatie**: `nen3610:identificatie`
- **domein**: `nen3610:domein`
- **ligtOp/ligtIn/binnen** `geosparql:sfWithin` or `geosparql:sfIntersects` (see previous section)
- **bevat**: `geosparql:sfContains` or `geosparql:sfIntersects`
- **naam**: `rdfs:label`

Specific mapping of properties of certain classes:
- Terrein **bevat** Landschapselement: `geosparql:sfContains`
- Terrein **bevatBouwwerk** Bouwwerk: `geosparql:Intersects`
- Bestemming: verwijzingNaarArtikel: `dct:source`
- Perceel **heeftBestemming** Bestemming: assuming this will be implemented as a spatial relationship, `geosparql:Intersects`
- Perceel **bevatBouwwerk** Bouwwerk: `geosparql:Intersects`
- **RegistratieveRuimte** bevat Perceel: `geosparql:sfContains`
- Perceel **oppervlak**: `geosparql:hasMetricArea` (geosparql 1.1)
- Perceel **koopjaar**: `owl-time:year`

Other properties besides those mentioned above are not mapped to external standardized properties. 