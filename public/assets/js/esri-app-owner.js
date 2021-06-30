/*import {parserKML,makeLine,makeCircle} from './sub/app-owner-parselKML.js'; 
//import {myCheckFly} from './sub/app-owner-check.js';
import {makeNewRoute,createRecordRouteTable,createZone,createTrackAs} from './sub/app-owner-addRoute.js';
import {updateRecordFlyghtTable} from './sub/app-owner-addFlyght.js';
import {getUserFly,getUserRoute,getDetailZone,getDetailRoute,getFlyghtRecords} from './sub/app-owner-panel.js';
import {changeExtent,queryRoad} from './sub/app-owner-view.js';
*/



/*export*/ var apiHTML="https://dev-api.airchannel.net/";
/*export*/ var flypts=[];
/*export*/ var profil=[];
/*export*/ var glb=[];
/*export*/ var rlb=[];
/*export*/ var tabName=[];
/*export*/ var userIds=[];
/*export*/ var USERS=[1,4,6,7,9,10,27,29,30,31,32];
/*export*/ var timeSlider;
/*export*/ var view;
/*export*/ var message;

///*export*/ var routeTabLayer;
///*export*/ var flyTableLayer;
/*export*/ var routeVecLayer;
/*export*/ var zoneLayer;
/*export*/ var flyZoneLayer;
/*export*/ var flyVecLayer;
/*export*/ var segmentLayer;
/*export*/ var punktsLayer;

/*export*/ var tableLayer;
/*export*/ var tableZoneLayer;
/*export*/ var layerManual;
/*export*/ var bufferLayer;
/*export*/ var routeLayer;
/*export*/ var restrictLayer;
/*export*/ var prohLayer;
/*export*/ var selectLayer;

/*export*/ var markerSymbol;
/*export*/ var markerSymbol2;
/*export*/ var lineSymbol;
/*export*/ var lineSymbol2;
/*export*/ var lineSymbol3;
/*export*/ var lineSymbolSelect;
/*export*/ var fillSymbol;
/*export*/ var fillSymbol3;
/*export*/ var fillSymbolSelectZone;


/*export*/ var EXTENT;
/*export*/ var POINT;
/*export*/ var POLYLINE;
/*export*/ var POLYGON;
/*export*/ var CIRCLE;
/*export*/ var MULTIPOINT;
/*export*/ var GRAPHIC;
/*export*/ var PROJECTION;
/*export*/ var GEOMETRYENGINE;
/*export*/ var QUERY;
/*export*/ var token;
var flagEdit;
      require([
      
        "esri/widgets/Sketch",
        "esri/widgets/TimeSlider",
        "esri/layers/GraphicsLayer",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/WebMap",
        "esri/Graphic", 
        "esri/config",
        "esri/core/urlUtils",
        "esri/geometry/SpatialReference",
        "esri/geometry/Extent",
        "esri/tasks/support/Query",
        "esri/widgets/Search/SearchSource",
        "esri/geometry/Polyline",
        "esri/geometry/Circle",
        "esri/geometry/Polygon",
        "esri/geometry/Point",
        "esri/geometry/Multipoint",
        "esri/geometry/geometryEngine",
        "esri/geometry/projection",
        "esri/Basemap",
        "esri/widgets/BasemapGallery",
        "esri/widgets/BasemapGallery/support/LocalBasemapsSource",
        "esri/widgets/LayerList",
        "esri/widgets/Search",
        "esri/layers/support/Relationship",
        "esri/layers/WebTileLayer",
        "esri/layers/GroupLayer"
      ], function (Sketch,
                   TimeSlider,
         
                   GraphicsLayer, 
                   MapView, 
        
                   FeatureLayer,
        
                   WebMap,
                   Graphic,
                   esriConfig,
                   urlUtils, 
                   SpatialReference,
                   Extent,
                   Query,
                   SearchSource,
                   Polyline,
                   Circle,
                   Polygon,
                   Point,
                   Multipoint,
                   geometryEngine,
                   projection,
                   Basemap,
                   BasemapGallery,
                   LocalBasemapsSource,
                   LayerList,
                   Search,
                   Relationship,
                   WebTileLayer,
                   GroupLayer) {
          
          
           


             
             window.onload = function () {

          //console.log('Cookie: ' + $.cookie('utm_auth_token'));
            //   token=document.getElementById("idToken").value;

             //token = $.cookie('utm_auth_token');
            // var strGET = document.getElementById("idLog").value
        //     var settings2 = {
        //       // "url": "http://sym4swg/application/f04433e6-3122-43e8-ab51-5fc980b4ebda",
        //       // "url": "http://sym4swg/test/load",
        //       "url": apiHTML+ "user/name/"+strGET,
        //       // "url": "https://dev-api.airchannel.net/test/load",
        //       "method": "GET",
        //       "timeout": 0,
        //       beforeSend: function (xhr) {
        //           xhr.setRequestHeader("Authorization", 'Bearer '+ token);
        //       }
        //   };
      
        //   $.ajax(settings2).done(function (response) {
        //     if(document.getElementById("ownerid")!=null) 
        //     {
          
        //   document.getElementById("ownerid").value=response.id;

          
        //      getFlyghtRecords(0,makeListUserName);  
        //      getUserRoute(null);
        //      getUserFly(); 
        //      zoneLayer.definitionExpression=buildDefinitionQuery();
        //      routeLayer.definitionExpression=buildDefinitionQuery();
        //      //getUserRoute(null);
          
        //      function makeListUserName(response,ind) {
        
           
        //       for (let i=0;i<response.applications.length;i++) {      
        //        // if(response.applications[i].application.start.date >= iniDt)
        //                if(response.applications[i].status.id >2) 
        //       {    
        //       let flag=true;  
        //        for (let j=0;j<userIds.length;j++)
        //        {
        //         if(userIds[j][0]==response.applications[i].user.id)
        //         {
        //           flag=false;
        //           break;
        //         }
        //        }
        //         if(flag) userIds.push([response.applications[i].user.id,response.applications[i].user.user.username]);
        //       }    
      
        //      }
              
        //       if (ind+1<USERS.length) getFlyghtRecords(ind+1,makeListUserName);
      
                   
      
        //      }
           
        //     }
        //       //console.log(response);
        //   });

          
                    }                    
                    
          var servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
          
          var sourceTrackRoute=servicePath+"1";
          var sourceTrackZone=servicePath+"4";
          var sourceFlyghtZone=servicePath+"5"; 
          var sourceFlyghtRoute=servicePath+"2";
          var sourceFlyghtSeg=servicePath+"3";
          var sourceFlyghtPunkts=servicePath+"0";
           
          EXTENT=Extent;
          POLYGON=Polygon;
          POLYLINE=Polyline;
          CIRCLE=Circle; 
          MULTIPOINT=Multipoint;
          POINT=Point;
          GRAPHIC=Graphic;   
          PROJECTION=projection;
          GEOMETRYENGINE=geometryEngine;    
          QUERY=Query;  
         
          emptyArray(glb);
          emptyArray(rlb);


        //   document
        //   .getElementById("createRoute")
        //   .addEventListener("click", makeNewRoute);
       
        
     
      //*************************загрузка KML файла
        
        //  document
        //   .getElementById("inFile")
        //   .addEventListener("change",function (event){
        //      let fl= this.files[0];
        //       let reader = new FileReader();
        //          reader.readAsText(fl);
                 
        //          reader.onload = function() {   myFly(reader.result);
        //         //  document.getElementById("nameroute").value=document.getElementById("inFile").value.toString();
        //            };
                  
        //           // document.getElementById("inFile").value="";
                   

        //       });
        //var strGET = window.location.search.replace( '?', '');

        //if(document.getElementById("ownerid")!=null) 
        //  document.getElementById("ownerid").value=strGET; 
       
        
        //getFlyghtRecords(0,makeListUserName);

            
        



         flagEdit=false;

          //***************** инициализация бегунка времени ************************************

        let d=new Date();   d.setDate(d.getDate() - 10);  
        let d2=new Date();  d2.setDate(d2.getDate() + 20); // 10 дней предыдущих 20 последующих
        let  d1=new Date(); d1.setDate(d1.getDate() + 1);
        let timeExtent = ({
           start: d,
           end:  d2
                      });
 
          timeSlider = new TimeSlider({
           
           fullTimeExtent : timeExtent,
           values: [d1],
           mode : "instant", // не интервал
           timeVisible:true,
          
           stops: {
             interval: {
               value: 5,
               unit: "minutes"
             }
           }
         });
         
        
         

        //обработка события изменения положения указателя времени 
 
         timeSlider.watch("timeExtent", function () { 
            punktsLayer.definitionExpression=buildDefinitionQueryPunkts();//timeSlider) ; // фильтрация точек полетов или заявок
            inimap();
          
         });
        
      /*   
        if(document.getElementById("ownerid")!=null) 
        {    
             getUserRoute(null);
             getUserFly(); 
             //getUserRoute(null);
              
        }*/

//     ************************************************* Подгрузка данных пользователя

   

        bufferLayer = new GraphicsLayer({
        }    );

          selectLayer = new GraphicsLayer({
          listMode:"hide"
      });
       

      
   
      
    

 //*********** обработчик события просмотра полета */   
        
        
       //*********** обработчик события просмотра полета */   
    
      

     //******************** Просмотр полета  или скрытие  деталей полета при отмене   */  
        //******************** Просмотр полета  или скрытие  деталей полета при отмене   */ 
        
        //************************* отмена полета */
       

// Формирование линейного маршрута по KML файлу

        function myFly(res){
          clean(true);
          let s=document.getElementById("inFile").value.toString();
          
          let n=s.lastIndexOf("\\");
          
          let n2=s.lastIndexOf(".");
           
          s="load_"+s.substring(n+1,n2);
          document.getElementById("nameroute").value=s;
          document.getElementById("inFile").value="";
          changeExtent( 
                       makeLine( parserKML(res),layerManual)); 
                       flagEdit=true; 
        }
        //*******************************************************************************************
        
    //    let ownerId= document.getElementById("ownerid").value; //     ID клиента параметр входа

        /*var*/ message = document.getElementById("message");

        PROJECTION.load(); // загрузка механизма перепроецирования

 
           
         esriConfig.portalUrl = "https://abr-gis-portal.airchannel.net/portal";         //портал

         urlUtils.addProxyRule({
         urlPrefix: "https://tiles.qsupport.mts.ru",
          proxyUrl: "proxy/proxy.php"
          //DotNet/proxy.ashx"
        });
        //esriConfig.request.proxyUrl = "http://gallery.chn.esri.com/arcgis/sharing/proxy/resource-proxy-1.0/DotNet/proxy.ashx";
        esriConfig.request.proxyUrl = "proxy/proxy.php";
         layerManual = new GraphicsLayer(); //слой графики для скетча
      
    //************************************************************************************

//   Функция формирования заявки на полет 

       



//********************************************* формирование нового шаблона маршрута  **********************************
        

//********************************* Формирование карты
     
        const webmap = new WebMap({
       portalItem: { // autocasts as new PortalItem()
           id: //"7799aefa7f81412e937c37894d2bf12d"
           //"c0383dbf4b5d40b98a7714d893a0fcb1"
           //"51872c239ae64549af9bbf9cfe65f661"
           //"dc44421b477d4c078fea4eb852ea7edb"
           "4e1ce0dd127c4cadabd554b808d059b4"
           //"ebdf8bc0baec4737b1e5d97e94354397"
                 },
              ground : "world-elevation"  
               });
        const sr1 = new SpatialReference({ wkid: 3857 }); //проекция карты

        /*let*/ view = new MapView({
          container: "map-owner",
          map: webmap,
          spatialReference : sr1
        }); 
        
       
       
        //*************************** инициализация графического редактора
        const sketch = new Sketch({
          layer: layerManual,
          view: view,
          availableCreateTools:["polyline", "polygon", "rectangle", "circle","point"],
          // graphic will be selected as soon as it is created
          creationMode: "single"
        });
        
      //********** Обработка события  создание нового объекта
        sketch.on("create", function(event) {
         
          
         // при создании нового объекта вся предыдущая графика вычищается 
         if (event.state === "start") {   
                         
          clean(true);     
          //if (document.getElementById("routeid").value!="")
          //  sketch.cancel() ;     
                

            }
          if (event.state === "complete") {
          
            
            if(layerManual.graphics.getItemAt(0).geometry.extent ===null )
               {
                var rz=20000
                 for(;;){
                   var rzs=prompt("Задайте радиус зоны в м.","20000");
                   try {
                    if(rzs==null) break; 
                     rz=parseInt(rzs);
                     if (rz<=0) rz=20000;
                    break; 
                   }
                   catch{break;}
                 }
                var circ=makeCircle(layerManual.graphics.getItemAt(0).geometry,rz,layerManual);
                changeExtent(circ);
                  
               }
            else
               
           // if (document.getElementById("routeid").value!="")
           // sketch.cancel() ;
            changeExtent(layerManual.graphics.getItemAt(0).geometry); 
                              }
          });
   //*******************************************************************
   //********** Обработка события редактирования  объекта       
        sketch.on("update", function(event) {
         // if (event.state === "start")
         //  alert("?? "+layerManual.graphics.length); 
      if (event.state === "complete") {  // при завершении редактирования
        
      

        if(layerManual.graphics.length>1)
        {
          
          if(layerManual.graphics.getItemAt(1).geometry.extent ==null )
        {
             var rz=20000;
                 for(;;){
                   var rzs=prompt("Задайте радиус зоны в м","20000");
                   try {
                    if(rzs==null) break; 
                    rz=parseInt(rzs);
                    if (rz<=0) rz=20000;
                    break; 
                   }
                   catch{break;}
                 }        
          var circ=makeCircle(layerManual.graphics.getItemAt(1).geometry,rz,layerManual);
                changeExtent(circ);
           layerManual.graphics.removeAt(0);  
        }
        
      }
        else
         if(layerManual.graphics.length==1)
         changeExtent(layerManual.graphics.getItemAt(0).geometry);
           
      }
 });
        view.ui.add(sketch, "top-left"); 
        view.ui.add(timeSlider, "top-left");
        
//******************* обработка клика по карте ********************************************************        
        view.on("click" ,function(event){
          if (event.button==2)                // правая кнопка - очистка графики
           {
            clean(true);   
            flagEdit=false;
            return;
           }
                                              // левая кнопка выбор траектории из слоя маршрута
                                               
          if (sketch.activeTool ==  null  &&    (layerManual.graphics.length==0 ))//|| document.getElementById("routeid").value!=""))
            {
              emptyArray(flypts);      
             if(bufferLayer.graphics.length==0)
             {
              getDetailRoute(document.getElementById("routeid").value,false);
              queryRoad(event,"");
              cleanFly(markerSymbol);
             }
            }
           else
           {
           if (sketch.state=== "active")
            { 
              if (!flagEdit)   clean(true);
              
              flagEdit=true ; 
            }
            else
            {
               
             if (!flagEdit)
             {   
                 clean(false); 
             }
              else 
               flagEdit=false;
             // alert("!! "+layerManual.graphics.length);
            }
          }
        });
        
        
//******************************************************* добавление стандартных элементов
        var layerList = new LayerList({
           container :  document.createElement("div"),
           view: view
          });

          view.ui.add(layerList, {
          position: "bottom-left"
        })
        
         
        
        
        
        const searchWidget = new Search({
              view: view
  
             });
                  
        view.ui.add(searchWidget, {
            position: "top-left",
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
   ]
  }),
        //source: {
        //portal: "https://www.yourportal.arcgis.com"}, 
        container: document.createElement("div")   
         });

          view.ui.add(basemapGallery,{
             position: "bottom-right"
           });

       
        
        function inimap()
        {   webmap.layers.reorder(zoneLayer, webmap.layers.length);
            webmap.layers.reorder(routeLayer, webmap.layers.length);
            webmap.layers.reorder(tableLayer, webmap.layers.length); 
            webmap.layers.reorder(punktsLayer, webmap.layers.length);   
            webmap.layers.reorder(bufferLayer, webmap.layers.length); 
            webmap.layers.reorder(layerManual, webmap.layers.length);
            webmap.layers.reorder(selectLayer, webmap.layers.length);
           // webmap.layers.reorder(segLayer, webmap.layers.length); 
          
        }
//**********************************************************************************************************************************************

//***************************************** формирование символов *********************************************************
//******* marker

   var markerSymbolSelect =
  {
  type: "simple-marker", 
  color: [ 0,255, 255,0.2],
  style: "circle",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 0,255, 255 ],
    width: 2
  }

 }
          markerSymbol = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [226, 119, 40],
          size : 4,
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [0, 0, 0],
            width: 1
          }
        };
          markerSymbol2 = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [255, 255, 0],
          size : 4,
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [0, 0, 0],
            width: 1
          }
        };

//******** line        
          lineSymbol = {
          type: "simple-line", // autocasts as SimpleLineSymbol()
          color: [255, 0, 197],
          width: 2
        };
         lineSymbol2 = {
          type: "simple-line", // autocasts as SimpleLineSymbol()
          color: [0, 128, 0],
          width: 2
        };
         lineSymbol3 = {
          type: "simple-line", // autocasts as SimpleLineSymbol()
          color: [128, 128, 128],
          width: 2
        };
         lineSymbolSelect =
       {
        type: "simple-line",
        color: [ 0,255, 255 ],
        style: "solid",
        width: 3
      }
      
