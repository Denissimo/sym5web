var route;
var roles;
var scene;
var token ;
var apiUrl;
var tmzon;
var geop;
var GEOPROCESSOR;
var POLYLINE;
var POLYGON;
var MULTIPOINT;
var POINT;
var EXTENT;
var GRAPHIC;
var PROJECTION;
var CIRCLE;
var GEOMETRYENGINE;    
var QUERY;
var FEATUREFILTER;
var GRAPHICSLAYER;
var LABELCLASS;
var FEATURELAYER;

var flyType;
var timeSlider;
var user;
var view;
var zoneLayerTen;
var flyZoneLayer;
var flyVecLayer;
//var linSymbol;

var layerConf;


var realAllLayer;
var realLayer;
var routeLayer;
var selectLayer; //слой подсветки выбраннных объектов на карте
var bufferLayer;

var layerManual;
var glb=[];
require(
    [   "esri/config", //dv
        "esri/layers/WebTileLayer", //dv
        "esri/layers/GroupLayer", //dv
        "esri/layers/FeatureLayer" , //dv
        "esri/layers/GraphicsLayer" ,
        "esri/layers/support/LabelClass",//dv
        

        "esri/tasks/support/Query",
        "esri/Graphic",
        "esri/geometry/Extent",
        "esri/geometry/Polyline",
        "esri/geometry/Circle",
        "esri/geometry/Polygon",
        "esri/geometry/Point",
        "esri/geometry/Multipoint",
        "esri/geometry/geometryEngine",
        "esri/geometry/projection",
        
        "esri/views/MapView",
        "esri/views/SceneView",
        "esri/WebMap",
        "esri/WebScene",
        
        "esri/views/layers/support/FeatureFilter",

        "esri/widgets/Sketch",
        "esri/widgets/Search",
        "esri/widgets/TimeSlider",
        "esri/widgets/Expand",
        "esri/widgets/BasemapGallery",
        "esri/widgets/BasemapToggle",
        "esri/widgets/LayerList",
        "esri/widgets/Locate",
        "esri/tasks/Geoprocessor",
        "esri/widgets/Compass",
        "esri/widgets/Legend"
    ],

    function (
        esriConfig,   //dv
        WebTileLayer, //dv
        GroupLayer,   //dv
        FeatureLayer, //dv
        GraphicsLayer, //dv
        LabelClass,//dv
        Query,
        Graphic,
        Extent,
        Polyline,
        Circle,
        Polygon,
        Point,
        Multipoint,
        geometryEngine,
        projection,
        
        MapView,
        SceneView,
        WebMap,
        WebScene,

        FeatureFilter,

        Sketch,
        Search,
        TimeSlider,
        Expand,
        BasemapGallery,
        BasemapToggle,
        LayerList,
        Locate,
        Geoprocessor,
        Compass,
        Legend
    ) {
       
        
        var tokenCookieName = '{{ token_cookie_name }}';
        token = $.cookie(tokenCookieName);
        apiUrl = '{{ api_url|raw }}';
        roles = JSON.parse('{{ user.user.roles|json_encode() }}');
        user = JSON.parse('{{ user|json_encode() }}');
        route = '{{ route }}';
        layerConf=[];
 
        GEOPROCESSOR = Geoprocessor;
        MULTIPOINT=Multipoint;
        POINT=Point;
        POLYGON=Polygon;
        POLYLINE=Polyline; 
        EXTENT=Extent;
        GRAPHIC=Graphic;
        CIRCLE=Circle;
        GEOMETRYENGINE=geometryEngine;    
        QUERY=Query;
        projection.load();
        PROJECTION=projection;
        FEATUREFILTER=FeatureFilter;
        GRAPHICSLAYER = GraphicsLayer;
        LABELCLASS=LabelClass; 
        FEATURELAYER=FeatureLayer; 
        console.log(route);
        console.log(roles);
        console.log(user); 

        // пример получения данных из API
        var allApplications = apiData(
            apiUrl,
            '/application/interval/20210604000000/20210615000000',
            token
        );

        allApplications.then(function (response) {
            console.log(response);
        });



        // пример изменения данных в API
        /*
        var setAircraft = apiData(
            apiUrl,
            '/aircraft/a6ed6021-c495-4aba-b3bf-f234ebcaf4ae',
            token,
            'PUT',
            {
                "category": 3,
                "mass": 2
            }
        );

        setAircraft.then(function (response) {
            
        });
        */
        esriConfig.portalUrl = webPaths.portalUrl //"https://abr-gis-portal.airchannel.net/portal";
        
        
        
             let xmn=$.cookie("xMin");            
             let ymn=$.cookie("yMin");            
             let xmx=$.cookie("xMax");
             let ymx=$.cookie("yMax");
             let wk=$.cookie("wkid");   
        if(checkRoleRoute("ROLE_OPERATOR",roles))
        {
          
 //*********************** Подгрузка карты  для выбора из нее слоев ограничивающих полеты (из сцены нельзя ) *************************/

               
                var map  = new WebMap({
                portalItem: {
                   id:  webPaths.mapId  ,  //  "4e1ce0dd127c4cadabd554b808d059b4",
                   portal: webPaths.portalUrl   //    "https://abr-gis-portal.airchannel.net/portal"
                        }
                 
               }); 
               view = new SceneView({
                map: map,
                container: "map-operator"
                 });

//********************************************************************************************************************************* */

             scene = new WebScene({
            portalItem: {
                id: webPaths.sceneId  ,  //  "4c4de937a5d148f18cfa76b23c873766",
                portal: webPaths.portalUrl //   "https://abr-gis-portal.airchannel.net/portal"
            },
        });
        
           view = new SceneView({
            map: scene,
            container: "map-operator"
        });
        if (xmn!=null && wk==4326)
        {
            view.extent= new EXTENT({
              
                           
                xmin: xmn,
                ymin: ymn,
                xmax: xmx,
                ymax: ymx,
               spatialReference: {
               wkid: wk
                          }
                });
                
        }
        
        const quality = document.querySelector('.quality-selector');
        quality.addEventListener("change", function (event) {
            changeQualityScene(this.value);
        });

        function changeQualityScene(param) {
            if (param.toString() === "low") {
                view.qualityProfile = "low";
            }

            if (param.toString() === "medium") {
                view.qualityProfile = "medium";
            }
            if (param.toString() === "high") {
                view.qualityProfile = "high";
            }
        }
       }
       else  if(checkRoleRoute("ROLE_OWNER",roles))
        {
           
            
            scene = new WebMap({
               portalItem: {
                  id:  webPaths.mapId  ,//"4e1ce0dd127c4cadabd554b808d059b4",
                  portal: webPaths.portalUrl //    "https://abr-gis-portal.airchannel.net/portal"
                       },
                ground : "world-elevation"  
                
              });
        
            view = new MapView({
            map: scene,
            spatialReference : {wkid :3857},
            container: "map-operator"
             });
         
               
              
             if (xmn!=null)
             {
                view.extent= new EXTENT({
              
                           
                    xmin: xmn,
                    ymin: ymn,
                    xmax: xmx,
                    ymax: ymx,
                   spatialReference: {
                   wkid: wk
                              }
                    });
             }        

         var tracks=apiData(
            apiUrl,
            '/track/user/'+user.id.toString(),
            token
           );
           tracks.then(function (response) {
            
            for (let i=0;i<response.tracks.length;i++)
            {
              if(response.tracks[i].isFinal)
              {
                  tabName.push(response.tracks[i].name);
              }
            }
        });
             
        }
        
        
        // Quality settings of scene
        

        // Remove copyrights at bottom
        view.ui.remove("attribution");
        let tmd="time-window";
        if (route!="Archive") tmd="instant"
        let d=new Date();    
        let d2=new Date();  d2.setDate(d2.getDate() + 20); // 10 дней предыдущих 20 последующих
        let  d1=new Date(); d1.setDate(d1.getDate() + 1);
        let timeExtent = ({
             start: d,
              end:  d2
                      });
 
           timeSlider = new TimeSlider({
           container: document.createElement("div"),
           fullTimeExtent : timeExtent,
           values: [d,d1],
           mode : tmd, // не интервал
           timeVisible:true,
          
           stops: {
             interval: {
               value: 15,
               unit: "minutes"
             }
           }
         });
        
         if(route === "Flights" || route === "Tracks")
         {
          
          let vl=$.cookie("timeVal");
          if (vl!=null) 
          {
            let vs=$.cookie("timeStart");
            let ve=$.cookie("timeEnd");
            let vd=   new Date();
            let vds=   new Date();
            let vde=   new Date();
            if(vs!=null)
            {
              
               vds.setTime(vs);
          //     document
          //    .getElementById("date_start").value = new Date(vds);
          //    console.log((new Date(vds))+" $$$");
           
               vde.setTime(ve);
               timeExtent = ({
                start: vds,
                 end:  vde
                         });

               timeSlider.fullTimeExtent=timeExtent;        
                        }    
               vd.setTime(vl);
                        
            if (vl>=timeSlider.fullTimeExtent.start.getTime() && vl <=timeSlider.fullTimeExtent.end.getTime() )
             
             timeSlider.values=[vd];
             
            // console.log(timeSlider.fullTimeExtent.start+" $$$");
          }
         }
         else if (route==="Archive")
         {
          let vds=   new Date();
          vds=new Date(vds.setTime(vds.getTime()-1000*3600*24*365));
          let vds1=   new Date();
          vds1=new Date(vds1.setTime(vds1.getTime()-1000*3600*24*30));
          let vde=   new Date(); 
          let vArchBeg=$.cookie("timeValArchBeg");
          let vArchEnd=$.cookie("timeValArchEnd");
          timeExtent = ({
            start: vds,
             end:  vde
                     });

                stps=    {
                      interval: {
                        value: 1,
                        unit: "days"
                      }
                    }          
           timeSlider.fullTimeExtent=timeExtent;
           timeSlider.values=[vds1,vde];
          if(vArchBeg!=null)
            {
               let vab=new Date();
               let vae=new Date();
               vab=vab.setTime(vArchBeg);
               vae=vae.setTime(vArchEnd);
              timeSlider.values=[vab,vae];        
             }
                  
              

            
         }  


        if(checkRoleRoute("ROLE_OWNER",roles) )
        {
            var compassWidget = new Compass({
                view: view
              });
      
              // Add the Compass widget to the top left corner of the view
            view.ui.add(compassWidget, "top-left");
              
         if(route==="Flights" ||route==="Tracks" || route==="Archive"  )
         {
            addLayers2D(scene);   
            layerManual = new GraphicsLayer({listMode:"hide"});
         }
         if( route==="Tracks" ) 
         {

         setTrackSidebar();

         setTrackFlightSidebar();
         
        // Sketch widget
        const sketch = new Sketch({
            layer: layerManual,
            view: view,
            availableCreateTools:["polyline", "polygon", "rectangle", "circle","point"],
            // graphic will be selected as soon as it is created
            creationMode: "single"
          });
          const bgExpandSketch = new Expand({
            view: view,
            content: sketch
        });
        view.ui.add(bgExpandSketch, {
            position: "top-left",
            index: 1
        });
       eventSketch(sketch,layerManual);
       eventView(view,sketch,layerManual)
       scene.layers.add(layerManual);    
        }
        else if( route==="Flights" ) 
        {
            document.getElementById("optionsDiv3d").hidden=true;

            setFlightSidebar()
        }

        else if( route==="Archive" )
        {

          setFlightSidebar();

        }

    }  





        // Search widget
        const searchWidget = new Search({
            view: view
        });

        view.ui.add(searchWidget, {
            position: "top-left",
            index: 0
        });

        
        // Layer list of obstacles + expand menu
        const layerList = new LayerList({
            view: view
      });
          
      const bgExpandLayerList = new Expand({
          view: view,
          content: layerList
      });

      view.ui.add(bgExpandLayerList, {
          position: "top-left",
          index: 4
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

        basemapGallery.watch("activeBasemap", function () {
            const mobileSize = view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";

            if (mobileSize) {
                bgExpand.collapse();
            }

        });

        view.ui.add(bgExpand, {
            position: "top-left",
            index: 5
        });


          
        const bgExpandTime = new Expand({
            view: view,
            expandIconClass:"esri-icon-time-clock",
            content: timeSlider
        });  
        bgExpandTime.content=timeSlider.container;

      
        
        view.ui.add(bgExpandTime, {
            position: "top-left",
            index: 6
        });
        


        if(checkRoleRoute("ROLE_OWNER",roles) )
        {

      bufferLayer = new GraphicsLayer({

          listMode:"hide"
      });
    }
    else    if(checkRoleRoute("ROLE_OPERATOR",roles) )
    {
     
      if(route==="AirSituation" || route==="Archive" ){  bufferLayer = new GraphicsLayer({
        listMode:"hide",
        hasZ :true,
        elevationInfo: {
          mode: "relative-to-ground"                 
                
                }

         }    );
      
        }
     
      else 
      bufferLayer = new GraphicsLayer({   listMode:"hide",
        elevationInfo: {  mode:"on-the-ground",
                          offset : 100
                       }
      });
    }

      scene.layers.add(bufferLayer);



       
        if(route==="AirSituation")

            {
              /*
              els=document.getElementById("timeSett");
              els.hidden=true;*/
              bgExpandTime.visible=false ; 
              addReal(scene,checkRoleRoute("ROLE_OWNER",roles));
              makeRealFlyght(realLayer);
         
             
              window.setInterval(refreshRealLayer, 3000,checkRoleRoute("ROLE_OWNER",roles));
              
            }
            else
            {
            
             setTimeSliderWatch();
            }
             
        if(checkRoleRoute("ROLE_OPERATOR",roles))
        {
             
            if(route==="Flights" ||route==="Archive")
             { 
              addLayers3D(scene);
              try{
              document.getElementById("optionsDiv").hidden=true; 
              }
              catch{}
              setFlightSidebar();
             }
            
             

        }
        else if(checkRoleRoute("ROLE_OWNER",roles))

        {
          
          selectLayer=addSelectLayer(GraphicsLayer,scene);

        }
        
         addMobail(WebTileLayer,GroupLayer,esriConfig,scene);
         

        
        
        
       
        //******************************************************** выгрузка слоев ограничивающих полеты */
        scene.when(function(){
            if(checkRoleRoute("ROLE_OWNER",roles) && route==="Flights")
             getLayersByTitle(scene.allLayers,["Опасные зоны","Запретные зоны","Зоны с ограничениями"],layerConf);
           
             
          }, function(error){
            
          });

          if(checkRoleRoute("ROLE_OPERATOR",roles))
            map.when(function(){
               if(checkRoleRoute("ROLE_OPERATOR",roles) && route==="Flights")
                 getLayersByTitle(map.allLayers,["Опасные зоны","Запретные зоны","Зоны с ограничениями"],layerConf);
           
          }, function(error){
            
          }); 
               
        //************************************************************************************************************** */}
        if(checkRoleRoute("ROLE_OWNER",roles))
          view.popup.watch("visible", function(vis) {
              if (!vis) selectLayer.graphics.removeAll();
          });
       if(checkRoleRoute("ROLE_OWNER",roles))    
         view.popup.watch("selectedFeature", function(graphic) {
          if (graphic) { 
           if (graphic.geometry){  
              
             let graphic2=graphic.clone();    
             if (graphic2.geometry.type==="polygon")
                graphic2.symbol=mySymbols.fillSymbolSelect;
             if (graphic2.geometry.type==="polyline")
                graphic2.symbol=mySymbols.lineSymbolSelect;   
             if (graphic2.geometry.type==="point")
                 graphic2.symbol=mySymbols.markerSymbolSelect;   
                 
                 selectLayer.graphics.removeAll();
                 selectLayer.graphics.add(graphic2);
                 scene.layers.reorder(selectLayer,scene.layers.length);   
                 
        }
    }
  });
  

/*
  const legend = new Legend({
    view: view
    layerInfos: [
      {
        layer: featureLayer,
        title: "NY Educational Attainment"
      }
    ]
  });

  const bgExpandLegend = new Expand({
    view: view,
    content: legend
});

  view.ui.add(bgExpandLegend, "top-left");
*/

    });

    function checkRoleRoute(role,roles)
    {
        for (let i=0; i<roles.length; i++) 
          if(roles[i]===role) return true;
        return false;    
    }

   
    function getLayersByTitle(lays,titles,layerConflict)
    {
        
        for (let i=0;i<lays.length;i++ )
        {
            let lay=lays.getItemAt(i);
            
            try {
                for(let j=0;j<titles.length;j++)
                if (lay.title===titles[j])
                    {
                        
                    layerConflict.push(lay);
              
                    }
              }
                   catch{
                    console.log("error");
                   }
          
           lay.when(function(){
               
          if (lay.type==="map-image")
               getLayersByTitle(lay.allSublayers,titles,layerConflict);    
            
           });

        }
          
       return null;
    }
    function emptyArray(arr) {
        while(arr.length > 0) {
          arr.pop();
        } 
        }
    function copyArray(arr,arrCopy) {
          for(let i=0;i<arr.length;i++) {
          arrCopy.push(arr[i]);
          } 
          }      
        function buildDefinitionQueryFly()/*timeSlider)*/ {   // показывать точки полетов в суточном интервале от установленной даты
    
            let et=timeSlider.timeExtent.end.getTime();
            let st=timeSlider.timeExtent.start.getTime();
            let ett= new Date(et); ett.setDate(ett.getDate()+1)
            let stt= new Date(st);
            
            let startDt=convertTime(stt);//st;
            let endDt=convertTime(ett);//et
            let defQuery ="sdate >= timestamp'"+ startDt+"' And edate <= timestamp'"+endDt+ "'";
           return defQuery;
         }

         function convertTime(stt)
         { 
          var st1=stt.toISOString();
          var i1=st1.indexOf("T")
          var i2=st1.indexOf(".",i1)
         
          var st2=st1.substring(0, i2);
          var st=st2.replace("T", " ");
          return st;
         }

function changeStartDate()
{
  var start= document
  .getElementById("date_start").value;
  let startD=new Date(start).getTime();
  let startTime= document
  .getElementById("time_start").value;
  let startTs=startTime.split(":");
  let startTm=3600000*parseInt(startTs[0])+60000*(startTs[1]);
  
  changeDateTime(startD+startTm,(new Date(timeSlider.fullTimeExtent.end)).getTime(),(new Date(timeSlider.values[0])).getTime());
  
   
}
         
function changeFinishDate()
{
  var finish= document
  .getElementById("date_finish").value;
  let finishD=new Date(finish).getTime();
  let finishTime= document
  .getElementById("time_finish").value;
  let finishTs=finishTime.split(":");
  let finishTm=3600000*parseInt(finishTs[0])+60000*(finishTs[1]);

  changeDateTime((new Date(timeSlider.fullTimeExtent.start)).getTime(),finishD+finishTm,(new Date(timeSlider.values[0])).getTime())

}

function changeChooseDate()
{
  var choose= document
  .getElementById("date_choose").value;
  let chooseD=new Date(choose).getTime();
  let chooseTime= document
  .getElementById("time_choose").value;
  let chooseTs=chooseTime.split(":");
  let chooseTm=3600000*parseInt(chooseTs[0])+60000*(chooseTs[1]);

  changeDateTime((new Date(timeSlider.fullTimeExtent.start)).getTime(),(new Date(timeSlider.fullTimeExtent.end)).getTime(),chooseD+chooseTm)

}

function changeDateTime(startD,finishD,chooseD)
{
 if(route!="Archive")
 {
  let startD1=new Date().getTime();

 
  if (startD<startD1)
       sm=new Date(startD1); 
  else
      sm=new Date(startD);

   
    if (sm.getTime()-finishD>=-3600000*24)
        fm=new Date(sm.getTime()+3600000*24);
    else
        fm=new Date(finishD);

    if (chooseD<sm) chooseD=sm.getTime()+100000;
    if (chooseD>fm) chooseD=fm.getTime()-100000;
       
     let tm=new Date(chooseD);
            
      
      setTimeSliderBase(sm,fm,tm);
      getUserFly(sm,fm);
 }
 else{
  //alert(new Date(startD)+" ? "+Date(finishD));
  let endD1=new Date().getTime();
  let  fm=new Date();
  if(finishD<=endD1) 
      fm=new Date(finishD);
   let sm=new Date(startD); 
   if (sm.getTime()-finishD>=-3600000*24)  
      sm=new Date(fm.getTime()-3600000*24*7);

    if (chooseD<sm) chooseD=sm.getTime()+100000;
    if (chooseD>fm) chooseD=fm.getTime()-100000;
       
     let tm=new Date(chooseD);
    // alert(sm+" ! "+fm);
     timeSlider.values=[sm,fm];

     getUserFly(sm,fm);
     


 } 

 

}   
         function setTimeSliderWatch()
{
     
  document
   .getElementById("date_start")
   .addEventListener("change", changeStartDate);   
   document
   .getElementById("time_start")
   .addEventListener("change", changeStartDate);   
   document
   .getElementById("date_finish")
   .addEventListener("change", changeFinishDate);   
   document
   .getElementById("time_finish")
   .addEventListener("change", changeFinishDate);   
   document
   .getElementById("date_choose")
   .addEventListener("change", changeChooseDate);   
   document
   .getElementById("time_choose")
   .addEventListener("change", changeChooseDate); 
   
     timeSlider.watch("timeExtent", function () { 
       flyZoneLayer.definitionExpression=buildDefinitionQueryFly();
       
       if(route!="Archive")
       {
        $.cookie("timeVal",timeSlider.values[0].getTime());
        $.cookie("timeStart",timeSlider.fullTimeExtent.start.getTime());
        $.cookie("timeEnd",timeSlider.fullTimeExtent.end.getTime());
       }
       else
       {
        $.cookie("timeValArchBeg",timeSlider.values[0].getTime());
        $.cookie("timeValArchEnd",timeSlider.values[1].getTime());
        //console.log("*************");
        getUserFly(new Date(timeSlider.values[0].getTime()),new Date(timeSlider.values[1].getTime()));
       }
       if (checkRoleRoute("ROLE_OPERATOR",roles))  
       { 
        if (idFly!="")
        {  
           
          if (emulpts.length==0) {
           
            zoneLayerTen.definitionExpression=buildDefinitionQueryFly();
            routeLayer.definitionExpression=buildDefinitionQueryFly();
          } 
           if  (emulpts.length>0) {

              let ind=-1;
              
              let dd=new Date(timeSlider.values[0]).getTime();
             
              let kf=0.0
             
              for(let i=0;i<emulpts.length;i++)
              {

                if(emulpts[i][1]>dd)
                {
             
                  break;
                }
                 ind=i; 
                 
                 
                }

                if(ind>=0 && ind<emulpts.length-1)
                 {
                    kf=1.0-((emulpts[ind+1][1]-dd)/(emulpts[ind+1][1]-emulpts[ind][1]));
                 }
            
              if(ind>=0)
              {
                let geom=emulpts[ind][0];
                let wk=geom.spatialReference.wkid;

                if(dronLayer.graphics.length==0)
                {
                let gDron=new GRAPHIC(
                    {
                      geometry : emulpts[ind][0],
                      symbol:mySymbols.webDronActive
                   
                    })
                let dronPath=[];
                dronPath.push([emulpts[ind][0].x,emulpts[ind][0].y,emulpts[ind][0].z-50]);
                dronPath.push([emulpts[ind][0].x,emulpts[ind][0].y,emulpts[ind][0].z+1-50]);
                     
                let gPath=new GRAPHIC({
                  geometry :new POLYLINE({
                   hasZ: true, 
                   paths:[dronPath],
                   spatialReference :{wkid:wk}
                  }),
                  symbol:mySymbols.emulSymbolRoute 
                });
                       
                   dronLayer.add(gDron); 
                   dronLayer.add(gPath);
                   
                  }

                  else
                 {
                  
                
                  let x0=emulpts[ind][0].x; let y0=emulpts[ind][0].y;  let z0=emulpts[ind][0].z;
                  let x1=emulpts[ind][0].x; let y1=emulpts[ind][0].y; let z1=emulpts[ind][0].z; 
                  if(ind<emulpts.length-1)
                  {  x1=emulpts[ind+1][0].x; y1=emulpts[ind+1][0].y;  z1=emulpts[ind+1][0].z; }

                  x0=x0+kf*(x1-x0);y0=y0+kf*(y1-y0);z0=z0+kf*(z1-z0);

                  gDron=new POINT({
                   x:x0,
                   y:y0,
                   z:z0,
                   spatialReference :{wkid:wk}
                  });

                  let dronPath=[];
                  if(emulpts[0][1]==dd)
                  {
                    
                    let el=[];
                    el.push(emulpts[ind][0].x);el.push(emulpts[ind][0].y);el.push(emulpts[ind][0].z-50);
                    dronPath.push(el);
                    emptyArray(el);
                    el.push(emulpts[ind][0].x);el.push(emulpts[ind][0].y);el.push(emulpts[ind][0].z+1-50);
                    dronPath.push(el);
                  } 
                  else 
                   {
                     for(let k=0;k<dronLayer.graphics.getItemAt(1).geometry.paths[0].length;k++)
                     {
                       let el=[];
                       el.push(dronLayer.graphics.getItemAt(1).geometry.paths[0][k][0]);
                       el.push(dronLayer.graphics.getItemAt(1).geometry.paths[0][k][1]);
                       el.push(dronLayer.graphics.getItemAt(1).geometry.paths[0][k][2]);
                       dronPath.push(el);
                     }
                       let el=[];el.push(x0);el.push(y0);el.push(z0-50);
                       dronPath.push(el);  

                   }   
                  gPath=new POLYLINE({
                    hasZ: true,
                    paths : [dronPath],
                    spatialReference :{wkid:wk}
                  })
                  //console.log(dronLayer.graphics.getItemAt(1).geometry);

                  dronLayer.graphics.getItemAt(0).geometry=gDron; //emulpts[ind][0];
                  dronLayer.graphics.getItemAt(1).geometry=gPath;  
                 }
                    

              }
            }
               
                    }
                   }
                  });
                
          }
          
          function   initTimeSlider(){
            let d=new Date();    
            let d2=new Date();  d2.setDate(d2.getDate() + 20); // 10 дней предыдущих 20 последующих
            let  d1=new Date(); d1.setDate(d1.getDate() + 1);
            let timeExtent = ({
                 start: d,
                  end:  d2
                          });
     
               
               
               timeSlider.fullTimeExtent = timeExtent;
             
               timeSlider.values= [d,d1];
               timeSlider.mode = "instant"; // не интервал
               timeSlider.timeVisible=true;
               timeSlider. stops= {
                 interval: {
                   value: 15,
                   unit: "minutes"
                 }
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
            function updateLayer(lay,params,message=null) {
              lay
                     .applyEdits(params)
                     .then(function(editsResult){ 
                     if(message!=null)
                       alert(message);  
            
                   })
                     .catch(function(error) {
                         alert( error.name);
                        alert( error.message);
                       
                     });
            
            }
    

            function updateRecordFlyghtTable(dat,flid,isNew=false) {
              emptyArray(glb);
              apiModFlight= apiData(apiUrl, "/application/"+flid, token, 'PUT', dat);
        
              apiModFlight.then(function (response) {
                   let sm=timeSlider.fullTimeExtent.start;
                   let fm=timeSlider.fullTimeExtent.end;
                   getUserFly(new Date(sm),new Date(fm)); // формирование панели полетов
                   if (isNew)
                   {
                   
                    alert ("Заявка сформирована. ");
                   }
      }); 
       
   } 
   
   function setTimeSliderBase(tm,fm,sm)
   {
     
  
    let st0=new Date(sm.getTime()-tmzon*3600000); 
    let st1=new Date(tm.getTime()-tmzon*3600000);
    
     timeSlider.values=[st0];
     st2=new Date(fm.getTime()-tmzon*3600000);
     st2.setSeconds(st2.getSeconds()+10) 
    
     timeExtent = ({
     start: st1,
     end:  st2
   });
   
   
   timeSlider.fullTimeExtent=timeExtent;

    
   } 
 function getUserFl()
{
  getUserFly(new Date(timeSlider.fullTimeExtent.start),new Date(new Date(timeSlider.fullTimeExtent.end)));

}         