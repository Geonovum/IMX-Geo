# Spatial relationships

The IMX-Geo model introduces several spatial relationships between object types. We want to model these according to the Simple Features topological relationships (also included in NEN 3610 and GeoSPARQL), so we have to consider for each of these relationships, which topological relationship is the correct one. 

To understand the topological relationships we looked at [DE-9DIM on wikipedia](https://en.wikipedia.org/wiki/DE-9IM): 
- `Contains`: a geometry contains another geometry. There are no points of the contained geometry that lie outside the boundary of the containing geometry. 
- `Overlaps`: two overlapping geometries have some points in common, and have the same dimension; their intersection also has the same dimension. 
- `Intersects` is very broad: two geometries have at least one point in common. 
- `touches`: two geometries have at least one point in common, but the interiors do not intersect.

The IMX-Geo currently has these spatial relationships:
- `ligtInGemeentegebied`: Perceel objects `within` a Gemeentegebied. They never overlap.
- `gebouwBinnenKlicMelding`: Gebouw objects `within` a Klicmelding area, or having `overlap` with it. 
- `adresBinnenKlicMelding` Adres objects `within` a Klicmelding area, or having `overlap` with it.
- `bevatBouwwerk`: Perceel objects or Terrein objects that `contain` a Bouwwerk or have Bouwwerk objects that `overlap` with it.
- `ligtInWaterschap`: Perceel objects that are `within` a Waterschapsgebied.
- `heeftBestemming`: Perceel objects that are `within` a Bestemming or `overlap` with it.