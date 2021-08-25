var routeVecLayer;
var zoneLayer;
var tableLayer;
var tableZoneLayer;

function addSelectLayer(GraphicsLayer,webmap)
       {
         var selectLayer = new GraphicsLayer({
          listMode:"hide"
           });
        webmap.layers.add(selectLayer);   
        return selectLayer;
       }

     function addLayers2D(FeatureLayer,webmap)
     {
          var servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
          
          var sourceTrackRoute=servicePath+"1";
          var sourceTrackZone=servicePath+"4";
          var sourceFlyghtZone=servicePath+"5"; 
          var sourceFlyghtRoute=servicePath+"2";
          

          var      templateZoneFly = {
        
            title: "Полетные зоны",
            returnGeometry : true,
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "sdate",
                    label: "Старт"
                  }
                  ,
                  {
                    fieldName: "edate",
                    label: "Финиш"
                  }
                ]
              }
            ]
          };
          
               
        
            routeVecLayer = new FeatureLayer({
            url:     sourceTrackRoute, 
            
            outFields: ["*"],
            hasM:true,
            hasZ:true,
            returnM :true,
            returnZ: true,
            title : "Траектории" 
                });
    

          /*
          lineSymbolTable = {
            type: "simple-line", // autocasts as SimpleLineSymbol()
            color: [0, 255, 0],
            width: 2
          };
       */
           var lineRendererTable = {
               type: "simple",
               symbol: mySymbols.lineSymbolTable
            };

             tableLayer = new FeatureLayer({
              url:    sourceTrackRoute,
              outFields: ["*"],
              renderer :lineRendererTable,
              listMode :"hide"
                });
            

  //****************************************************************************************************** */              
      /*    fillSymbolSelectZone =
         {
           type: "simple-fill", 
           color: [ 255,0, 197, 0.2 ],
           style: "solid",
           outline: {  // autocasts as new SimpleLineSymbol()
                 color: [ 0,255, 0 ],
                 width: 3
                   }
         };
*/
           var zoneRendererTable = {
                    type: "simple",
                    symbol: mySymbols.fillSymbolSelectZone
                  };    

            tableZoneLayer = new FeatureLayer({
            url:     sourceTrackZone,
            outFields: ["*"],
            renderer:zoneRendererTable,
            listMode :"hide" });
    
    //****************************************************************************************************** */              
           /*var fillSymbol = {
            type: "simple-fill", // autocasts as SimpleLineSymbol()
             color: [255, 0, 197,0.2],
             width: 2
            };
*/
          var zoneRenderer = {
              type: "simple",
              symbol: mySymbols.fillSymbolZone
            };      
            
            

          zoneLayer = new FeatureLayer({
               url:     sourceTrackZone,
               outFields: ["*"],
               hasZ:true,
               returnZ: true,
               renderer:zoneRenderer,
               title : "Зоны полетов"
              });         
  //****************************************************************************************************** */                   
               
         /* var selectSymbol.lineSymbol = {
             type: "simple-line", // autocasts as SimpleLineSymbol()
             color: [255, 0, 197],
             width: 1
            };*/
          var lineRenderer = {
             type: "simple",
            symbol: mySymbols.lineSymbolPigg
           };
          routeLayer = new FeatureLayer({
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
       if( route ==="Flights")
       { 
        
            flyVecLayer = new FeatureLayer({
            url: sourceFlyghtRoute,
            outFields: ["*"],
            hasM:true,
            hasZ:true,
            returnM :true,
            returnZ: true
            });
                    
                    
                  }  
                  
                 
                
                  flyZoneLayer = new FeatureLayer({
                    title: "Зоны заявок",  
                    url: sourceFlyghtZone,
                    outFields: ["*"],
                    renderer: selectSymbol.unicumRendererZone,
                    popupTemplate :templatesPopup.templateZoneFly,
                    hasZ:true,
                    returnZ: true
                      });   //     let defQ=buildDefinitionQuery();  
                      
                   flyZoneLayer.definitionExpression=buildDefinitionQueryFly();
                   webmap.layers.add(flyZoneLayer);
                     


                   zoneLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";
                   routeLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";

                   tableLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";
                     console.log(tableLayer.definitionExpression);
                     tableZoneLayer.definitionExpression="ownerid = '"+user.id.toString()+"'";
                     
                     webmap.add(routeLayer);
                     webmap.add(zoneLayer);
                                          
                     webmap.layers.add(tableZoneLayer)
                     webmap.layers.add(tableLayer)
                     
    
     }