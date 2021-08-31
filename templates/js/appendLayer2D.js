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

     function addLayers2D(webmap)
     {
         // var servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
          
          var sourceTrackRoute=webPaths.servicePath+"1";
          var sourceTrackZone=webPaths.servicePath+"4";
          var sourceFlyghtZone=webPaths.servicePath+"5"; 
          var sourceFlyghtRoute=webPaths.servicePath+"2";
          

         
            routeVecLayer = new FEATURELAYER({
            url:     sourceTrackRoute, 
            
            outFields: ["*"],
            hasM:true,
            hasZ:true,
            returnM :true,
            returnZ: true,
            title : "Траектории" 
                });
    

             tableLayer = new FEATURELAYER({
              url:    sourceTrackRoute,
              outFields: ["*"],
              renderer :myRenderers.lineRendererTable,
              listMode :"hide"
                });
            

  //****************************************************************************************************** */              
    
            tableZoneLayer = new FEATURELAYER({
            url:     sourceTrackZone,
            outFields: ["*"],
            renderer: myRenderers.zoneRendererTable,
            listMode :"hide" });
    
    //****************************************************************************************************** */              
            

          zoneLayer = new FEATURELAYER({
               url:     sourceTrackZone,
               outFields: ["*"],
               hasZ:true,
               returnZ: true,
               renderer:myRenderers.zoneRenderer,
               title : "Зоны полетов"
              });         
  //****************************************************************************************************** */                   
               
       
          routeLayer = new FEATURELAYER({
              url:         sourceTrackRoute,
              outFields: ["*"],
              hasM:true,
              hasZ:true,
              returnM :true,
              returnZ: true,
              renderer:myRenderers.lineRenderer,
              title : "Траектории"
               });
               
 //****************************************************************************************************** */              
       if( route ==="Flights")
       { 
        
            flyVecLayer = new FEATURELAYER({
            url: sourceFlyghtRoute,
            outFields: ["*"],
            hasM:true,
            hasZ:true,
            returnM :true,
            returnZ: true
            });
                    
                    
        }  
                  
                 
                
                  flyZoneLayer = new FEATURELAYER({
                    title: "Зоны заявок",  
                    url: sourceFlyghtZone,
                    outFields: ["*"],
                    renderer: myRenderers.unicumRendererZone,
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