//*************** fill
         fillSymbol = {
          type: "simple-fill", // autocasts as SimpleLineSymbol()
          color: [255, 0, 197,0.2],
          width: 2
        };

        var fillSymbolSelect =
       {
        type: "simple-fill", 
        color: [ 0,255, 255, 0.2 ],
        style: "solid",
        outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 0,255, 255 ],
        width: 2
      }

 }
         fillSymbolSelectZone =
         {
         type: "simple-fill", 
         color: [ 255,0, 197, 0.2 ],
  style: "solid",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 0,255, 0 ],
    width: 3
  }

 };
    fillSymbol3 = {
  type: "simple-fill", // autocasts as SimpleLineSymbol()
  color: [128, 128, 128,0],
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 128,128, 128 ],
    width: 2
  }
  
};

        
  //******************************************************* формирование рендереров********************************************     

   var lineRenderer = {
  type: "simple",
  symbol: lineSymbol
};
var zoneRenderer = {
  type: "simple",
  symbol: fillSymbol
};

var zoneRenderer2 = {
  type: "simple",
  symbol: fillSymbolSelectZone
};
var lineRenderer2 = {
  type: "simple",
  symbol: lineSymbol2
};

//***************************************************************** формирование шаблонов всплывающих окон


//Шаблон для Route
var templatePunkts = {
          // autocasts as new PopupTemplate()
          title: "Пункты маршрута",
          content: [
            {
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "ZValue",
                  label: "Высота"
                }
              ]
            }
          ]
        };




 


           //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Всплывающее окно конец !!!!!!!!!!!!!!!!!!!!!!!!!!
           segmentLayer = new FeatureLayer({
        url:   //      "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/flyghtseg/FeatureServer",
        sourceFlyghtSeg,
        outFields: ["*"],
        hasM:true,
        hasZ:true,
        returnM :true,
        returnZ: true
            });

        
             routeVecLayer = new FeatureLayer({
        url:   // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/TemplRout/FeatureServer/0",
        sourceTrackRoute, 
        
        outFields: ["*"],
        hasM:true,
        hasZ:true,
        returnM :true,
        returnZ: true,
        title : "My Route" 
            });

       /* var relSh=new Relationship(
          {
             relatedTableId:routeVecLayer.id, 
             relationshipTableId :segmentLayer.id,
             keyField : "flyid",
             keyFieldInRelationshipTable: "flyid",
             composite : false,
             cardinality : "one-to-many",
             role : "origin"

          }

        );
          */



             tableLayer = new FeatureLayer({
        url:    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/TemplRout/FeatureServer/0",
        sourceTrackRoute,
        outFields: ["*"],
        renderer :lineRenderer2,
        listMode :"hide"
            });
            
             tableZoneLayer = new FeatureLayer({
        url:  //  "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/templZone/FeatureServer/1",
        sourceTrackZone,
        outFields: ["*"],
        renderer:zoneRenderer2,
        listMode :"hide" });
          
         

             flyVecLayer = new FeatureLayer({
        url:  // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/flyghtRoute/FeatureServer/0",
        sourceFlyghtRoute,
        outFields: ["*"],
        hasM:true,
        hasZ:true,
        returnM :true,
        returnZ: true
       
            });
         flyZoneLayer = new FeatureLayer({
        url:  // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/templZone/FeatureServer/0",
        sourceFlyghtZone,
        outFields: ["*"],
        
        hasZ:true,
       returnZ: true
       
            });
            
            
            
//************************************************* Формирование слоев           
      
      
  
  
        restrictLayer = new FeatureLayer({
                    url:   // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/prohibited/FeatureServer",
                   // "https://abr-gis-server.airchannel.net/airchannel/rest/services/SPb/Prohibited_areas/FeatureServer",
                   "https://abr-gis-server.airchannel.net/airchannel/rest/services/Airspace_Azerbaijan/MapServer/6",
                   title : "Restrict"
                  
                  });
        prohLayer = new FeatureLayer({
                  url:   // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Restricted_areas/FeatureServer",
                  "https://abr-gis-server.airchannel.net/airchannel/rest/services/Airspace_Azerbaijan/MapServer/5",
                  title : "Prohibited"   
                  
                  
                  });
         
                   zoneLayer = new FeatureLayer({
          url:    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/templZone/FeatureServer/1",
          sourceTrackZone,
        outFields: ["*"],
        
        hasZ:true,
        
        returnZ: true,
                  renderer:zoneRenderer,
                  title : "My Zone"
                   });         
                  
          routeLayer = new FeatureLayer({
          url:   // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/TemplRout/FeatureServer/0",
          sourceTrackRoute,
        outFields: ["*"],
        hasM:true,
        hasZ:true,
        returnM :true,
        returnZ: true,
                  renderer:lineRenderer,
                  title : "My Route"
                   });
         punktsLayer = new FeatureLayer({url: //"https://abr-gis-server.airchannel.net/airchannel/rest/services//Dev/OwnerRoutePoints/FeatureServer",
        //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/PunktPoints/FeatureServer",
        sourceFlyghtPunkts,
                      popupTemplate:templatePunkts,
                      hasM:true,
                      hasZ:true,
                     returnM :true,
                     returnZ: true,   
                      title : "My Flight"
                     });

     
     
   let grpMobail=new GroupLayer();
   grpMobail.title="Мобильная связь";
   let tele2 =new GroupLayer();
       tele2.title="Tele2"
   var tele2g= new WebTileLayer({urlTemplate:'https://new-msk.tele2.ru/maps/_2g/{level}/{col}/{row}.png',title: "TELE2_2G",  visible :false });
   var tele3g= new WebTileLayer({urlTemplate:'https://new-msk.tele2.ru/maps/_3g/{level}/{col}/{row}.png',title: "TELE2_3G",  visible :false });
   var telelte= new WebTileLayer({urlTemplate:'https://new-msk.tele2.ru/maps/_4g/{level}/{col}/{row}.png',title: "TELE2_LTE",  visible :false });
   tele2.layers.add(tele2g);tele2.layers.add(tele3g);tele2.layers.add(telelte); grpMobail.layers.add(tele2);
   
   let mts   =new GroupLayer();
       mts.title="MTS"
   var mts2g= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/g2_New/{level}/{col}/{row}',title: "MTS_2G",  visible :false });
   var mts3g= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/g3_New/{level}/{col}/{row}',title: "MTS_3G",  visible :false });
   var mtslte= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/glte_New/{level}/{col}/{row}',title: "MTS_LTE",  visible :false });
   mts.layers.add(mts2g);mts.layers.add(mts3g);mts.layers.add(mtslte); grpMobail.layers.add(mts)
 

   let megafon =new GroupLayer();
   megafon.title="Megafon"
   var megafon2g= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=2g',title: "Megafon_2G",  visible :false});// ,spatialReference: { wkid: 3395 } });
   var megafon3g= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=3g',title: "Megafon_3G",  visible :false});// , spatialReference: { wkid: 3395 }});
   var megafonlte= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte',title: "Megafon_LTE",  visible :false});// , spatialReference: { wkid: 3395 }});
   var megafonltep= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte_plus',title: "Megafon_LTE+",  visible :false});// , spatialReference: { wkid: 3395 }});
   
   console.log(megafon3g.spatialReference.wkid);
   megafon.layers.add(megafon2g);megafon.layers.add(megafon3g);megafon.layers.add(megafonlte);megafon.layers.add(megafonltep); grpMobail.layers.add(megafon)
  
   let beeline =new GroupLayer();
   
   beeline.title="Beeline"
   var beeline2g= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/2G/current/{level}/{col}/{row}.png',title: "Beeline_2G",  visible :false });
   var beeline3g= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/3G/current/{level}/{col}/{row}.png',title: "Beeline_3G",  visible :false });
   var beelinelte= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/4G/current/{level}/{col}/{row}.png',title: "Beeline_LTE",  visible :false });
   beeline.layers.add(beeline2g);beeline.layers.add(beeline3g);beeline.layers.add(beelinelte); grpMobail.layers.add(beeline)




     let grpLayer=new GroupLayer();
      grpLayer.title="Weather";    
     // grpLayer.visible=false;

     let     windLayer= new WebTileLayer({
   urlTemplate: //'https://tile.openweathermap.org/map/wind_new/{level}/{col}/{row}.png?appid=b50368b2d7ae4ceadd84592e53407e04',
   'https://tiles.qsupport.mts.ru/g2_New/{level}/{col}/{row}',
  //opacity: 0.5,
  title: "Wind",
  visible :false
  });
  grpLayer.layers.add(windLayer);
  let prepLayer= new WebTileLayer({
  urlTemplate: 'https://tile.openweathermap.org/map/precipitation_new/{level}/{col}/{row}.png?appid=b50368b2d7ae4ceadd84592e53407e04',
  //opacity: 0.5,
  title: "Prepitation",
  visible :false
  });
  grpLayer.layers.add(prepLayer);

      let    pressLayer= new WebTileLayer({
  urlTemplate: 'https://tile.openweathermap.org/map/pressure_new/{level}/{col}/{row}.png?appid=b50368b2d7ae4ceadd84592e53407e04',
  //opacity: 0.5,
  title: "Pressure",
  visible :false
  });
  //************************************************************************* добавление слоев к карте                   
              grpLayer.layers.add(pressLayer);
              webmap.add(grpLayer);
              webmap.add(grpMobail);

    
              let defQ=buildDefinitionQuery();  

                 zoneLayer.definitionExpression=defQ;
                 webmap.add(zoneLayer);
                 routeLayer.definitionExpression=defQ;
                 tableLayer.definitionExpression="objectid < 0";
                 tableZoneLayer.definitionExpression="objectid < 0";
                  webmap.add(routeLayer);
                  webmap.layers.reorder(routeLayer, webmap.layers.length); 
                  punktsLayer.definitionExpression=buildDefinitionQueryPunkts();//timeSlider);  
                  webmap.layers.add(punktsLayer);

        webmap.layers.reorder(punktsLayer, webmap.layers.length);   
        bufferLayer.title=("Конфликты")
        webmap.layers.add(bufferLayer);   
        webmap.layers.reorder(bufferLayer, webmap.layers.length); 
        layerManual.title="Work Graphics"
        webmap.layers.add(layerManual);
        webmap.layers.reorder(layerManual, webmap.layers.length); 
        webmap.layers.add(selectLayer)
       // webmap.layers.add(segLayer)
        webmap.layers.add(tableLayer)
        webmap.layers.add(tableZoneLayer)

        //webmap.add(notamLayer);
        searchWidget.sources.push({layer :  new FeatureLayer({
                   url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/Airspace_RF_Azerbaijan/MapServer/23"
                 
         }), 
          searchFields :["identification"],
          displayField: "identification",
          outFields: ["identification","subject"],
          name : "Notam",
          exactMatch: false,
          placeholder :"example : {G0374/2020}"});    
          searchWidget.sources.push({layer :  new FeatureLayer({
            url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/Airspace_RF_Azerbaijan/MapServer/8"
          
  }), 
   searchFields :["name","description"],
   displayField: "description",
   outFields: ["name","description"],
   name : "Prohibite",
   maxSuggestions: 10,
   maxResults:7,
   exactMatch: false,
   placeholder :"example : {UKP15}"});

   searchWidget.sources.push({layer :  new FeatureLayer({
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/Airspace_RF_Azerbaijan/MapServer/6"
  
}), 
searchFields :["name","description"],
displayField: "description",
outFields: ["name","description"],
name : "Danger",
maxSuggestions: 10,
maxResults:7,
exactMatch: false,
placeholder :"example : {ULD10}"});

searchWidget.sources.push({layer :  new FeatureLayer({
  url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/Airspace_RF_Azerbaijan/MapServer/7"

}), 
searchFields :["name","description"],
displayField: "description",
outFields: ["name","description"],
name : "Restricted",
maxSuggestions: 10,
maxResults:7,
exactMatch: false,
placeholder :"example : {ULD10}"});



        //!!!!!!!!!!!!!!!!!!!!!!!  Extent Азербайджан !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        view.extent= new Extent({
              
              xmin: 44.0,
              ymin: 37.0,
              xmax: 51.0,
              ymax: 43.0,
             spatialReference: {
             wkid: 4326
                        }
              });
        
           
         //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  
        view.popup.watch("visible", function(vis) {
          if (!vis) selectLayer.graphics.removeAll();

        });
        view.popup.watch("selectedFeature", function(graphic) {
    if (graphic) { 
      if (graphic.geometry){  
    let graphic2=graphic.clone();    
    if (graphic2.geometry.type=="polygon")
           graphic2.symbol=fillSymbolSelect;
    if (graphic2.geometry.type=="polyline")
           graphic2.symbol=lineSymbolSelect;   
    if (graphic2.geometry.type=="point")
           graphic2.symbol=markerSymbolSelect;   
               
    selectLayer.graphics.removeAll();
    selectLayer.graphics.add(graphic2);
  
      }
  }
});


    });
  

 //   /*export*/ function myCheckFlyght()
//{
    // alert(flypts.length);
     
