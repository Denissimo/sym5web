console.log('role_owner');

function setTrackSidebar()
{
let tracksidebar='<a href="#" class="close-btn" id="close-btn">\
<span></span>\
</a>\
<div class="sidebar-content">\
  <div class="sidebar-header">\
    <h3 class="sidebar-title">Траектории и зоны</h3>\
  </div>\
  <div class="sidebar-body">\
    <ul class="uav-list" id="uav-realtimelist">\
    </ul>\
   </div>\
  </div>';
 
 document.getElementById("sidebar").innerHTML=tracksidebar;
}

//********** Обработка события  создание нового объекта
function eventSketch(sketch,layerManual,view,Extent,projection,Graphic,Circle){
sketch.on("create", function(event) {
    // при создании нового объекта вся предыдущая графика вычищается 
    if (event.state === "start" || event.tool==="point") {   
     console.log("start");               
     clean(true,layerManual);     
     console.log("start2");  
    }
     if (event.state === "complete") {
       if ( event.tool==="point") layerManual.add(event.graphic) ; 
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
           var circ=makeCircle(layerManual.graphics.getItemAt(0).geometry,rz,layerManual,projection,Graphic,Circle);
           changeExtent(circ,view,Extent);
             
          }
       else
          
      // if (document.getElementById("routeid").value!="")
      // sketch.cancel() ;
       changeExtent(layerManual.graphics.getItemAt(0).geometry,view,Extent); 
                         }
     });
//*******************************************************************
//********** Обработка события редактирования  объекта       
   sketch.on("update", function(event) {
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
     var circ=makeCircle(layerManual.graphics.getItemAt(1).geometry,rz,layerManual,projection,Graphic,Circle);
           changeExtent(circ,view,Extent);
      layerManual.graphics.removeAt(0);  
   }
   
 }
   else
    if(layerManual.graphics.length==1)
    changeExtent(layerManual.graphics.getItemAt(0).geometry,view,Extent);
      
 }
});
}

function changeExtent (geom,view,Extent)
                 {
                   console.log(geom.type);  
                   if (geom.type==="polygon")
                   {
                      console.log(geom.isSelfIntersecting) 
                      if (geom.isSelfIntersecting) 
                      {
                        alert("Некорректная геометрия") 
                        layerManual.removeAll()
                        return
                      }  
                   }   
                
                   var ext=geom.extent;
                   var wkd=ext.spatialReference.wkid;
                      
                   console.log(geom);                          
                         
                         view.extent= new Extent({
              
                           
                            xmin: ext.xmin-(ext.xmax-ext.xmin),
                            ymin: ext.ymin-(ext.ymax-ext.ymin),
                            xmax: ext.xmax+(ext.xmax-ext.xmin),
                            ymax: ext.ymax+(ext.ymax-ext.ymin),
                           spatialReference: {
                           wkid: wkd
                                      }
                            });
                
                 }

                 function clean(withBuffer,layerManual)
                 {
                     console.log("clear"); 
                     layerManual.graphics.removeAll();
                   //  if(withBuffer)
                   //    bufferLayer.graphics.removeAll();
                     
                /*   
                     tableLayer.definitionExpression="objectid < 0";
                     tableZoneLayer.definitionExpression="objectid < 0"; 
                     
                     getDetailRoute(document.getElementById("routeid").value,false);
                     
                     document.getElementById("routeid").value="";
                     document.getElementById("flyid").value="";
                     document.getElementById("nameroute").value=""; 
                     document.getElementById("resCheck").value="";
                     message.innerText = "";
                     cleanFly(/markerSymbol);
                     */
                     
                 } 

                 function makeCircle(cPoint,radius,layerManual,projection,Graphic,Circle)
                {    
                  
                    fillSymbol3 = {
                        type: "simple-fill", // autocasts as SimpleLineSymbol()
                        color: [128, 128, 128,0],
                        outline: {  // autocasts as new SimpleLineSymbol()
                          color: [ 128,128, 128 ],
                          width: 2
                        }
                        
                      };  
                  let cp=   projection.project(cPoint, { wkid: 4326 },projection.getTransformation(cPoint.spatialReference,{ wkid: 4326 }));
                 
                     let nP=240;
                     if (radius>50000)  nP=720;
                     var circ=new Circle({
                         center : cp,
                         numberOfPoints:nP,
                         radius :radius,
                         geodesic : true,
                         radiusUnit:"meters",
                         spatialReference : {wkid : 4326}
                     }); 
              
                    var circGraphic=new Graphic({
                      geometry:circ,
                      symbol:fillSymbol3,

                    });
                     
                     layerManual.add(circGraphic);
                   return circGraphic.geometry;
              
              
                }

              