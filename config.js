//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-- Log . . . :  20191022 - GRK - Handreiking Archiveren ruimtelijke plannen v2.0      
//-------------------------------------------------------------------------------------
//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

//-------------------------------------------------------------------------------------
var respecConfig = 
{
  title: "IMX-Geo",
  subtitle: "Information model for cross-domain data queries – Geospatial",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "BASIS",             // Basis Document
  //specStatus: "WV",              // Werk Versie
  //specStatus: "CV",              // Consultatie Versie
  //specStatus: "VV",              // Vaststellings Versie
  specStatus: "WV",             // Definitieve Versie
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                   // Standaard
  specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijkrichtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "BD",                   // Beheer Documentatie
  //-- format is verplicht! -----------------------------------------------------------
  // format: "markdown",                 // altijd "markdown" - JvG W3C aangepast, op 1 plek markdown aangeven    
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2024-05-01",  	    // Format is "YYYY-MM-DD"
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/geonovum/IMX-Geo",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/geonovum/IMX-Geo/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/IMX-Geo",
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  
  
  editors: 
 [
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Arnoud de Boer",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
    {
      name: "Jesse Bakker",
      company: "Het Kadaster",
      companyURL: "https://www.kadaster.nl"
    }
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "IMX-Geo",  	              // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "IMX", 	              // Werk aan Uitvoering
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  //pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  //-- license: voor de geldende gebruiksvoorwaarden
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eesrt naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
     //"CITAAT": {
    ////    title:      "Titel van het Citaat",
    //    href:       "http://url van de publicatie",
    //    status:     "versie van de publicatie",
   //     publisher:  "naam van de publiceerder",
  //      company:    "eventueel naam van bedrijf",
  //  },
    NEN3610: {
      id: "NEN 3610:2011 nl",
      title: "NEN 3610:2011 nl - Basismodel geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      href: "https://www.nen.nl/NEN-Shop/Norm/NEN-36102011-nl.htm",
      status: "Definitief",
      publisher: "NEN",
      date: "2011-03-01"
    },
    MIM11: {
      id: "mim11",
      title: "MIM - Metamodel Informatie Modellering",
      href: "https://docs.geostandaarden.nl/mim/mim/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2022-02-17"
    },
    "ISO19108-2005": {
      "href": "https://www.iso.org/standard/39891.html",
      "title": "Geographic information -- Rules for application schema",
      "date": "2005-06",
      "publisher": "International Organization for Standardization"
    },
    "ISO19118-2011": {
      "href": "https://www.iso.org/standard/44212.html",
      "title": "Geographic information -- Encoding",
      "date": "2011-10",
      "publisher": "International Organization for Standardization"
    },
    "ISO19107": {
      "href": "https://www.iso.org/standard/66175.html",
      "title": "Geographic information — Spatial schema",
      "date": "2019-12",
      "publisher": "International Organization for Standardization"
    },
  },
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2024-01-08",  	    // Format is "YYY-MM-DD"
  previousMaturity: "CV",                   // kies 1 van deze 2 regels  	  
  //previousMaturity: "VV",  	                // kies 1 van deze 2 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "",                         // Subtitel van het document
  maxTocLevel: 4,                           // Aantal niveau's ToC, default is 0
  //-- LOGO: Hier kan je een ander logo opgeven indien nodig
  //logos: [{
  //  src: "https://tools.geostandaarden.nl/respec/style/logos/OmgevingswetLogo.svg",
  //  alt: "Standaarden Omgevingswet",
  //  id: "TopLogo",
  //  height: 67,
  //  width: 300,
  //  url: "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD"
  // }],
};
