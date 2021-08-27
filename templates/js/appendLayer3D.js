var dronLayer;

var webDronActive;
//var markerRendererPunkts
function addLayers3D(FeatureLayer,scene)
{
    
 // let servicePath =
 // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop2/FeatureServer/";
 
  let sourceFlyghtZone = webPaths.servicePath + "5";
  let sourceFlyghtRoute = webPaths.servicePath + "2";
  
  

  zoneLayer = new FeatureLayer({
      url: sourceFlyghtZone,
      outFields: ["*"],
      hasZ: true,
      renderer:myRenderers.zoneRenderer,
      listMode: "hide",
      returnZ: true,
      elevationInfo: {
      mode: "relative-to-ground",
      offset: 500,
    },
  });
  

  
  
   routeLayer = new FeatureLayer({
      url: sourceFlyghtRoute,
      title: "Траектория полета",
    
      elevationInfo: {
      mode: "absolute-height"
      },
      definitionExpression : " objectid < 0",
      renderer: myRenderers.lineRendererRoute
     // popupTemplate:templateRoute
    
  });
  scene.layers.add(routeLayer);

  //**************************************************************************************************************************************************** */
   zoneLayerTen = new FeatureLayer({
    
    url: sourceFlyghtZone,
    outFields: ["*"],
    hasZ: true,
    returnZ: true,
    renderer: myRenderers.zoneRendererTen,
    title: "Полетные зоны",
    elevationInfo: {
      mode: "on-the-ground"
    }, definitionExpression : " objectid < 0"
  });
  scene.layers.add(zoneLayerTen);
  
  
  //***************************************************************************** */
  
  
  const realLabelClassZone = new LABELCLASS({
    labelExpressionInfo: {
      expression: "$feature.status"
         },
    symbol: mySymbols.labelTextSymbol3D
  }); 
 


  flyZoneLayer = new FeatureLayer({
    title: "Зоны заявок",  
    url: sourceFlyghtZone,
    outFields: ["*"],
    labelingInfo: [realLabelClassZone],
    renderer: myRenderers.unicumRendererZone,
    popupTemplate :templatesPopup.templateZoneFly,
    elevationInfo: {
      mode: "on-the-ground",
    },
    hasZ:true,
    returnZ: true
      });
   flyZoneLayer.definitionExpression=  buildDefinitionQueryFly() ;
   scene.layers.add(flyZoneLayer);
   

  //********************************************************************************************************** */
  
  var webDronOther = {
    type: "web-style", // autocasts as new WebStyleSymbol()
    styleUrl:
      "https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/bb7b64a19ac9455d97ac219080a0e978/data",
    //"https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/209758da27ef4d53a7a7049f3283393e",
    name: "drone_other",
  };





    dronLayer = new  GRAPHICSLAYER({
       listMode:"hide",
 
       elevationInfo: {
              mode:"absolute-height",
         
              offset : 50
            }

  });
  
  scene.layers.add(dronLayer);
  
}