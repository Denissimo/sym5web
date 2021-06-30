require(
[

  "esri/WebScene",
  "esri/views/SceneView",
  "esri/widgets/Search",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery"

], 

function (

  WebScene,
  SceneView,
  Search,
  Expand,
  BasemapGallery

) {
    
  const scene = new WebScene({
    portalItem: {
      id: "4c4de937a5d148f18cfa76b23c873766",
      portal: "https://abr-gis-portal.airchannel.net/portal"
    }, 
  });

  const view = new SceneView({
    map: scene,
    container: "map-operator"
  });

  // Remove copyrights at bottom
  view.ui.remove("attribution");

  // Search widget
  const searchWidget = new Search({
    view: view
  });

  view.ui.add(searchWidget, {
    position: "top-left"
  });

  // Basemap gallery stack
  const basemapGallery = new BasemapGallery({
    view: view,
    container: document.createElement("div")
  });

  const bgExpand = new Expand({
    view: view,
    content: basemapGallery
  });

  basemapGallery.watch("activeBasemap", function() {
    const mobileSize = view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";

    if (mobileSize) {
      bgExpand.collapse();
    }

  });
  
  view.ui.add(bgExpand, "top-right");


});









