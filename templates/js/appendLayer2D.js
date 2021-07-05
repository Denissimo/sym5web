           
     function addLayers2D(FeatureLayer,webmap)
     {
          var servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
          
          var sourceTrackRoute=servicePath+"1";
          var sourceTrackZone=servicePath+"4";
          var sourceFlyghtZone=servicePath+"5"; 
          var sourceFlyghtRoute=servicePath+"2";
          var sourceFlyghtSeg=servicePath+"3";
          var sourceFlyghtPunkts=servicePath+"0";
          
          lineSymbolTable = {
            type: "simple-line", // autocasts as SimpleLineSymbol()
            color: [0, 128, 0],
            width: 2
          };
  
          var lineRendererTable = {
            type: "simple",
            symbol: lineSymbolTable
          };

         var tableLayer = new FeatureLayer({
            url:    sourceTrackRoute,
            outFields: ["*"],
            renderer :lineRendererTable,
            listMode :"hide"
                });
            

  //****************************************************************************************************** */              
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

           var zoneRendererTable = {
                    type: "simple",
                    symbol: fillSymbolSelectZone
                  };    

           var tableZoneLayer = new FeatureLayer({
            url:     sourceTrackZone,
            outFields: ["*"],
            renderer:zoneRendererTable,
            listMode :"hide" });
              
             
    //****************************************************************************************************** */              
            var flyVecLayer = new FeatureLayer({
            url: sourceFlyghtRoute,
            outFields: ["*"],
            hasM:true,
            hasZ:true,
            returnM :true,
            returnZ: true
            });
       //****************************************************************************************************** */               
            var flyZoneLayer = new FeatureLayer({
            url: sourceFlyghtZone,
            outFields: ["*"],
            hasZ:true,
            returnZ: true
              });
         //****************************************************************************************************** */                     
           var restrictLayer = new FeatureLayer({
                    url:   "https://abr-gis-server.airchannel.net/airchannel/rest/services/Airspace_Azerbaijan/MapServer/6",
                   title : "Запретные зоны зоны"
                  
                  });
            var prohLayer = new FeatureLayer({
                  url:   "https://abr-gis-server.airchannel.net/airchannel/rest/services/Airspace_Azerbaijan/MapServer/5",
                  title : "Опасные зоны"                    
                  });
         
           //****************************************************************************************************** */              
          var fillSymbol = {
            type: "simple-fill", // autocasts as SimpleLineSymbol()
            color: [255, 0, 197,0.2],
            width: 2
          };
   
           var zoneRenderer = {
                    type: "simple",
                    symbol: fillSymbol
                  };      
            var zoneLayer = new FeatureLayer({
                  url:     sourceTrackZone,
                  outFields: ["*"],
                  hasZ:true,
                  returnZ: true,
                  renderer:zoneRenderer,
                  title : "Зоны полетов"
                   });         
             //****************************************************************************************************** */                   
             
             var lineSymbol = {
                type: "simple-line", // autocasts as SimpleLineSymbol()
                color: [255, 0, 197],
                width: 2
              };
             var lineRenderer = {
                type: "simple",
                symbol: lineSymbol
              };
             var routeLayer = new FeatureLayer({
              url:         sourceTrackRoute,
              outFields: ["*"],
              hasM:true,
              hasZ:true,
              returnM :true,
              returnZ: true,
              renderer:lineRenderer,
              title : "Траектории"
                   });
             //****************************************************************************************************** */              
              var punktsLayer = new FeatureLayer({url: sourceFlyghtPunkts,          
                      //popupTemplate:templatePunkts,
                      hasM:true,
                      hasZ:true,
                     returnM :true,
                     returnZ: true,   
                     title : "Полеты"
                     });

         
                //     let defQ=buildDefinitionQuery();  
                     defQ="";
                     zoneLayer.definitionExpression=defQ;
                     webmap.add(zoneLayer);
                     routeLayer.definitionExpression=defQ;
                     tableLayer.definitionExpression="objectid < 0";
                     tableZoneLayer.definitionExpression="objectid < 0";
                     webmap.add(routeLayer);
                     //webmap.layers.reorder(routeLayer, webmap.layers.length); 
                     punktsLayer.definitionExpression="";//                     buildDefinitionQueryPunkts();//timeSlider);
                     webmap.layers.add(punktsLayer);
                     flyZoneLayer.definitionExpression="";//   buildDefinitionQueryFly();//timeSlider);
                     webmap.layers.add(flyZoneLayer);
    
                 


    
     }