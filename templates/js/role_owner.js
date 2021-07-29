console.log('role_owner');
var flagEdit=false;

function setTimeSliderWatch()
{

   timeSlider.watch("timeExtent", function () { 
    flyZoneLayer.definitionExpression=buildDefinitionQueryFly();
  });
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


function eventView(view,sketch,layerManual){

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
     
      getDetailRoute(idRoute,false);
      queryRoad(event,"");
     
     
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
     
    }
  }
});

}



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
         document
           .getElementById("saveRoute")
           .addEventListener("click", mySaveRoute); 
          
          document
          .getElementById("saveRouteAs")
          .addEventListener("click", mySaveRouteAs); 
          document
          .getElementById("importGeometry")
          .addEventListener("click", myImportGraphic); 
          
          document
          .getElementById("deleteRoute")
          .addEventListener("click", myDeleteRoute); 
          
                   
  
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
      idRoute= $.cookie("idRoute");
      if(idRoute==null) idRoute="";
      getUserRoute(idRoute);
}
//Загрузка KML

function myFly(res){
  clean(true);
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
     clean(true);     
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
                      
                                         
                         
                         view.extent= new EXTENT({
              
                           
                            xmin: ext.xmin-(ext.xmax-ext.xmin),
                            ymin: ext.ymin-(ext.ymax-ext.ymin),
                            xmax: ext.xmax+(ext.xmax-ext.xmin),
                            ymax: ext.ymax+(ext.ymax-ext.ymin),
                           spatialReference: {
                           wkid: wkd
                                      }
                            });
                $.cookie("xMin", ext.xmin-(ext.xmax-ext.xmin));            
                $.cookie("yMin", ext.ymin-(ext.ymax-ext.ymin));            
                $.cookie("xMax", ext.xmax+(ext.xmax-ext.xmin));
                $.cookie("yMax", ext.ymax+(ext.ymax-ext.ymin));            
                $.cookie("wkid", wkd);            
               
                if(layerManual.graphics.length>0)
                 document.getElementById("createRoute").disabled=false
                else
                 document.getElementById("createRoute").disabled=true
                 }

                 function clean(withBuffer)
                 {
                     nameRoute=""; 
                     if (idRoute!="")
                     {
                      idRoute="";
                      getUserRoute("");
                     }
                     console.log("clear"); 
                     layerManual.graphics.removeAll();
                     document
                     .getElementById("createRoute").disabled=true
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
                      symbol:selectSymbol.fillSymbolGray,

                    });
                     
                     layerManual.add(circGraphic);
                   return circGraphic.geometry;
              
              
                }

                function makeNewRoute() {
                //
                if(layerManual.graphics.length==0) 
                {  
                  alert("Графика отсутствует");  
                  return;  
                
                }
                  
                  emptyArray(profil);
                  emptyArray(flypts);
                  if (!checkRouteName(true)) return; 
                
                     let routeid;
                     
                      
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
      if (newName==null) return false;
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
    if (nameRoute=="") return false;
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

    function applyTableUpdate(dat,routeid,Message=" Маршрут создан. ") {
      
      // emptyArray(rlb);
   
      apiModTrack= apiData(apiUrl, "/track/"+routeid, token, 'PUT', dat);
      
      apiModTrack.then(function (response) {
        console.log(response);
        getUserRoute(routeid);
        alert(Message );
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
                           <div class="uav-item-body" id="';
          const trackhtml4_2='"></div>';
          const trackhtml12_2='<input type="hidden" id="';
          const trackhtml12_3='" value="';
          const trackhtml12_4='"></input>';
          const trackhtml13='</li>';
         

         /*                <div class="uav-item-footer">';
          const trackhtml5='<button class="btn btn-uav-small"id="';
          const trackhtml6 ='">Сохранить</button>';
          const trackhtml7='<button class="btn btn-uav-small" id="';
          const trackhtml8='">Сохранить как</button>';
          const trackhtml9='<button class="btn btn-uav-small" id="';
          const trackhtml10='">Импорт геометрии</button>';
          const trackhtml11='<button class="btn btn-uav-small" id="';
          const trackhtml12='">Удалить</button>';
          const trackhtml12_2='<input type="hidden" id="';
          const trackhtml12_3='" value="';
          const trackhtml12_4='"></input>';
          const trackhtml13='</div></li>'; 
*/
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
                if(viewRid!=null && viewRid!="" )  // getRouteRecord(viewRid,evRouteDetal);
                  evRouteDetal(viewRid); 
                else 
                  buttonDisabled();  
             }
                 
               function   panTrack(track){
                   var rlob=track.id;
                   var nm=track.name;
                   var kod=track.type;
                   var dt=track.createdAt.date;
                   var numb=track.applicationsNumber;
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
                   lst=lst+"R"+rlob;
                   lst=lst+trackhtml4_2;
                   /*
                   if (numb==0)
                   {
                    lst=lst+trackhtml5;
                    lst=lst+"S"+rlob;
                    lst=lst+trackhtml6;
                   }
                   lst=lst+trackhtml7;
                   lst=lst+"P"+rlob;
                   lst=lst+trackhtml8;
                   lst=lst+trackhtml9;
                   lst=lst+"I"+rlob;
                   lst=lst+trackhtml10;
                   if(numb==0)
                   {
                    lst=lst+trackhtml11;
                    lst=lst+"D"+rlob;
                    lst=lst+trackhtml12;
                   }*/
                    lst=lst+trackhtml12_2;
                    lst=lst+"T"+rlob;
                    lst=lstlst=lst+trackhtml12_3;
                    lst=lst+kod; 
                    lst=lst+trackhtml12_4;
                    lst=lst+trackhtml12_2;
                    lst=lst+"N"+rlob;
                    lst=lstlst=lst+trackhtml12_3;
                    lst=lst+numb; 
                    lst=lst+trackhtml12_4;
                    lst=lst+trackhtml13;
                   
             
                    }


         }

         function addRouteEvent() {
          
          for (var i=0;i<rlb.length;i++)
          {
            // alert(rlb[i]);
            
             document
             .getElementById(rlb[i])
             .addEventListener("click", eventRouteDetal); 

             
         
          }
      
         }
         function eventRouteDetal(event){
     
        
          var gld=event.target.id;
           
           evRouteDetal(gld);
           
         }

     /*export*/   function evRouteDetal(trackid)
         {
           
          let gld=trackid;
          
          let tps=document.getElementById("T"+gld).value;
          //console.log(tps);
          let tp=parseInt(tps);
          
                if (tp<2)
                {     
                       let elem=document.getElementById("DR"+gld);
                       
                       if (elem ==null )  
                       {
                         let oldrid=idRoute;
                         {
                          removeSelectSeg(oldrid,"")  
                          getDetailZone(oldrid,false)
                         }
                         getDetailZone(gld,true);
                         queryRoad(event,gld);
                     
                       }
                       else
                        {
                        getDetailZone(gld,false);
                        queryRoad(null,"");
                     
                        }
  
                }
                else
                if (tp==2){
                  emptyArray(flypts);
                      //flypts=[];
                  let elem=document.getElementById("0ZZ"+gld);
                        if (elem ==null )  
                          { 
                           let oldrid=idRoute
                           {
                           removeSelectSeg(oldrid,"")  
                           getDetailRoute(oldrid,false) 
                           }
                           getDetailRoute(gld,true);
                           queryRoad(event,gld);
                     
                          }
                          else
                              {
                              
                              removeSelectSeg(gld,"");
                              getDetailRoute(gld,false);
                              queryRoad(null,"");
                     
                              }
                        }
                
             // });
            
             
             
             
  
 
            }    
            function buttonDisabled()
            {
              document.getElementById("saveRoute").disabled=true;
              document.getElementById("deleteRoute").disabled=true;
              document.getElementById("saveRouteAs").disabled=true;
              document.getElementById("importGeometry").disabled=true;
              $.cookie("idRoute","");
            } 
           function buttonEnabled(rid)
           {
            n=document.getElementById("N"+rid).value ;
            if (n==0)
             {
              document.getElementById("saveRoute").disabled=false;
              document.getElementById("deleteRoute").disabled=false;
              }
             document.getElementById("saveRouteAs").disabled=false;
             document.getElementById("importGeometry").disabled=false;
             $.cookie("idRoute",rid);  

            }      
/*export*/ function getDetailZone(routeid,flag)
{
  var lst="";
  var id="R"+routeid;
  
  if (flag) buttonEnabled(routeid); 

  //const routhtml1='<p    class="uav-item-body" <div  class="uav-item-body" style="font-size:12px;">\
  const routhtml1='<p   <div >\
   <label style="width: 50px;font-size:12px;"> Duration</label>\
   <label style="width: 50px;font-size:12px;">Zmin</label>\
  <label style="width: 50px;font-size:12px;" >Zmax</label></div> ';
  const routhtml1a='<p    <div > <label style="width: 50px;font-size:12px;"> Duration</label> <label style="width: 50px;font-size:12px;">Radius</label>  <label style="width: 50px;font-size:12px;">Zmin</label> <label style="width: 50px;font-size:12px;">Zmax</label> </div> ';
  const routhtml2='  <div ';
  const routhtml3='>  <input style="width: 50px;font-size:12px;"  type="number" id="';
  const routhtml3a='> <input style="width: 50px;font-size:12px;"  type="hidden" id="';
  const routhtml4='"   value='
  const routhtml5='></div></p></div>';
  const routhtml6='></div>';
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
                    
                    


                    document.getElementById(id).innerHTML=lst;
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
  if (flag) buttonEnabled(routeid); 
  var lst="";
  var id="R"+routeid;

  const routhtml1='<p    <div><label style="width: 10px;font-size:12px;">*</label> <label style="width: 50px;font-size:12px;">  Speed</label>  <label style="width: 50px;font-size:12px;"> Z </label>  <label style="width: 50px;font-size:12px;"> Zmin </label>  <label style="width: 50px;font-size:12px;"> Zmax </label> </div> ';
  const routhtml2='  <div  ';
  const routhtml8='  <div >  <input  type="checkbox" id="';
  const routhtml9='" unchecked ';
  const routhtml3='>  <input style="width: 50px;font-size:12px;" type="number" id="';
  const routhtml4='"   value=';
  const routhtml5='></div></p></div>';
  const routhtml6='></div>'
  
  console.log(routeid);
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
                    
                    }
                    else
                     lst=lst+routhtml5;
                    
                    }
                  
                     document.getElementById(id).innerHTML=lst;
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

            function mySaveRouteAs(event)
                  {
                    rid=idRoute;
                    if (rid=="")
                     {
                      alert("Выберите маршрут");
                      return;
                     }
                    if (!checkRouteName(false)) return;
                    
                     var rid=idRoute;
                     let stat=document.getElementById("T"+rid).value;
                     console.log("!! "+nameRoute);
                     createRecordRouteTable(stat, nameRoute,copyRouteAs);
                     
                  }
                  function copyRouteAs(newRouteId)
                  {
                    var rid=idRoute;
                    let stat=document.getElementById("T"+rid).value;
                    if (stat ==2 )
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
                        
                                var dat={userId: user.id,
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
                         
                         "ownerid" : user.id.toString(),
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
                    
                    var dat={userId:user.id,
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
         function createTrackAs(params,dat,routeid) {
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
                
function mySaveRoute(event)
 {
       var rid=idRoute;  
       if (rid=="")
       {
         alert("Выберите маршрут");
         return;
       }
       let n=document.getElementById("N"+rid).value;
       if  (n>0)
       {
          alert("Маршрут используется в заявках, не корректируется");
          return;
       }
      let tp =document.getElementById("T"+rid).value; 
      
       
      if (tp ==2 )
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
        updateLayer(routeVecLayer,eds,"Маршрут изменен")
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
        var dat={userId: user.id ,
          track: {
            radius: rd,
            type:tp,
            isFinal:true,
            shape : JSON.stringify(cir)
               }
            }
         applyTableUpdate(dat,rid,"Маршрут изменен.") ;   
         
         
       /******************************************************** */     

      });
      }       

    }

      
     
   function myDeleteRoute(event)
   {
    if(idRoute=="")
    {
      alert("Выберите маршрут");
      return;
    }
    let n=document.getElementById("N"+idRoute).value;
       if  (n>0)
       {
          alert("Маршрут используется в заявках, не удаляется");
          return;
       }
       let stat=document.getElementById("T"+idRoute).value;
       isOk = confirm("Операция необратима ! Вы - подтверждаете удаление?"); 
       if (isOk)
       {
         
          apiDelTrack= apiData(apiUrl, "/track/"+idRoute, token, 'DELETE');
          apiDelTrack.then(function (response) {
               if (stat==2)
                     delRoute(routeVecLayer);
                else         
                    delRoute(zoneLayer);
                      idRoute="";  getUserRoute(idRoute);
                 });
    
        }
      }   
   function delRoute(lay)
   {
    let whr="routeid = '"+idRoute+"'";
                       
    lay.queryFeatures({
      where : whr,
      returnGeometry: true,
      returnZ :true,
      returnM : true,  
      outFields: ["*"]
    })
    .then(function(ftfSet) 
    {
      if(ftfSet.features.length>0)
      {
      let eds={
        deleteFeatures: ftfSet.features
            
          }
        lay.applyEdits(eds).then(function(editsResult1){ 
          view.extent= view.extent.expand(1.5)   ;
          alert("Маршрут удален")
          })
        .catch(function(error) {
           console.log( error.name);
           console.log( error.message);
          
        }); 

        }

    });
  
   }
   function myImportGraphic(event)
                  {
                    if(idRoute=="")
                    {
                      alert("Выберите маршрут");
                      return;
                    }
                    var rid=idRoute;

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
                         symbol:selectSymbol.lineSymbolGray

                      });
                      
                      layerManual.add(imGr);
                      changeExtent(lin);
                      getDetailRoute(rid,false);
                      queryRoad(null,"");
                    }); 
                    
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
                          symbol:selectSymbol.fillSymbolGray
                        });
                        
                       layerManual.add(imGr);
                       changeExtent(pol);
                       //console.log(layerManual.graphics.length);
                       getDetailZone(rid,false);
                       //console.log(layerManual.graphics.length);
                       queryRoad(null,"");  
                      });
                    
                    }
                    flagEdit=true; 
                    scene.layers.reorder(layerManual, scene.layers.length);
                  }        
 
