var flightsBoard;
var glids=[];
var oldGlids=[];
var idRealDet;



function addReal(scene,isOwner){
    let data =dataForSend();

    emptyArray(glids);  
    //if (isOwner)
   //  linSymbol =mySymbols.lineSymbolPigg;
   // else   
   //  linSymbol =mySymbols.lineSymbolRoute;
    var stt= new Date();
     stt.setTime(stt.getTime()-800000000);            
    var stDt=convertTime(stt);
    let d=new Date();
    d.setDate(d.getDate() - 1);
    let d2=new Date();
    d2.setDate(d2.getDate() + 1);
    let m1=String(d.getMonth() + 1).padStart(2, '0');
    let day1 = String(d.getDate()).padStart(2, '0');
    let m2=String(d2.getMonth() + 1).padStart(2, '0');
    let day2 = String(d2.getDate()).padStart(2, '0');
  
    stara=(d.getFullYear()).toString()+m1+day1+"000000";
    enda=(d2.getFullYear()).toString()+m2+day2+"000000"; 
    //console.log(stara);
   // console.log(enda);
     idRealDet  ="";

  apiIntervalFlights= apiData(apiUrl, "/application/interval/"+stara+"/"+enda, token);
  
  apiIntervalFlights.then(function (response) {
       
    flightsBoard=[];
    
    for (let i=0;i<response.applications.length;i++) {   
                 
      if(response.applications[i].application.start.date >= stDt)
      {
        
        if(response.applications[i].status.id ==4 ||response.applications[i].status.id ==7)
         {
           
          flightsBoard.push([response.applications[i]]);//[response.applications[i].id,response.applications[i].aircraft.id,response.applications[i].application.start,response.applications[i].application.finish]);
          addFlyZone(response.applications[i].id,flightsBoard.length-1);
         } 
        
      }
    
    }
   
  });




    const realLabelClass = new LABELCLASS({
        labelExpressionInfo: {
          expression:
            //"$feature.boardNumber+TextFormatting.NewLine +"
            "'Скорость :'+ $feature.Speed+TextFormatting.NewLine +'Высота :'+ $feature.Altitude+TextFormatting.NewLine +'Курс :'+ $feature.Heading",
        },
         symbol: mySymbols.labelTextSymbol3D 
        
      });
      const realLabelClass2d = new LABELCLASS ({
        labelExpressionInfo: {
          expression:
            //"$feature.boardNumber+TextFormatting.NewLine +"
            "'Скорость :'+ $feature.Speed+TextFormatting.NewLine +'Высота :'+ $feature.Altitude+TextFormatting.NewLine +'Курс :'+ $feature.Heading",
             },
             symbol:mySymbols.labelTextSymbol
        
      });
     

     let servicePath =webPaths.servicePath;
     //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop2/FeatureServer/";
     // servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
    
     let sourceFlyghtZone = servicePath + "5";  
    
    if (isOwner)  
    {
      //servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
      sourceFlyghtZone = servicePath + "5";

      realAllLayer =new FEATURELAYER({
      //  url:"https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/AllFlightReal/FeatureServer/0",
        url: webPaths.urlRealAll,         //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/realFlights/FeatureServer/0",
        popupTemplate: templatesPopup.templateReal,
       // labelingInfo: [realLabelClass2d],

        renderer: myRenderers.realMarkerRenderer
      }); 
    realLayer= new FEATURELAYER({
     //  url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",
       url:  webPaths.urlRealLast,  //   "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/LastBortEvent/FeatureServer/0",
       popupTemplate: templatesPopup.templateReal,
       title: "Текущее местоположение",
       //add.spatialReference : {wkid :4326},
       labelingInfo: [realLabelClass2d]
        //350000}//,
       });
       
      }
      else
      {
        realAllLayer =new FEATURELAYER({
          //url:"https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/AllFlightReal/FeatureServer/0",
          url: webPaths.urlRealAll,//   "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/realFlights/FeatureServer/0",
          //labelingInfo: [realLabelClass],
          popupTemplate: templatesPopup.templateReal,
          title: "Выполняющиеся полеты",
          elevationInfo: {
            mode: "relative-to-ground",   
             },
          renderer:myRenderers.realMarkerRenderer
        });
        realLayer= new FEATURELAYER({
           //url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",
           url:  webPaths.urlRealLast,// "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/LastBortEvent/FeatureServer/0",
           popupTemplate: templatesPopup.templateReal,
           title: "Текущее местоположение",
           labelingInfo: [realLabelClass],
           elevationInfo: {
           mode: "relative-to-ground",   
            } //350000}//,
           });
        //   scene.layers.add(realLayer);
          }

   scene.layers.add(realAllLayer);  
   realAllLayer.definitionExpression=buildDefinitionQueryReal();      
   scene.layers.add(realLayer);
   realLayer.definitionExpression=buildDefinitionQueryReal(true);
   flyZoneLayer = new FEATURELAYER({
    title: "Зона текущего полета",  
    url: sourceFlyghtZone,
    outFields: ["*"],
    renderer: myRenderers.unicumRendererZone,
    
    definitionExpression:"objectid < 0",
    //popupTemplate :templatesPopup.templateZoneFly,
    elevationInfo: {
      mode: "on-the-ground",
    },
    hasZ:true,
    returnZ: true
      });
      flyZoneLayer.definitionExpression="objectid <0" ;
      bufferLayer.title="Текущие полеты";
      
  
    
  
}  



