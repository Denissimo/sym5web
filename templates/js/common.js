var token ;
var apiUrl

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
var user;
var view;
var flypts=[];
var profil=[];
var tabName=[];
var nameRoute;
var idRoute;
var selectLayer; //слой подсветки выбраннных объектов на карте
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
        
        "esri/widgets/Sketch",
        "esri/widgets/Search",
        "esri/widgets/Expand",
        "esri/widgets/BasemapGallery",
        "esri/widgets/BasemapToggle",
        "esri/widgets/LayerList",
        "esri/widgets/Locate",
        "esri/tasks/Geoprocessor",
        "esri/widgets/Compass"
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
        Sketch,
        Search,
        Expand,
        BasemapGallery,
        BasemapToggle,
        LayerList,
        Locate,
        Geoprocessor,
        Compass
    ) {
       
        var scene;
        var tokenCookieName = '{{ token_cookie_name }}';
        token = $.cookie(tokenCookieName);
        apiUrl = '{{ api_url|raw }}';
        var roles = JSON.parse('{{ user.user.roles|json_encode() }}');
        user = JSON.parse('{{ user|json_encode() }}');
        var route = '{{ route }}';
        var layerConf=[];

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
            console.log(response);
        });
        */
        esriConfig.portalUrl = "https://abr-gis-portal.airchannel.net/portal";
        
        
        

        if(checkRoleRoute("ROLE_OPERATOR",roles))
        {
          
 //*********************** Подгрузка карты  для выбора из нее слоев ограничивающих полеты (из сцены нельзя ) *************************/

               
                var map  = new WebMap({
                portalItem: {
                   id:  "4e1ce0dd127c4cadabd554b808d059b4",
                   portal: "https://abr-gis-portal.airchannel.net/portal"
                        }
                 
               }); 
               view = new SceneView({
                map: map,
                container: "map-operator"
                 });

//********************************************************************************************************************************* */

             scene = new WebScene({
            portalItem: {
                id: "4c4de937a5d148f18cfa76b23c873766",
                portal: "https://abr-gis-portal.airchannel.net/portal"
            },
        });
        
           view = new SceneView({
            map: scene,
            container: "map-operator"
        });
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
                  id:  "4e1ce0dd127c4cadabd554b808d059b4",
                  portal: "https://abr-gis-portal.airchannel.net/portal"
                       },
                ground : "world-elevation"  
                
              });
        
            view = new MapView({
            map: scene,
            spatialReference : {wkid :3857},
            container: "map-operator"
             });

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

        if(checkRoleRoute("ROLE_OWNER",roles) && route==="Tracks" )
        {
         setTrackSidebar();   
         layerManual = new GraphicsLayer({listMode:"hide"}); //слой графики для скетча    
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
       scene.layers.add(layerManual);    
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



         
       
        if(route==="AirSituation")

            {
                
              var realLayer=addReal(FeatureLayer,LabelClass,Geoprocessor,scene,checkRoleRoute("ROLE_OWNER",roles));
              makeRealFlyght(realLayer);
              var realTitle=realLayer.title;
              window.setInterval(refreshRealLayer, 60000,FeatureLayer,scene,realTitle,checkRoleRoute("ROLE_OWNER",roles));
              
            }
        
        if(checkRoleRoute("ROLE_OPERATOR",roles))
        {
             
            if(route==="Flights")
             { 
              addLayers3D(FeatureLayer,scene) 
             }
        }
        else if(checkRoleRoute("ROLE_OWNER",roles))

        {
            if(route==="Flights"||route==="Tracks"  )
          addLayers2D(FeatureLayer,scene,roles,user.id); 
          selectLayer=addSelectLayer(GraphicsLayer,scene);

        }
        
         addMobail(WebTileLayer,GroupLayer,esriConfig,scene);



        
        
       
        //******************************************************** выгрузка слоев ограничивающих полеты */
        scene.when(function(){
            if(checkRoleRoute("ROLE_OWNER",roles) && route==="Flights")
             getLayersByTitle(FeatureLayer,scene.allLayers,["Опасные зоны","Запретные зоны","Зоны с ограничениями"],layerConf);
           
             
          }, function(error){
            
          });

          if(checkRoleRoute("ROLE_OPERATOR",roles))
            map.when(function(){
               if(checkRoleRoute("ROLE_OPERATOR",roles) && route==="Flights")
                 getLayersByTitle(FeatureLayer,map.allLayers,["Опасные зоны","Запретные зоны","Зоны с ограничениями"],layerConf);
           
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
                graphic2.symbol=selectSymbol.fillSymbol;
             if (graphic2.geometry.type==="polyline")
                graphic2.symbol=selectSymbol.lineSymbol;   
             if (graphic2.geometry.type==="point")
                 graphic2.symbol=selectSymbol.markerSymbol;   
                 
                 selectLayer.graphics.removeAll();
                 selectLayer.graphics.add(graphic2);
                 scene.layers.reorder(selectLayer,scene.layers.length);   
                 
        }
    }
  });
  




    });

    function checkRoleRoute(role,roles)
    {
        for (let i=0; i<roles.length; i++) 
          if(roles[i]===role) return true;
        return false;    
    }

   
    function getLayersByTitle(FeatureLayer,lays,titles,layerConflict)
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
               getLayersByTitle(FeatureLayer,lay.allSublayers,titles,layerConflict);    
            
           });

        }
          
       return null;
    }
    function emptyArray(arr) {
        while(arr.length > 0) {
          arr.pop();
        } 
        }   