//     myCheckFly();
//}                    
  
    /*export*/ function covertTime(stt)
        { 
         var st1=stt.toISOString();
         var i1=st1.indexOf("T")
         var i2=st1.indexOf(".",i1)
        
         var st2=st1.substring(0, i2);
         var st=st2.replace("T", " ");
         return st;
        }
   
     //Фильтр траекторий по  ID клиента
     /*export*/  function buildDefinitionQuery() {
          
         // var ownerId= document.getElementById("ownerid").value;
          
          
          //var defQuery= "ownerid = '"+ownerId+"'" ;
          defQuery="";
          return defQuery;
        }

     //Фильтр пунктов полетов по времени       
   /*export*/   function buildDefinitionQueryPunkts()/*timeSlider)*/ {   // показывать точки полетов в суточном интервале от установленной даты
    
          var et=timeSlider.timeExtent.end.getTime();
          var st=timeSlider.timeExtent.start.getTime();
          var ett= new Date(et); ett.setDate(ett.getDate()+1)
          var stt= new Date(st);
     var startDt=covertTime(stt);//st;
     var endDt=covertTime(ett);//et
     var defQuery ="tdate >= timestamp'"+ startDt+"' And tdate <= timestamp'"+endDt+ "'";
     return defQuery;
   }
    
   function clean(withBuffer)
   {

       layerManual.graphics.removeAll();
       if(withBuffer)
        bufferLayer.graphics.removeAll();
       
     //  segLayer.removeAll();
       tableLayer.definitionExpression="objectid < 0";
       tableZoneLayer.definitionExpression="objectid < 0"; 
      // featureTable.refresh();
      // featureTableZone.refresh();
       
       getDetailRoute(document.getElementById("routeid").value,false);
       
       document.getElementById("routeid").value="";
       document.getElementById("flyid").value="";
       document.getElementById("nameroute").value=""; 
       document.getElementById("resCheck").value="";
       message.innerText = "";
       cleanFly(/*punktsLayer,*/markerSymbol);
       
       
   } 
   
  /*export*/ function cleanFly(/*punktsLayer,*/markerSymbol)
           {
            var markerPunktsRenderer = {
              type: "unique-value",  // autocasts as new UniqueValueRenderer()
              field: "flyid",
              defaultSymbol: markerSymbol,  // autocasts as new SimpleFillSymbol()
              uniqueValueInfos: [],
              
            }; 
            punktsLayer.renderer=markerPunktsRenderer;
            punktsLayer.refresh();
           }

   /*export*/    function getRouteRecord      (idRoute,resFunc) {
              var settings = { url:apiHTML+"track/"+idRoute,
                               "method": "GET",
                                "timeout": 0,
                                beforeSend: function (xhr) {
                                  xhr.setRequestHeader("Authorization", 'Bearer '+ token);
                              }
                };
                  
                 $.ajax(settings).done(function (response) {
                  //alert(response.track) 
                  resFunc( response.track,response.id);
              //      console.log(response);
                });
                  };  
    
    /*export*/    function checkRouteName(isNew)
    {
      
      if(isNew)
      {
      if (document.getElementById("routeid").value != "")  // наименование маршрута
      {
      alert ("Маршрут существует");
      return false;
      }
    }
     let newName=document.getElementById("nameroute").value;  
     if (document.getElementById("nameroute").value=="")  // наименование маршрута
      {
      newName=prompt ("Введите наименование маршрута");
      if (newName==null) return false;
      }
    
        
       
      
      for(;;) 
      {
       let flag=true; 
       for(let i=0;i<tabName.length;i++)
       {
        if (tabName[i][1]==newName)
        {
         if(tabName[i][0]==document.getElementById("routeid").value)
         {
          newName =prompt("Название дублируется , введите новое имя",newName);
          flag=false; 
         if (newName==null)
           return false;
         else 
          break;  
         }
       }
      }
      if (flag)
      {
        document.getElementById("nameroute").value=newName;
        break;
      }
    }
       return true;

    }              
    /*export*/    function mySaveRouteAs(event)
                  {
                    if (!checkRouteName(false)) return;
                   
                     var rid=document.getElementById("routeid").value;
                     let elem=document.getElementById("DR"+rid);
                     let elem2=document.getElementById("RD"+rid);
                     let stat=2;
                     if (elem ==null )
                     {
                       stat=1;
                       if(elem2==null)
                       stat=0;
                     }
                     createRecordRouteTable(parseInt(document.getElementById("ownerid").value),stat,document.getElementById("nameroute").value,copyRouteAs);
                     
                  }     
                  function myImportGraphic(event)
                  {
                    var rid=document.getElementById("routeid").value;
                    let elem=document.getElementById("DR"+rid);
                    clean(true);
                    if (elem ==null )
                    {
                      let whr="routeid = '"+rid+"' And numb < 0 ";
                       
                    routeVecLayer.queryFeatures({
                      where : whr,
                      returnGeometry: true,
                      returnZ :false,
                      returnM : false,  
                      outFields: ["*"]
                    })
                    .then(function(ftfSet) 
                    {
                      
                      lin = PROJECTION.project(ftfSet.features[0].geometry, { wkid: 3857 },PROJECTION.getTransformation(ftfSet.features[0].geometry.spatialReference,{ wkid: 3857 }));     
                      lin = GEOMETRYENGINE.generalize(lin,10,false,"meters"); 
                      let imGr=new GRAPHIC({
                         geometry:lin,
                         symbol:lineSymbol3

                      })
                      layerManual.add(imGr);
                    }); 
                    getDetailRoute(rid,false);
                    queryRoad(event,"");
                    }
                    else
                    {
                       
                      let whz="routeid = '"+rid+"'"; 
                      zoneLayer.queryFeatures({
                      where : whz,
                      returnGeometry: true,
                      returnZ:false,
                      returnM:false,
                        outFields: ["*"]
                        
            
                      })
                      .then(function(ftfSet) {
                        pol = PROJECTION.project(ftfSet.features[0].geometry, { wkid: 3857 },PROJECTION.getTransformation(ftfSet.features[0].geometry.spatialReference,{ wkid: 3857 }));     
                        let imGr=new GRAPHIC({
                          geometry:pol,
                          symbol:fillSymbol3
                        })
                       layerManual.add(imGr);
               

                      });
                      getDetailZone(rid,false);
                      queryRoad(event,"");
                    }
                    flagEdit=true; 
                  }        
     /*export*/   function copyRouteAs(newRouteId)
                  {
                    var rid=document.getElementById("routeid").value;
                    let elem=document.getElementById("DR"+rid);
                    if (elem ==null )
                    {
                     let whr="routeid = '"+rid+"'";
             
                    routeVecLayer.queryFeatures({
                      where : whr,
                      returnGeometry: true,
                      returnZ :true,
                      returnM : true,  
                      outFields: ["*"],
                      orderByFields : ["numb"]
                        
            
                      })
                      .then(function(ftfSet) 
                      {
                        var lgr=[];
                        let Z2;
                        let Z1;
                        let Speed;
                     
                        for (let i=1;i<ftfSet.features.length;i++)
                         {
                          
                             Z1=document.getElementById((i-1).toString()+"ZZ"+rid).value;
                            
                            if(i==ftfSet.features.length-1)
                                Z2=Z1;
                            else    
                                 Z2=document.getElementById((i).toString()+"ZZ"+rid).value;
                             Speed=
                              document.getElementById((i-1).toString()+"SP"+rid).value;  
                            var lineGraphic = new GRAPHIC(
                            {
                              geometry :ftfSet.features[i].geometry, 
                              attributes : {
                                "numb" : ftfSet.features[i].getAttribute("numb"),
                                "ownerid" : ftfSet.features[i].getAttribute("ownerid"),
                                "routeid" : newRouteId,
                                 "zmin" :  ftfSet.features[i].getAttribute("zmin"),
                                 "zmax" :  ftfSet.features[i].getAttribute("zmax"),
                                 "z1" :Z1  ,
                                 "z2" :Z2  ,  
                                 "speed" : Speed  
                                   }
                             });
                             lgr.push(lineGraphic);
                         }

                         var lineGraphic = new GRAPHIC(
                          {
                            geometry :ftfSet.features[0].geometry, 
                            attributes : {
                              "numb" : ftfSet.features[0].getAttribute("numb"),
                              "ownerid" : ftfSet.features[0].getAttribute("ownerid"),
                              "routeid" : newRouteId,
                               "zmin" :  ftfSet.features[0].getAttribute("zmin"),
                               "zmax" :  ftfSet.features[0].getAttribute("zmax"),
                               "z1" :Z2  ,
                               "z2" :Z2  ,  
                               "speed" : Speed  
                                 }
                           }); 
                        lgr.push(lineGraphic);
                        let eds={
                          addFeatures: lgr
                                } 
                        
                                var dat={userId: parseInt(document.getElementById("ownerid").value),
                                track: {
                                 heightMin :ftfSet.features[0].getAttribute("zmin") ,
                                 heightMax: ftfSet.features[0].getAttribute("zmax"),
                                 latitude: 0,
                                 longitude: 0,
                                 radius: -1,
                                 type: 2,
                                 isFinal: true,
                                 shape : JSON.stringify(ftfSet.features[0].geometry)
                              }
                               }
                               
                                createTrackAs(eds,dat,newRouteId);     
                                changeExtent(ftfSet.features[0].geometry); 

                      });
                    }
                    
                    else
                    {
                      
                      let whz="routeid = '"+rid+"'"; 
                      zoneLayer.queryFeatures({
                      where : whz,
                      returnGeometry: true,
                      returnZ:true,
                      returnM:true,
                        outFields: ["*"]
                        
            
                      })
                      .then(function(ftfSet) {
                        var ltt=0;
                        var lnt=0;
                        var rd=document.getElementById("RD"+rid).value;
                        if (rd!=null)
                        {    
                         ltt=document.getElementById("LT"+rid).value;
                         lnt=document.getElementById("LN"+rid).value;
                        }
                        
                        
                        var dr=document.getElementById("DR"+rid).value;
                        var zmin=document.getElementById("ZN"+rid).value;
                        var zmax=document.getElementById("ZX"+rid).value;
                        
                         
                      let   cir=ftfSet.features[0].geometry;  
                      if (rd>0)
                      {
                        let pt1=new POINT(
                          {
                            x: lnt, 
                            y: ltt,
                            z: zmin,
                            spatialReference : {wkid : 4326 } 
                          });
                          cir=new CIRCLE({
                          center : pt1,
                          numberOfPoints:720,
                          radius :rd,
                          geodesic : true,
                          radiusUnit:"meters",
                          spatialReference : {wkid : 4326}
                      });  
                      
                    
                    }
                    else
                     rd=-1;
                    var polGraphic = new GRAPHIC(
                      {
                        geometry :cir, 
                        attributes : {
                         
                         "ownerid" : document.getElementById("ownerid").value,
                         "routeid" : newRouteId,
                         "zmin" :  zmin,
                         "zmax" :  zmax,
                         "radius"    : rd,
                         "duration": dr
                                  }
    
                          });
                        
                    let eds={
                         addFeatures: [polGraphic]
                    } 
                    let tp=1;
                    if (rd>0) tp=0;
                    
                    var dat={userId: parseInt(document.getElementById("ownerid").value),
                      track: {
                       heightMin :parseInt(zmin) ,
                       heightMax: parseInt(zmax),
                       latitude: +ltt,
                       longitude: +lnt,
                       radius: rd,
                       type: tp,
                       isFinal: true,
                       shape : JSON.stringify(cir)
                    }
                     }
                      
                      createZone(eds,dat,newRouteId);//applyPolEdits(editsPol,dat,routeid);  
            
            
                    changeExtent(cir);
            
                      });
                    }   
            
                  }

    /*export*/  function eventRouteDetal(event){
     
        
        var gld=event.target.id;
      
        getRouteRecord      (gld,evRouteDetal);
       }
   /*export*/   function evRouteDetal( track,trackid)
       {
         
        let gld=trackid;
        
              if (track.type<2)
              {     
                     let elem=document.getElementById("DR"+gld);
                     if (elem ==null )  
                     {
                       let oldrid=document.getElementById("routeid").value
                       {
                        removeSelectSeg(oldrid,"")  
                        getDetailZone(oldrid,false)
                       }
                       getDetailZone(gld,true);
                       queryRoad(event,gld)
                     }
                     else
                      {
                      getDetailZone(gld,false);
                      queryRoad(event,"");
                      }

              }
              else
              if (track.type==2){
                emptyArray(flypts);
                    //flypts=[];
                let elem=document.getElementById("0ZZ"+gld);
                      if (elem ==null )  
                        { 
                         let oldrid=document.getElementById("routeid").value
                         {
                          removeSelectSeg(oldrid,"")  
                         getDetailRoute(oldrid,false) 
                         }
                         getDetailRoute(gld,true);
                         queryRoad(event,gld)
                        }
                        else
                            {
                            
                            removeSelectSeg(gld,"");
                            getDetailRoute(gld,false);
                            queryRoad(event,"");
                            }
                      }
           // });
          
           
           
           

     }    
     
     
     /*export*/ function removeSelectSeg(rid,numb){  

      for (;;)
      { var flag=true;
       selectLayer.graphics.forEach(function(item, i){
        // Do something here to each graphic like calculate area of its geometry
        if (item.getAttribute("routeid")==rid)
         {
          if (numb!="")
          { 
          if (item.getAttribute("numb")==numb)
           {
            selectLayer.graphics.remove(item); 
            return;
           }
          }
        
        else 
        {
          selectLayer.graphics.remove(item);
          flag=false;
        }
        }
      });
      if (flag) return;
    }
    }

    

   /*export*/ function cancelFly(event) {
            
      if (confirm("Вы уверены в отмене полета ?"))
      {
      let gld=event.target.id.substring(0,event.target.id.length-1);  
      let tp=event.target.id.substring(event.target.id.length-1);
      if (tp=="2") 
             modLayerRec(gld,flyVecLayer,"flyid","status",6);
      else
            modLayerRec(gld,flyZoneLayer,"flyid","status",6); 
      let dat ={
        "statusId": 6
          
            }
    
          updateRecordFlyghtTable(dat,gld,false);
          
      return;  
      
          }

  }
  
  function modLayerRec(gld,modLayer,atrName,atrNameMod,val)
  {

    modLayer.queryFeatures({
      where : atrName+" = '"+gld+"'",
      returnGeometry: true,
      returnZ : true,
      returnM : true,
        outFields: ["*"],
      }).then(function(ftfSet) {
         
         ftfSet.features[0].setAttribute(atrNameMod,val);
         param2={ updateFeatures: ftfSet.features};
         updateLayer(modLayer,param2);

      })


  } 
  
  

  

  /*export*/ function eventFlyDetal(event){

    var gld=event.target.id.substring(1);
    
    var settings = { url:apiHTML+"application/"+gld,
         
                    "method" : "GET",
                    beforeSend: function (xhr) {
                      xhr.setRequestHeader("Authorization", 'Bearer '+ token);
                  }
                     
              
          };
      $.ajax(settings).done(function (response) {
          
            
            let dt=response.application.start.date;
            dt=new Date(dt);
            timeSlider.values=[dt];
            let tp=response.track.type; 
            if(tp==2)
       {
            detalFlyght(flyVecLayer,0,tp,gld)
       }
       else{
           detalFlyght(flyZoneLayer,0,tp,gld)
        //      console.log(response);
          }
        });
     return;  
  

 }

 /*export*/ function detalFlyght (detalLayer,reg,tp,gld) {
  // detalLayer - flyVeclayer или zonelayer в зависимости от типа полета
  // tp (1|2) тип полета 1 - траектория 2-зона
  // reg - режим обработки 0 - просмотр дуталей 1 -скрытие деталей при отмене
  // gld глобальная переменная выбранного полета

    var u=true;
    if (tp==2) u=false;

    var whFF="flyid = '"+gld+"'"          
      detalLayer.queryFeatures({
         where : whFF,
         returnGeometry: true,
         returnZ : true,
         returnM : u,
           outFields: ["*"],
         }).then(function(ftfSet) {
  
           if (reg==0)   
            //Просмотр полета
           {
           
           var markerPunktsRenderer = {
               type: "unique-value",  // autocasts as new UniqueValueRenderer()
               field: "flyid",
               defaultSymbol: markerSymbol,  // autocasts as new SimpleFillSymbol()
               uniqueValueInfos: [{
                 // All features with value of "North" will be blue
                 value: gld,
                 symbol: markerSymbol2
               }],
               
             }; 

            punktsLayer.renderer=markerPunktsRenderer;

            var  geom=ftfSet.features[0].geometry;
             changeExtent(geom);
             punktsLayer.refresh()

           }
           else  
           //Скрытие деталей полета
           {
            var sD=new Date(ftfSet.features[0].getAttribute("sdate"));
            var eD=new Date(ftfSet.features[0].getAttribute("edate"));
             ftfSet.features[0].setAttribute("sdate",covertTime(new Date(0)));
             eD.setTime(eD.getTime()-sD.getTime())
             ftfSet.features[0].setAttribute("edate",covertTime(eD));

             const edts3 = {
               updateFeatures: ftfSet.features
                     };
               updateLayer(detalLayer,edts3);      
             
              //Скрытие пунктов полета  
             punktsLayer.queryFeatures({
               where : whFF,
               returnGeometry: true,
               returnZ : true,
               returnM : true,
            
               outFields: ["*"],

             }).then(function(ptSet) {
              
               for (let i=0;i<ptSet.features.length;i++)
               {
               let  tD=new Date(ptSet.features[i].getAttribute("tdate"));
                 tD.setTime(tD.getTime()-sD.getTime())
                 ptSet.features[i].setAttribute("tdate",covertTime(tD));
               }
               const edts4 = {
                 updateFeatures: ptSet.features
                       };
                 updateLayer(punktsLayer,edts4);

             });

             //Скрытие сегментов полета
             if (tp==2)
             {
               segmentLayer.queryFeatures({
                 where : whFF,
                 returnGeometry: true,
                 returnZ : true,
                 returnM : true,
                 outFields: ["*"],

               }).then(function(stSet) {
                
                 for (let i=0;i<stSet.features.length;i++)
                 {
                   let tD=new Date(stSet.features[i].getAttribute("tdate"));
                   tD.setTime(tD.getTime()-sD.getTime())
                   stSet.features[i].setAttribute("tdate",covertTime(tD));
                 }
                 const edts5 = {
                   updateFeatures: stSet.features
                         };
                   updateLayer(segmentLayer,edts5);

               });


               
             }  
           }
         });
         

 }
   /*export*/  function changSelectSeg(event) 
     {
       
      
       //document.getElementById("routeid").value
       
       let gld=event.target.id;
       
       let ind =gld.indexOf("CH");
       var numb=gld.substring(0,ind);
       var rid=gld.substring(ind+2);
       var WRR="routeid = '"+rid+"' And numb = "+numb;
       
       if (event.target.checked)
        {                  
           routeVecLayer.queryFeatures({
             where: WRR,
             returnGeometry: true,
             outFields: ["*"],
             outSpatialReference :{ wkid : 4326 }
           }).then(function(ftfSet) {
           
            
           var ll=new GRAPHIC(
              {
                geometry :ftfSet.features[0].geometry,
                symbol : lineSymbolSelect,
                attributes : {
                 "routeid": rid,
                 "numb":  numb
                 }
              } 
            );
            selectLayer.graphics.add(ll);

           })
        }
        else
        {

         removeSelectSeg(rid,numb);
         
         
        }
       
     }
     /*export*/ function mySaveRoute(event)
    {
       var rid=document.getElementById("routeid").value;  
       let elem=document.getElementById("DR"+rid);
      let tp=2; 
      if (elem ==null )
      {
        let whr="routeid = '"+rid+"' And numb >= 0";
        routeVecLayer.queryFeatures({
          where : whr,
          returnGeometry: true,
          returnZ :true,
          returnM : true,  
          outFields: ["*"],
          orderByFields : ["numb"]
            

          })
          .then(function(ftfSet) 
          {
            var feats=[];
           // alert(ftfSet.features.length)
            for (let i=0;i< ftfSet.features.length;i++)
            {
            var sp=document.getElementById(i.toString()+"SP"+rid).value;
            //alert(sp)
            var z=document.getElementById(i.toString()+"ZZ"+rid).value;
           // alert(z);
            ftfSet.features[i].setAttribute("speed",sp); 
            ftfSet.features[i].setAttribute("z1",z);
            feats.push(ftfSet.features[i]);
            }
      
        let eds={
             updateFeatures:feats
                 } 
           // alert(feats.length)  ;  
        updateLayer(routeVecLayer,eds)
                });
      }   
      else
      {
        tp=1;
        let whz="routeid = '"+rid+"'"; 
        zoneLayer.queryFeatures({
          where : whz,
          returnGeometry: true,
          returnZ:true,
          returnM:true,
            outFields: ["*"]
            

          })
          .then(function(ftfSet) {
            var rd=document.getElementById("RD"+rid).value;
            var ltt=0;
            var lnt=0; 
            if (rd!=null)
            {
             ltt=document.getElementById("LT"+rid).value;
             lnt=document.getElementById("LN"+rid).value;
            }
            
            var dr=document.getElementById("DR"+rid).value;
            var zmin=document.getElementById("ZN"+rid).value;
            var zmax=document.getElementById("ZX"+rid).value;
            ftfSet.features[0].setAttribute("duration",dr); 
            ftfSet.features[0].setAttribute("zmin",zmin);
            ftfSet.features[0].setAttribute("zmax",zmax);
            ftfSet.features[0].setAttribute("radius",rd);
             
          let  cir=ftfSet.features[0].geometry;  
          if (rd>0)
          {
            tp=0;
            let pt1=new POINT(
              {
                x: lnt, 
                y: ltt,
                z: zmin,
                spatialReference : {wkid : 4326 } 
              });
            let cir=new CIRCLE({
              center : pt1,
              numberOfPoints:720,
              radius :rd,
              geodesic : true,
              radiusUnit:"meters",
              spatialReference : {wkid : 4326}
          });  
          
          ftfSet.features[0].geometry=cir;
        }
        
            
        let eds={
             updateFeatures: [ftfSet.features[0]]
        } 
        updateLayer(zoneLayer,eds);
        changeExtent(cir);


        /******************************************* */
        var dat={userId: parseInt(document.getElementById("ownerid").value),
          track: {
            radius: rd,
            type:tp,
            isFinal:true,
            shape : JSON.stringify(cir)
               }
            }
             
         var sett = { url:apiHTML+"track/"+rid,
                     "method" : "PUT",
                      data : JSON.stringify(dat),
                      contentType: "application/json; charset=utf-8",
                      dataType: "json",
                      beforeSend: function (xhr) {
                        xhr.setRequestHeader("Authorization", 'Bearer '+ token);
                    },
                      success: function(data){;
                                 },
                error: function(errMsg) {
                    alert(JSON.stringify(errMsg)+" !!");
                }
              };
        
            $.ajax(sett).done(function (response) {
           
            });
       /******************************************************** */     

      });
      }       

    }

    //**************** редактирование заданного слоя  */
