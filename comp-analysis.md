# IMX-Geo completeness analysis
Analysis of the completeness of the IMX-Geo model. 

## Comparison to "stelselcatalogus clusterbegrippen"
The [Stelselcatalogus](https://www.stelselcatalogus.nl) provides insight into the Dutch base registries / governmental data. 

It is a collection of concepts that describe the governmental data that exists within the different base registries. It also contains a short list of "[cluster concepts](https://www.stelselcatalogus.nl/clusterbegrippen)", concepts that were added to serve as entry points to the more detailed base registry concepts.

As part of the analysis, we compared the classes in IMX-Geo to the cluster concepts in the Stelselcatalogus. 

<aside class="note">The cluster concepts as well as the classes in IMX-Geo only have Dutch labels.</aside>


Stelselcatalogus   | IMX-Geo           | Remarks
-------------------|-------------------|------------ 
Aansprakelijkheid  | X                 | Not in scope
Adres              | Adres             | 
Bouwwerk           | Bouwwerk          | 
Inkomen            | X                 | Not in scope
Locatie            | X                 | Too generic (see below)
Natuurlijk persoon | X                 | Not in scope
Omzet              | X                 | Not in scope
Ondergrond         | Ondergrond        | 
Onroerende zaak    | Perceel           | Onroerende zaak is more generic
Organisatie        | X                 | Not in scope
Roerende zaak      | X                 | Not in scope
Terrein            | Terrein           |
Vestiging          | X                 | Not in scope
Water              | Water             |
Weg                | Weg               |

**Adres**, **Bouwwerk**, **Ondergrond**, **Terrein**, **Water**, and **Weg** match Cluster concepts. 

**Aansprakelijkheid**, **Inkomen**, **Locatie**, **Natuurlijk persoon**, **Omzet**, **Organisatie**, **Roerende zaak**, and **Vestiging** are Cluster concepts that don't match any class in IMX-Geo. Most of them are not in scope for IMX-Geo, because they are not about spatial objects. The Cluster concept **Locatie** is too generic to use in IMX-Geo; everything has location in IMX-Geo so it doesn't make sense to have this class there.

**Perceel** in IMX-Geo falls under the Cluster concept Onroerende zaak. For now, we only need Perceel, not the other subclasses of Onroerende Zaak (Appartementsrecht and Leidingnetwerk) but it might be interesting to add those later. If that's the case, it would be better to add the Onroerende Zaak class to IMX-Geo instead. 

Classes that are in IMX-Geo but don't match a cluster class: 

Stelselcatalogus   | IMX-Geo           | Remarks
-------------------|-------------------|------------ 
X                  | Grondwaterstand   | Subclass of Ondergrond
X                  | Bodemsamenstelling| Subclass of Ondergrond
X                  | Bestemming        | Not in scope for Stelselcatalogus
X                  | GraafgebiedKliCmelding | Not in scope for Stelselcatalogus
X                  | BestuurlijkGebied | Missing
X                  | Gemeente          | 
X                  | Gemeentegebied    | Subclass of Bestuurlijk gebied
X                  | Waterschap        | 
X                  | Waterschapsgebied | Subclass of Bestuurlijk gebied
X                  | Registratiegegevens| Not in scope for Stelselcatalogus
X                  | Woonplaats        | Not a cluster concept; falls under Terrein

Several of these classes are a bit more specific than the Cluster concepts are, so it makes sense the are missing from the Cluster concepts in the Stelselcatalogus. Others, like **Bestemming** and **GraafgebiedKliCmelding** are not in scope for the stelselcatalogus, because the data for these things is not in a base registry. 

For **Bestuurlijk gebied** it could be argued that it should be a Cluster concept - or its superclass in NEN 3610, **Registratieve ruimte**. **Gemeentegebied** and **Waterschapsgebied** would fall under this as well. **Gemeente** and **Waterschap** are subclasses of **Openbaar Lichaam** (introduced in DisGeo); this could also be a Cluster concept as there is government data about these governmental organisations.