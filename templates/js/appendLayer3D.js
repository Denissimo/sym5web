function addLayers3D(FeatureLayer,scene)
{
var restrictLayer = new FeatureLayer({
    title: "Restricted",
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Restricted_areas/FeatureServer",
  });
 
  var prohLayer = new FeatureLayer({
    title: "Prohibite",
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/SPb/Prohibited_areas/FeatureServer",
  });
  
    

  let servicePath =
  "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop2/FeatureServer/";
 
  let sourceFlyghtZone = servicePath + "5";
  let sourceFlyghtRoute = servicePath + "2";
  let sourceFlyghtSeg = servicePath + "3";
  let sourceFlyghtPunkts = servicePath + "0";
  
  var fillSymbolZone = {
    type: "simple-fill", // autocasts as SimpleLineSymbol()
    color: [255, 0, 197, 0.2],
    width: 2,
  };

  var zoneRenderer = {
    type: "simple",
    symbol: fillSymbolZone,
  };
  var zoneLayer = new FeatureLayer({
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
  scene.layers.add(zoneLayer);

  //****************************************************************************************************************************************** */
  
  var lineSymbolRoute = {
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "circle",
        material: {
          color: [255, 0, 197],
        },
        width: 50, // the width in m
        height: 50, // the height in m
      },
    ],
  };
 
  var lineRendererRoute = {
    type: "simple",
    symbol: lineSymbolRoute,
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
  var routeLayer = new FeatureLayer({
      url: sourceFlyghtRoute,
      listMode: "hide",
      opacity: 0.4,
      elevationInfo: {
      mode: "absolute-height",
      renderer: lineRendererRoute,
      popupTemplate:templateRoute
    },
  });
  scene.layers.add(routeLayer);

  //**************************************************************************************************************************************************** */
  var fillSymbolZoneTen = {
    type: "simple-fill",
    color: [128, 128, 128, 0.2],
    style: "solid",
  };

  var zoneRendererTen = {
    type: "simple",
    symbol: fillSymbolZoneTen,
  };

  var zoneLayerTen = new FeatureLayer({
    
    url: sourceFlyghtZone,
    outFields: ["*"],
    hasZ: true,
    returnZ: true,
    renderer: zoneRendererTen,
    title: "Полетные зоны",
    elevationInfo: {
      mode: "on-the-ground"
    }
  });
  scene.layers.add(zoneLayerTen);
  
//******************************************************************************** */
  var lineSymbolRouteTen = {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: [128, 128, 128],
    width: 2,
  };
  var lineRendererRouteTen = {
    type: "simple",
    symbol: lineSymbolRouteTen,
  };
  var routeLayerTen = new FeatureLayer({
     url: sourceFlyghtRoute,
    title: "Траектории полетов",
    renderer: lineRendererRouteTen,
    elevationInfo: {
      mode: "on-the-ground",
    },
   });
  scene.layers.add(routeLayerTen);


  
  
  //***************************************************************************** */
  var webDronActive = {
    type: "web-style", // autocasts as new WebStyleSymbol()
    styleUrl:
      "https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/bb7b64a19ac9455d97ac219080a0e978/data",

    name: "drone_active",
  };


  var markerRendererPunkts = {
    type: "simple",
     symbol: webDronActive,
  };

  var punktsLayer = new FeatureLayer({
     url:  sourceFlyghtPunkts,
    renderer: markerRendererPunkts,
    listMode: "hide",
    outFields : ["*"],
    elevationInfo: {
      mode: "absolute-height",
      featureReduction: {
        type: "selection",
      },
     
    },
    definitionExpression : " objectid < 0"
  });
  scene.layers.add(punktsLayer);

  //********************************************************************************************************** */
  
  var webDronOther = {
    type: "web-style", // autocasts as new WebStyleSymbol()
    styleUrl:
      "https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/bb7b64a19ac9455d97ac219080a0e978/data",
    //"https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/209758da27ef4d53a7a7049f3283393e",
    name: "drone_other",
  };

  var markerRendererOtherPunkts = {
    type: "simple",
    /* symbol: markerSymbolPunkts*/
    symbol: webDronOther,
  };

  var punktsOtherLayer = new FeatureLayer({
  
    url: sourceFlyghtPunkts,
    renderer: markerRendererOtherPunkts,
    listMode: "hide",
    elevationInfo: {
      mode: "absolute-height",
         },
    outFields : ["*"],
    definitionExpression : " objectid < 0"
  });
  scene.layers.add(punktsOtherLayer);
 //******************************************************************************************************************** */
 var lineSymbolRoute2 = {
  type: "line-3d",
  symbolLayers: [
    {
      type: "path",
      profile: "circle",
      material: {
        color: [255, 235, 30], //,0.5]
      },
      width: 60, // the width in m
      height: 60, // the height in m
      cap: "square", //"round"
    },
  ],
};

var lineRendererRoute2 = {
  type: "simple",
  symbol: lineSymbolRoute2,
};
   var punktsBeforLayer = new FeatureLayer({
    url: sourceFlyghtSeg,
    renderer: lineRendererRoute2,
    listMode: "hide",
    elevationInfo: {
      mode: "absolute-height",
     
    },
    popupTemplate: {
      title: "Полет",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "relationships/0/status",
              visible: true,
            },
          ],
        },
      ],
    },
  });
  scene.layers.add(punktsBeforLayer);
}