/*export*/ function updateLayer(lay,params) {
  lay
         .applyEdits(params)
         .then(function(editsResult){ 
           

       })
         .catch(function(error) {
             alert( error.name);
            alert( error.message);
           
         });

}
/*export*/ function emptyArray(arr) {
while(arr.length > 0) {
  arr.pop();
} 
}



   /******************************************* add Route *****************************************************************************************************/
   /*export*/ function createZone(params,dat,routeid) {
    zoneLayer
      .applyEdits(params)
      .then(function(editsResult1){ 
        layerManual.removeAll()
        tableZoneLayer.refresh()
        
        applyTableUpdate(dat,routeid);
       
      })
      .catch(function(error) {
         alert( error.name);
         alert( error.message);
        
      });
  
   }
  
   /*export*/ function createTrackAs(params,dat,routeid) {
    routeVecLayer
      .applyEdits(params)
      .then(function(editsResult1){ 
        
        //tableZoneLayer.refresh()
     
        applyTableUpdate(dat,routeid);
       
      })
      .catch(function(error) {
         alert( error.name);
         alert( error.message);
        
      });
  
   }
  
  
  /*export*/ function createRecordRouteTable(id,tp,nm,functVect) {
    var settings = { url:apiHTML+"track/add",
       
                  "method" : "POST",
                   data : JSON.stringify({"userId": id,
                   "track": {
                     "type": tp,
                     "name": nm,
                     "isFinal": false 
                   }
                  }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function (xhr) {
              xhr.setRequestHeader("Authorization", 'Bearer '+ token);
          },
            success: function(data){;
              
              
              functVect(data.id);
              
            },
  
            error: function(errMsg) {
                alert(JSON.stringify(errMsg)+" !!");
            }
            
        };
        
        $.ajax(settings).done(function (response) {
            //alert( response.id +" ??");
      //      console.log(response);
        });
    }
  
  
  /*export*/  function applyTableUpdate(dat,routeid) {
      
     emptyArray(rlb);
  
     //while(rlb.length > 0) {
     // rlb.pop();
      // }
      var settings = { url:apiHTML+"track/"+routeid,
         
                    "method" : "PUT",
                     data : JSON.stringify(dat),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", 'Bearer '+ token);
            },
              success: function(data){;
       //         alert("++++++++");
       //         alert("1111")
                getUserRoute(routeid);
                message.innerText = " Маршрут создан. ";
              },
  
              error: function(errMsg) {
                  //alert("#######");
                  alert(JSON.stringify(errMsg)+" !!");
              }
              
          };
         
          $.ajax(settings).done(function (response) {
         //     alert( response.id +" ??");
        //      console.log(response);
          });
      }
  
      /*export*/ function updateVecRoute(params,dat,routeid) {
    
        routeVecLayer
          .applyEdits(params)
          .then(function(editsResult){ 
            
            var rd=document.getElementById("routeid").value
            tableLayer.definitionExpression="routeid = '"+rd+"' And numb >= 0"                   ;
           // featureTable.refresh();
            
          // editsResult.updateFeatureResults[0].getAttribute("z1");
           message.innerText = " Высоты определены. ";
           layerManual.removeAll();
          
           applyTableUpdate(dat,routeid);  
          
          
                    
      
      
            
        })
          .catch(function(error) {
              alert( error.name);
             alert( error.message);
            
          });
          
          
        
      }
      
  /*export*/ function makeNewRoute() {
    var ownerId=document.getElementById("ownerid").value;  
    emptyArray(profil);
    emptyArray(flypts);
    if (!checkRouteName(true)) return; 
  
       let routeid;
       
        if(layerManual.graphics.length==0) return;
        var stat=2 
        if(layerManual.graphics.getItemAt(0).geometry.type=="polygon")
          {
           stat=0; 
          }
          if(layerManual.graphics.getItemAt(0).geometry.type=="point")
          {
           stat=1; 
          }
          createRecordRouteTable(parseInt(ownerId),stat,document.getElementById("nameroute").value,createRouteVector);
          
        return;
      
    
        
        
      
  
             function createRouteVector(routeid) {
  
                  document.getElementById("routeid").value=routeid;
  
                  let lGraph=[];
                  
                  if(layerManual.graphics.getItemAt(0).geometry.type=="polyline")
                  {
                    lGraph = makeLines();
                   
                  
                   const edits2 = {
                     addFeatures: lGraph
                    };
                    //формирование траектории
                     createTrack(edits2)//applyVecEdits(edits2);
                  }
                  else 
                  {
                    let indgr=0;
                    let rad;
                    if(layerManual.graphics.getItemAt(0).geometry.type=="point") 
                    {
                    indgr=1;
                    
                    rad=layerManual.graphics.getItemAt(1).geometry.radius; 
                    
                    }
                    var pol=layerManual.graphics.getItemAt(indgr).geometry;
                    var pol1 = PROJECTION.project(pol, {wkid: 4326},PROJECTION.getTransformation(pol.spatialReference,{wkid: 4326}));
                    
                    let rgs=[]
                    var rings=pol1.rings;
                    for (var i=0;i<rings[0].length;i++)  
                       rgs.push([rings[0][i][0],rings[0][i][1],150]);
                   var pts=[rgs];
               
                   var polyg=new POLYGON(
                     {
                       rings :pts,
                       hasZ: true,
                       hasM: false,
                       spatialReference: { wkid: 4326 }
                     }
                   ) 
                   
                 
                   if (indgr==1) 
                   {
                   ;//rad=20000 ;
                   
                   }
                   var polGraphic = new GRAPHIC(
                    {
                      geometry :polyg, 
                      attributes : {
                       
                       "ownerid" : ownerId,
                       "routeid" : routeid,
                       "zmin" :  150,
                       "zmax" :  1000,
                       "radius"    : rad,
                       "duration": 30
                                }
  
                        });
  
                        const editsPol = {
                        addFeatures: [polGraphic] 
                    };
                 let   lati;
                 let   loni;
                    if(indgr==1)
                    {
  
                   let    pt=layerManual.graphics.getItemAt(0).geometry;
                   let    pt1 = PROJECTION.project(pt, {wkid: 4326},PROJECTION.getTransformation(pt.spatialReference,{wkid: 4326}));
                       lati=pt1.y;
                       loni=pt1.x;
                    }
               //  alert(JSON.stringify(polyg));  
  //**************Формирование зоны
                  var dat={userId: parseInt(ownerId),
                   track: {
                    heightMin :150 ,
                    heightMax: 1000,
                    latitude: lati,
                    longitude: loni,
                    radius: rad,
                    type: 1-indgr,
                    isFinal: true,
    //name: "Типовой маршрут",
                    shape : JSON.stringify(polyg)
                 }
                  }
  
                   createZone(editsPol,dat,routeid);//applyPolEdits(editsPol,dat,routeid);
  
                                      
  
                  } 
                    return;
           
           }
          
        
       
      //************************************************************************************  формирование траектории
  
      function makeLines()
      {
      
       let lGr=[];   
       for(var m=0;m<layerManual.graphics.length;m++)
        {
       var  gg= layerManual.graphics.getItemAt(m);
             if (gg.geometry.type==="polyline")  //если точка
                 {
                   var geom=gg.geometry;
                   break;
                 }
           
        }
      var paths=geom.paths;
      for(var k=0;k<paths[0].length-1;k++)
        {
        var Z1=0;
        var Z2=0 ; 
         
         
  
        
  var pts=[[paths[0][k][0],paths[0][k][1],0,0],[paths[0][k+1][0],paths[0][k+1][1],0,0]];   
  var lin1=
   new POLYLINE({
   hasZ: true,
   hasM: true,
   paths: pts,
   spatialReference: { wkid: 3857 }
   });
    
  lin1 = PROJECTION.project(lin1, {wkid: 4326},PROJECTION.getTransformation(lin1.spatialReference,{wkid: 4326}));
  
  
  routeid=document.getElementById("routeid").value
  
  
  
    var lineGraphic = new GRAPHIC(
  {
    geometry :lin1, 
    attributes : {
      "numb" : k,
      "ownerid" : ownerId,
      "routeid" : routeid,
       "zmin" :  Z1,
       "zmax" :  Z2
  
         }
  
  } 
  
  );
  
  
  lGr.push(lineGraphic)
  
  // return lGr;
  
  }
  
  var n=paths[0].length-1;
  pts=[];
  for(k=0;k<paths[0].length;k++)
    pts.push([paths[0][k][0],paths[0][k][1],0,0]);   
   lin1=
   new POLYLINE({
   hasZ: true,
   hasM: true,
   paths: pts,
   spatialReference: { wkid: 3857 }
   });
       
  lin1 = PROJECTION.project(lin1, {wkid: 4326},PROJECTION.getTransformation(lin1.spatialReference,{wkid: 4326}));
  var lineGraphic = new GRAPHIC(
  {
    geometry :lin1, 
    attributes : {
      "numb" : -1,
      "ownerid" : ownerId,
      "routeid" : routeid,
       "zmin" :  Z1,
       "zmax" :  Z2
  
         }
  
  } 
  
  );
  lGr.push(lineGraphic);
  
  return lGr;
  
     } 
     function createTrack(params) {
      routeVecLayer
        .applyEdits(params)
        .then(function(editsResult1){ 
          if (editsResult1.addFeatureResults.length > 0 ) {
            
             var  whll="routeid = '"+routeid+"'"
    
               routeVecLayer.queryFeatures({
               where : whll,
               returnGeometry: true,
               returnZ: true,
               returnM: true,
               outFields: ["*"],
               })
               .then(function(ftSet) {
               var params={
               Profile_source : ftSet,
               Distance : 100
                    }
                     
                     //определение высот рельефа по траетории
                     getElevation2(ftSet); 
                    
                  
                  });
          }
        })
        .catch(function(error) {
           alert( error.name);
           alert( error.message);
          
        });
    
     }
  //****************** Определение высот рельефа по траектории */                     
  function getElevation2(ftSet) {
     var pts=[]
     var paths=[]
     var indSeg=[]
      for(var l=0;l<ftSet.features.length;l++)
      {  
       var geom1=PROJECTION.project(ftSet.features[l].geometry, { wkid: 3857 },PROJECTION.getTransformation({wkid: 4326},{ wkid: 3857 })); 
       var geom2=GEOMETRYENGINE.densify(geom1,100,"meters");
       var geom3=PROJECTION.project(geom2, {wkid: 4326},PROJECTION.getTransformation({ wkid: 3857 },{wkid: 4326}));
  
       indSeg.push([pts.length,ftSet.features[l].getAttribute("numb") ]); 
       for(var i=0;i<geom3.paths[0].length;i++)
       {
        pts.push([geom3.paths[0][i][0],geom3.paths[0][i][1]])
        paths.push([geom2.paths[0][i][0],geom2.paths[0][i][1]])
       }
       indSeg.push([pts.length,-2]);
    }
    geom3=new MULTIPOINT({ points:pts, spatialReference : { wkid: 4326 }});
    geom2=new MULTIPOINT({ points:paths, spatialReference : { wkid: 3857 }});
    view.map.ground.queryElevation(geom3, { returnSampleInfo: true })
     // Successfully sampled all points
     .then(function(result) {
         var geom4=result.geometry;
          
          var prof=[]
          
          for(var l=0;l<indSeg.length-1;l++) 
           {
             var lts=[]
             var lM=0;
             for(var k=indSeg[l][0];k<indSeg[l+1][0];k++)
             {
               lts.push([geom4.points[k][0],geom4.points[k][1],geom4.points[k][2],lM]);
               if( k<indSeg[l+1][0]-2)
                lM=lM+Math.sqrt((geom2.points[k][0]-geom2.points[k+1][0])*(geom2.points[k][0]-geom2.points[k+1][0])+(geom2.points[k][1]-geom2.points[k+1][1])*(geom2.points[k][1]-geom2.points[k+1][1]));
  
             }
             
              var lin=new POLYLINE({
                   paths : lts,
                   hasZ: true,
                   hasM: true,
                   spatialReference: { wkid: 4326 }
                 });
                 
               prof.push(lin)    
   
            }
            for(var l=0;l<indSeg.length-2;l++) 
            {
              for(var kk=0;kk<indSeg.length-1;kk++) 
             { 
              if(indSeg[kk][1]==l)
               {
               profil.push(prof[kk])
               flypts.push(prof[kk].paths[0])
               break;
               }
              }
            }
            for(kk=0;kk<indSeg.length-1;kk++) 
             { 
              if(indSeg[kk][1]==-1)
               {
               profil.push(prof[kk])
               break;
               }
              }
         //******************************************************************************************                 
     
       //************* редактирование траектории с учетом высот рельефа  */
         var whll="routeid = '"+routeid+"'"
               routeVecLayer.queryFeatures({
               where : whll,
               returnZ: true,
               returnM: true,
               orderByFields : ["numb"],
               returnGeometry: true,
                 outFields: ["*"],
               })
               .then(function(ftSet) {
                  var np=ftSet.features.length-1;
                  var Z3=-500
                   for (var m=1;m<profil[np].paths[0].length;m++)
                   {
                     
                     if(Z3<profil[np].paths[0][m][2])
                         Z3=profil[np].paths[0][m][2];    
                   }
                   for(var k=0;k<ftSet.features.length;k++)
                   { 
                    kk=ftSet.features[k].getAttribute("numb") 
                    if(kk>=0)
                    {
                     
                    ftSet.features[k].geometry=profil[kk]
                    var Z1=profil[kk].paths[0][0][2];
                    var Z2=Z1;
                   for (var m=1;m<profil[kk].paths[0].length;m++)
                   {
                     if(Z1>profil[kk].paths[0][m][2])
                         Z1=profil[kk].paths[0][m][2];
                     if(Z2<profil[kk].paths[0][m][2])
                         Z2=profil[kk].paths[0][m][2];    
                   }
                    }
                   else
                     {
                       m=profil[np].paths[0].length-1;
                       Z2=profil[np].paths[0][m][2]
                       Z1=Z2;
                       ftSet.features[k].geometry=profil[np]
                      var shp=JSON.stringify(profil[np])
                     } 
                   ftSet.features[k].setAttribute("zmin",Z1);
                   ftSet.features[k].setAttribute("zmax",Z2);
                   ftSet.features[k].setAttribute("z1",Z3+100);
                   ftSet.features[k].setAttribute("z2",Z3+100);
                   ftSet.features[k].setAttribute("speed",100);
                   
                       
                   if (k==0)
                   {
                     changeExtent(ftSet.features[k].geometry.extent);
                     //view.extent=ftSet.features[k].geometry.extent;
  
                   }
                     
  
                   }
                   
                   
  
                   const edits3 = {
                    
                  updateFeatures: ftSet.features
                          };
                   
                    var dat1={userId: parseInt(ownerId),
                            track: {
                             heightMin :Z3+5 ,
                             heightMax: Z3+100,
                             type: 2,
                             isFinal: true,
             //name: "Типовой маршрут",
                             shape : shp
                          } 
                        }    
                   updateVecRoute(edits3,dat1,routeid) ;
                        
                  });
  
  
  
  
  
  
  
  //***************************************************************************************
  
     });
  }
  
    
  //************* редактирование траектории с учетом высот рельефа  */
  
  
  
  
  
  
  
      }

      /*********************************************************************add Flyght ****************************************************************** */
      
      var startDat;
   var routeid;
   var flyid;  
   var tp; 
 /*export*/ function createRecordFlyghtTable(dat,functVect) {
    var settings = { url:apiHTML+ "application/add",
       
                  "method" : "POST",
                   data : JSON.stringify(dat ),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function (xhr) {
              xhr.setRequestHeader("Authorization", 'Bearer '+ token);
          },
            success: function(data){;
              
              //alert("$$$")
              //alert(data.id);
              functVect(data.id,data.track);
              
            },
  
            error: function(errMsg) {
                alert("####"); 
                alert(JSON.stringify(errMsg)+" !!");
            }
            
        };
        
        $.ajax(settings).done(function (response) {
            //alert( response.id +" ??");
      //      console.log(response);
        });
    }
    
    /*export*/ function updateRecordFlyghtTable(dat,flid,isNew) {
      emptyArray(glb);
      //while(glb.length > 0) {
       // glb.pop();
       // }
        
      var settings = { url:apiHTML+"application/"+flid,
         
                    "method" : "PUT",
                     data : JSON.stringify(dat ),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", 'Bearer '+ token);
            },
              success: function(data){;
                
                getUserFly(); // формирование панели полетов
                if (isNew)
                message.innerText = " Полет по заявке сформирован . ";
             
                
              },
    
              error: function(errMsg) {
                  alert("@@@@@@");
                  alert(JSON.stringify(errMsg)+" !!");
              }
              
          };
          
          $.ajax(settings).done(function (response) {
              //alert( response.id +" ??");
        //      console.log(response);
          });
      }  
  /*export*/    function makeNewFlyght()
        {
          var ownerId=document.getElementById("ownerid").value;
          var sdt=timeSlider.values[0];                             //время старта полета
           routeid= document.getElementById("routeid").value;    // маршрут  
            
          if (routeid == "")
          {
           alert("Сформируйте маршрут полета");                 //маршрут не подготовлен
            return;
          }
//          var whh="globalid = '"+routeid+"'";
         
         getRouteRecord(routeid,makeNwFlyght) ;
         
         function makeNwFlyght(track,trackid)
         {
         
         tp=track.type;
         var ted=new Date();
          if (ted>sdt)
          {
            alert("Неверное время  старта ");
            return; 
          }

          document.getElementById("flyid").value="";            // новый полет
          
                 startDat= covertTime(sdt);
            var   sd=new Date(startDat)
            var   dt=sdt.getTime()-sd.getTime();
                 // sd.setTime(sd.getTime()+2*dt) ; !!!!!!!!!!!!!
                  sd.setTime(sd.getTime()+3*dt) ; 
                  startDat= covertTime(sd);//+".000000";
                  sd=new Date(startDat) 
 
//формирование заявки
            
            
            
            let dat =
            
            {
              "userId": parseInt(ownerId),
              "application": {
                "externalId": "AL14212",
                "start": {
                  "date": covertTime(sd)// "2021-05-19 11:21:48"
                }
              },
              "statusId": 1,
              "trackId": routeid//"4c5d793e-fb8d-46cb-b645-613198ebeae0"  

            };
            
            
            
           // alert(startDat) ; 
            createRecordFlyghtTable(dat,createFlyVectors);
            return; 
           
         }
     //   }); 
        

//****************************************************************    Формирование зонального полета
function createFlyVectors(id){
flyid=id;
document.getElementById("flyid").value=flyid;
routeid= document.getElementById("routeid").value;
var whR="routeid = '"+routeid+"'";
if(tp ==2 )
                 {
// выбор геометрии из набора данных линейных маршрутов                     
                 routeVecLayer.queryFeatures({
                  where : whR,
                  returnGeometry: true,
                  orderByFields : ["numb"],
                   outFields: ["*"]
                                 })
                  .then(function(frSet) {
 
  //Определение высоты и скорости на конкретном отрезке маршрута               

                 let pZ=[];  // массив высот 
                 let pSpeed=[];  //массив скоростей 

                  for(var i=1;i<frSet.features.length;i++)
                  {
                        pZ.push(frSet.features[i].getAttribute("z1"));
                        pSpeed.push(frSet.features[i].getAttribute("speed"));
         
                 }       
                         pZ.push(frSet.features[0].getAttribute("z1"));
                         pSpeed.push(frSet.features[0].getAttribute("speed"));
                    
                  makePunkts(pZ,pSpeed); //Формирование контрольных точек линейного маршрута через 100 м вдоль траектории
                         
                  })
                }
                else

                {
                  if (tp<2)   // выбор геометрии из набора данных зональных маршрутов 
                  {
                  zoneLayer.queryFeatures({
                   where : whR,
                   returnGeometry: true,
                   returnZ :true, 
                   outFields: ["*"]
                                 })
                  .then(function(frSet) {
                   if (frSet.features.length>0)
                   {
                   var dur=frSet.features[0].getAttribute("duration") ; //Продолжительность нахождения в зоне 
                   var zmin=frSet.features[0].getAttribute("zmin");  
                   var zmax=frSet.features[0].getAttribute("zmax");
                   var  geom=frSet.features[0].geometry;
                     
                      makeZone(geom,dur,zmin,zmax);
                   }

                  });
                  }
                  
                  

                }


}
function makeZone(geom,dur,zmin,zmax)
{

        routeid = document.getElementById("routeid").value;
        flyid = document.getElementById("flyid").value;

     
      var zmin2=zmin;
      var zmax2=zmax;
      var sdt=new Date(startDat);//timeSlider.values[0];

       //startDat=covertTime(sdt);

      var tdt= new Date(startDat);
       
       
       tdt.setTime(tdt.getTime()+dur*60000); 
      
       let zons=[] 

       //Формирование геометрии зоны
       let rgs=[]
       let rings=geom.rings;
        for (var i=0;i<rings[0].length;i++) 
           { 
            rgs.push([rings[0][i][0],rings[0][i][1],rings[0][i][2]]);
            
           }
          let pts=[rgs];
         var pol=
            new POLYGON({
            hasZ: true,
            hasM :false,
            rings: pts,
            spatialReference: { wkid: 4326 }
            });
          var polBuffer = GEOMETRYENGINE.geodesicBuffer(pol, 500, "meters");
          
            
            
           var flyRout=new GRAPHIC();
            flyRout.geometry=polBuffer;//pol;
            flyRout.attributes = {
                               "ownerid": ownerId,
                               "sdate": covertTime(sdt),
                               "edate" : covertTime(tdt) ,
                               "flyid":  flyid,
                               "routeid" : routeid,
                               "zmin" : zmin2, 
                               "zmax": zmax2,
                               "status" :3
                                           };
              zons.push(flyRout)
              var param2 = {
                   addFeatures: zons
                    }; 
                  
            // формирование контрольных точек внутри зоны по внутренним буферам 
            
            var extpol=pol.extent;

            var bf=[];
            var rf=[];
            let dink=-500;
           var extpol2= PROJECTION.project(extpol, {wkid :3857},PROJECTION.getTransformation({wkid :4326},{wkid :3857}));
            var dd=extpol2.xmax-extpol2.xmin;
            if (dd>extpol2.ymax-extpol2.ymin)
                 dd=extpol2.ymax-extpol2.ymin;
          
            let sch=0;    
            if (dd<500)
            {
               bf.push(pol);
               rf.push(10-dd);    
            }
            else 
             while (dd>0)
              {
                bf.push(pol);
                rf.push(dink);
                dink=dink-500;
                dd=dd-500;
                sch++;
                if (sch>5) break;
              }
             
            var bufferIn = GEOMETRYENGINE.geodesicBuffer(bf,rf, "meters");

         
            makePunktsPol(bufferIn,tdt);
            
            
            //** формирование зонального полета   */       
                 flyZoneLayer
            .applyEdits(param2)
            .then(function(editsResult) {
               
           
              //######################################################################
              if(editsResult.addFeatureResults.length>0)
              {
                let dat ={userId: parseInt(ownerId),
                  "statusId": 3,
                  "trackId": routeid,  
                   "application" :{
                             
                           "finish" : {date:covertTime(tdt)}
                        }   
                      }
              
              updateRecordFlyghtTable(dat,flyid,true);
                      
              return;  
              

                    }


              //####################################################################

             })
            .catch(function(error) {
                alert("Zon "+ error.name);
               alert( error.message);
              
            });  
             
                    
}


// формирование контрольных точек внутри зоны  geoms - список внутренних буферов , fdt - время покидания зоны
function makePunktsPol(geoms,fdt) 
 {
  let paths=[]
  let pts=[]
   for (var l=0;l<geoms.length;l++)
   {
   if (geoms[l]!=null) 
   { 
   
  
   var geom1=PROJECTION.project(geoms[l], {wkid :3857},PROJECTION.getTransformation({wkid :4326},{wkid :3857})); 
   var geom2=GEOMETRYENGINE.densify(geom1,200,"meters");
   
   var geom3=PROJECTION.project(geom2, {wkid :4326},PROJECTION.getTransformation({wkid :3857},{wkid :4326}));

   
   
   for(var i=0;i<geom3.rings[0].length;i++)
   {
     pts.push([geom3.rings[0][i][0],geom3.rings[0][i][1]])
     paths.push([geom2.rings[0][i][0],geom2.rings[0][i][1]])
     
   }
   //paths.push(pts);
  }
   
  }
   //paths.push(pts);
   var geom3=new MULTIPOINT({ points:pts, spatialReference : {wkid :4326}});
   geom2=new MULTIPOINT({ points:paths, spatialReference : {wkid :3857}});
   view.map.ground.queryElevation(geom3, { returnSampleInfo: true })

// Successfully sampled all points
  .then(function(result) {
  // Print result of each sampled point to the console
  var geom4=result.geometry;
  var sd=new Date(startDat)
     
  var td=sd;
  
   var lM=0;
   var dl=0;
   var addFeat=[];
   var svetofor=1
   
   
 
   for(;;)
   {
    svetofor=1-svetofor;

    var flag=false;
   var sc=0; 
   for(var i=0;i<geom2.points.length;i++)
   {
    var ind=i*(1-svetofor)+(geom2.points.length-1-i)*svetofor;
    
    if(i>0)
    {
      var ind2=(i-1)*(1-svetofor)+(geom2.points.length-1-i+1)*svetofor;
      dl=dl+Math.sqrt((geom2.points[ind][0]-geom2.points[ind2][0])*(geom2.points[ind][0]-geom2.points[ind2][0])+(geom2.points[ind][1]-geom2.points[ind2][1])*(geom2.points[ind][1]-geom2.points[ind2][1]));
    }  
    
    if(i==0 || dl>200)
    { 
     td.setTime(td.getTime()+5000) ;
     if (td.getTime()>fdt.getTime() )
     {
      flag=true;
      break; 
     }
     
     lM=lM+dl;
     
      
     var featurePunkt=getPunkt(geom4.points[ind][0],geom4.points[ind][1],geom4.points[ind][2]+200,lM,td,ownerId,flyid,routeid,{ wkid: 4326 }) ;
     
     
     addFeat.push(featurePunkt);
     dl=0;
    }
   } 
   sc=sc+1;
   
   if (flag) break;
  }
  
       if (addFeat.length>0)
       {
        var paramP = {
                addFeatures: addFeat
              }; 
          punktsLayer
            .applyEdits(paramP)
            .then(function(editsResult) {
            // alert(editsResult.addFeatureResults.length) 
             })
            .catch(function(error) {
                alert( error.name);
               alert( error.message);
              
            });

          }
  })

// Failed to sample (e.g. service unavailable)
.catch(function(error) {
  return []
});
   
 }

//*********************Построение пунктов линейного полета
 function makePunkts(pZ,pSpeed)
 {

          routeid = document.getElementById("routeid").value;
           flyid = document.getElementById("flyid").value;
           
      
       let tdt= new Date(startDat);
       let zmin2=9000;
       let zmax2=-500;
          
        var   addFeat=[];
        var   addSegment=[];
  
           let lM=0;
           var ptsLine=[[]];

            for(let m=0;m<pZ.length-1;m++)
            {
            

           
            if (m==0)
             {
               var tz=flypts[0][0][2];
               for (let p=0;p<2;p++)
               {
                  var featurePunkts =  getPunkt(flypts[0][0][0],flypts[0][0][1],tz,lM,tdt,ownerId,flyid,routeid,{ wkid: 4326 }) ;
                  ptsLine[0].push([flypts[0][0][0],flypts[0][0][1],tz,lM]);          
                  addFeat.push(featurePunkts);
                  tz= pZ[0];
                  tdt.setTime(tdt.getTime()+10000);
                  lM=pZ[0];
                  
              }
              
              var featureSegment =  getSegment(flypts[0][0][0],flypts[0][0][1],tz,lM,tdt,ownerId,flyid,routeid,flypts[0][0][0],flypts[0][0][1],flypts[0][0][2],0) ;
              addSegment.push(featureSegment);
             }
             
             var nPt=flypts[m].length;
             var dz=pZ[m+1]-pZ[m];
             var dm=flypts[m][nPt-1][3]-flypts[m][0][3];
             var dzm=dz/dm;
             var tz1=tz;
             tz=pZ[m];
             for (let p=1;p<nPt;p++)
               {
                  //lM=lM+flypts[m][p][3]; 
                 var  delt=(flypts[m][p][3]-flypts[m][p-1][3])/(pSpeed[m]/3600)
                 var deltZ=(flypts[m][p][3]-flypts[m][p-1][3])*dzm;
                  tdt.setTime(tdt.getTime()+delt);
                  //tz= pHeight+flypts[m][p][2];
                  tz1=tz;
                  tz=tz+deltZ;
                  featurePunkts =  getPunkt(flypts[m][p][0],flypts[m][p][1],tz,lM+flypts[m][p][3],tdt,ownerId,flyid,routeid,{ wkid: 4326 }) ;
                  featureSegment =  getSegment(flypts[m][p][0],flypts[m][p][1],tz,lM+flypts[m][p][3],tdt,ownerId,flyid,routeid,flypts[m][p-1][0],flypts[m][p-1][1],tz1,lM+flypts[m][p-1][3]) ;
                  ptsLine[0].push([flypts[m][p][0],flypts[m][p][1],tz,lM+flypts[m][p][3]]);                 
                  addFeat.push(featurePunkts);
                  addSegment.push(featureSegment);
                  if(zmin2>tz) zmin2=tz;
                  if(zmax2<tz) zmax2=tz;
              }

             if (m==pZ.length-2)
             {
           
               tdt.setTime(tdt.getTime()+10000);
               
               featurePunkts =  getPunkt(flypts[m][nPt-1][0],flypts[m][nPt-1][1],flypts[m][nPt-1][2],lM+flypts[m][nPt-1][3]+pZ[m],tdt,ownerId,flyid,routeid,{ wkid: 4326 }) ;
               featureSegment =  getSegment(flypts[m][nPt-1][0],flypts[m][nPt-1][1],flypts[m][nPt-1][2],lM+flypts[m][nPt-1][3]+pZ[m],tdt,ownerId,flyid,routeid,flypts[m][nPt-1][0],flypts[m][nPt-1][1],tz,lM+flypts[m][nPt-1][3]) ;
               ptsLine[0].push([flypts[m][nPt-1][0],flypts[m][nPt-1][1],flypts[m][nPt-1][2],lM+flypts[m][nPt-1][3]])
               addFeat.push(featurePunkts);
               addSegment.push(featureSegment);
                  

              }
              lM=lM+flypts[m][nPt-1][3];

            }
            
          
          var param = {
                addFeatures: addFeat
              }; 
          punktsLayer
            .applyEdits(param)
            .then(function(editsResult) {
              
             })
            .catch(function(error) {
                alert("punk "+ error.name);
               alert( error.message);
              
            });
           
            var paramS = {
                addFeatures: addSegment
              }; 
          segmentLayer
            .applyEdits(paramS)
            .then(function(editsResult) {
              
             })
            .catch(function(error) {
                alert("seg "+ error.name);
               alert( error.message);
              
            });


           let sd=new Date(startDat)

           let lin1=
            new POLYLINE({
            hasZ: true,
            hasM: true,
            paths: ptsLine,
            spatialReference: { wkid: 4326 }
            });
            var flyRout=new GRAPHIC();
            flyRout.geometry=lin1;
            flyRout.attributes = {
                               "ownerid": ownerId,
                               "sdate": covertTime(sd),
                               "edate" : covertTime(tdt) ,
                               "flyid":  flyid,
                               "routeid" : routeid,
                               "status" :3
                                           };

             const param2 = {
                   addFeatures: [flyRout]
                    };  
                    
                 flyVecLayer
            .applyEdits(param2)
            .then(function(editsResult) {
              let dat ={userId: parseInt(ownerId),
                "statusId": 3,
                "trackId": routeid,  
                "application" :{
                            "finish" : {date:covertTime(tdt)}
                                }   
                    }
            
            updateRecordFlyghtTable(dat,flyid,true);
                    
             
      

             })
            .catch(function(error) {
                alert( error.name);
               alert( error.message);
              
            });     
         
 }





 // ******************* определение  высоты контрольных пунктов
 
// Преобразование времени для записи в базу из формата java script

      
  // Формирование пункта      
   function getPunkt(x1,y1,z1,m1,dt1,owi,flyi,roi,wk) 
   {
     
    var featurePunkt = new GRAPHIC();
                  var   pnt = {
                             type: "point", // autocasts as new Point()
                              x: x1,
                              y:y1,
                              z: z1,
                              m :m1,
                              spatialReference : wk
                            };
                     featurePunkt.geometry=pnt;
                                 
                     featurePunkt.attributes = {
                              "ownerid": owi,
                              "zvalue": z1,
                              "tdate" : covertTime(dt1) ,
                              "flyid":  flyi,
                              "routeid" : roi
                                               };
                                               

    return featurePunkt;
   }
 // Формирование сегмента
   function getSegment(x1,y1,z1,m1,dt1,owi,flyi,roi,x2,y2,z2,m2) 
   {
     
    var featurePunkt = new GRAPHIC();
                   
                    var seg = {
                             type: "polyline", // autocasts as new Point()
                              paths: [[[x2,y2,z2,m2],[x1,y1,z1,m1]]],
                              spatialReference : { wkid: 4326 }
                            };
                     featurePunkt.geometry=seg;             
                     featurePunkt.attributes = {
                              "ownerid": owi,
                              "zvalue": z1,
                              "tdate" : covertTime(dt1) ,
                              "flyid":  flyi,
                              "routeid" : roi
                                               };

    return featurePunkt
   }
  }

  /********************************** Check******************************************************************************************* */
  /*export*/  function myCheckFly()
  {

   
         var lineSymbolIntersect =
            {
               type: "simple-line", // autocasts as SimpleLineSymbol()
               color: "red",
               width: 10
            };

       var fillSymbolIntersect =
            {
              type: "simple-fill", // autocasts as SimpleLineSymbol()
              color: "red",
              width: 2
            };
       var      templateBuffer = {
        
              title: "Пересечение",
              content: [
                {
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "describe",
                      label: "Описание"
                    }
                    
                  ]
                }
              ]
            };
            var      templateBufferRoute = {
        
              title: "Пересечение c полетом",
              returnGeometry : true,
              content: [
                {
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "start",
                      label: "Старт"
                    }
                    ,
                    {
                      fieldName: "finish",
                      label: "Финиш"
                    },
                    {
                      fieldName: "owner",
                      label: "Клиент"
                    }
                  ]
                }
              ]
            };
    
       let checkGeometry;    
       var rid=document.getElementById("routeid").value;
        if(rid=="") return;
        
        bufferLayer.removeAll();
      
        getCheckGeometry(rid)
        //checkGeometry.spatialReference =srw;
        
  
        function getUserName(owid)
    {
         // alert(UsersId);
          for (let i=0;i<userIds.length;i++)
              if(userIds[i][0]==owid) return userIds[i][1];
           return null;      
    }
  function getCheckGeometry(rdd)
      {
          
          const query = new QUERY(); 
          query.where = "routeid = '"+rdd+"' And numb >= 0 ";
          query.outSpatialReference = { wkid: 4326  };
          query.returnGeometry = true;
          query.returnZ= true,
          query.returnM =true,
          query.orderByFields = ["numb"]
          query.outFields = [ "*" ];
        
          routeVecLayer.queryFeatures(query).then(function(featureSet){
          var paths=[] 
          var pts=[]
       
           if(featureSet.features.length>0){ 
            for (var i=0;i<featureSet.features.length;i++)
           {
             var m=i;
             /*
            for (var k=0;k<featureSet.features.length;k++)
             {
              if(featureSet.features[k].getAttribute("numb")==i)
              {
                 m=k;
                 break;
              }
             }*/
            if(i==0) 
                pts.push(featureSet.features[m].geometry.paths[0][0]);
            var n=featureSet.features[m].geometry.paths[0].length;
            for(var k=1;k<n;k++) 
              pts.push(featureSet.features[m].geometry.paths[0][k]);
            
           }

          paths.push(pts)            


          checkGeometry  = new POLYLINE({
          hasZ: true,
          hasM: true,
        //  paths: featureSet.features[0].geometry.paths,
         paths: paths,
          spatialReference: { wkid: 4326 }
          });
         

          changeExtent(checkGeometry); 
          
          //featureSet.features[0].geometry;
          processCheck();
            }
            else{
              
            query.where ="routeid = '"+rdd+"'";
            query.orderByFields=["objectid"];
            zoneLayer.queryFeatures(query).then(function(featureSet){
              
            paths=[] 
            pts=[]
            
            if(featureSet.features.length>0){
              
            checkGeometry=new POLYGON(
              {
                hasZ: true,
                hasM: false,
                spatialReference: { wkid: 4326 },
                rings : featureSet.features[0].geometry.rings
              });
              

              changeExtent(checkGeometry);


          //featureSet.features[0].geometry;
          processCheck();


            }
            });
            }
            
              });

            
        
       
      }
      function processCheck()
      {
           
          var buffer = GEOMETRYENGINE.geodesicBuffer(checkGeometry, 500, "meters");
          
         
          
          var buffer2 = GEOMETRYENGINE.geodesicBuffer(checkGeometry, 1000, "meters");
         
            if (checkGeometry.type=="polyline")
                     {
                       checkInterFlyght(routeVecLayer,buffer,buffer2,flyVecLayer,routeLayer);  
                       checkInterFlyght(routeVecLayer,buffer,buffer2,flyZoneLayer,zoneLayer);           
                   //    checkInterRoute(buffer,buffer2, flyVecLayer,routeLayer);
                   //    checkInterRoute(buffer,buffer2, flyZoneLayer,zoneLayer);
                     }
            else { 
                   checkInterFlyght(zoneLayer,buffer,buffer2,flyVecLayer,routeLayer);  
                   checkInterFlyght(zoneLayer,buffer,buffer2,flyZoneLayer,zoneLayer);           
                   //checkInterZoneRoute(zoneLayer,buffer,buffer2,flyVecLayer,routeLayer)
                  // checkInterZoneRoute(zoneLayer,buffer,buffer2,flyZoneLayer,zoneLayer)
                  } 
            //checkInterRest(buffer,restrictLayer);
          
            //checkInterProh(buffer,prohLayer);
            
            checkInterProc(buffer,restrictLayer);
            
            checkInterProc(buffer,prohLayer);
            
            if (checkGeometry.type=="polyline")
                  checkElevation(50);
              
            
                  interv=window.setInterval(checksMess, 2000);
            
 
 
      }
 
      

