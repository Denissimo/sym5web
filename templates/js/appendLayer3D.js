var dronLayer;

var webDronActive;
//var markerRendererPunkts
function addLayers3D(FeatureLayer,scene)
{
    
  let servicePath =
  "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop2/FeatureServer/";
 
  let sourceFlyghtZone = webPaths.servicePath + "5";
  let sourceFlyghtRoute = webPaths.servicePath + "2";
  
  

  var zoneRenderer = {
    type: "simple",
    symbol: mySymbols.fillSymbolZone,
  };
  zoneLayer = new FeatureLayer({
      url: sourceFlyghtZone,
      outFields: ["*"],
      hasZ: true,
      renderer:zoneRenderer,
      listMode: "hide",
      returnZ: true,
      elevationInfo: {
      mode: "relative-to-ground",
      offset: 500,
    },
  });
  

  
  var lineRendererRoute = {
    type: "simple",
    symbol: mySymbols.lineSymbolRoute,
  };

  
  var templateRoute = {
    // autocasts as new PopupTemplate()
    title: "Маршрут",
    content: [
      {
        // It is also possible to set the fieldInfos outside of the content
        // directly in the popupTemplate. If no fieldInfos is specifically set
        // in the content, it defaults to whatever may be set within the popupTemplate.
        type: "fields",
        fieldInfos: [
          {
            fieldName: "sdate",
            label: "Старт",
          },
          {
            fieldName: "edate",
            label: "Финиш",
          },
        ],
      },
    ],
  };
   routeLayer = new FeatureLayer({
      url: sourceFlyghtRoute,
      title: "Траектория полета",
    
      elevationInfo: {
      mode: "absolute-height"
      },
      definitionExpression : " objectid < 0",
      renderer: lineRendererRoute
     // popupTemplate:templateRoute
    
  });
  scene.layers.add(routeLayer);

  //**************************************************************************************************************************************************** */

  var zoneRendererTen = {
    type: "simple",
    symbol: mySymbols.fillSymbolZoneTen,
  };

   zoneLayerTen = new FeatureLayer({
    
    url: sourceFlyghtZone,
    outFields: ["*"],
    hasZ: true,
    returnZ: true,
    renderer: zoneRendererTen,
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
    renderer: selectSymbol.unicumRendererZone,
    popupTemplate :templatesPopup.templateZoneFly,
    elevationInfo: {
      mode: "on-the-ground",
    },
    hasZ:true,
    returnZ: true
      });

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