console.log('role_operator');

var idFly="";
var sd;
var fd;
var emulpts=[];
var dt;
function setFlightSidebar()
{
  view.on("click" ,function(event){
    if (event.button==2)                // правая кнопка - очистка графики
     {
      bufferLayer.removeAll();
     }
    });
 var els=document.getElementsByClassName("sidebar-title");
 els[0].innerText="Заявки на полеты";
 
 if( route==="Archive" )
 {
   getUserFly(new Date(timeSlider.values[0]),new Date(timeSlider.values[1]));
 }
 else{
           
            document
           .getElementById("check3dFlight")
           .addEventListener("click", checkFlight); 
           document
           .getElementById("appFlight")
           .addEventListener("click", appFlight); 

           document.getElementById("resetFlight3d")
           .addEventListener("click", resetFlight);

            document.getElementById("refreshFlights3d") 
            .addEventListener("click",getUserFl);

            document
            .getElementById("unappFlight")
            .addEventListener("click", unappFlight ); //событие отмены полета 
            document
           .getElementById("emulFlight")
           .addEventListener("click",emulFlight);
            
              
           getUserFly(new Date(timeSlider.fullTimeExtent.start),new Date(timeSlider.fullTimeExtent.end));
 }
}
function checkFlight(){getCheckGeometry(idFly);}