function refreshRealLayer(isOwner)
{  var lays=[];
  
  
  realPath(isOwner);
 // console.log(glids.length+"   !!");
  for (var i=0;i<glids.length;i++)
  {

    
      if(glids[i][1]!= null)
      {
      var flag=false;  
      for(let j=0;j<oldGlids.length;j++)
      {

       if(oldGlids[j][1]==glids[i][1]&&oldGlids[j].length>2)
       if (document.getElementById("S"+glids[i][1])!=null)
        {
             document.getElementById("S"+glids[i][1]).innerText=oldGlids[j][2];
             flag=true; break;
        }
      } 
      if(flag) 
          continue;   
      //console.log("!!");    
      apiAircraft= apiData(apiUrl, "/aircraft/"+glids[i][1], token);
      apiAircraft.then(function (response) {
       
        if (document.getElementById("S"+response.id)!=null)
        {
        document.getElementById("S"+response.id).innerText=response.aircraft.serialNumber;
        
        }
        
        
      });
    }
  }
  /* getLayersByTitle(FeatureLayer,scene.allLayers,[tit] ,lays);
   
   let realLay=lays[0];
   
   realLay.definitionExpression=buildDefinitionQueryReal(true);
   makeRealFlyght(realLay); */
   
   realLayer.definitionExpression=buildDefinitionQueryReal(true);
   makeRealFlyght(realLayer); 
   return;

   let templateReal=realLay.popupTemplate;
   let labInfo=realLay.labelingInfo[0]; 
 
   let url=realLay.url;
   
   let title=realLay.title;
   var newRealLayer;
   if (isOwner)  
    {
      newRealLayer=new FEATURELAYER({
      url:url,
      popupTemplate:templateReal,
      title : title,
      labelingInfo:[labInfo],
      //spatialReference : {wkid :4326},
      useTimeView : false 

   })}
   else
   {
    
    newRealLayer=new FEATURELAYER({
    url:url,
    popupTemplate:templateReal,
    title : title,
    labelingInfo:[labInfo],
    elevationInfo: {
      mode: "relative-to-ground",   
       }

 })}
   scene.remove(realLay);
   scene.layers.add(newRealLayer);
   newRealLayer.definitionExpression=buildDefinitionQueryReal(true);
   makeRealFlyght(newRealLayer); 
   scene.layers.reorder(realAllLayer, scene.layers.length);
   
}
function makeRealFlyght(realLayer)
       {
        let whh=buildDefinitionQueryReal(true);
        console.log(whh+" ???");
        realLayer.queryFeatures({
          where : whh,
          
          returnGeometry: true,
          outFields: ["serial","ownerid","globalid","bplaid","CreateTime","EndTime"],
        })
        .then(function(featureSet) {
         console.log(featureSet.features.length);   
          makeListRealFlyght(featureSet.features);

         });
        
          
       }

