console.log('role_owner');
var flagEdit=false;
var idFly;

var flypts=[];
var profil=[];
var tabName=[];
var nameRoute;
var idRoute;
var idAircraft;






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
     
      if (document.getElementById("R"+idRoute)!=null)
      document.getElementById("R"+idRoute).innerHTML="";
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



function setFlightSidebar()
{

 var els=document.getElementsByClassName("sidebar-title");
 els[0].innerText="Заявки на полеты";
 if( route==="Archive" )
 {
   getUserFly(new Date(timeSlider.values[0]),new Date(timeSlider.values[1]));
 }
else 
{

            document
           .getElementById("checkFlight")
           .addEventListener("click", myCheckFlight); 
           document
           .getElementById("createFlight")
           .addEventListener("click", makeNewFlight); 
            document
            .getElementById("cancelFlight")
            .addEventListener("click", cancelFly); //событие отмены полета 
            document
           .getElementById("resetFlight")
           .addEventListener("click",resetFly);
           document.getElementById("refreshFlights") 
            .addEventListener("click", getUserFl);
      
      idRoute= $.cookie("idRoute");
      
      if(idRoute==null) idRoute="";
      if (idRoute=="") 
      {
        tableLayer.definitionExpression="objectid < 0";
        tableZoneLayer.definitionExpression="objectid < 0";
       
        document.getElementById("createFlight").disabled=true;  
      }
      else
      {
        tableLayer.definitionExpression="routeid = '"+idRoute+"'";
        tableZoneLayer.definitionExpression="routeid = '"+idRoute+"'";
        document.getElementById("createFlight").disabled=false;
        queryRoad(null,idRoute) ;     
      }
      
       getUserFly(new Date(timeSlider.fullTimeExtent.start),new Date(timeSlider.fullTimeExtent.end));
    }
}



var rlb=[];