function checksMess()
{

 
 window.clearInterval(interv);
        if (bufferLayer.graphics.length==0)
                     alert("Нет конфиликтов");
      
        else
            alert("Внимание конфиликты !!!");

      
    
}   

        
 //***************** Контроль  высот */
         function checkElevation(delt)
         {
          var rdd= document.getElementById("routeid").value; 
          var whR="routeid = '"+rdd+"' ";  
           routeVecLayer.queryFeatures({
             where : whR,
                 returnGeometry: true,
                 orderByFields : ["numb"],
                   outFields: ["*"]
                                     })
                   .then(function(frSet) {
                  var pZ=[];
                  var pSpeed=[];  
                   for(var i=1;i<frSet.features.length;i++)
                    // for (var k=0;k<frSet.features.length;k++)
                     {
                       if(i>0)//<frSet.features.length-1)
                       {
                       //if (frSet.features[k].getAttribute("numb")==i)
                       // {
                         pZ.push(frSet.features[i].getAttribute("z1"));
                         pSpeed.push(frSet.features[i].getAttribute("speed"));
                        //}
                       }
                      }
                      // else
                       //if (frSet.features[k].getAttribute("numb")<0)
                         //{
                          pZ.push(frSet.features[0].getAttribute("z1"));
                          pSpeed.push(frSet.features[0].getAttribute("speed"));
                         //}
 
                     
                                       
                     
                     var elevGeometry = makeElevGeometry(pZ);
                   processCheckElevation(delt,elevGeometry)
                 });    
         }
         function makeElevGeometry(pZ)
          {
            var lM=0;
            let ptsLine=[[]];
            
          for(var m=0;m<pZ.length-1;m++)
          {
                
          if (m==0)
           {
             var tz=flypts[0][0][2];
             for (var p=0;p<2;p++)
             {
                ptsLine[0].push([flypts[0][0][0],flypts[0][0][1],tz,lM]);          
                tz= pZ[0];
                lM=pZ[0];
             
            }
                     
           }
           
           var nPt=flypts[m].length;
           var dz=pZ[m+1]-pZ[m];
           var dm=flypts[m][nPt-1][3]-flypts[m][0][3];
           var dzm=dz/dm;
           var tz1=tz;
           tz=pZ[m];
           for (p=1;p<nPt;p++)
             {
                //lM=lM+flypts[m][p][3]; 
           
                var deltZ=(flypts[m][p][3]-flypts[m][p-1][3])*dzm;
                             //tz= pHeight+flypts[m][p][2];
                tz1=tz;
                tz=tz+deltZ;
          
                ptsLine[0].push([flypts[m][p][0],flypts[m][p][1],tz,lM+flypts[m][p][3]]);                 
            }

           if (m==pZ.length-2)
           {
             ptsLine[0].push([flypts[m][nPt-1][0],flypts[m][nPt-1][1],flypts[m][nPt-1][2],lM+flypts[m][nPt-1][3]])
              

            }
            lM=lM+flypts[m][nPt-1][3];
            
          }
          //alert(ptsLine[0].length);
          var elev =
          new POLYLINE({
          hasZ: true,
          hasM: true,
          paths: ptsLine,
          spatialReference: { wkid: 4326 }
          });
          return elev;
        }

         function processCheckElevation(delt,elevGeometry) {
          
       
          
          var pts1=checkGeometry.paths;
          var pts2=elevGeometry.paths;
          var sost=0;
          var outpts=[];
          var el=[];
             
            // alert(pts1[0].length)
            // alert(pts2[0].length)
             for (var i=0;i<pts1[0].length;i++)
              {
               
                var flag=false;
                           
                if (pts2[0][i+1][2]-pts1[0][i][2] <delt )
                {
                 if(sost==0)
                 {
                   
                   if(i>0)
                   {
                    var  x=(pts1[0][i][0]+pts1[0][i-1][0])/2;
                    var y=(pts1[0][i][1]+pts1[0][i-1][1])/2;
                    var z=(pts1[0][i][2]+pts1[0][i-1][2])/2;
                    var lM=(pts1[0][i][3]+pts1[0][i-1][3])/2;
                     el.push([x,y,z,lM]);     
                   }
                   sost=1;
                 }
 
                  x=pts1[0][i][0];
                  y=pts1[0][i][1];
                  z=pts1[0][i][2];
                  lM=pts1[0][i][3];
                
                  el.push([x,y,z,lM]);
                                                       
                 if(i==pts1[0].length-1) flag=true;
                 
               }
               else 
               {
                if (sost==1)
                {
                     x=(pts1[0][i][0]+pts1[0][i-1][0])/2;
                     y=(pts1[0][i][1]+pts1[0][i-1][1])/2;
                     z=(pts1[0][i][2]+pts1[0][i-1][2])/2;
                     lM=(pts1[0][i][3]+pts1[0][i-1][3])/2;
                     el.push([x,y,z,lM]);
                     flag=true;
                }
              
                sost=0;
                
               }
              
                if (flag)
                {
                 outpts.push(el);
                var inter=new POLYLINE({
                       hasZ: true,
                       hasM: true,
                       paths: outpts,
                       spatialReference: { wkid: 4326 }
                           })
                  
                     var gg = new GRAPHIC({
                     geometry: inter,
                     symbol: lineSymbolIntersect,
                     spatialReference : { wkid: 4326 }
                        });
                       gg. attributes = {
                         "describe": "dangerous approach to earth !!! < "+delt
                       };
                     
                  gg.popupTemplate=templateBuffer;            
                  bufferLayer.add(gg);
                  outpts=[];
                  el=[];
                }
              }
            
             
           
           
             
 
         }
 
 
 
      //*************************** Проверка на запретные зоны
      //function checkInterRest(buffer,checkLayer) {
       function checkInterProc(buffer,checkLayer) {
          
        var buff = PROJECTION.project(buffer, { wkid: 3857 },PROJECTION.getTransformation(buffer.spatialReference,{ wkid: 3857 })); 
            
        var distance = 0;
        var units = "meters";
                   
           checkLayer.queryFeatures({
            // where :"OBJECTID = 2",
             geometry: buff,
             // distance and units will be null if basic query selected
             distarence: distance,
             units: units,
             spatialRelationship: "intersects",
             returnGeometry: true,
             
             outFields: ["*"],
           })
           .then(function(featureSet) {
             
           
             if(featureSet.features.length>0)
             {
             for (var k=0;k<featureSet.features.length;k++)  
             {
             
              var intRestGeometry= new POLYGON({
             hasZ: false,
             hasM: false,
             rings: featureSet.features[k].geometry.rings,
             spatialReference: { wkid: 3857 }
             });
             
 
             
             var inter = GEOMETRYENGINE.intersect(buff,intRestGeometry);
             if (checkLayer.title=="Restrict")
             var Attrs={
                       "describe": "Restriction [\n name  : "+featureSet.features[k].getAttribute("name")+"\n identification: "+
                               featureSet.features[k].getAttribute("identification")+"\n remarks: "+featureSet.features[k].getAttribute("remarks")+
                       "\n limit : "+featureSet.features[k].getAttribute("limit")+"\n ]"
                       };
             if (checkLayer.title=="Prohibited")
             {
             Attrs= {
                       "describe": "Prohibite  [\n name  : "+featureSet.features[k].getAttribute("name")+"\n identification: "+
                               featureSet.features[k].getAttribute("identification")+"\n remarks: "+featureSet.features[k].getAttribute("remarks")+
                       "\n limit : "+featureSet.features[k].getAttribute("limit")+"\n ]"
                       }; 
                }         
             if (inter instanceof Array) 
                   {
                     
                     for (var j=0;j<inter.length;j++)
                     {
                      var gg= new GRAPHIC({
                          geometry: inter[j],
                          symbol: fillSymbolIntersect,
                          spatialReference : { wkid: 3857 }
                        });
                       gg. attributes = Attrs;
                       gg.popupTemplate=templateBuffer;      
                       bufferLayer.add(gg);  
                      }    
                     
                  }
              else if (inter!=null)
              {  
  
                 gg = new GRAPHIC({
                     geometry: inter,
                     symbol: fillSymbolIntersect,
                     spatialReference : { wkid: 3857 }
                        });
                        
                 gg.attributes =Attrs 
                 gg.popupTemplate=templateBuffer;      
                  bufferLayer.add(gg);       
 
              } 
             }              
             }
            
 
           });
 
 
         }
 
         
 
  function checkInterFlyght(baseLayer,buff,buff2,checkFlyLayer,checkTemplLayer) {
  //function checkInterZoneRoute(baseLayer,buff,buff2,checkFlyLayer,checkTemplLayer) {
    var sdt=timeSlider.values[0];
    var startDat= covertTime(sdt);
    var   sd=new Date(startDat)
    let   dt=sdt.getTime()-sd.getTime();
    //alert(dt);
          //sd.setTime(sd.getTime()+2*dt) ;
          sd.setTime(sd.getTime()+3*dt) ; 
     startDat= covertTime(sd);//+".000000";
          sd=new Date(startDat) 

   
    var sdate=covertTime(sd);
  
    var orderByFields = ["objectid"]
 var edt=new Date(startDat);
 var routeid= document.getElementById("routeid").value;
 if (baseLayer.title=="My Zone")
 var    whR="routeid = '"+routeid+"'";
  if (baseLayer.title=="My Route")
    {
      whR="routeid = '"+routeid+"' And numb >= 0"; 
      orderByFields = ["numb"]
    }
      var units = "meters";
  baseLayer.queryFeatures({
  where : whR,
  orderByFields:orderByFields,
  units :units,
  returnGeometry: true,
  outSpatialReference : { wkid: 3857  },
  
  outFields: ["*"]
 
 })
 .then(function(featureSet) {
 
  if(featureSet.features.length>0)
  {
 
   if (baseLayer.title=="My Zone")
   {
    var dt=featureSet.features[0].getAttribute("duration");
    edt.setTime(edt.getTime()+dt*60000)
   }
   if (baseLayer.title=="My Route")
   {
   for (var k=0;k<featureSet.features.length;k++) 
             {
              var    spd=featureSet.features[k].getAttribute("speed");
              var  pts=featureSet.features[k].geometry.paths 
              var nn=pts[0].length-1;
              var dl=Math.sqrt((pts[0][0][0]-pts[0][nn][0])*(pts[0][0][0]-pts[0][nn][0])+(pts[0][0][1]-pts[0][nn][1])*(pts[0][0][1]-pts[0][nn][1]))
               
               let dt=((dl/1000)/spd)*3600000;
               edt.setTime(edt.getTime()+dt)
               
             }
   }
 
  var edate=covertTime(edt)
  checkInterRouteProcess(buff,buff2,sdate,edate,checkFlyLayer,checkTemplLayer);
 }  
 
 });
 
 } 
 
 
 
     function checkInterRouteProcess(buff,buff2,sdate,edate,checkFlyLayer,checkTemplLayer)
         {
            //fdt=covertTime(new Date());
               
            var    distance =1000;
            var units = "meters";
            var wh="sdate >= timestamp'"+ sdate+"' And sdate <= timestamp'"+edate
           +"' Or edate >= timestamp'"+ sdate+"' And edate <= timestamp'"+edate
           +"' Or  sdate <= timestamp'"+ sdate+"' And edate >= timestamp'"+edate+ "'"
 ;
          // alert(wh)
           /*flyVecLayer*/ checkFlyLayer.queryFeatures({
             geometry: buff,
             // distance and units will be null if basic query selected
             distance: distance,
             units: units,
             where : wh,
             spatialRelationship: "intersects",
             returnGeometry: true,
             returnQueryGeometry: true,
             outFields: ["*"],
           })
           .then(function(featureSet) {
             
           
          
             if(featureSet.features.length>0)
             {
            
            
              
               for (var m=0;m<featureSet.features.length;m++)
               {
                var rgeom=featureSet.features[m].geometry;
                var path1=[];
                var part=[];
                var rgeom1=rgeom;
                var bufcon=rgeom;
                if (rgeom.type=="polyline")
                {
                 for(let s=1;s<rgeom.paths[0].length-1;s++)
                  part.push([rgeom.paths[0][s][0],rgeom.paths[0][s][1],rgeom.paths[0][s][2]]);
                  path1.push(part);  
                  rgeom1 = new POLYLINE({
                      paths : path1,
                      hasZ: true,
                      hasM: true,
                      spatialReference: { wkid: 4326 }

                });
                bufcon=GEOMETRYENGINE.geodesicBuffer(rgeom1, 500, "meters");
                }
                 
                var inter = GEOMETRYENGINE.intersect(buff,bufcon);
                //var nm="";
                var owid=featureSet.features[m].getAttribute("ownerid");
                var edt=new Date(featureSet.features[m].getAttribute("edate")).toLocaleString();
                var sdt=new Date(featureSet.features[m].getAttribute("sdate")).toLocaleString();
            
               if (inter!=null)
               {
                let Att = {
                 start  : sdt,
                 finish : edt,
                 owner : getUserName(owid)
                };
                 if (inter instanceof Array) 
                   {
                     
                     for (var j=0;j<inter.length;j++)
                     {
                      var gg= new GRAPHIC({
                          geometry: inter[j],
                          symbol: fillSymbolIntersect,
                          spatialReference : { wkid: 4326 }
                        });
                        gg. attributes = Att;

                        gg.popupTemplate=templateBufferRoute;
                        bufferLayer.add(gg);  
                      }    
                     
                  }
              else 
              {  
 
                 gg = new GRAPHIC({
                     geometry: inter,
                     symbol: fillSymbolIntersect,
                     spatialReference : { wkid: 4326 }
                        });
                       gg. attributes = Att;
                  gg.popupTemplate=templateBufferRoute;           
                  bufferLayer.add(gg);       
 
              }
 
 
 
 
               
             
            // });
              }
          //  });
             
             }
            }
             
 
           });
 
 
 
         
 
        }
    }



    /********************************************************************Panel************************************************************** */
    var userInfo=null;
