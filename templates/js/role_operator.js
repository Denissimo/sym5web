console.log('role_operator');
var tmzon;
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
 
            document
           .getElementById("check3dFlight")
           .addEventListener("click", checkFlight); 
           document
           .getElementById("appFlight")
           .addEventListener("click", appFlight); 
           document.getElementById("resetFlight3d")
           .addEventListener("click", resetFlight);
            document
            .getElementById("unappFlight")
            .addEventListener("click", unappFlight ); //событие отмены полета 
            document
           .getElementById("emulFlight")
           .addEventListener("click",emulFlight);
            
              
           getUserFly();
}
function checkFlight(){getCheckGeometry(idFly);}

function getUserFly()
 {
        
    




  
  var stats= ["Черновик","Шаблон","На утверждении","Подтверждена","Отклонена","Отменена","Выполняется"];
          
  const flighthtml0 ='<li class="uav-list-item"><div class="uav-item-header">\
  <span class="uav-item-status">';
  const flighthtml1 ='</span>\
  <button class="btn uav-btn-more" id="';
  const flighthtml1_1='">Подробнее</button>\
  </div>\
  <div class="uav-item-body">';
 // <span class="uav-item-row uav-item-reg">123123123123ABBB</span>\
 const flighthtml2='<span class="uav-item-row uav-item-flight"><span class="uav-item-desc">Наименование</span>';
 const flighthtml3 ='</span>\
  <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Старт</span>';
  const flighthtml3_2 ='</span>\
  <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Финиш</span>'; 
 const flighthtml4='</span>\
                   </div>\
                   <div class="uav-item-body" id="';
  const flighthtml4_2='"></div>';
  const flighthtml12_2='<input type="hidden" id="';
  const flighthtml12_3='" value="';
  const flighthtml12_4='"></input>';
  const flighthtml13='</li>';
  
// Нижняя граница периода полетов  
      var stt= new Date();
                 
      var stDt=convertTime(stt);

      let d=new Date();
      let d2=new Date();
      d2.setDate(d2.getDate() + 30);
      let m1=String(d.getMonth() + 1).padStart(2, '0');
      let day1 = String(d.getDate()).padStart(2, '0');
      let m2=String(d2.getMonth() + 1).padStart(2, '0');
      let day2 = String(d2.getDate()).padStart(2, '0');
      
      stara=(d.getFullYear()).toString()+m1+day1+"000000";
      enda=(d2.getFullYear()).toString()+m2+day2+"000000"; 

      var     lst="";
      apiIntervalFlights= apiData(apiUrl, "/application/interval/"+stara+"/"+enda, token);
      
      apiIntervalFlights.then(function (response) {
           console.log(response);
           makeListFlyghtPanel(response); // формирование панели полетов
          });


      
       
// Выбор задействованных маршрутных шаблонов и формирование массива имен 
       
        
//Формирование панели полета
           
              function makeListFlyghtPanel(response)
              {
               emptyArray(glb);                
               console.log(response.applications.length);
               for (let i=0;i<response.applications.length;i++) {   
                 
                if(response.applications[i].application.start.date >= stDt)
                  if(response.applications[i].status.id >2) 
                  
                    panFlyght(response.applications[i]);
                 }
                 document.getElementById("uav-realtimelist").innerHTML=lst;
                 addFlyEvent();
                 
 
              }
              
              
              function  panFlyght(flyght)
              {
              
              
              var  nm=flyght.track.name;
                                      
              var glob= flyght.id;       // glob - GUID полета
              var kod=  flyght.status.id;   
             // if (kod==3 || kod==4)
              glb.push([glob,flyght.track.type.toString()]) ;   // glb -  массив согласованных или на согласовании

             // var obj=flyght.application.externalId;//ftfSet.features[i].getAttribute("objectid");
              var sdat=flyght.application.start.date; //ftfSet.features[i].getAttribute("startdate");
              var  fdat=flyght.application.finish.date;//ftfSet.features[i].getAttribute("finishdate");
              
              tmzon=flyght.application.start.timezone_type; 

              lst=lst+flighthtml0;
              lst=lst+stats[kod-1];
              lst=lst+flighthtml1;
              lst=lst+glob;
              lst=lst+flighthtml1_1;
              lst=lst+flighthtml2;
              lst=lst+nm;
              lst=lst+flighthtml3;
              lst=lst+sdat;
              lst=lst+flighthtml3_2;
              lst=lst+fdat;
              lst=lst+flighthtml4;
              lst=lst+"R"+glob;
              lst=lst+flighthtml4_2;
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
               lst=lst+flighthtml12_2;
               lst=lst+"T"+glob;
               lst=lstlst=lst+flighthtml12_3;
               lst=lst+kod; 
               lst=lst+flighthtml12_4;
               
               lst=lst+flighthtml13;
            }
                 /* 
                 document.getElementById("flist").innerHTML=lst; 
                   
                         
                 addFlyEvent()    подключение обработчиков событий 
                   */        
                  //});
             
                //  });

    }
  
          
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
         bufferLayer.removeAll();
        var gld=event.target.id;
    
        var allApplication = apiData(
          apiUrl,
          '/application/'+gld,
          token
      );

      allApplication.then(function (response) {
        console.log(response);
        dt=response.application.start.date;
        dt=new Date(dt);
        timeSlider.stop();
        initTimeSlider();
        timeSlider.values=[dt];
      
        typeFly=response.track.type;
        $.cookie("typeRoute",typeFly);
        let oldFly=idFly;
        idFly=response.id;
        idRoute=response.track.id;
        tmzon=response.application.start.timezone_type;
        sd=response.application.start.date;
        fd=response.application.finish.date;
      
        $.cookie("idRoute",idRoute);
        let el= document.getElementById("F"+oldFly);
        let el2= document.getElementById("F"+idFly);
        let reg=false;
        if(el!=null) 
        {
          detalFlyght(null,false,-1,response,oldFly);
        
        }
        if(el2!=null)
      {
        idFly="";    
        queryFlight(null,"");
        reg=true;
      }
      else
      {
      
            detalFlyght(flyZoneLayer,true,typeFly,response,response.id)
            queryFlight(idFly);
         
      }  
            



                
        
    });
  
    /*
    function detalFlyght (detalLayer,reg,tp,gld) { return }
        
         let kod=document.getElementById("T"+gld).value;
         
        if(kod==7)
           document.getElementById("unresetFlight").disabled=true;
        else 
         document.getElementById("resetFlight").disabled=false;
        if(kod==6)
        {
          document.getElementById("cancelFlight").disabled=true;
        }
        else
        { 
         
         document.getElementById("cancelFlight").disabled=false;
        }
          */    
            
        function detalFlyght (detalLayer,reg,tp,response,fid) { 

          const flighthtml3_1 ='<span class="uav-item-row uav-item-flight" id="'
          
          const flighthtml3_2='"><span class="uav-item-desc">Рег.номер БВС</span>';
          
          
          const flighthtml3_3='</span>'; 
      
          let lst="";
          id="R"+fid;
          if (reg)
           {
             
             lst=flighthtml3_1+"F"+response.id+flighthtml3_2+response.user.user.firstname+flighthtml3_3;
             
           }
          console.log(lst); 
          document.getElementById(id).innerHTML=lst;
          
            return ;
            } 
         
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
       
       // featureTableZone.selectRows(featureSet.features);
        
      //  featureTableZone.refresh(); 
      // getRouteRecord(rd,getRouteName);
       //getRouteName(rd);
          
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

   function buildDefinitionBeforQueryPunkts(){

        
      var st=timeSlider.timeExtent.start.getTime();
      
     
      stt= new Date(st);
      
      stt.setTime(stt.getTime()-100+3600000*tmzon);
      startDt=convertTime(stt);
        
      
       
       var defQuery ="tdate < timestamp'"+ startDt+"' And flyid = '"+idFly+ "'";
       
       //var defQuery ="relationships/0/status = 4";

       return defQuery;
     }
     function buttonEnabled(reg)
     {

      
       document.getElementById("check3dFlight").disabled=reg;
       
       document.getElementById("appFlight").disabled=reg;
       document.getElementById("unappFlight").disabled=reg;
       document.getElementById("resetFlight3d").disabled=reg;
      
       document.getElementById("emulFlight").disabled=reg;
       
      
           
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
            /* 
            routeLayerTen.queryFeatures(query).then(function(featureSet){
             paths=[] 
             pts=[] 
             if (featureSet.features.length>0){
             
             for(k=1;k<featureSet.features[0].geometry.paths[0].length-1;k++) 
                pts.push(featureSet.features[0].geometry.paths[0][k]);
            

            paths.push(pts)            

            var checkSdate=featureSet.features[0].getAttribute("sdate");
  
            //alert(checkSdate);
            
            checkGeometry  = new Polyline({
             hasZ: true,
            hasM: true,
          //  paths: featureSet.features[0].geometry.paths,
           paths: paths,
            spatialReference: { wkid: 4326 }
            });
            checkInd=0;
            
          }   
            
            //featureSet.features[0].geometry;
            */
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

       



         //checkInterRoute(buffer,buffer2,sdt,fdt,routeLayer);
         
         
         console.log("Checked")  
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
              console.log("Checked2")     
    

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
          console.log(inter); 
          if (inter instanceof Array) 
            {
              
              for (j=0;j<inter.length;j++)
              {
              gg= new GRAPHIC({
                   geometry: inter[j],
                   symbol: selectSymbol.fillSymbolIntersect,
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
              symbol: selectSymbol.fillSymbolIntersect,
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
          // Print result of each sampled point to the console
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
              symbol: selectSymbol.lineSymbolIntersect,
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
                     symbol: selectSymbol.fillSymbolIntersect,
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
                symbol: selectSymbol.fillSymbolIntersect,
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
             modLayerRec(gld,routeLayer,"flyid","status",6);
             modLayerRec(gld,flyZoneLayer,"flyid","status",6); 
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
                modLayerRec(gld,routeLayer,"flyid","status",3);
                modLayerRec(gld,flyZoneLayer,"flyid","status",3); 
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
            
        function modLayerRec(gld,modLayer,atrName,atrNameMod,val)
      {
    
        modLayer.queryFeatures({
          where : atrName+" = '"+gld+"'",
          returnGeometry: true,
          returnZ : true,
          returnM : true,
            outFields: ["*"],
          }).then(function(ftfSet) {
             
             ftfSet.features[0].setAttribute(atrNameMod,val);
             param2={ updateFeatures: ftfSet.features};
             updateLayer(modLayer,param2);
    
          })
    
    
      } 
      function updateRecordFlyghtTable(dat,flid) {
      
        apiModFlight= apiData(apiUrl, "/application/"+flid, token, 'PUT', dat);
  
        apiModFlight.then(function (response) {
             console.log(response);
             getUserFly(); // формирование панели полетов
      
}); 
 
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


function emulFlight()
        {
         // checkGeometry=null;
          
            const  query= new QUERY(); 
            query.where = "flyid = '"+idFly+"'"  ;// And numb >= 0 ";
            query.outSpatialReference = { wkid: 4326  };
            query.returnGeometry = true;
            query.returnZ= true,
            query.orderByFields = ["tdate"],
            query.outFields = [ "*" ];
            
            console.log("++++") 
              
            emptyArray(emulpts);
            
            query.returnM =false;
            punktsLayer.queryFeatures(query).then(function(featureSet){
              console.log(featureSet.features.length+"  !!!!"); 
              if (featureSet.features.length>0){
                timeSlider.values=[dt]
                for(k=0;k<featureSet.features.length;k++) 
                  emulpts.push([featureSet.features[k].geometry,featureSet.features[k].getAttribute("tdate")]);
                 
           
            //changeExtent2(checkGeometryZ.extent);
            
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
        let val= parseInt((st2.getTime()-st1.getTime())/1000);
        alert(val);
        timeSlider.stops= {
            count: 100 
          }
        
        timeSlider.fullTimeExtent=timeExtent;
        timeSlider.playRate=1000;
        timeSlider.loop=true;
         
        }