function makeListRealFlyght(feats)
         {
            
          var lst="";
            emptyArray(oldGlids);

           copyArray(glids,oldGlids); 
           emptyArray(glids);
           for(let i=0;i<feats.length;i++)
             {

               let glid=feats[i].getAttribute("globalid");
               let nid=feats[i].getAttribute("bplaid");
               glids.push([glid,nid]);
               let elLst=cardHtml.panRealFlyght(glid,nid,oldGlids);
               lst=lst+elLst;
             
          }
          document.getElementById("uav-realtimelist").innerHTML=lst;
          addFlyRealEvent(glids);
          
          
     
        }
        
        function addFlyRealEvent(glids) {
          var i=0;
          for ( i=0;i<glids.length;i++)
          {
             document
             .getElementById("C"+glids[i][0])
             .addEventListener("click", eventFlyRealSend);
             document
             .getElementById("T"+glids[i][0])
             .addEventListener("click", eventFlyRealSend);
             document
             .getElementById("L"+glids[i][0])
             .addEventListener("click", eventFlyRealSend);
             document
             .getElementById("V"+glids[i][0])
             .addEventListener("click", eventFlyRealSend);
             document
             .getElementById(glids[i][0])
             .addEventListener("click", eventDetailFlyReal);

             if(glids[i][1]!=null)
             { 
             
               apiAircraft= apiData(apiUrl, "/aircraft/"+glids[i][1], token);
               apiAircraft.then(function (response) {
                try{  
                  
                document.getElementById("S"+response.id).innerText=response.aircraft.serialNumber;
                for(let j=0;j<glids.length;j++)  
                if(glids[j].length==2 &&glids[j][1]==response.id) glids[j].push(response.aircraft.serialNumber);
                }
                catch{}
              });}
              
          }

          if(idRealDet!="")
          {
            
           let nid="";
           for(let i=0;i<glids.length;i++)
               if(glids[i][0]==idRealDet) 
               nid=glids[i][1];   
               if(nid!="") 
               {   let tm=(new Date()).getTime();
                   let fl=getFlyhtByBoard(nid,tm);
                   if (fl!=null){
                   let eld= document.getElementById("B"+idRealDet);   
                   let eldet= cardHtml.detalRealFlyght(idRealDet,fl[0],true);
                   eld.innerHTML=eldet;
                   }
               }
            }
         }
         function eventDetailFlyReal(event)
        {
          let glid= event.target.id;
           extentToReal(glid);
          if(idRealDet!="" && idRealDet!=glid)
          {
            let eld= document.getElementById("B"+idRealDet);
            eld.innerHTML="";
          }
                // detalRealFlyght(idRealDet,null,false); 
          let nid="";
          for(let i=0;i<glids.length;i++)
               if(glids[i][0]==glid) 
                      nid=glids[i][1];   
          let el= document.getElementById("D"+glid);
          if(nid!="") 
          {   let tm=(new Date()).getTime();
              let fl=getFlyhtByBoard(nid,tm);
              if (fl!=null)
                  {
                    let eld= document.getElementById("B"+glid); 
                    let eldet=cardHtml.detalRealFlyght(glid,fl[0],(el==null));
                    eld.innerHTML=eldet;
                  } 
              if(el!=null) idRealDet="";     
          }
         
      }
      function extentToReal(glid)
      {
          realLayer.queryFeatures({
             where : "globalid = '"+glid+"'",
             returnGeometry: true,
             outFields: ["serial","ownerid","globalid","bplaid"],
        })
        .then(function(featureSet) {
               
          if (featureSet.features.length>0)
          {
              
              let geom1=featureSet.features[0].geometry;
              if(geom1!=null)
              {
              let geom=PROJECTION.project(geom1, {wkid :view.extent.spatialReference.wkid},PROJECTION.getTransformation({wkid :4326},{wkid :view.extent.spatialReference.wkid})); 
              if(geom!=null)
                 view.extent=view.extent.centerAt(geom);
              }
          }
          
         });
        
          
       

      }

      function detalRealFlyght(glid,fl,reg)
      {  lst="";
        
          let el= document.getElementById("B"+glid);
          const flightrealhtml0_1_3='<span class="uav-item-row uav-item-flight"><span class="uav-item-desc">Пользователь: ';  
          const flightrealhtml0_2 ='</span>';
          const flightrealhtml0_3 ='</span> <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Время старта</span>';
          const flightrealhtml0_3_1='</span>\
          <span class="uav-item-row uav-item-date-end"><span class="uav-item-desc">Время финиша</span>';
          const flightrealhtml0_3_2='</span>';
          const flightrealhtml0_4='<input type="hidden" id="';
          const flightrealhtml0_5='"></input>';
       if (reg)
       {
          idRealDet=glid; 
          lst=lst+flightrealhtml0_1_3;
          lst=lst+fl.user.user.username;
          lst=lst+flightrealhtml0_2;
          lst=lst+flightrealhtml0_3;
          lst=lst+fl.application.start.date;
          lst=lst+flightrealhtml0_3_1;
          lst=lst+fl.application.finish.date;
          lst=lst+flightrealhtml0_3_2;
          lst=lst+flightrealhtml0_4;
          lst=lst+"D"+glid;
          lst=lst+flightrealhtml0_5;
       }   
       el.innerHTML=lst;

      }

         function eventFlyRealSend(event)
        {

           //alert(event.target.id);
           let ev=event.target.id;
           let pref=ev.substring(0,1);
           let data=""; 
           switch(pref) {
            case 'C':  // if (x === 'value1')
            data =dataForSend(20); //""
              break;
            case 'L' :
              data =dataForSend(21); //""
              break;
            case 'V' : 
            data =dataForSend(19);  //time 120
            break;
            case 'T' :
              data =dataForSend(18); //turn 10
              break;

           }

           // data =dataForSend(400);
            alert(data);
           
           let params = { DATA : data  };
          
           var gpUrl =webPaths.urlSendTracker,
           // "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/SendTracker/GPServer/SendTracker";
           geop = new GEOPROCESSOR({
           url: gpUrl
           });
                   console.log(geop.url+" $$$");  
                         

                  geop.submitJob(params).then(function (jobInfo) {
                  var options = { statusCallback: function (jobInfo1) { progTest(jobInfo1); } };
                  geop.waitForJobCompletion(jobInfo.jobId, options).then(function (jobInfo2 ) {  console.log(jobInfo2);                 
                    getResultData(jobInfo2);
                  });
                 });
                 function progTest(value) {
                   console.log(value.jobStatus);
                 }
                 function getResultData(result2) {
                   
                  geop.getResultData(result2.jobId,"Result").then(function (result) { console.log("!!! G"+result.value); });
                  } 



        }
         
         function dataForSend(com)
      {

        let dt=new Float32Array([0,0,0,0,0,0,0]);
        let  bths="";
        for (let i=0;i<dt.length;i++)
        {
        let hex = ToHex(dt[i]);
            for (let j=0;j<8;j+=2)
                {
                  bths=bths+hex.substring(j,j+2)+" ";
                } 
        
        }
        
     
        let bytes=getInt16Bytes(176);
        let bth2=bytesToHexString(bytes);
        let bth2s=(bth2.toString()).replaceAll(',', ' ');
        bths=bths+bth2s+" 00 00 00 ";

        let trId=1;
        bytes=getInt32Bytes(trId);
        let bth3=bytesToHexString(bytes);
        let trIds=bth3[0];

        bytes=getInt32Bytes(33);
        let bth4=bytesToHexString(bytes);
        let data="fe "+bth4[0]+" "+trIds+" 00 00 4c "+bths+"cc cc";

        //dt=new Float32Array([220,0,0,0,0,0,0]);
        switch(com){
          case 20: case 21 :
            dt=new Float32Array([0,0,0,0,0,0,0]);
            break;
            case 18:
              dt=new Float32Array([20,0,0,0,0,0,0]);
             break;
            case 19:
               dt=new Float32Array([220,0,0,0,0,0,0]);
                break;
           case 400:    
           dt=new Float32Array([0,0,0,0,0,0,0]); 
        }

        //dt=new Float32Array([0,0,0,0,0,0,0]);
        bths="";
        for (let i=0;i<dt.length;i++)
        {
           let hex = ToHex(dt[i]);
            for (let j=0;j<8;j+=2)
                {
                  bths=bths+hex.substring(j,j+2)+" ";
                } 
        }
        bytes=getInt16Bytes(com);
        bth2=bytesToHexString(bytes);
        bth2s=(bth2.toString()).replaceAll(',', ' ');
        bths=bths+bth2s+" 00 00 00 ";
        data=data+" fe "+bth4[0]+" "+trIds+" 00 00 4c "+bths+"cc cc"
        
        return data

         function bytesToHexString(bytes){
          bth=[];
          for ( var index = 0; index < bytes.length; index ++ ) {
            if (bytes[index] < 16) {
              bth.push( '0' + bytes[index].toString(16));
            } else bth.push( bytes[index].toString(16));
    
          }
            return bth;
          } 

          function ToHex(d) {

            const getHex = i => ('00' + i.toString(16)).slice(-2);
            var view = new DataView(new ArrayBuffer(4)),
            result;
            view.setFloat32(0, d);
             result= Array
            .apply(null, { length: 4 })
            .map((_, i) => getHex(view.getUint8(i)))
            .join('');
            return result;
            }
        
        function getInt32Bytes(long ){
          var byteArray = [0, 0, 0, 0];
          for ( var index = 0; index < byteArray.length; index ++ ) {
              var byte = long & 0xff;
              byteArray [ index ] = byte;
              long = (long - byte) / 256 ;
          }
          return byteArray;
          }

      function getInt16Bytes(long ){
        var byteArray = [0, 0];
        for ( var index = 0; index < byteArray.length; index ++ ) {
            var byte = long & 0xff;
            byteArray [ index ] = byte;
            long = (long - byte) / 256 ;
        }
        return byteArray;
         }


      }                          

    function buildDefinitionQueryArchiv(st,et)
      {
      let stt= new Date(st); 
      let ett= new Date(et);
      let startDt=convertTime(stt);//st;
      let endDt=convertTime(ett);//et
    
      let defQuery ="CreateTime >= timestamp'"+ startDt+"' And CreateTime <= timestamp'"+endDt+ "'";
      console.log(defQuery+" !!!!")
      return defQuery;
      }
     function buildDefinitionQueryReal(reg=false)/*timeSlider)*/ {   // показывать точки полетов в суточном интервале от установленной даты
    
      let et=timeSlider.timeExtent.end.getTime();
      let st=timeSlider.timeExtent.start.getTime();
      let ett= new Date(); ett.setTime(ett.getTime()+10000)
      let stt= new Date(st); 
         stt.setTime(ett.getTime()-1800000)
      if(reg)
          stt.setTime(ett.getTime()-360000)
      
      let startDt=convertTime(stt);//st;
      let endDt=convertTime(ett);//et
    
      //let defQuery ="CreateTime >= timestamp'"+ startDt+"'";
      let defQuery ="CreateTime >= timestamp'"+ startDt+"' And EndTime >= timestamp'"+endDt+ "'";
    
     return defQuery;
   }
   



     function buildDefinitionQueryPlan(paths)/*timeSlider)*/ {
     let defExp ="objectid < 0";
     let exx=[];
    // exx.push(defExp); 
     if (paths==null) return defExp;
     let ss=defExp;
     for (let i=0;i<paths.length;i++)
       exx.push("flyid = '"+paths[i][1]+"'");
      //ss=ss+" Or flyid = '"+paths[i][1]+"'";
     defExp=exx.join(' Or '); 
     defExp="flyid = "+paths[i][1]+"'";
     return defExp;
     }
     function realPath(isOwner,str=null,fns=null)
     {
       wh=buildDefinitionQueryReal();
       
       if(str!=null)

         wh=buildDefinitionQueryArchiv(str,fns)
       console.log(wh+" !!!!");
       realAllLayer.definitionExpression=wh;
       realAllLayer.queryFeatures({ where : wh,
       returnGeometry: true,
       returnZ : true,
       orderByFields : ["bplaid","objectid"],
       outFields: ["bplaid","serial","objectid","Altitude","CreateTime"]}).then(function(featureSet) {
    
        // console.log(featureSet.features.length+"  ????")    
         makeGeometryRealFlyght(isOwner,featureSet.features);
        ;
         
        });;
     
     
     
     
     }
     
     function makeGeometryRealFlyght(isOwner,feats)
     {
       let linSymbol=mySymbols.lineSymbolRoute;
       if (isOwner) linsymbol=   mySymbols.lineSymbolPigg;
       bufferLayer.graphics.removeAll();
       //realLayer.graphics.removeAll();  
       if(feats.length==null) return;
       let name="";
       let zon=null;  
       let paths=[];
       let names=[];
       let dt0;
       let pth=[];
       let bpla="";
       
       for (let i=0;i<feats.length;i++)
       {
         if (name=="")
         {
           name="unknow"; 
           let el=getFlyhtByBoard(feats[i].getAttribute("bplaid"),feats[i].getAttribute("CreateTime"));
           bpla=feats[i].getAttribute("bplaid");
           if(el!=null)
            {
             name=el[0].id;
             zon=el[1];
            }
           else 
             zon=null;
           z=feats[i].getAttribute("Altitude");
           dt=0;
           dt0=feats[i].getAttribute("CreateTime")/1000;            
           pth.push([feats[i].geometry.x,feats[i].geometry.y,feats[i].geometry.z,dt]);
           paths.push([pth,name]);
           
         }
         else
          { 
            let nameNew="unknow";
            let bplanew=feats[i].getAttribute("bplaid");
            let el=getFlyhtByBoard(feats[i].getAttribute("bplaid"),feats[i].getAttribute("CreateTime"));
            if(el!=null) nameNew=el[0].id;
            if (name==nameNew && bpla==bplanew)
              {
               z=feats[i].getAttribute("Altitude");  
               dt=feats[i].getAttribute("CreateTime")/1000 -dt0;
               pth.push([feats[i].geometry.x,feats[i].geometry.y,feats[i].geometry.z,dt]);
                 
              }
           else
            { 
             //let el=getFlyhtByBoard(feats[i].getAttribute("BoardNumber"),feats[i].getAttribute("CreateTime"));
               name=nameNew;
               bpla=bplanew;
               zon=null;
               if (el!=null) 
                  zon=el[1];
             
                paths.push([pth,name]);
                let lin=new POLYLINE({
                     paths :[pth],
                     hasZ:true,
                     hasM :true,
                     spatialReference :{wkid:4326}
                    });
                let gg= new GRAPHIC({
                   geometry : lin,
                   symbol : linSymbol
                  });
                bufferLayer.add(gg);
                if (zon!=null)
                  bufferLayer.add(zon);
                
         
                  emptyArray(pth);
      
                dt=0;
                dt0=feats[i].getAttribute("CreateTime")/1000;            
                pth.push([feats[i].geometry.x,feats[i].geometry.y,feats[i].geometry.z,dt]);
                paths.push([pth,name]);

             }

        }
       }
     
        lin=new POLYLINE({
        paths :[pth],
        hasZ:true,
        hasM :true,
        spatialReference :{wkid:4326}
      });
       gg= new GRAPHIC({
        geometry : lin,
        symbol : linSymbol
       });
           bufferLayer.add(gg);
           if (zon!=null)
            bufferLayer.add(zon);
          
           emptyArray(pth);

     
     
     
     }
     
     function getFlyhtByBoard(bid,btime){
         
           try{
              for (let i=0;i<flightsBoard.length;i++)
              { 
                tmz=flightsBoard[i][0].application.start.timezone_type;
                tm1=flightsBoard[i][0].application.start.date;
                tm2=flightsBoard[i][0].application.finish.date;
     
                let tm=convertTime(new Date(btime+3600000*tmz));
                if (bid==flightsBoard[i][0].aircraft.id && tm1<=tm && tm2>=tm )
                 {
     
                   return flightsBoard[i];
                  }
              }
            }
            catch{return null;}
              return null;
     
     }
     function addFlyZone(fid,ind)
     {
     //console.log("Zone "+fid); 
      flyZoneLayer.queryFeatures({ where : "flyid = '"+fid+"'",
        returnGeometry: true,
        returnZ : true,
        outFields: ["*"]}).then(function(featureSet) {
        //   console.log("Zone "+featureSet.features.length);
          if (featureSet.features.length>0){ 
          let gr =new GRAPHIC({
                geometry: featureSet.features[0].geometry,
                attributes :featureSet.features[0].attributes,
                spatialReference :{wkid:4326},
                symbol:mySymbols.fillSymbolGreen,
                popupTemplate : templatesPopup.templateZoneFly
          }); 
          
          flightsBoard[ind].push(gr);

          }
         });

    
  




     }