       function addSelectLayer(GraphicsLayer,webmap)
       {
         var selectLayer = new GraphicsLayer({
          listMode:"hide"
           });
        webmap.layers.add(selectLayer);   
        return selectLayer;
       }

     function addLayers2D(FeatureLayer,webmap,route)
     {
          var servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
          
          var sourceTrackRoute=servicePath+"1";
          var sourceTrackZone=servicePath+"4";
          var sourceFlyghtZone=servicePath+"5"; 
          var sourceFlyghtRoute=servicePath+"2";
          var sourceFlyghtSeg=servicePath+"3";
          var sourceFlyghtPunkts=servicePath+"0";
          

          
               
        
            var   routeVecLayer = new FeatureLayer({
            url:     sourceTrackRoute, 
            
            outFields: ["*"],
            hasM:true,
            hasZ:true,
            returnM :true,
            returnZ: true,
            title : "Траектории" 
                });
    


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
       if( route=="Flights")
       { 

            segmentLayer = new FeatureLayer({
              url:       sourceFlyghtSeg,
              outFields: ["*"],
              hasM:true,
              hasZ:true,
              returnM :true,
              returnZ: true
                  });   
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
              var punktsLayer = new FeatureLayer({url: sourceFlyghtPunkts,          
                      //popupTemplate:templatePunkts,
                      hasM:true,
                      hasZ:true,
                     returnM :true,
                     returnZ: true,   
                     title : "Полеты"
                     });

         
                  }        //     let defQ=buildDefinitionQuery();  
                     defQ="";
                     if( route=="Flights")
                     { 
                     flyZoneLayer.definitionExpression="";//   buildDefinitionQueryFly();//timeSlider);
                     webmap.layers.add(flyZoneLayer);
                     }


                     zoneLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";
                     routeLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";

                     tableLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";
                     console.log(tableLayer.definitionExpression);
                     tableZoneLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";
                     
                     webmap.add(routeLayer);
                     webmap.add(zoneLayer);
                                          
                     webmap.layers.add(tableZoneLayer)
                     webmap.layers.add(tableLayer)
                     
             
                     //webmap.layers.reorder(routeLayer, webmap.layers.length); 
                     if( route=="Flights")
                     { 
                       punktsLayer.definitionExpression="";//                     buildDefinitionQueryPunkts();//timeSlider);
                       webmap.layers.add(punktsLayer);
                     }
                     
                  
                    
                 


    
     }