/*export*/ function getDetailZone(routeid,flag)
{
  var lst="";
  var id="R"+routeid;
  
  const routhtml1='<p   class="flight-content" <div class="flight-content" style="font-size:16px;"> <label> Duration</label>  <label>Zmin</label> <label  class="form-label">Zmax</label> </div> ';
  const routhtml1a='<p   class="flight-content" <div class="flight-content" style="font-size:16px;"> <label> Duration</label> <label>Radius</label>  <label>Zmin</label> <label  class="form-label">Zmax</label> </div> ';
  const routhtml2='  <div class="flight-content"';
  const routhtml3='>  <input style="width: 70px;font-size:16px;"  type="number" id="';
  const routhtml3a='>   <input style="width: 70px;font-size:16px;"  type="hidden" id="';
  const routhtml4='"   value='
  const routhtml5='></div></p></div>';
  const routhtml6='></div><div class="flight-content"><a  class="btn btn-more" id="checkFlight">Проверка   </a>';
  const routhtml7= '<a  class="btn btn-more" id="createFlight">Подать заявку </a>   <a  class="btn btn-more" id="saveRoute"> Сохранить </a><a  class="btn btn-more" id="saveRouteAs"> Сохранить как</a';
  const routhtml9= '<div class="flight-bottom"> '; 
  const routhtml10=' <a  class="btn btn-more" id="importGraphic">Импорт зоны </a> </div>';
  if (flag)
  {
   
    var   whZ="routeid = '"+routeid+"'";
 //statusid > 2 не ЧЕРНОВИК не ШАБЛОН
                   zoneLayer.queryFeatures({
                   where : whZ,
                 //  orderByFields : ["startdate DESC"],
                   returnGeometry: true,
                     outFields: ["*"],
                   })
                   .then(function(ftfSet) {
                    let zmin=ftfSet.features[0].getAttribute("zmin");
                    let zmax=ftfSet.features[0].getAttribute("zmax");
                    let duration=ftfSet.features[0].getAttribute("duration");
                    let rad=ftfSet.features[0].getAttribute("radius");
                    var geom=ftfSet.features[0].geometry;
                    let lat=geom.centroid.y;
                    let lon=geom.centroid.x;
                    if (rad>0)
                     lst=routhtml1a;
                    else
                     lst=routhtml1;
                    lst=lst+routhtml2;
                    lst=lst+routhtml3;
                    lst=lst+"DR"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+duration.toString();
                    
                    
                    if (rad>0) 
                          lst=lst+routhtml3;
                    else 
                          lst=lst+routhtml3a;   
                    lst=lst+"RD"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+rad.toString();
                    
                    lst=lst+routhtml3a;
                    lst=lst+"LT"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+lat.toString();
                    
                    lst=lst+routhtml3a;
                    lst=lst+"LN"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+lon.toString();



                    lst=lst+routhtml3;
                    lst=lst+"ZN"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+zmin.toString();

                    lst=lst+routhtml3;
                    lst=lst+"ZX"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+zmax.toString();

                    lst=lst+routhtml6;
                    lst=lst+routhtml7;
                    lst=lst+routhtml5;

                    lst=lst+routhtml9;
                    lst=lst+routhtml10;
                    
                    


                    document.getElementById(id).innerHTML=lst;
                    document.getElementById("createFlight").addEventListener("click", makeNewFlyght); //событие отмены полета
                    document.getElementById("checkFlight").addEventListener("click", myCheckFly);
                    document.getElementById("saveRoute").addEventListener("click", mySaveRoute);
                    document.getElementById("saveRouteAs").addEventListener("click", mySaveRouteAs);
                    document.getElementById("importGraphic").addEventListener("click", myImportGraphic);
                    //var scrollDiv = document.getElementById("ZN"+routeid).offsetTop;
                     //window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
                     const el = document.getElementById(routeid);
                     el.scrollIntoView({block: "center", inline: "center",behavior: "smooth"}); 
                   })
                  

  }
  else{
    if (document.getElementById(id)!=null) 
     document.getElementById(id).innerHTML=lst;
  }
  

}