function getUserFly(d=new Date(),d2=new Date())
 {
     let d3=new Date();
     console.log(d2);
     console.log(d);
// Нижняя граница периода полетов  
      var stt= new Date();
                 
      var stDt=convertTime(stt);
      
     // let d=new Date();
     // let d2=new Date();
      if(d3.getTime()-d3.getTime(),1000)
           d2.setDate(d2.getDate() + 30);
      let m1=String(d.getMonth() + 1).padStart(2, '0');
      let day1 = String(d.getDate()).padStart(2, '0');
      let m2=String(d2.getMonth() + 1).padStart(2, '0');
      let day2 = String(d2.getDate()).padStart(2, '0');
      
      stara=(d.getFullYear()).toString()+m1+day1+"000000";
      enda=(d2.getFullYear()).toString()+m2+day2+"000000"; 

      var     lst="";
      console.log(stara+"  "+enda);
      apiIntervalFlights= apiData(apiUrl, "/application/interval/"+stara+"/"+enda, token);
      
      apiIntervalFlights.then(function (response) {
           
           makeListFlyghtPanel(response); // формирование панели полетов
          });


      
       
// Выбор задействованных маршрутных шаблонов и формирование массива имен 
       
        
//Формирование панели полета
           
              function makeListFlyghtPanel(response)
              {
               emptyArray(glb);                
               
               for (let i=0;i<response.applications.length;i++) {   
                if(response.applications[i].application.start.date >= stDt || route==="Archive")
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
        
              }
              
              
             

    }
  
          
      function addFlyEvent() {
          
        for (var i=0;i<glb.length;i++)
        {
           document
           .getElementById(glb[i][0])
           .addEventListener("click",  eventFlyDetal); //событие просмотра полета
       
        }
    
       }       
       function eventFlyDetal(event){
         
         emptyArray(emulpts);
         bufferLayer.removeAll();
         dronLayer.removeAll();
      
        var gld=event.target.id;
    
        var allApplication = apiData(apiUrl,'/application/'+gld, token);

        allApplication.then(function (response) {
      
        dt=response.application.start.date;
        dt=new Date(dt);
        if(route!="Archive")
          {
            timeSlider.stop();
            initTimeSlider();
    
            timeSlider.values=[dt]; 
          }
          
        else
          realPath(false,response.application.start.date,response.application.finish.date);    

        
      
        typeFly=response.track.type;
        $.cookie("typeRoute",typeFly);
        let oldFly=idFly;
        idFly=response.id;
        idRoute=response.track.id;
        tmzon=response.application.start.timezone_type;
        sd=response.application.start.date;
        fd=response.application.finish.date;
      
        $.cookie("idRoute",idRoute);
        emptyArray(emulpts);

        let el= document.getElementById("F"+oldFly);
        let el2= document.getElementById("F"+idFly);
        let reg=false;
        if(el!=null)
        {  let el3=  document.getElementById("R"+oldFly);   
            el3.innerHTML="";
        }
        if(el2!=null)
        {
          idFly="";    
          queryFlight(null,"");
          reg=true;
       }
      else
      {
        let el3= document.getElementById("R"+response.id);
          ellst=cardHtml.detalFlyght(response,true);
          el3.innerHTML=ellst;
            queryFlight(idFly);
         
      }  
        
    });
    return;  
     } 

     function queryFlight(fid)
     {
      bufferLayer.removeAll(); 
      let wH = "flyid = '"+fid+"'";
                        
      flyZoneLayer.queryFeatures({
     
          where : wH,
        // distance and units will be null if basic query selected
     
          returnGeometry: true,
          returnZ :true,
          
        outFields: ["*"],
      })
      .then(function(featureSet) {     
       if(featureSet.features.length>0)
       {
           
       
        flyZoneLayer.definitionExpression="flyid = '"+fid+"'";
       
          
       changeExtent(featureSet.features[0].geometry);
       buttonEnabled(false);
       
     
          }
          else
          buttonEnabled(true);
              
          });


   }
   function changeExtent (geom)
   {
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
  
    //buttonEnabled();
  
    }

   
     function buttonEnabled(reg)
     {

       try{
       document.getElementById("check3dFlight").disabled=reg;
       
       document.getElementById("appFlight").disabled=reg;
       document.getElementById("unappFlight").disabled=reg;
       document.getElementById("resetFlight3d").disabled=reg;
      
       document.getElementById("emulFlight").disabled=reg;
       }
       catch{}
      
           
      }



     
      function getCheckGeometry()
        {
         // checkGeometry=null;
          checkGeometryZ=null;
            const  query= new QUERY(); 
            query.where = "flyid = '"+idFly+"'";// And numb >= 0 ";
            query.outSpatialReference = { wkid: 4326  };
            query.returnGeometry = true;
            query.returnZ= true,
            
            query.outFields = [ "*" ];
   
            let paths=[]; 
            let pts=[];
            
            
            query.returnM =false,
            zoneLayerTen.queryFeatures(query).then(function(featureSet){
              if (featureSet.features.length>0){
                for(k=0;k<featureSet.features[0].geometry.rings[0].length;k++) 
                 pts.push(featureSet.features[0].geometry.rings[0][k]);
                 paths.push(pts);
                 checkSdate=featureSet.features[0].getAttribute("sdate");
                 checkGeometryZ  = new POLYGON({
             hasZ: true,
             hasM: false,
          //  paths: featureSet.features[0].geometry.paths,
             rings: paths,
            spatialReference: { wkid: 4326 }
            });
           
            //changeExtent2(checkGeometryZ.extent);
            
              }
              checkInter(checkGeometryZ);
             });
            
              
              
          

        }




      function checkInter(checkGeometryZ)
      {

        bufferLayer.removeAll();
     
        buffer = GEOMETRYENGINE.geodesicBuffer(checkGeometryZ, 1, "meters"); 
         
        let sdtm=new Date(sd);
        sdtm.setTime(sdtm.getTime()-100+3600000*tmzon);
        sdt=convertTime(new Date(sdtm));
         //alert(fd);
         let fdtm=new Date(fd);
         fdtm.setTime(fdtm.getTime()-100+3600000*tmzon);
         fdt=convertTime(new Date(fdtm));

          
             checkInterRoute(buffer,sdt,fdt,zoneLayer);
    
            for(let i=0;i<layerConf.length;i++)
            if (layerConf[i]!=null)
            {
             
             checkInterProc(buffer,layerConf[i]);
            }
    
          if (typeFly==2 )
          {
            hh=prompt("Введите предельно допустимую высоту",50);
              if(hh==null) hh=50; 
              checkElevation(hh);
          }
                
    

        window.setTimeout(checksMess, 2000); 
         // webScene.layers.add(featureBufLayer);  
        return;
         
      }

  function checksMess()
   {

    
    

           if (bufferLayer.graphics.length==0)
                        alert("Нет конфиликтов");
         
           else
               alert("Внимание конфиликты !!!");
             
           

    
       
   }   

   function checkInterRoute(buff,sdate,edate,checkLayer) {
          
    distance = 500;
    units = "meters";
    //wh="flyid <> '"+fid+"' AND tdate >= timestamp'"+ sdate+"' And tdate < timestamp'"+edate+ "'"
    
    wh="flyid <> '"+idFly+"' And status < 5 And sdate >= timestamp'"+ sdate+"' And sdate <= timestamp'"+edate
    +"' Or flyid <> '"+idFly+"' And status < 5 And edate >= timestamp'"+ sdate+"' And edate <= timestamp'"+edate
    +"' Or flyid <> '"+idFly+"' And status < 5 And sdate <= timestamp'"+ sdate+"' And edate >= timestamp'"+edate+ "'"
   
;
    
    ;
  
    checkLayer.queryFeatures({
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
        
              
        for (m=0;m<featureSet.features.length;m++)
        {
          
          if(featureSet.features[m].getAttribute("flyid")==idFly) continue;
          var rgeom=featureSet.features[m].geometry;

            
          inter = GEOMETRYENGINE.intersect(buff,rgeom);

          var owid=featureSet.features[m].getAttribute("ownerid");
          var edt=new Date(featureSet.features[m].getAttribute("edate")).toLocaleString();
          var sdt=new Date(featureSet.features[m].getAttribute("sdate")).toLocaleString();
             
          
          
          let Att = {
            start  : sdt.toString(),
            finish : edt.toString()
           // owner :  getUserName(owid)
           };
          
          if (inter instanceof Array) 
            {
              
              for (j=0;j<inter.length;j++)
              {
              gg= new GRAPHIC({
                   geometry: inter[j],
                   symbol: mySymbols.fillSymbolIntersect,
                   spatialReference : {wkid:4326}
                 });
                gg.attributes = Att;
                gg.popupTemplate= templatesPopup.templateBufferRoute;
                   
                 bufferLayer.add(gg);


               }    
              
           }
       else if (inter!=null)
       {  

          gg = new GRAPHIC({
              geometry: inter,
              symbol: mySymbols.fillSymbolIntersect,
              spatialReference : {wkid:4326}
                 });
                 
           gg.attributes = Att;
           gg.popupTemplate=templatesPopup.templateBufferRoute;          
           bufferLayer.add(gg);   
           
               

       }




        }
      
     // });
   // });
      }
      
     
    });


  }

  

  function checkElevation(delt) {
   wh="flyid = '"+idFly +"'"
  
   routeLayer.queryFeatures({
      where : wh ,
      returnGeometry: true,
      returnQueryGeometry: true,
      returnZ: true,
      returnM: true,
      outFields: ["*"]


    }).then(function(featureSet) {evalGeometry  = new POLYLINE({
       hasZ: true,
      hasM: true,
      paths: featureSet.features[0].geometry.paths,
      spatialReference: { wkid: 4326 }
      });
      view.map.ground.queryElevation(evalGeometry, { returnSampleInfo: true })
           // Successfully sampled all points
        .then(function(result) {
          
           geom4=result.geometry;
           pts1=geom4.paths;
           pts2=evalGeometry.paths;
          
      sost=0;
      outpts=[];
      el=[];
     
      for (i=1;i<pts1[0].length-1;i++)
       {
        
         flag=false;
      
      
        if (pts2[0][i][2]-pts1[0][i][2] <delt )
         {
          if(sost==0)
          {
            
            if(i>1)
            {
              x=(pts1[0][i][0]+pts1[0][i-1][0])/2;
              y=(pts1[0][i][1]+pts1[0][i-1][1])/2;
              z=(pts1[0][i][2]+pts1[0][i-1][2])/2;
              lM=(pts1[0][i][3]+pts1[0][i-1][3])/2;
              el.push([x,y,z,lM]);     
            }
            sost=1;
          }

           x=pts1[0][i][0];
           y=pts1[0][i][1];
           z=pts2[0][i][2];
           lM=pts1[0][i][3];
         
           el.push([x,y,z,lM]);
                                                
          if(i==pts1[0].length-2) flag=true;
          
        }
        else 
        {
         if (sost==1)
         {
              x=(pts1[0][i][0]+pts1[0][i-1][0])/2;
              y=(pts1[0][i][1]+pts1[0][i-1][1])/2;
              z=(pts2[0][i][2]+pts2[0][i-1][2])/2;
              lM=(pts1[0][i][3]+pts1[0][i-1][3])/2;
              el.push([x,y,z,lM]);
              flag=true;
         }
      
         sost=0;
         
        }
      
         if (flag)
         {
          
          outpts.push(el);
          inter=new POLYLINE({
                hasZ: true,
                hasM: true,
                paths: outpts,
                spatialReference: { wkid: 4326 }
                    })
           
          gg = new GRAPHIC({
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
      //alert(pts1[0].length)
      //alert(pts2[0].length)
      });
    });
      

  }


  function checkInterProc(buff,checkLayer) {
   
      //buff = projection.project(buffer, sr1,projection.getTransformation(buffer.spatialReference,sr1)); 
       
      distance = 0;
      units = "meters";
              
      checkLayer.queryFeatures({
       // where :"OBJECTID = 2",
        geometry: buff,
        // distance and units will be null if basic query selected
        distarence: distance,
        units: units,
        spatialRelationship: "intersects",
        returnGeometry: true,
        //returnQueryGeometry: true,
        outFields: ["*"],
      })
      .then(function(featureSet) {
        
        
        if(featureSet.features.length>0)
        {
        for (k=0;k<featureSet.features.length;k++)  
        {
        
        intRestGeometry= new POLYGON({
        hasZ: false,
        hasM: false,
        rings: featureSet.features[k].geometry.rings,
        spatialReference: { wkid: 4326 }
        });
        

        
        inter = GEOMETRYENGINE.intersect(buff,intRestGeometry);
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
                
                for (j=0;j<inter.length;j++)
                {
                gg= new GRAPHIC({
                     geometry: inter[j],
                     symbol: mySymbols.fillSymbolIntersect,
                     spatialReference: { wkid: 4326 }
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
                spatialReference : { wkid: 4326 }
                   });
                   
            gg.attributes =Attrs 
            gg.popupTemplate=templatesPopup.templateBuffer;      
             bufferLayer.add(gg);  
                  

         } 
        }              
        }
       

      });


    }
    function unappFlight() {
            
      //if (confirm("Вы уверены в отмене полета ?"))
     // {
      let gld=idFly;  
      let tp=typeFly
      if (tp=="2") 
             modLayerRec(gld,routeLayer,"flyid","status",5);
             modLayerRec(gld,flyZoneLayer,"flyid","status",5); 
      let dat ={
        "statusId": 5
          
            }
    
          updateRecordFlyghtTable(dat,gld);
          
      return;  
      
         
    
        }
        function appFlight() {
                
          
          let gld=idFly;  
          let tp=typeFly;
          if (tp=="2") 
                modLayerRec(gld,routeLayer,"flyid","status",4);
                modLayerRec(gld,flyZoneLayer,"flyid","status",4); 
          let dat ={
            "statusId": 4
          }
              
          
        
              updateRecordFlyghtTable(dat,gld);
              
          return;  
          
              }
              function resetFlight() {
            
      
                let gld=idFly;  
                let tp=typeFly;
                if (tp=="2") 
                      modLayerRec(gld,routeLayer,"flyid","status",3);
                      modLayerRec(gld,flyZoneLayer,"flyid","status",3); 
                let dat ={
                  "statusId": 3
                }
                    
                
              
                    updateRecordFlyghtTable(dat,gld);
                    
                return;  
                
                    }

    


function emulFlight()
        {
         // checkGeometry=null;
          
            const  query= new QUERY(); 
            query.where = "flyid = '"+idFly+"'"  ;// And numb >= 0 ";
            query.outSpatialReference = { wkid: 4326  };
            query.returnGeometry = true;
            query.returnZ= true,
            query.orderByFields = ["tdate","objectid"],
            query.outFields = [ "*" ];
            
    
            dronLayer.removeAll();  
            emptyArray(emulpts);
            
              query.returnM= true;
              query.orderByFields=["objectid"],
              routeLayer.queryFeatures(query).then(function(featureSet){
              
                if (featureSet.features.length>0){
                  timeSlider.values=[dt]
                  for(k=0;k<featureSet.features[0].geometry.paths[0].length;k++)
                  { 
                    let pt=new POINT({
                      x:featureSet.features[0].geometry.paths[0][k][0],
                      y:featureSet.features[0].geometry.paths[0][k][1],
                      z:featureSet.features[0].geometry.paths[0][k][2],
                      spatialReference :{wkid :4326}
                           });

                    emulpts.push([pt,featureSet.features[0].geometry.paths[0][k][3]*1000+dt.getTime()]);
                    }

                }
                setTimeSlider(sd,fd);
                timeSlider.play();
               });

   
        }
        
        function setTimeSlider(tm,fm)
        {
          
       
         let st0=new Date(tm); 
         let st1=new Date(tm);
         
          timeSlider.values=[st0];
          st2=new Date(fm);
          st2.setSeconds(st2.getSeconds()+10) 
         
          timeExtent = ({
          start: st1,
          end:  st2
        });
        let val= parseInt((st2.getTime()-st1.getTime())/250);
        if(val>5000) val=5000; 
        timeSlider.stops= {
            count: val 
          }
    
        timeSlider.fullTimeExtent=timeExtent;
       
        timeSlider.playRate=250;
        timeSlider.loop=true;
         
        }
        
