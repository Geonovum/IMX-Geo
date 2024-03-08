# IMX-Geo uitbreiden (extending IMX-Geo)

<aside class="note">This section is written in Dutch. It may be translated at a later stage.</aside>

Het IMX-Geo is uitbreidbaar. Maar hoe werkt dat eigenlijk? 

Eerst moet je bepalen, welke gegevens je wilt toevoegen. In een eigen kopie van het IMX-Geo kun je ze vervolgens toevoegen aan het IMX-Geo informatiemodel. Ook het bronmodel laad je in zodat je het IMX-Geo hieraan kunt koppelen. Vervolgens maak je een mapping en beschrijf je voor de orchestratie-engine waar en hoe de gegevens geautomatiseerd te verkrijgen zijn. Hieronder leggen we al deze stappen in iets meer detail uit. 

## Gegevens toevoegen aan het IMX-Geo informatiemodel

Eerst moet je bepalen, welke gegevens je wilt toevoegen aan IMX-Geo. Dit is afhankelijk van je use case. 

De gegevens moet je vervolgens inpassen in het IMX-Geo informatiemodel. Je kunt dit doen in een eigen kopie op basis van het IMX-Geo, dat open beschikbaar is en [hier](https://github.com/Geonovum/IMX-Geo/blob/main/ea/imx-geo.eapx) te downloaden. Wij gebruiken hiervoor [Enterprise Architect](https://sparxsystems.com/products/ea/index.html). 

Stel dat je een register met informatie over molens in Nederland hebt, en gegevens over deze molens wilt toevoegen. Definieer eerst in het IMX-Geo een nieuwe klasse, bijvoorbeeld als subklasse van een gerelateerde klasse in het IMX-Geo. Je neemt alleen die gegevens op die je nodig hebt. 

[Molen als subklasse van Gebouw](media/ex-vb1.png)

Het is belangrijk om ook te weten waar de gegevens vandaan komen. Ze moeten wel ergens in een voorziening beschikbaar zijn, die via een service zoals een API te benaderen is. Dit moet je ook in het informatiemodel laten zien. Als eerste moet je dus het informatiemodel van de bron ook inladen in enterprise architect, zodat je de IMX-Geo Molen hieraan kunt relateren:  

[Molen klasse met trace](media/ex-vb2.png)

Vervolgens maak je een mapping. Deze kun je eventueel eerst in tabelvorm maken: 

| IMX-Geo   | Bronmodel molenregistratie |
| --------- | -------------------------- |
| functie   | functie                    |
| modeltype | type                       |
| naam      | naam                       |

Belangrijker is dat er ook een machineleesbare mapping komt conform onze [mapping taal](https://geonovum.github.io/IMX-ModelMapping/): 

<pre>
objectTypeMappings:
  Molen:
    sourceRoot: molenreg:Molen
    propertyMappings:
      functie:
        pathMappings:
          path: functie
      modeltype:
        pathMappings:
          path: type
      naam:
        pathMappings:
          path: naam
</pre>

Een orchestratie engine kan dan aan de hand van deze machineleesbare mapping de gegevens uiteindelijk combineren. Hiervoor is uiteraard nog wel wat configuratie nodig: de orchestratie engine moet weten wat het adres is van de voorziening die de molengegevens heeft, en hoe deze voorziening geautomatiseerd te bevragen is. 

Ook een knowledge graph kan bovenstaande mapping gebruiken om de gegevens te combineren. 