/*export*/ function getDetailRoute(routeid,flag)
{
  var lst="";
  var id="R"+routeid;

  const routhtml1='<p class="flight-content" style="font-size:16px;" <div><label>    </label> <label >  </label> <label >  Speed</label> <label >  </label> <label >  </label>   <label> Z </label> <label >  </label>   <label> Zmin </label>   <label >  </label> <label> Zmax </label> </div> ';
  const routhtml2='  <div class="flight-content"';
  const routhtml8='  <div class="flight-content">  <input  type="checkbox" id="';
  const routhtml9='"   unchecked ';
  const routhtml3='>  <input style="width: 70px;font-size:16px;" type="number" id="';
  const routhtml4='"   value=';
  const routhtml5='></div></p></div>';
  const routhtml6='></div><div class="flight-content"><a  class="btn btn-more" id="checkFlight">Проверка </a>  <label>    </label>';
  //const routhtml7= '<a href="#" class="btn btn-more" id="createFlight">Подать заявку  </button</a>   <a href="#" class="btn btn-more" id="saveRoute"> Сохранить </button</a';
  const routhtml7= '<a  class="btn btn-more" id="createFlight">Подать заявку </a>   <a  class="btn btn-more" id="saveRoute"> Сохранить </a><a  class="btn btn-more" id="saveRouteAs"> Сохранить как</a';
  const routhtml10= '<div class="flight-bottom"> '; 
  const routhtml11=' <a  class="btn btn-more" id="importGraphic">Импорт траектории </a> </div>';
  if (flag)
  {

    var   whR="routeid = '"+routeid+"' And numb>=0 ";
 //statusid > 2 не ЧЕРНОВИК не ШАБЛОН
                   routeVecLayer.queryFeatures({
                   where : whR,
                   orderByFields : ["numb"],
                   returnGeometry: true,
                     outFields: ["*"],
                   })
                   .then(function(ftfSet) {
                    lst=routhtml1;
                    lst=lst+routhtml2; 
                    for (let i=0;i<ftfSet.features.length;i++)
                    { 
                    let zmin=Math.round(ftfSet.features[i].getAttribute("zmin"));
                    let zmax=Math.round(ftfSet.features[i].getAttribute("zmax"));
                    let speed=Math.round(ftfSet.features[i].getAttribute("speed"));
                    let z1=Math.round(ftfSet.features[i].getAttribute("z1"));
                    lst=lst+routhtml2;
                    lst=lst+routhtml8;
                    lst=lst+i.toString()+"CH"+routeid;
                    lst=lst+routhtml9;
                    lst=lst+routhtml3;
                    lst=lst+i.toString()+"SP"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+speed.toString();
                    lst=lst+routhtml3;
                    lst=lst+i.toString()+"ZZ"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+z1.toString();
                    lst=lst+routhtml3;
                    lst=lst+i.toString()+"ZN"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+zmin.toString();
                    lst=lst+" readonly";
                    lst=lst+routhtml3;
                    lst=lst+i.toString()+"ZX"+routeid;
                    lst=lst+routhtml4;
                    lst=lst+zmax.toString();
                    lst=lst+" readonly";
                    if(i==ftfSet.features.length-1)
                    {
                    lst=lst+routhtml6;
                    lst=lst+routhtml7;
                    }
                    lst=lst+routhtml5;
                    if(i==ftfSet.features.length-1)
                    {
                    lst=lst+routhtml10;
                    lst=lst+routhtml11;
                    }
                    }
                  
                     document.getElementById(id).innerHTML=lst;
                     document.getElementById("createFlight").addEventListener("click", makeNewFlyght); 
                     document.getElementById("checkFlight").addEventListener("click", myCheckFly);
                     document.getElementById("saveRoute").addEventListener("click", mySaveRoute);
                     document.getElementById("saveRouteAs").addEventListener("click", mySaveRouteAs);
                     document.getElementById("importGraphic").addEventListener("click", myImportGraphic);
                     for (let i=0;i<ftfSet.features.length;i++)
                     {
                      document.getElementById(i.toString()+"CH"+routeid).addEventListener("click", changSelectSeg);


                     }
                   })
                   const el = document.getElementById(routeid);
                   el.scrollIntoView({block: "center", inline: "center",behavior: "smooth"}); 

  }
  else{
    if (document.getElementById(id)!=null) 
     document.getElementById(id).innerHTML=lst;
  }
  

}




/*export*/ function getUserRoute(viewRid)
        {
            
      const routhtml1 ='<div class="flight-list-item  flight-list-item-onapproval"'
      const routhtml2='><div class="flight-top">';
        /*<div class="flight-image">
          <img src="images/map__2.jpg" alt="">
        </div>*/
      const routhtml3=' <div class="flight-content">';//<p class="flight-item-reg">';//AZ 200187
      const routhtml4=/*'  </p> */'<p class="flight-item-flightnumber"><span  class="flight-item-title">Название </span>';//000150
      const routhtml5=/*'</p> <p>*/'<span  class="flight-item-title"> </span>';//20.12.2020 16:30
     // const flighthtml6='</p><p class="flight-item-date-stop"><span  class="flight-item-title">Продолжительность</span>';//20.12.2020 17:30
      const routhtml7='</p>  </div> </div>  <div class="flight-bottom">' ; //<p class="flight-item-status ';// status-onapproval">На утверждении
      const routhtml8='</p>';
      const routhtml8a=' <a  class="btn btn-more" id="';
      const routhtml8b='">Подробнее</a>';//</div>';
      //const routehtml8b2='">Cкрыть</a>';//</div>';
      //"form-item">
      const routhtml9 ='<div  id="';    
      const routhtml9a='">'
      const routhtml9c='<p   class="flight-bottom" <div class="flight-bottom"> <label> Duration</label>  <label>Zmin</label> <label  class="form-label">Zmax</label> </div> ';
      const routhtml9b='  <div class="flight-bottom"> <input  type="number"    value=1.5>  <input  type="number"    value=100><input  type="number"  value=1500></div></p></div>';
      const routhtml10="</div>"
      const routhtml8c= '</div>';
      //const routhtml9= /*'<div align="center">*/'<a href="#" class="btn btn-more" id="';//'<br /> <button id="'; 
      //const routhtml10=/*'" class="esri-widget"*/'">Сохранить </a></div>';// </button> </div>'
      const routhtml11='</div>';
      
          var     lst="";
          
          // var   whFF="ownerid = '"+document.getElementById("ownerid").value+"'";
 //statusid > 2 не ЧЕРНОВИК не ШАБЛОН
           //alert(document.getElementById("ownerid").value); 
           getRouteRecords(document.getElementById("ownerid").value,makeListRoutePanel);

           
             function makeListRoutePanel(response)
             {
              
              for (let i=0;i<response.tracks.length;i++) {      
                if(response.tracks[i].isFinal)

                  //alert( response.tracks[i].id+" "+response.tracks[i].type);
                  panTrack(response.tracks[i]);
                }
                document.getElementById("rlist").innerHTML=lst;
                addRouteEvent();
                if(viewRid!=null)     getRouteRecord(viewRid,evRouteDetal);

             }
                 
               function   panTrack(track){
                   var rlob=track.id;
                   var nm=track.name;
                   var kod=track.type;

                   rlb.push(rlob) ; 
                   lst=lst+routhtml1;
                   lst=lst+routhtml2;
                   lst=lst+routhtml3;
                   lst=lst+routhtml4;
                   lst=lst+nm;
                   lst=lst+routhtml5;
                   if (kod==2)
                     lst=lst+" Линейный"
                   else
                    if (kod==1)
                     lst=lst+" Зональный"
                    else 
                     lst=lst+" Зональный круговой"
                   lst=lst+routhtml7;
                  // lst=lst+routhtml8;
                   lst=lst+routhtml8a;
                   lst=lst+rlob; 
                   lst=lst+routhtml8b;
                   lst=lst+routhtml8c;
                   
                   
                   lst=lst+routhtml9;
                   lst=lst+"R"+rlob;
                   lst=lst+routhtml9a;
                   //lst=lst+routhtml9b;
                   lst=lst+routhtml10;
                 //  lst=lst+routhtml8c;
                  
                   lst=lst+routhtml11;
             
                    }


         }
