console.log('role_owner');



var rlb=[];
function setTrackSidebar()
{
/*  
let tracksidebar="<a href='#'" +'class="close-btn" id="close-btn">\
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
 
 document.getElementById("sidebar").innerHTML=tracksidebar;*/
 var els=document.getElementsByClassName("sidebar-title");
 els[0].innerText="Траектории и зоны";
 document
          .getElementById("createRoute")
          .addEventListener("click", makeNewRoute);
  
  //*************************загрузка KML файла
        
  document
  .getElementById("inFile")
  .addEventListener("change",function (event){
     let fl= this.files[0];
      let reader = new FileReader();
         reader.readAsText(fl);
         
         reader.onload = function() {   myFly(reader.result);
       
           };
          
       
           

      });         

      getUserRoute(null);
}
//Загрузка KML

function myFly(res){
  clean(true,layerManual);
  let s=document.getElementById("inFile").value.toString();
  
  let n=s.lastIndexOf("\\");
  
  let n2=s.lastIndexOf(".");
   
  s="load_"+s.substring(n+1,n2);
  nameRoute=s;
  //document.getElementById("inFile").value="";
  changeExtent( 
               makeLine( parserKML(res),layerManual)); 
               flagEdit=true; 
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

//********** Обработка события  создание нового объекта
function eventSketch(sketch,layerManual){
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
           console.log(EXTENT) ; 
           console.log(PROJECTION) ;
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
}

function changeExtent (geom)
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
                         
                         view.extent= new EXTENT({
              
                           
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
                     nameRoute=""; 
                     idRoute="";
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

                 function makeCircle(cPoint,radius,layerManual)
                {    
                  
                    fillSymbol3 = {
                        type: "simple-fill", // autocasts as SimpleLineSymbol()
                        color: [128, 128, 128,0],
                        outline: {  // autocasts as new SimpleLineSymbol()
                          color: [ 128,128, 128 ],
                          width: 2
                        }
                        
                      };  
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

                function makeNewRoute() {
                //  var ownerId=document.getElementById("ownerid").value;  
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
                        createRecordRouteTable(stat,nameRoute,createRouteVector);
                        
                      return;
                    
                  
                      
                      
                    
                
                           function createRouteVector(routeid) {
                           
                            
                                idRoute=routeid;
                
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
                                     
                                     "ownerid" : user.id.toString(),
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
                                var dat={userId: user.id,
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
                         function createZone(params,dat,routeid) {
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
  
  
  
  
  
  
    var lineGraphic = new GRAPHIC(
  {
    geometry :lin1, 
    attributes : {
      "numb" : k,
      "ownerid" : user.id.toString(),
      "routeid" : idRoute,
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
      "ownerid" : user.id.toString(),
      "routeid" : idRoute,
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
            
             var  whll="routeid = '"+idRoute+"'"
    
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
         var whll="routeid = '"+idRoute+"'"
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
                   
                    var dat1={
                            track: {
                             heightMin :Z3+5 ,
                             heightMax: Z3+100,
                             type: 2,
                             isFinal: true,
             //name: "Типовой маршрут",
                             shape : shp
                          } 
                        }    
                   updateVecRoute(edits3,dat1,idRoute) ;
                        
                  });
  
  
  
  
  
  
  
  //***************************************************************************************
  
     });
  }
  
    
  //************* редактирование траектории с учетом высот рельефа  */
  
  
  
  
  
  
  
      }

     function makeLine(wCoord,layerManual)
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
       lineSymbol3 = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        color: [128, 128, 128],
        width: 2
      };
       lineGraphic.symbol=lineSymbol3;
       layerManual.add(lineGraphic);
       return lineGraphic.geometry;
       
      
       
      }

      /***********************************************Проверка на правильное имя *************************************** */

      function checkRouteName(isNew)
    {
      
      console.log(idRoute);
      if(isNew)
      {
      if (idRoute != "")  // наименование маршрута
       {
       alert ("Маршрут существует");
       return false;
       }
      }
     console.log(nameRoute); 
     let newName=nameRoute;  
     //if (nameRoute=="")  // наименование маршрута
     // {
      newName=prompt ("Введите наименование маршрута",nameRoute);
     // if (newName==null) return false;
     // }
    
        
       
      
      for(;;) 
      {
       let flag=true; 
       for(let i=0;i<tabName.length;i++)
       {
        if (tabName[i][1]==newName)
        {
         if(tabName[i][0]==idRoute)
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
        nameRoute=newName;
        break;
      }
    }
       return true;

    }    
    
    function createRecordRouteTable(tp,nm,functVect) {
      
      dt= 
      //JSON.stringify(
        {"track": {
                       "type": tp,
                       "name": nm,
                       "isFinal": false 
                     }
                    };
     //               );
     console.log(dt);     
     console.log(token);         
      apiNewTrack= apiData(apiUrl, "/track/add", token, 'POST', dt);
      
      apiNewTrack.then(function (response) {
        console.log(response);
        functVect(response.id);
    });

  }
    





    function updateVecRoute(params,dat,routeid) {
    
      routeVecLayer
        .applyEdits(params)
        .then(function(editsResult){ 
          
        //var rd=document.getElementById("routeid").value
         tableLayer.definitionExpression="routeid = '"+routeid+"' And numb >= 0"                   ;
         
         layerManual.removeAll();
        
         applyTableUpdate(dat,routeid);  
        
        
                  
    
    
          
      })
        .catch(function(error) {
            alert( error.name);
           alert( error.message);
          
        });
        
        
      
    }

    function applyTableUpdate(dat,routeid) {
      
      // emptyArray(rlb);
   
      apiModTrack= apiData(apiUrl, "/track/"+routeid, token, 'PUT', dat);
      
      apiModTrack.then(function (response) {
        console.log(response);
       // getUserRoute(routeid);
        alert( " Маршрут создан. ");
      });
       
       
       }
       function getRouteRecords(resFunc)
    {  
     
      apiTracks= apiData(apiUrl, "/track/user/"+user.id, token);

      apiTracks.then(function (response) {
        emptyArray(tabName);
        emptyArray(rlb);
        for (let i=0;i<response.tracks.length;i++)
                  if (response.tracks[i].isFinal)
                       tabName.push([response.tracks[i].id,response.tracks[i].name,response.user.id]);
        resFunc(response);
      });
   }

       function getUserRoute(viewRid)
        {
         
          var stats= ["Зональный круговой","Зональный","Линейный"];
          
          const trackhtml0 ='<li class="uav-list-item"><div class="uav-item-header">\
          <span class="uav-item-status">';
          const trackhtml1 ='</span>\
          <button class="btn uav-btn-more" id="';
          const trackhtml1_1='">Подробнее</button>\
          </div>\
          <div class="uav-item-body">';
         // <span class="uav-item-row uav-item-reg">123123123123ABBB</span>\
         const trackhtml2='<span class="uav-item-row uav-item-flight"><span class="uav-item-desc">Наименование</span>';
         const trackhtml3 ='</span>\
          <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Дата создания</span>';
          const trackhtml4='</span>\
                           </div>\
          <div class="uav-item-footer">';

          const trackhtml5='<button class="btn btn-uav-small"id="';
          const trackhtml6 ='">Сохранить</button>';
          const trackhtml7='<button class="btn btn-uav-small" id="';
          const trackhtml8='">Сохранить как</button>';
          const trackhtml9='<button class="btn btn-uav-small" id="';
          const trackhtml10='">Импорт геометрии</button>';
          const trackhtml11='<button class="btn btn-uav-small" id="';
          const trackhtml12='">Удалить</button>';
          const trackhtml13='</div></li>'; 

      /*
      const routhtml1 ='<div class="flight-list-item  flight-list-item-onapproval"'
      const routhtml2='><div class="flight-top">';
      const routhtml3=' <div class="flight-content">';//<p class="flight-item-reg">';//AZ 200187
      const routhtml4='<p class="flight-item-flightnumber"><span  class="flight-item-title">Название </span>';//000150
      const routhtml5='<span  class="flight-item-title"> </span>';//20.12.2020 16:30
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
      //const routhtml9= '<a href="#" class="btn btn-more" id="';//'<br /> <button id="'; 
      //const routhtml10='">Сохранить </a></div>';// </button> </div>'
      const routhtml11='</div>';*/
      
          var     lst="";
          
          // var   whFF="ownerid = '"+document.getElementById("ownerid").value+"'";
 //statusid > 2 не ЧЕРНОВИК не ШАБЛОН
           //alert(document.getElementById("ownerid").value); 
             getRouteRecords(makeListRoutePanel);

           
             function makeListRoutePanel(response)
             {
              
              for (let i=0;i<response.tracks.length;i++) {      
                if(response.tracks[i].isFinal)

                  //alert( response.tracks[i].id+" "+response.tracks[i].type);
                  panTrack(response.tracks[i]);
                }

                document.getElementById("uav-realtimelist").innerHTML=lst;
                addRouteEvent();
                if(viewRid!=null)   getRouteRecord(viewRid,evRouteDetal);

             }
                 
               function   panTrack(track){
                   var rlob=track.id;
                   var nm=track.name;
                   var kod=track.type;
                   var dt=track.createdAt.date;
                   rlb.push(rlob) ; 
                   lst=lst+trackhtml0;
                   lst=lst+stats[kod];
                   lst=lst+trackhtml1;
                   lst=lst+rlob;
                   lst=lst+trackhtml1_1;
                   lst=lst+trackhtml2;
                   lst=lst+nm;
                   lst=lst+trackhtml3;
                   lst=lst+dt;
                   lst=lst+trackhtml4;
                   lst=lst+trackhtml5;
                   lst=lst+"S"+rlob;
                   lst=lst+trackhtml6;
                   lst=lst+trackhtml7;
                   lst=lst+"P"+rlob;
                   lst=lst+trackhtml8;
                   lst=lst+trackhtml9;
                   lst=lst+"I"+rlob;
                   lst=lst+trackhtml10;
                   lst=lst+trackhtml11;
                   lst=lst+"D"+rlob;
                   lst=lst+trackhtml12;
                   lst=lst+trackhtml13;
                   
             
                    }


         }

   
     