function setTrackSidebar()
{

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
      if (idRoute=="") clean(true)
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
                 
     clean(true);     
  
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
                  if(route==="Tracks")
                  {
                   if (geom.type==="polygon")
                   {
                      
                      if (geom.isSelfIntersecting) 
                      {
                        alert("Некорректная геометрия") 
                        layerManual.removeAll()
                        return
                      }  
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
                
                if(route==="Tracks")
                   {
                 if(layerManual.graphics.length>0)
                    document.getElementById("createRoute").disabled=false
                  else
                    document.getElementById("createRoute").disabled=true
                  } 
                
                if(route==="Flights")
                   {
                
                    buttonEnabled();
                   } 
                
                  }

                 function clean(withBuffer)
                 {
                     nameRoute=""; 
                     if (idRoute!="")
                     {
                      idRoute="";
                      getUserRoute("");
                     }
                  
                     layerManual.graphics.removeAll();
                     document
                     .getElementById("createRoute").disabled=true
                   //  if(withBuffer)
                   //    bufferLayer.graphics.removeAll();
                     
                   
                     tableLayer.definitionExpression="objectid < 0";
                     tableZoneLayer.definitionExpression="objectid < 0"; 

               
                     
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
                      symbol:mySymbols.fillSymbolGray,

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
          
          for(var l=0;l<indSeg.length-1;l+=2) 
           {
             var lts=[]
             var lM=0;
             for(var k=indSeg[l][0];k<indSeg[l+1][0];k++)
             {
               
               lts.push([geom4.points[k][0],geom4.points[k][1],geom4.points[k][2],lM]);
               if( k<indSeg[l+1][0]-1)
               if  ((geom2.points[k][0]-geom2.points[k+1][0])*(geom2.points[k][0]-geom2.points[k+1][0])+(geom2.points[k][1]-geom2.points[k+1][1])*(geom2.points[k][1]-geom2.points[k+1][1])>0)
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
            ll=0;  
            for(var l=0;l<indSeg.length-2;l+=2) 
            {
              for(var kk=0;kk<indSeg.length-2;kk+=2) 
             { 
              if(indSeg[kk][1]==ll)
               {
               profil.push(prof[kk/2])
               flypts.push(prof[kk/2].paths[0])
               break;
               }
              }
              ll++;
            }
            for(kk=0;kk<indSeg.length-1;kk+=2) 
             { 
              if(indSeg[kk][1]==-1)
               {
               profil.push(prof[kk/2])
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
      /*
       lineSymbol3 = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        color: [128, 128, 128],
        width: 2
      };*/
       lineGraphic.symbol=mySymbols.lineSymbolGray;
       layerManual.add(lineGraphic);
       return lineGraphic.geometry;
       
      
       
      }

      /***********************************************Проверка на правильное имя *************************************** */

      function checkRouteName(isNew)
    {
      
    
      if(isNew)
      {
      if (idRoute != "")  // наименование маршрута
       {
       alert ("Маршрут существует");
       return false;
       }
      }
     
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
      
     let dt= 
      //JSON.stringify(
        {"track": {
                       "type": tp,
                       "name": nm,
                       "isFinal": false 
                     }
                    };
     //               );
         
              
      apiNewTrack= apiData(apiUrl, "/track/add", token, 'POST', dt);
      
      apiNewTrack.then(function (response) {
        try{
        functVect(response.id);
        }
        catch{
        
           apiDelTrack= apiData(apiUrl, "/track/"+response.id, token, 'DELETE');
           apiDelTrack.then(function (response1) {
               
                      idRoute=""; 
                      alert("Маршрут не сформировался , повторите попытку");
                 });
          ;
        }
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
         

      
      
          var     lst="";
          
         
             getRouteRecords(makeListRoutePanel);

           
             function makeListRoutePanel(response)
             {
              
              for (let i=0;i<response.tracks.length;i++) {     
                 
                if(response.tracks[i].isFinal)
                {

                  rlb.push(response.tracks[i].id) ; 
                  let ellst=cardHtml.panTrack(response.tracks[i]);
                  lst=lst+ellst;
                }
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
                   let dt=track.createdAt.date;
                   var numb=track.applicationsNumber;
                  // rlb.push(rlob) ; 
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
          
          let tp=parseInt(tps);
          
                if (tp<2)
                {     
                       let elem=document.getElementById("DR"+gld);
                       
                       if (elem ==null )  
                       {
                         let oldrid=idRoute;
                         {
                          removeSelectSeg(oldrid,"");
                          if (document.getElementById("R"+oldrid)!=null)  
                          document.getElementById("R"+oldrid).innerHTML="";
                          
                         }
                         getDetailZone(gld);
                         queryRoad(event,gld);
                     
                       }
                       else
                        {
                          if (document.getElementById("R"+gld)!=null)  
                        document.getElementById("R"+gld).innerHTML="";   
                        
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
                           if (document.getElementById("R"+oldrid)!=null)  
                             document.getElementById("R"+oldrid).innerHTML=""; 
                           }
                           getDetailRoute(gld);
                           queryRoad(event,gld);
                     
                          }
                          else
                              {
                              
                              removeSelectSeg(gld,"");
                              if (document.getElementById("R"+gld)!=null)
                               document.getElementById("R"+gld).innerHTML="";
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

            if( route==="Flights" )
            {
              document.getElementById("checkFlight").disabled=false;
              
            }  

            if( route==="Tracks" ) 
            { 
            n=document.getElementById("N"+rid).value ;
            t=document.getElementById("T"+rid).value ;
            
            if (n==0)
             {
              document.getElementById("saveRoute").disabled=false;
              document.getElementById("deleteRoute").disabled=false;
              }

             document.getElementById("saveRouteAs").disabled=false;
             document.getElementById("importGeometry").disabled=false;
             $.cookie("idRoute",rid);  
             $.cookie("typeRoute",t);
             
            }
            
            }      
/*export*/ function getDetailZone(routeid)
{
  var lst="";
  var id="R"+routeid;
  
  buttonEnabled(routeid); 

      
    var   whZ="routeid = '"+routeid+"'";
 //statusid > 2 не ЧЕРНОВИК не ШАБЛОН
                   zoneLayer.queryFeatures({
                   where : whZ,
                     returnGeometry: true,
                     outFields: ["*"],
                   })
                   .then(function(ftfSet) 
                   
                   {
                    let tp=1; 
                    let rad=ftfSet.features[0].getAttribute("radius");
                    if (rad>0) tp=0;
                    lst=cardHtml.trackrdetal(ftfSet.features,tp)
                    document.getElementById(id).innerHTML=lst;
                    const el = document.getElementById(routeid);
                    el.scrollIntoView({block: "center", inline: "center",behavior: "smooth"}); 
                   });
                  

 
  

}

/*export*/ function getDetailRoute(routeid)
{
  buttonEnabled(routeid); 
 
  var id="R"+routeid;
  var   whR="routeid = '"+routeid+"' And numb>=0 ";
 
                   routeVecLayer.queryFeatures({
                   where : whR,
                   orderByFields : ["numb"],
                   returnGeometry: true,
                     outFields: ["*"],
                   })
                   .then(function(ftfSet) {

                    lst=cardHtml.trackrdetal(ftfSet.features,2)
                   
                  
                     document.getElementById(id).innerHTML=lst;

                     for (let i=0;i<ftfSet.features.length;i++)
                     {
                      document.getElementById(i.toString()+"CH"+routeid).addEventListener("click", changSelectSeg);
                     }
                     const el = document.getElementById(routeid);
                     el.scrollIntoView({block: "center", inline: "center",behavior: "smooth"}); 
  
                   })
                  
   
  

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
           
            for (let i=0;i< ftfSet.features.length;i++)
            {
            var sp=document.getElementById(i.toString()+"SP"+rid).value;
            
            var z=document.getElementById(i.toString()+"ZZ"+rid).value;
           
            ftfSet.features[i].setAttribute("speed",sp); 
            ftfSet.features[i].setAttribute("z1",z);
            feats.push(ftfSet.features[i]);
            }
      
        let eds={
             updateFeatures:feats
                 } 
            
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
                      idRoute=""; 
                      getUserRoute(idRoute);
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
                         symbol:mySymbols.lineSymbolGray

                      });
                      
                      layerManual.add(imGr);
                      changeExtent(lin);
                      if (document.getElementById("R"+rid)!=null)  
                          document.getElementById("R"+rid).innerHTML="";
                      
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
                          symbol:mySymbols.fillSymbolGray
                        });
                        
                       layerManual.add(imGr);
                       changeExtent(pol);
                       if (document.getElementById("R"+rid)!=null)
                       document.getElementById("R"+rid).innerHTML="";
                    
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
                  //var ownerId= user.id;
                  if (routeid!="")
                  {
                   tableLayer.definitionExpression="objectid < 0";
                   tableZoneLayer.definitionExpression="objectid < 0"; 
                   let stat;
                   try{
                    stat=document.getElementById("T"+routeid).value;
                    }
                    catch{
                      stat =$.cookie("typeRoute");
                    }
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
                        if( route ==="Tracks" ) 
                                     getDetailZone(idRoute);
                      
                           }
                          
                           });
                       } 
                     }  
                    
                
                   
                 
                 function queryRoadAll (rd)
                 {
                   //getRouteRecord(rd,getRouteName);
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

                      // alert(featureSet.features[m].geometry.paths[0][n-1][2]);
                     //  alert(featureSet.features[m].geometry.paths[0][n-1][3]);
                      }
                       
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
                     
                     
                     }
                    
                     changeExtent(lin);
                    
                      
                    
                     //featureTable.refresh();
                
                     
                     
                    
                     if( route==="Tracks" ) 
                      getDetailRoute(idRoute); 
                    
                     
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
                           symbol : mySymbols.lineSymbolSelect,
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

   //*******************************************Flight  */
   function addFlyEvent() {
          
    for (var i=0;i<glb.length;i++)
    {
    
       // document
     //  .getElementById(glb[i][0]+glb[i][1])
     //  .addEventListener("click", cancelFly); //событие отмены полета
        
       document
       .getElementById(glb[i][0])
       .addEventListener("click",  eventFlyDetal); //событие просмотра полета
   ;
    }

   }       
   function eventFlyDetal(event){
    var gld;
    if(event==null)
      gld=idFly
    else
     gld=event.target.id;
  
    var allApplication = apiData(
      apiUrl,
      '/application/'+gld,
      token
  );

  allApplication.then(function (response) {
      
      let dt=response.application.start.date;
      dt=new Date(dt);
      if(route!="Archive")
          timeSlider.values=[dt];
      else
        realPath(true,response.application.start.date,response.application.finish.date);    
      typeFly=response.track.type;
      $.cookie("typeRoute",typeFly);
      let oldFly=idFly;
      idFly=response.id;
      idRoute=response.track.id;
      tmzon=response.application.start.timezone_type;
      $.cookie("idRoute",idRoute);
      let el= document.getElementById("F"+oldFly);
      
      let el2= document.getElementById("F"+idFly);
      let reg=false;
      if(el!=null) 
        {  let el3=  document.getElementById("R"+oldFly);
        if (el3!=null)   
            el3.innerHTML="";
        }
            
      if(el2!=null)
      {
        idFly="";    
        queryRoad(null,"");
        reg=true;
      }
      else
      {
      
           
            let el3= document.getElementById("R"+response.id);
                ellst=cardHtml.detalFlyght(response,false);
                if (el3!=null)
                el3.innerHTML=ellst;
                queryRoad(null,idRoute);
        
      }

  
      
      let kod=document.getElementById("T"+gld).value;

      try{
      if(kod==5 || kod==4)
        document.getElementById("resetFlight").disabled=true;
      else 
       document.getElementById("resetFlight").disabled=reg;
      if(kod==6)
      {
        document.getElementById("cancelFlight").disabled=true;
      }
      else
      { 
       
       document.getElementById("cancelFlight").disabled=reg;
      }
      document.getElementById("createFlight").disabled=reg;      
      document.getElementById("checkFlight").disabled=reg;      
    }
    catch{};

    });         
       
     return;  
  
    
 }




   function makeNewFlight()
        {
          var ted=new Date();
          if (ted>sdt)
          {
            alert("Неверное время  старта ");
            return; 
          }
           idAircraft = $("#aircraftChoice").val();
            
          if(idRoute=="")
          {
            alert("Маршрут не выбран");
            return;             
          }
         // var  ownerId=user.id;
          var sdt=timeSlider.values[0];                             //время старта полета
         
          tp=$.cookie("typeRoute");
          typeFly=$.cookie("typeRoute");
          

                  idFly="";            // новый полет
          
                 startDat= convertTime(sdt);
            var   sd=new Date(startDat)
            var   dt=sdt.getTime()-sd.getTime();
                 // sd.setTime(sd.getTime()+2*dt) ; !!!!!!!!!!!!!
                  sd.setTime(sd.getTime()+3*dt) ; 
                  startDat= convertTime(sd);//+".000000";
                  sd=new Date(startDat) 
 
//формирование заявки
            
            
            console.log(idAircraft);
            let dat =
            
            {
              "userId": user.id,
              "application": {
              "externalId": "AL14212",
               "start": {
                  "date": convertTime(sd)// "2021-05-19 11:21:48"
                }
              },
              "statusId": 1,
              "aircraftId": idAircraft,
              "trackId": idRoute//"4c5d793e-fb8d-46cb-b645-613198ebeae0"  

            };
            apiNewFlight= apiData(apiUrl, "/application/add", token, 'POST', dat);
      
            apiNewFlight.then(function (response) {
                $("#createFlightModalCard").modal("hide");

                createFlyVectors(response.id);
                  
    });
            
            
             
              
                        
                  
              
          
     //   }); 
//****************************************************************    Формирование зонального полета
function createFlyVectors(id){
  idFly=id;
  
  routeid= idRoute;
  var whR="routeid = '"+routeid+"'";
  if(tp ==2 )
                   {
  // выбор геометрии из набора данных линейных маршрутов                     
                   routeVecLayer.queryFeatures({
                    where : whR,
                    returnGeometry: true,
                    returnZ : true,
                    returnM :true,
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
  
          routeid = idRoute;
          flyid = idFly;
        
       
        var zmin2=zmin;
        var zmax2=zmax;
        var sdt=new Date(startDat);//timeSlider.values[0];
  
         
  
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
                                 "ownerid": user.id.toString(),
                                 "sdate": convertTime(sdt),
                                 "edate" : convertTime(tdt) ,
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
  
              
              var rf=[];
              let dink=-500;
             var extpol2= PROJECTION.project(extpol, {wkid :3857},PROJECTION.getTransformation({wkid :4326},{wkid :3857}));
              var dd=extpol2.xmax-extpol2.xmin;
              if (dd>extpol2.ymax-extpol2.ymin)
                   dd=extpol2.ymax-extpol2.ymin;
            
              let sch=0;  
                
              if (dd<2000)
              {
                 
                 rf.push(-10);    
              }
              else 
               while (dd-2000>0)
                {
                 
                  rf.push(dink);
                  dink=dink-500;
                  dd=dd-1000;
                  sch++;
                  if (sch>5) break;
                }
              
             
              var bufferIn=[];
              var bufferI;
              for (let j=0;j<rf.length;j++)
              {
                
                bufferI =
                 GEOMETRYENGINE.geodesicBuffer(pol,rf[j], "meters");
                
                 bufferIn.push(bufferI);
                 
              }
              
              makePunktsPol(bufferIn,tdt);
              
              
              //** формирование зонального полета   */       
                   flyZoneLayer
              .applyEdits(param2)
              .then(function(editsResult) {
                 
             
                //######################################################################
                if(editsResult.addFeatureResults.length>0)
                {
                  let dat ={userId: user.id,
                    "statusId": 3,
                    "trackId": routeid,  
                     "application" :{
                               
                             "finish" : {date:convertTime(tdt)}
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
     let nn=200
     if (geom1!=null)
     {
       if (geom1.extent!=null)
       {
         if(geom1.extent.width+geom1.extent.height<1000)
         {
           nn=20;
         }
       }
     } 
     var geom2=GEOMETRYENGINE.densify(geom1,nn,"meters");
     
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
    
    var geom4=result.geometry;
    var sd=new Date(startDat)
       
    var td=sd;
    
   //  var lM=0;
     var dl=0;
    // var addFeat=[];
     var svetofor=1

     let tdt= new Date(startDat);
     let tdt0=tdt.getTime()/1000;
        
      
        
     var ptsLine=[[]]; 
     
   
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
       
      
      
       ptsLine[0].push([geom4.points[ind][0],geom4.points[ind][1],geom4.points[ind][2]+200,td.getTime()/1000-tdt0])
       dl=0;
      }
     } 
     sc=sc+1;
     
     if (flag) break;
    }
    
         if (ptsLine[0].length>0)
         {
      
            sd=new Date(startDat)
  
            let lin1=
             new POLYLINE({
             hasZ: true,
             hasM: true,
             paths: ptsLine,
             spatialReference: { wkid: 4326 }
             });
 
             let  flyRout=new GRAPHIC();
             flyRout.geometry=lin1;
             flyRout.attributes = {
                                "ownerid": user.id.toString(),
                                "sdate": convertTime(sd),
                                "edate" : convertTime(fdt) ,
                                "flyid":  flyid,
                                "routeid" : routeid,
                                "status" :3
                                            };
 
              const param2 = {
                    addFeatures: [flyRout]
                     };  
                     
                  flyVecLayer
             .applyEdits(param2)
             .then(function(editsResult) {;});
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
  
            routeid = idRoute;
            flyid =idFly;
             
        
         let tdt= new Date(startDat);
         let tdt0=tdt.getTime()/1000;
         let zmin2=9000;
         let zmax2=-500;
            
      
             var ptsLine=[[]];
  
              for(let m=0;m<pZ.length-1;m++)
              {
              
  
             
              if (m==0)
               {
                 var tz=flypts[0][0][2];
                 for (let p=0;p<2;p++)
                 {
      
                    ptsLine[0].push([flypts[0][0][0],flypts[0][0][1],tz,tdt.getTime()/1000-tdt0]);//lM]);$$$$$$$$$$$          
      
                    tz= pZ[0];
                    tdt.setTime(tdt.getTime()+10000);
      
                    
                }
                
      
               }
               
               var nPt=flypts[m].length;
               var dz=pZ[m+1]-pZ[m];
               var dm=flypts[m][nPt-1][3]-flypts[m][0][3];
               var dzm=dz/dm;
               var tz1=tz;
               tz=pZ[m];
               for (let p=1;p<nPt;p++)
                 {
       
                   var  delt=(flypts[m][p][3]-flypts[m][p-1][3])/(pSpeed[m]/3600); //delt в миллисек.
                  // alert(flypts[m][p][3]+"!!!");
                  // alert(flypts[m][p-1][3]+"???");
                   var deltZ=(flypts[m][p][3]-flypts[m][p-1][3])*dzm;
                    tdt.setTime(tdt.getTime()+delt);
                   
                   tz1=tz;
                    tz=tz+deltZ;
                
                    ptsLine[0].push([flypts[m][p][0],flypts[m][p][1],tz,tdt.getTime()/1000-tdt0]);//lM+flypts[m][p][3]]); $$$$$$$$$$$                 
                
                    if(zmin2>tz) zmin2=tz;
                    if(zmax2<tz) zmax2=tz;
                }
  
               if (m==pZ.length-2)
               {
             
                 tdt.setTime(tdt.getTime()+10000);
                 
                
                 ptsLine[0].push([flypts[m][nPt-1][0],flypts[m][nPt-1][1],flypts[m][nPt-1][2],tdt.getTime()/1000-tdt0]);//lM+flypts[m][nPt-1][3]])$$$$$$$$$$$$$$$
                    
  
                }
               
  
              }
              
            
            
  
  
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
                                 "ownerid": user.id.toString(),
                                 "sdate": convertTime(sd),
                                 "edate" : convertTime(tdt) ,
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
                let dat ={userId: user.id,
                  "statusId": 3,
                  "trackId": routeid,  
                  "application" :{
                          "finish" : {date:convertTime(tdt)}
                                  }   
                      }
              
              updateRecordFlyghtTable(dat,flyid,true);
                      
               
        
  
               })
              .catch(function(error) {
                  alert("???????") 
                  alert( error.name);
                 alert( error.message);
                
              });  
              
              
              var ptsLine2=[[]];
              for(let i=1;i<ptsLine[0].length-1;i++)
               ptsLine2[0].push([ptsLine[0][i][0],ptsLine[0][i][1],0]);
               let lin2=
               new POLYLINE({
               hasZ: true,
               hasM: false,
               paths: ptsLine2,
               spatialReference: { wkid: 4326 }
               });
    
              var polBuffer = GEOMETRYENGINE.geodesicBuffer(lin2, 500, "meters");
              
              
              
              var flyZone=new GRAPHIC();
              flyZone.geometry=polBuffer;//pol;
              flyZone.attributes = {
                                 "ownerid": user.id.toString(),
                                 "sdate": convertTime(sd),
                                 "edate" : convertTime(tdt) ,
                                 "flyid":  flyid,
                                 "routeid" : routeid,
                                 "zmin" : zmin2, 
                                 "zmax": zmax2,
                                 "status" :3
                                             };
                
                var param3 = {
                     addFeatures: [flyZone]
                      }; 
            
                          
                      flyZoneLayer
                      .applyEdits(param3)
                      .then(function(editsResult) {
                         
                     ;
          
                       })
                      .catch(function(error) {
                          alert("Zon "+ error.name);
                         alert( error.message);
                        
                      });      
  
  
             //@@@@@@@@@@@@@@@@@@@@
      
  
           
   }
  
  
  
  
  
   
    }
  
    
 
 /*export*/ function  getUserFly(stt=new Date(),ett=new Date())
 {
        
  
  
// Нижняя граница периода полетов  
     // var stt= new Date();
                 
      var stDt=convertTime(stt);
      var     lst="";
      apiUserFlight= apiData(apiUrl, "/application/user/"+user.id.toString(), token);
      
      apiUserFlight.then(function (response) {
          
       makeListFlyghtPanel(response); // формирование пане
      
      });   
// Выбор задействованных маршрутных шаблонов и формирование массива имен 
       
        
//Формирование панели полета
           
              function makeListFlyghtPanel(response)
              {
               emptyArray(glb);
               for (let i=0;i<response.applications.length;i++) {   
                 
                if(response.applications[i].application.start.date >= stDt)
                  if(response.applications[i].status.id >2) 
                  {
                   glb.push([response.applications[i].id,response.applications[i].track.type.toString()]) ; 
                   tmzon=response.applications[i].application.start.timezone_type;
                   let ellst= cardHtml.panFlyght(response.applications[i]);
                   lst=lst+ellst;
                  }
                 }
                 document.getElementById("uav-realtimelist").innerHTML=lst;
                 addFlyEvent();

                // if(idFly!=null && idFly!="" )  // getRouteRecord(viewRid,evRouteDetal);
                //    eventFlyDetal(null); 
                //else 
                //  buttonDisabled();
                 
 
              }
              
              
              
   

    
//**************************************************   Cytring Conflict   */

  }
/********************************** Check******************************************************************************************* */
  /*export*/  function myCheckFlight()
  {

   
    
  
      

  var checkGeometry;    
  var checkGeometryZ;
  
  var rid=idRoute;
   if(rid=="") return;
   
   bufferLayer.removeAll();
 
   getCheckGeometry(rid)
   

function getCheckGeometry(rdd)
 {
     
   checkGeometry=null;
   checkGeometryZ=null;

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
     
    
     
    //var buffer2 = GEOMETRYENGINE.geodesicBuffer(checkGeometry, 1000, "meters");
    
     
       if (checkGeometry.type=="polyline")
                {
   
               checkInterFlyght(routeVecLayer,buffer,flyZoneLayer);           
   
                }
       else { 
   
               checkInterFlyght(zoneLayer,buffer,flyZoneLayer);           
   
             }
              
   
       
       for(let i=0;i<layerConf.length;i++)
       if (layerConf[i]!=null)
       {
        
        checkInterProc(buffer,layerConf[i]);
       }
       
   
       
       if (checkGeometry.type=="polyline")
       {
             hh=prompt("Введите предельно допустимую высоту",50);
             if(hh==null) hh=50;
             checkElevation(hh);
       }
         
       
             interv=window.setInterval(checksMess, 2000);
       


 }

 

function checksMess()
{


window.clearInterval(interv);
   if (bufferLayer.graphics.length==0)
                alert("Нет конфиликтов");
 
   else
   {
      
      scene.layers.reorder(bufferLayer, scene.layers.length);
       alert("Внимание конфиликты !!!");
   }
 

}   

   
//***************** Контроль  высот */
    function checkElevation(delt)
    {
     var rdd= idRoute; 
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
   
                {
                  if(i>0)//<frSet.features.length-1)
                  {
                    pZ.push(frSet.features[i].getAttribute("z1"));
                    pSpeed.push(frSet.features[i].getAttribute("speed"));
   
                  }
                 }
   
                     pZ.push(frSet.features[0].getAttribute("z1"));
                     pSpeed.push(frSet.features[0].getAttribute("speed"));
   

                
                                  
                
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
                symbol: mySymbols.lineSymbolIntersect,
                spatialReference : { wkid: 4326 }
                   });
                  let alt; 
                  for (let j=0;j<outpts[0].length;j++)
                  { if (j==0) alt=outpts[0][j][2] ;
                    if(alt>outpts[0][j][2]) alt=outpts[0][j][2] ;
                  }
                  gg. attributes = {
                    "type" : "Высота",
                    "name" :  "Ниже предела" ,
                    "altitude" : alt,
                    "description": "Высота относительно поверхности земли !!! < "+delt,

                  };
                
             gg.popupTemplate=templatesPopup.templateBuffer;            
             bufferLayer.add(gg);
             outpts=[];
             el=[];
           }
         }
       
        
      
      
        

    }



 //*************************** Проверка на запретные зоны
 
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

        let desc="";
        let alt=null; 
        let nm="";
        let typ=checkLayer.title
        try {
             alt=featureSet.features[k].getAttribute("altitude");
        }
        catch{};
        try {
          desc=featureSet.features[k].getAttribute("description");
            }
          catch{};
          try {
            nm=featureSet.features[k].getAttribute("name");
              }
          catch{};
        
        var Attrs={
                     "type" :typ,
                     "name" :nm,
                     "altitude":alt,      
                     "description": desc
                  };
                 
        if (inter instanceof Array) 
              {
                
                for (var j=0;j<inter.length;j++)
                {
                 var gg= new GRAPHIC({
                     geometry: inter[j],
                     symbol: mySymbols.fillSymbolIntersect,
                     spatialReference : { wkid: 3857 }
                   });
                  gg. attributes = Attrs;
                  gg.popupTemplate=templatesPopup.templateBuffer;      
                  bufferLayer.add(gg);  
                 }    
                
             }
         else if (inter!=null)
         {  
            
            gg = new GRAPHIC({
                geometry: inter,
                symbol: mySymbols.fillSymbolIntersect,
                spatialReference : { wkid: 3857 }
                   });
                   
           gg.attributes =Attrs 
            gg.popupTemplate=templatesPopup.templateBuffer;      
             bufferLayer.add(gg);       

         } 
        }              
        }
       

      });


    }

    