/*export*/ function getUserFly()
      {
        
        




      const flighthtml1 ='<div class="flight-list-item '// flight-list-item-onapproval"
      const flighthtml2='><div class="flight-top">';
        /*<div class="flight-image">
          <img src="images/map__2.jpg" alt="">
        </div>*/
      const flighthtml3=' <div class="flight-content"><p class="flight-item-reg">';//AZ 200187
      const flighthtml4='  </p> <p class="flight-item-flightnumber"><span  class="flight-item-title">Номер полета</span>';//000150
      const flighthtml5='</p> <p class="flight-item-date-start"><span  class="flight-item-title">Дата начала полета</span>';//20.12.2020 16:30
      const flighthtml6='</p><p class="flight-item-date-stop"><span  class="flight-item-title">Дата окончания полета</span>';//20.12.2020 17:30
      const flighthtml7='</p>  </div> </div>  <div class="flight-bottom">  <p class="flight-item-status ';// status-onapproval">На утверждении
      const flighthtml8='</p>';
      const flighthtml8a=' <a  class="btn btn-more" id="';
      const flighthtml8b='">Подробнее</a>';//</div>';
      const flighthtml8c= '</div>';
      const flighthtml9= /*'<div align="center">*/'<a  class="btn btn-more" id="';//'<br /> <button id="'; 
      const flighthtml10=/*'" class="esri-widget"*/'"> Отменить полет </a></div>';// </button> </div>'
      const flighthtml11='</div>';
      
   // Нижняя граница периода полетов  
          var   st=timeSlider.fullTimeExtent.start.getTime();   
          var stt= new Date(st);
                     
          var stDt=covertTime(stt);
          var     lst="";
          for(let k=0;k<USERS.length;k++)
          {
           // alert(k+"??");
           // alert(document.getElementById("ownerid").value)
            if (USERS[k]==document.getElementById("ownerid").value) 
            {
                      getFlyghtRecords(k,makeListFlyghtPanel);
                     
            }
          }
           
  // Выбор задействованных маршрутных шаблонов и формирование массива имен 
           
            
   //Формирование панели полета
               
                  function makeListFlyghtPanel(response,ind)
                  {
                   
                   for (let i=0;i<response.applications.length;i++) {   
                     
                    if(response.applications[i].application.start.date >= stDt)
                      if(response.applications[i].status.id >2) 
                      
                        panFlyght(response.applications[i]);
                     }
                     document.getElementById("flist").innerHTML=lst;
                     addFlyEvent();
                     
     
                  }
                  
                  
                  function  panFlyght(flyght)
                  {
                  
                  
                  var  nm=flyght.track.name;
                                          
                  var glob= flyght.id;       // glob - GUID полета
                  var kod=  flyght.status.id;   
                  if (kod==3 || kod==4)
                   glb.push([glob,flyght.track.type.toString()]) ;   // glb -  массив согласованных или на согласовании

                  var obj=flyght.application.externalId;//ftfSet.features[i].getAttribute("objectid");
                  var sdat=flyght.application.start.date; //ftfSet.features[i].getAttribute("startdate");
                  var  fdat=flyght.application.finish.date;//ftfSet.features[i].getAttribute("finishdate");
                   
                    lst=lst+flighthtml1;
                    if (kod==3)
                     lst=lst+' flight-list-item-onapproval"';
                     if (kod==7)
                     lst=lst+' flight-list-item-accepted"'; 
                     if (kod==5)
                     lst=lst+' flight-list-item-rejected"';
                     if (kod==4)
                     lst=lst+' flight-list-item-onapproval"';
                     if (kod==6)
                     lst=lst+' flight-list-item-rejected"';
                    lst=lst+flighthtml2; 
                    lst=lst+flighthtml3;
                    lst=lst+nm; 
                    lst=lst+flighthtml4;
                    lst=lst+obj.toString();
                    lst=lst+flighthtml5; 
                    lst=lst+  new Date(sdat).toString();
                    lst=lst+flighthtml6;
                    lst=lst+new Date(fdat).toString();
                    lst=lst+flighthtml7;
                                      
                    
                    
                    if (kod==3)
                    lst=lst+' status-onapproval">На утверждении';
                    if (kod==7)
                    lst=lst+' status-accepted">Выполнен'; 
                    if (kod==5)
                    lst=lst+'  status-rejected">Отклонен';
                    if (kod==6)
                    lst=lst+'  status-rejected">Отменен'; 
                    if (kod==4)
                    lst=lst+'  status-onapproval">Согласован';
                    lst=lst+flighthtml8;
                    if (kod==3 ||kod==4)
                    {
                    lst=lst+flighthtml8a;
                    lst=lst+"P"+glob;   // уникальный идентификатор элемента 
                    lst=lst+flighthtml8b;  
                    lst=lst+flighthtml9;
                    lst=lst+glob+flyght.track.type.toString();       // уникальный идентификатор элемента
                    lst=lst+flighthtml10;
                    }
                    else
                    lst=lst+flighthtml8c;
                    lst=lst+flighthtml11; 
                    }    

                     /* 
                     document.getElementById("flist").innerHTML=lst; 
                       
                             
                     addFlyEvent()   // подключение обработчиков событий 
                       */        
                      //});
                 
                    //  });

        }


/*export*/ function addFlyEvent() {
          
    for (var i=0;i<glb.length;i++)
    {
    
       document
       .getElementById(glb[i][0]+glb[i][1])
       .addEventListener("click", cancelFly); //событие отмены полета
        
       document
       .getElementById("P"+glb[i][0])
       .addEventListener("click",  eventFlyDetal); //событие просмотра полета
   
    }

   }

   /*export*/ function addRouteEvent() {
          
    for (var i=0;i<rlb.length;i++)
    {
      // alert(rlb[i]);
       document
       .getElementById(rlb[i])
       .addEventListener("click", eventRouteDetal); //событие отмены полета
        

       
   
    }

   }





   
  //************** Выбор данных профиля пользователя  */      
  
  // Получение информации о физическом лице из таблицы физических лиц
  /*export*/  function  getProfilUser(){ 
              document.getElementById("login").value= userInfo.username;
              document.getElementById("surname").value= userInfo.lastname;
              document.getElementById("name").value=  userInfo.firstname; 
              document.getElementById("mid_name").value ="";
              document.getElementById("tel_no").value = "";
              document.getElementById("email").value=  userInfo.email;

  
       }

     
       
    /*export*/ function getRouteRecords(owid,resFunc)
    {  
     
    var settings = { url:apiHTML+"track/user/"+owid,

                "method": "GET",
                "timeout": 0,
                beforeSend: function (xhr) {
                  xhr.setRequestHeader("Authorization", 'Bearer '+ token);
              }
                 };

                $.ajax(settings).done(function (response) {
                 if(resFunc==null)
                 {
                  for  (let i=0;i<userIds.length;i++)
                  {
                    if (userIds[i][0]==owid) userIds[i][1]=response.user.user.username;
                  }
                  for (let i=0;i<response.tracks.length;i++)
                  {
                    if(response.tracks[i].isFinal)
                    {
                    let flag=true;
                    for (let j=0;j< tabName.length;j++)
                     {
                      if (tabName[j][2]==response.user.id)
                      {
                        if (tabName[j][1]==response.tracks[i].name)
                        {
                          flag=false;
                          break;
                        }
                      }
                      
                    }
                    if(flag)
                    tabName.push([response.tracks[i].id,response.tracks[i].name,response.user.id]);
                   }
                  }
                 } 
                 else
                 {
               
                 userInfo=response.user.user;  
                 getProfilUser();
                 resFunc(response);
                 
                }
                });
         }
         
         
         /*export*/ function getFlyghtRecords(ind,resFunc)
         {  
         let owid= USERS[ind];
         var settings = { url:apiHTML+"application/user/"+owid,
     
                     "method": "GET",
                     "timeout": 0,
                     beforeSend: function (xhr) {
                      xhr.setRequestHeader("Authorization", 'Bearer '+ token);
                  }
                      };
     
                     $.ajax(settings).done(function (response) {
                      
                      
                      resFunc(response,ind);
                     
                     
                     });
              }

              /*****************************************************************ParselKML************************************************** */
              /*export*/    function parserKML(ss) {
                //alert(ss);
                var plsm=ss.split("<Placemark>")
              
                var Wp=[]
                var Wl=[]
                var WpVl=[]
                var WpVal=[]
                var atrP=[]
                
                for (var i=1;i< plsm.length;i++)
                {
                 var desc=getEl(plsm[i],"<description>","<")
                 
                 if (desc=="Waypoint")
                  Wp.push(plsm[i])
                 if (desc=="Wayline") 
                  Wl.push(plsm[i])
                }
                atrP.push("coordinates")
                
                getAttrTab(WpVal,Wp,atrP)
              
                for (i=0;i<WpVal.length;i++){
                 var coor=WpVal[i][WpVal[i].length-1].split(",")
                 WpVl.push(coor)
                 //WpVal[i][WpVal[i].length-1]=coor
                 
                }
               
                  return WpVl;
                
                    function getEl(s,el,ch)  {
                             
                      var ind=s.indexOf(el)
                       if (ind<0)
                         return ""
                       var desc=s.substring(ind+el.length) 
                       var ind2=desc.indexOf(ch)
                       var desc=desc.substring(0,ind2)
                       return desc
              
                    
              
                   };
              
              
                   function getAttrTab(Wval,Wel,atrs) {
              
                   for (var i=0;i<Wel.length;i++) {
                    
                   
                    var val=[]
                    for (var j=0;j<atrs.length;j++)
                    {
                     
                     var atVal=getEl(Wel[i],atrs[j]+">","<");
                     val.push(atVal);
                    }
                   
                    
                    Wval.push(val)
                     
                   }
                  }
              
                }
              
                /*export*/ function makeCircle(cPoint,radius,layerManual)
                {    
              
                  let cp=   PROJECTION.project(cPoint, { wkid: 4326 },PROJECTION.getTransformation(cPoint.spatialReference,{ wkid: 4326 }));
                 
                     let nP=240;
                     if (radius>50000)  nP=720;
                     var circ=new CIRCLE({
                         center : cp,
                         numberOfPoints:nP,
                         radius :radius,
                         geodesic : true,
                         radiusUnit:"meters",
                         spatialReference : {wkid : 4326}
                     }); 
              
                    var circGraphic=new GRAPHIC({
                      geometry:circ,
                      symbol:fillSymbol3,

                    });
                     
                     layerManual.add(circGraphic);
                   return circGraphic.geometry;
              
              
                }
                /*export*/ function makeLine(wCoord,layerManual)
                 {
                  var paths=[];
                  var ln=[];
                  for(var i=0;i<wCoord.length;i++)
                  { 
                    
                    var cor=[parseFloat(wCoord[i][0]),parseFloat(wCoord[i][1]),parseFloat(wCoord[i][2])]
                    ln.push(cor);
                    
                  }
                 
                  paths.push(ln);
                  var lin=
                  new POLYLINE({
                       hasZ: true,
                       hasM: false,
                       paths: paths,
                       spatialReference: { wkid: 4326 }
                       });
                  var lineGraphic = new GRAPHIC();
              
                  lin = PROJECTION.project(lin, { wkid: 3857 },PROJECTION.getTransformation(lin.spatialReference,{ wkid: 3857 }));    
                  lineGraphic.geometry=lin;
                  
                  lineGraphic.symbol=lineSymbol3;
                  layerManual.add(lineGraphic);
                  return lineGraphic.geometry;
                  
                 
                  
                 }

                 /*************************************************************************View************************************ */

                 /*export*/ function changeExtent (geom)
                 {
                   if (geom.type=="polygon")
                   {
                      if (geom.isSelfIntersecting) 
                      {
                        alert("Некорректная геометрия") 
                        layerManual.removeAll()
                        return
                      }  
                   }   
                
                   var ext=geom.extent;
                   var wkd=ext.spatialReference.wkid;
                      
                                    
                         view.extent= new EXTENT({
                           
                            xmin: ext.xmin-(ext.xmax-ext.xmin),
                            ymin: ext.ymin-(ext.ymax-ext.ymin),
                            xmax: ext.xmax+(ext.xmax-ext.xmin),
                            ymax: ext.ymax+(ext.ymax-ext.ymin),
                           spatialReference: {
                           wkid: wkd
                                      }
                            })
                
                 }
                
                
                 
                 
                
                
                
                //************************************************************* выбор маршрута из слоя по клику
                /*export*/ function queryRoad(screenPoint,routeid) {
                
                  
                  function queryEmpty(track)
                  {
                
                    let stat= track.type;
                    if  (stat==2)
                    {
                     tableLayer.definitionExpression="routeid = '"+routeid+"' And numb >= 0"
                  
                         queryRoadAll(routeid);
                    }
                    else      
                        queryZone(screenPoint,routeid);
                 
                     
                 
                     message.innerText = "";
                  }  
                  var ownerId= document.getElementById("ownerid").value;
                  if (routeid!="")
                  {
                   tableLayer.definitionExpression="objectid < 0'";
                   tableZoneLayer.definitionExpression="objectid < 0'"; 
                   getRouteRecord(routeid,queryEmpty);
                
                 
                  }
                 else{
                  var distance =// 200;
                   (view.extent.xmax-view.extent.xmin)/200;
                  var units = "meters";
                   tableLayer.definitionExpression="objectid < 0'";
                   tableZoneLayer.definitionExpression="objectid < 0'";
                  var  wH = "ownerid = '"+ownerId+"'";
                   const point = view.toMap(screenPoint);
                   tableLayer.queryFeatures({
                     geometry: point,
                     // distance and units will be null if basic query selected
                     distance: distance,
                     units: units,
                     where : wH,
                     spatialRelationship: "intersects",
                     returnGeometry: true,
                     returnZ :true,
                     returnM :true,
                     returnQueryGeometry: true,
                     outFields: ["*"],
                   })
                   .then(function(featureSet) {
                     //featureTable.clearSelection();
                     if(featureSet.features.length>0)
                     
                     // set graphic location to mouse pointer and add to mapview
                     {
                      
                       
                 
                        var rd=featureSet.features[0].getAttribute("routeid");
                        tableLayer.definitionExpression="routeid = '"+rd+"' And numb >= 0"
                                      
                        queryRoadAll(rd);
                        
                        message.innerText = ""; 
                 
                     }
                     else 
                     {
                        
                       //tableLayer.definitionExpression="objectid < 0'";
                      
                       queryZone(point,"");
                       
                     
                    
                   }
                  });
                    //******** получение имени маршрута  */
                 }
                 function getRouteName(track)
                 {
                  document.getElementById("nameroute").value=track.name; 
                 
                 }
                 
                
                    function queryZone(point,routeid) { 
                
                      if (routeid!="")
                      {
                
                
                        let wH = "routeid = '"+routeid+"'";
                        
                         zoneLayer.queryFeatures({
                        
                             where : wH,
                           // distance and units will be null if basic query selected
                        
                             returnGeometry: true,
                             returnZ :true,
                             
                           outFields: ["*"],
                         })
                         .then(function(featureSet) {     
                          if(featureSet.features.length>0)
                          {
                         message.innerText = ""; 
                         var rd=featureSet.features[0].getAttribute("routeid");
                          
                          layerManual.removeAll();
                          document.getElementById("routeid").value=featureSet.features[0].getAttribute("routeid");
                          
                           tableZoneLayer.definitionExpression="routeid = '"+rd+"'";
                          
                          // featureTableZone.selectRows(featureSet.features);
                           
                         //  featureTableZone.refresh(); 
                          getRouteRecord(rd,getRouteName);
                          //getRouteName(rd);
                             
                          changeExtent(featureSet.features[0].geometry);
                          
                          
                        
                             }
                            
                             });
                
                
                      }
                      else
                      {
                      var wH = "ownerid = '"+ownerId+"'";
                      var distance=0;
                      var units = "meters";
                       zoneLayer.queryFeatures({
                           geometry: point,
                           where : wH,
                         // distance and units will be null if basic query selected
                           distance: distance,
                           units: units,
                           spatialRelationship: "intersects",
                           returnGeometry: true,
                           returnZ :true,
                           
                         outFields: ["*"],
                       })
                       .then(function(featureSet) {     
                        if(featureSet.features.length>0)
                        {
                       message.innerText = ""; 
                       var rd=featureSet.features[0].getAttribute("routeid");
                        
                        layerManual.removeAll();
                        document.getElementById("routeid").value=featureSet.features[0].getAttribute("routeid");
                       
                       
                        
                         tableZoneLayer.definitionExpression="routeid = '"+rd+"'";
                            
                        
                        
                        
                       //  featureTableZone.selectRows(featureSet.features);
                         
                       //  featureTableZone.refresh(); 
                           getRouteRecord(rd,getRouteName);
                         //getRouteName(rd);
                           
                        changeExtent(featureSet.features[0].geometry);
                        getDetailZone(document.getElementById("routeid").value,true);
                      
                           }
                          
                           });
                       } 
                     }  
                    
                
                   
                 
                 function queryRoadAll (rd)
                 {
                   getRouteRecord(rd,getRouteName);
                   //getRouteName(rd);
                    
                
                   
                   var whh="routeid = '"+rd+"' And numb >= 0 ";  
                   routeVecLayer.queryFeatures({
                     where : whh,
                     orderByFields : ["numb"],
                      returnGeometry: true,
                     returnZ :true,
                     returnM :true,
                     
                     outFields: ["*"],
                   })
                   .then(function(featureSet) {
                     
                   // alert(featureSet.features.length);
                     if(featureSet.features.length>0)
                     // set graphic location to mouse pointer and add to mapview
                     {
                      
                      var pts=[];
                     // flypts=[];
                   
                
                      for (var i=0;i<featureSet.features.length;i++)
                      {
                        var m=i;
                       
                       if(i==0) 
                           pts.push(featureSet.features[m].geometry.paths[0][0]);
                       var n=featureSet.features[m].geometry.paths[0].length; 
                       pts.push(featureSet.features[m].geometry.paths[0][n-1]);
                       flypts.push(featureSet.features[m].geometry.paths[0]);
                      }
                       //  alert(flypts.length)
                     }
                     var lin=
                     new POLYLINE({
                     hasZ: true,
                     hasM: true,
                     paths: pts,
                     spatialReference: { wkid: 4326 }
                     });
                        //lin =featureSet.features[i].geometry;
                     
                     if (document.getElementById("routeid").value!=featureSet.features[0].getAttribute("routeid"))
                     {
                
                        rd=featureSet.features[0].getAttribute("routeid");
                        
                        whh="routeid = '"+rd+"'";
                     layerManual.removeAll();
                     document.getElementById("routeid").value=featureSet.features[0].getAttribute("routeid");
                     
                     
                    
                     changeExtent(lin);
                     
                      
                    
                     //featureTable.refresh();
                
                     
                     
                     }
                     getDetailRoute(document.getElementById("routeid").value,true); 
                     
                   });
                
                
                 }
                             
                }
                   