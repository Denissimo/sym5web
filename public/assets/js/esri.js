

require(["esri/Map", "esri/WebScene", "esri/views/SceneView","esri/layers/SceneLayer","esri/layers/FeatureLayer"
/*,"esri/layers/MapImageLayer"*/,"esri/config","esri/widgets/TimeSlider","esri/widgets/BasemapGallery","esri/widgets/LayerList","esri/widgets/Search", "esri/Basemap",
       
        "esri/widgets/BasemapGallery/support/LocalBasemapsSource"], function (
  Map,
  WebScene,
  SceneView,
  SceneLayer,
  FeatureLayer,
//  MapImageLayer,
  esriConfig,
  TimeSlider,
  BasemapGallery,
  LayerList,Search,Basemap,LocalBasemapsSource
) {
    






  

  /*
  document
    .getElementById("start")
    .addEventListener("change",function (event){
      //alert(this.value);
      changeFilterStart(this.value);
    });
    
    document
    .getElementById("end")
    .addEventListener("change",function (event){
      //alert(this.value);
      changeFilterEnd(this.value);
    });
  //document.getElementById("end").readOnly = true;

  var startDT =new Date();
  var startDate=startDT.toISOString();
  startDate=startDate.substring(0, startDate.length - 5);
  document.getElementById("start").value=startDate;
  //endDT=new Date(startDate);
  changeEndDate()

  function changeEndDate(){ 
  var endDT=new Date(startDate);
  endDT.setDate(endDT.getDate() + 1);
  endDate=endDT.toISOString();
  endDate=endDate.substring(0, endDate.length - 5);
  document.getElementById('end').value =endDate;
  }
  function changeFilterStart(sDate) { 
    
    startDate= sDate;
    changeEndDate();
   
    var defQ=buildDefinitionQuery(startDate.toString(),endDate.toString());
    
    routeLayer.definitionExpression=defQ; 
    
    
 //   alert(defQ);
  }
  function changeFilterEnd(eDate) { 
    
    endDate= eDate;
    //changeEndDate();
   
    var defQ=buildDefinitionQuery(startDate.toString(),endDate.toString());
    
    routeLayer.definitionExpression=defQ; 
    
    
 //   alert(defQ);
  }
*/
  function changeQscene(param)
  {
    
    if(param.toString()=="low")
    {
    
          view.qualityProfile= "low";
    
    }

    if(param.toString()=="medium")
    {
      view.qualityProfile= "medium";
    
    }
     if(param.toString()=="high")
     {
       
     view.qualityProfile= "high";
     
     }

    

  }

  function buildDefinitionQuery(startDt,endDt) {
    //startDt=startDate.toString();
    startDt=startDt.replace("T", " ");
    
    //endDt=endDate.toString();
    endDt=endDt.replace("T", " ");  
    var defQuery ="startdate >= timestamp'"+ startDt+"' And startdate <= timestamp'"+endDt+ 
     "' Or enddate >= timestamp '"+startDt+"' And enddate <= timestamp '"+endDt+
     "' Or startdate <= timestamp '"+startDt+"' And enddate >= timestamp '"+endDt+"'";
    
    return defQuery;
  }
  // load webscene from portal item
  esriConfig.portalUrl = "https://abr-gis-portal.airchannel.net/portal";
  var webScene = new WebScene({
    portalItem: {
      // autocasts as new PortalItem()
      id: "4c4de937a5d148f18cfa76b23c873766"
    }
  });

  const viewAirSituation = new SceneView({
    map: webScene,
    container: "map-airsituation" 
  });

  const viewTracks = new SceneView({
    map: webScene,
    container: "map-tracks" 
  });

  const viewFlights = new SceneView({
    map: webScene,
    container: "map-flights" 
  });

  const viewArchive = new SceneView({
    map: webScene,
    container: "map-archive" 
  });


  
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const timeSlider = new TimeSlider({
    container: document.createElement("div"),
    playRate: 50,
    stops: {
      interval: {
        value: 3600,
        unit: "seconds"
      }
    }
  });
  
  setTimeSlider();

  function setTimeSlider(){

  const strt = new Date("2021-02-28T00:00:00");
  
  const endd =  new Date("2021-03-31T20:23:19")
  
   
 // const endd1 = new Date("2020-12-17T20:23:19");
    
    timeSlider.fullTimeExtent = {
      start: strt,
      end: endd
    };
    timeSlider.values = [strt, endd];
  }
  timeSlider.watch("timeExtent", function () {
    
      
    var et=timeSlider.timeExtent.end.getTime();
    var st=timeSlider.timeExtent.start.getTime();
    ett= new Date(et);
    stt= new Date(st);
 
    et1=ett.toISOString();
    st1=stt.toISOString();
    st2=st1.substring(0, st1.length - 5);
    et2=et1.substring(0, et1.length - 5);
  
    stAbs=st2.replace("T", " ");
    etAbs=et2.replace("T", " ");
      
    defQ=buildDefinitionQuery(stAbs,etAbs);
    //alert(defQ);
    routeLayer.definitionExpression=defQ;
   
    
   });
   view.ui.add(timeSlider, {
        position: "bottom-right"
            });
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

     var stAbs="2020-12-12 00:00:00";

     var etAbs="2020-12-31 20:23:19";


var layerList = new LayerList({
container :  document.createElement("div"),
view: view
});
// Adds widget below other elements in the top left corner of the view
view.ui.add(layerList, {
position: "top-right"
});

const basemapGallery = new BasemapGallery({
view: view,
source: new LocalBasemapsSource({
  basemaps: [

Basemap.fromId("hybrid"),
Basemap.fromId("streets-night-vector"),
Basemap.fromId("osm")
// create a basemap from a well known id
//basemap
]}),
container: document.createElement("div")
});

view.ui.add(basemapGallery, {
position: "top-right"
});

const searchWidget = new Search({
view: view
});
// Adds the search widget below other elements in
// the top left corner of the view
view.ui.add(searchWidget, {
position: "top-right",
});





 /* var markerSymbolPunkts = {
    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    color: [226, 119, 40],
    size:12
    
  };
  var markerRendererPunkts = {
   type: "simple",
    symbol: markerSymbolPunkts
    };
      */
 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!17.12.20  Изменил символ маршрута  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    
   var lineSymbolRoute2 =
 
  
   {  type: "line-3d",
       symbolLayers: [{
       type: "path",
       profile: "circle",
       material: {
         color: [255, 235, 30]
                },
         width: 70, // the width in m
         height: 70 // the height in m
                    }] 
                  };  
                  
   var lineRendererRoute2 = 
   {
     type: "simple",
     symbol: lineSymbolRoute2
   };
                
  var lineSymbolRoute =
 
  
   {  type: "line-3d",
       symbolLayers: [{
       type: "path",
       profile: "circle",
       material: {
         color:[255, 0, 197] //[255,220,0]//[255, 0, 197]
                },
         width: 50, // the width in m
         height: 50 // the height in m
                    }] 
                  };
  //!!!!!!!!!!!!!!!!!!!!!!!!! 17.12.20 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                
  var lineRendererRoute = 
  
      {
   type: "simple",
    symbol: lineSymbolRoute
    };
     
    var lineSymbolBound =
     {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: [255, 235, 190],
    width: 2
  };
  var lineRendererBound = {
   type: "simple",
    symbol: lineSymbolBound
    };

    var templateRoute = {
    // autocasts as new PopupTemplate()
    title: "Route",
    content: [
      {
        // It is also possible to set the fieldInfos outside of the content
        // directly in the popupTemplate. If no fieldInfos is specifically set
        // in the content, it defaults to whatever may be set within the popupTemplate.
        type: "fields",
        fieldInfos: [
          {
            fieldName: "startdate",
            label: "Старт"
          },
          {
            fieldName: "enddate",
            label: "Финиш",
            
          }
        ]
      }
    ]
  };

  var obstaclesLayer = new SceneLayer({
  url:"https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/Obstacles_3D/SceneServer"
});  
 /*
  var realRouteLayer = new FeatureLayer({
  url:"https://abr-gis-server.airchannel.net/airchannel/rest/services/RealRoute/FeatureServer",
            
               renderer:lineRendererRoute2,
             elevationInfo:{
              mode:"relative-to-ground",
              offset : 100}
             });
*/
  var boundaryLayer = new FeatureLayer({
  url:"https://abr-gis-server.airchannel.net/airchannel/rest/services/Boundary/FeatureServer",
  renderer:lineRendererBound,
  
});
  var routeLayer = new FeatureLayer({
            url : "https://abr-gis-server.airchannel.net/airchannel/rest/services/Route/FeatureServer",
            popupTemplate:templateRoute,
            renderer:lineRendererRoute,
            elevationInfo:{
              mode:"relative-to-ground",
              offset : 100}
             });

 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 17.12.20 добавил слой реального маршрута

 var realRouteLayer = new FeatureLayer({
            url : "https://abr-gis-server.airchannel.net/airchannel/rest/services/RealRoute/FeatureServer",
            popupTemplate:templateRoute,
            renderer:lineRendererRoute2,
            elevationInfo:{
              mode:"relative-to-ground",
              opacity:0.4,
              offset : 100}
             });


             
      
   // Фильтр   реальных маршрутов   "routeid = '1' "   
   //При изменении фильтра меняется маршрут            
             realRouteLayer.definitionExpression="routeid = '100'" 



         // route от 1 до 3

         var bpla1 = document.getElementById("operatorBpla1");
         var bpla2 = document.getElementById("operatorBpla2");
         var bpla3 = document.getElementById("operatorBpla3");


         
       


     

      function clickBpla1(x) {
       defQRoute=buildDefinitionQueryRoute(x)
        realRouteLayer.definitionExpression = defQRoute;
      }

      function buildDefinitionQueryRoute (x) {
       
       defQuery = "routeid = '"+ x  + "'";
       console.log(defQuery);

       return defQuery;

     };



             webScene.layers.add(realRouteLayer);           
 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
             
/*  var punktsLayer = new FeatureLayer({url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/punkts/FeatureServer"/*,
                popupTemplate:templatePunkts ,
                renderer:markerRendererPunkts  
               });*/
              // webScene.layers.add(boundaryLayer);
             // webScene.layers.add(obstaclesLayer);
             //  webScene.layers.add(aeroObstaclesLayer);
               defQ=buildDefinitionQuery(stAbs,etAbs);
               
               routeLayer.definitionExpression=defQ; 
             //  webScene.layers.add(boundaryLayer);
               webScene.layers.add(routeLayer);  
               
               
               
/*  webScene.layers.add(punktsLayer);*/

  // these two highlight handlers are used for selection and hovering over features
  
 

  

  
});