function removeSelectSeg(rid,numb){  
      
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

//************************************************************* выбор маршрута из слоя по клику
                /*export*/ function queryRoad(screenPoint,routeid) {
                
                  
                  function queryEmpty(stat)
                  {
                
                    
                    if  (stat==2)
                    {
                     tableLayer.definitionExpression="routeid = '"+routeid+"' And numb >= 0"
                  
                         queryRoadAll(routeid);
                    }
                    else      
                        queryZone(null,routeid);
                 
                     
                 
                     
                  }  
                  var ownerId= user.id;
                  if (routeid!="")
                  {
                   tableLayer.definitionExpression="objectid < 0";
                   tableZoneLayer.definitionExpression="objectid < 0"; 
                   let stat=document.getElementById("T"+routeid).value;
                   queryEmpty(parseInt(stat));
                  
                   
                  }
                 else{
                  let point =new POINT({
                    x:0.0,
                    y:0.0
                  })
                  if (screenPoint!=null) point = view.toMap(screenPoint);

                  var distance =// 200;
                   (view.extent.xmax-view.extent.xmin)/200;
                  var units = "meters";
                   tableLayer.definitionExpression="objectid < 0";
                   tableZoneLayer.definitionExpression="objectid < 0";
                  var  wH = "ownerid = '"+user.id+"'";
                   //const point = view.toMap(screenPoint);
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
                        
                         var rd=featureSet.features[0].getAttribute("routeid");
                          
                          layerManual.removeAll();
                          idRoute=featureSet.features[0].getAttribute("routeid");
                          
                           tableZoneLayer.definitionExpression="routeid = '"+rd+"'";
                          
                          // featureTableZone.selectRows(featureSet.features);
                           
                         //  featureTableZone.refresh(); 
                         // getRouteRecord(rd,getRouteName);
                          //getRouteName(rd);
                             
                          changeExtent(featureSet.features[0].geometry);
                          
                          
                        
                             }
                            
                             });
                
                
                      }
                      else
                      {
                      var wH = "ownerid = '"+user.id+"'";
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
                     
                       var rd=featureSet.features[0].getAttribute("routeid");
                        
                        layerManual.removeAll();
                        idRoute=featureSet.features[0].getAttribute("routeid");
                       
                       
                        
                         tableZoneLayer.definitionExpression="routeid = '"+rd+"'";
                            
                        
                        
                        
                       //  featureTableZone.selectRows(featureSet.features);
                         
                       //  featureTableZone.refresh(); 
                         //  getRouteRecord(rd,getRouteName);
                         //getRouteName(rd);
                           
                        changeExtent(featureSet.features[0].geometry);
                        getDetailZone(idRoute,true);
                      
                           }
                          
                           });
                       } 
                     }  
                    
                
                   
                 
                 function queryRoadAll (rd)
                 {
                   //getRouteRecord(rd,getRouteName);
                   //getRouteName(rd);
                    
                
                   console.log(rd+" ??")
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
                     
                     if (idRoute!=featureSet.features[0].getAttribute("routeid"))
                     {
                
                        rd=featureSet.features[0].getAttribute("routeid");
                        
                        whh="routeid = '"+rd+"'";
                     layerManual.removeAll();
                     idRoute=featureSet.features[0].getAttribute("routeid");
                     
                     
                     
                    
                     changeExtent(lin);
                    
                      
                    
                     //featureTable.refresh();
                
                     
                     
                     }
                     getDetailRoute(idRoute,true); 
                    
                     
                   });
                
                
                 }
                             
                }
                function changSelectSeg(event) 
                {
                  
                 
            
                  
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
                           symbol : selectSymbol.lineSymbol,
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