function checkInterFlyght(baseLayer,buff,checkFlyLayer) {
//function checkInterZoneRoute(baseLayer,buff,buff2,checkFlyLayer,checkTemplLayer) {
var sdt=timeSlider.values[0];
var startDat= convertTime(sdt);
var   sd=new Date(startDat)
let   dt=sdt.getTime()-sd.getTime();

     //sd.setTime(sd.getTime()+2*dt) ;
     sd.setTime(sd.getTime()+3*dt) ; 
startDat= convertTime(sd);//+".000000";
     sd=new Date(startDat) 


var sdate=convertTime(sd);

var orderByFields = ["objectid"]
var edt=new Date(startDat);
routeid=idRoute;
if (checkGeometry.type=="polygon")
var    whR="routeid = '"+routeid+"'";
if (checkGeometry.type=="polyline")
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

if (checkGeometry.type=="polygon")
{
let dt=featureSet.features[0].getAttribute("duration");
edt.setTime(edt.getTime()+dt*60000)
}
if (checkGeometry.type=="polyline")
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

var edate=convertTime(edt)
 checkInterRouteProcess(buff,sdate,edate,checkFlyLayer);
}  

});

} 



function checkInterRouteProcess(buff,sdate,edate,checkFlyLayer)
    {
       //fdt=covertTime(new Date());
          
       var    distance =1000;
       var units = "meters";
       

var wh="flyid <> '"+idFly+"' And status < 5 And sdate >= timestamp'"+ sdate+"' And sdate <= timestamp'"+edate
+"' Or flyid <> '"+idFly+"' And status < 5  And edate >= timestamp'"+ sdate+"' And edate <= timestamp'"+edate
+"' Or flyid <> '"+idFly+"' And status < 5  And sdate <= timestamp'"+ sdate+"' And edate >= timestamp'"+edate+ "'"; 
     
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
          
           var edt=new Date(featureSet.features[m].getAttribute("edate")).toLocaleString();
           var sdt=new Date(featureSet.features[m].getAttribute("sdate")).toLocaleString();
       
          if (inter!=null)
          {
           let Att = {
            start  : sdt,
            finish : edt
          
           };
            if (inter instanceof Array) 
              {
                
                for (var j=0;j<inter.length;j++)
                {
                 var gg= new GRAPHIC({
                     geometry: inter[j],
                     symbol: mySymbols.fillSymbolIntersect,
                     spatialReference : { wkid: 4326 }
                   });
                   gg. attributes = Att;

                   gg.popupTemplate=templatesPopup.templateBufferRoute;
                   bufferLayer.add(gg);  
                 }    
                
             }
         else 
         {  

            gg = new GRAPHIC({
                geometry: inter,
                symbol: mySymbols.fillSymbolIntersect,
                spatialReference : { wkid: 4326 }
                   });
                  gg. attributes = Att;
             gg.popupTemplate=templatesPopup.templateBufferRoute;           
             bufferLayer.add(gg);       

          }
         }
        
        }
       }
        

      });



    

   }
}

function cancelFly() {
            
  if (confirm("Вы уверены в отмене полета ?"))
  {
  let gld=idFly;  
  
  let tp=typeFly
  if (tp=="2") 
         modLayerRec(gld,flyVecLayer,"flyid","status",6);
         modLayerRec(gld,flyZoneLayer,"flyid","status",6); 
  let dat ={
    "statusId": 6
      
        }

      updateRecordFlyghtTable(dat,gld,false);
      
  return;  
  
      }

    }
    function resetFly() {
            
      
      let gld=idFly;  
      let tp=typeFly;
      if (tp=="2") 
            modLayerRec(gld,flyVecLayer,"flyid","status",3);
            modLayerRec(gld,flyZoneLayer,"flyid","status",3); 
      let dat ={
        "statusId": 3
      }
          
      
    
          updateRecordFlyghtTable(dat,gld,false);
          
      return;  
      
          }
    
  
