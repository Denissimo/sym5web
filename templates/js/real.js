var flightsBoard;
var glids;
var idRealDet;
function addReal(FeatureLayer,LabelClass,Geoprocessor,scene,isOwner){

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
    console.log(stara);
    console.log(enda);
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




    const realLabelClass = new LabelClass({
        labelExpressionInfo: {
          expression:
            //"$feature.boardNumber+TextFormatting.NewLine +"
            "'Скорость :'+ $feature.Speed+TextFormatting.NewLine +'Высота :'+ $feature.Altitude+TextFormatting.NewLine +'Курс :'+ $feature.Heading",
        },
        symbol: {
          type: "label-3d", // autocasts as new LabelSymbol3D()
          symbolLayers: [
            {
              type: "text", // autocasts as new TextSymbol3DLayer()
              material: { color: [255, 0, 0] },
              size: 12, // points
            },
          ],
        },
      });
      const realLabelClass2d = new LabelClass({
        labelExpressionInfo: {
          expression:
            //"$feature.boardNumber+TextFormatting.NewLine +"
            "'Скорость :'+ $feature.Speed+TextFormatting.NewLine +'Высота :'+ $feature.Altitude+TextFormatting.NewLine +'Курс :'+ $feature.Heading",
             },
        symbol: {
                    
              type: "text", // autocasts as new TextSymbol3DLayer()
              color: [255, 0, 0] ,
              size: 12 // points
            
        },
      });
      var templateReal = {
        // autocasts as new PopupTemplate()
        title: "{BoardNumber}",
        content: [
          {
            // It is also possible to set the fieldInfos outside of the content
            // directly in the popupTemplate. If no fieldInfos is specifically set
            // in the content, it defaults to whatever may be set within the popupTemplate.
            type: "fields",
            fieldInfos: [
              {
                fieldName: "altitude",
                label: "Высота",
                format: {
                  places: 0,
                  digitSeparator: true,
                },
              },
              {
                fieldName: "speed",
                label: "Скорость",
                format: {
                  places: 0,
                  digitSeparator: true,
                },
              },
              {
                fieldName: "heading",
                label: "Курс",
                format: {
                  places: 0,
                  digitSeparator: true,
                },
              },
            ],
          },
        ],
      };
     var gpUrl =
      "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/SendTracker/GPServer/SendTracker";
     GEOPROCESSOR = new Geoprocessor({
     url: gpUrl
     });      
     
     
     let servicePath =
     "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop2/FeatureServer/";
      servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
    
     let sourceFlyghtZone = servicePath + "5";  
    
    if (isOwner)  
    {
      servicePath = "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop/FeatureServer/";
      sourceFlyghtZone = servicePath + "5";

      realAllLayer =new FeatureLayer({
        url:"https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/AllFlightReal/FeatureServer/0",
        popupTemplate: templateReal,
       // labelingInfo: [realLabelClass2d],

        renderer:selectSymbol.realMarkerRenderer
      }); 
    realLayer= new FeatureLayer({
       url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",
       popupTemplate: templateReal,
       title: "Выполняющиеся полеты",
       //add.spatialReference : {wkid :4326},
       labelingInfo: [realLabelClass2d]
        //350000}//,
       });
       
      }
      else
      {
        realAllLayer =new FeatureLayer({
          url:"https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/AllFlightReal/FeatureServer/0",
          //labelingInfo: [realLabelClass],
          popupTemplate: templateReal,
          title: "Выполняющиеся полеты",
          renderer:selectSymbol.realMarkerRenderer
        });
        realLayer= new FeatureLayer({
           url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",
           popupTemplate: templateReal,
           title: "Текущее местоположеение",
           labelingInfo: [realLabelClass],
           elevationInfo: {
           mode: "relative-to-ground",   
            }, //350000}//,
           });
        //   scene.layers.add(realLayer);
          }

     scene.layers.add(realAllLayer);  
   realAllLayer.definitionExpression=buildDefinitionQueryReal();      
   scene.layers.add(realLayer);
   
   flyZoneLayer = new FeatureLayer({
    title: "Зона текущего полета",  
    url: sourceFlyghtZone,
    outFields: ["*"],
    renderer: selectSymbol.unicumRendererZone,
    
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
  // scene.layers.add(flyZoneLayer);
    
   window.setInterval(realPath, 20000);   
}  



function refreshRealLayer(FeatureLayer,scene,tit,isOwner)
{  var lays=[];
  
  console.log(glids);
  
  for (var i=0;i<glids.length;i++)
  {
      console.log(glids[i][1]);
      apiAircraft= apiData(apiUrl, "/aircraft/"+glids[i][1], token);
      apiAircraft.then(function (response) {
        //console.log("!!!  "+response.aircraft.serialNumber);  
        if (document.getElementById("S"+response.id)!=null)
        document.getElementById("S"+response.id).innerText=response.aircraft.serialNumber;
        //console.log("????  "+response.aircraft.serialNumber); 
        
        
      });
  }
   getLayersByTitle(FeatureLayer,scene.allLayers,[tit] ,lays);
   
   let realLay=lays[0];
   let templateReal=realLay.popupTemplate;
   let labInfo=realLay.labelingInfo[0]; 
   console.log(realLay);
   let url=realLay.url;
   
   let title=realLay.title;
   var newRealLayer;
   if (isOwner)  
    {
      newRealLayer=new FeatureLayer({
      url:url,
      popupTemplate:templateReal,
      title : title,
      labelingInfo:[labInfo],
      //spatialReference : {wkid :4326},
      useTimeView : false 

   })}
   else
   {
    
    newRealLayer=new FeatureLayer({
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
   makeRealFlyght(newRealLayer); 
   scene.layers.reorder(realAllLayer, scene.layers.length);
   
}
function makeRealFlyght(realLayer)
       {
        
        realLayer.queryFeatures({
          where : "",
          
          returnGeometry: true,
          outFields: ["*"],
        })
        .then(function(featureSet) {
          //console.log(featureSet.features.length);  
          makeListRealFlyght(featureSet.features);

         });
        
          
       }

function makeListRealFlyght(feats)
         {
          const flightrealhtml0 ='<li class="uav-list-item"><div class="uav-item-header">\
          <span class="uav-item-status">В полёте</span>\
          <span class="uav-item-desc" id="';
          const flightrealhtml0_1 ='"></span>\
          <button class="btn uav-btn-more" id="';
          
          const flightrealhtml0_1_1='">Подробнее</button>\
           </div>  <div class="uav-item-body" id="';
          const flightrealhtml0_1_2='">'
          
        const flightrealhtml1 ='</div>\
        <div class="uav-item-footer">\
          <button class="btn btn-uav-small">Стоп</button>\
          <button class="btn btn-uav-small" id="';
          const flightrealhtml2 ='">Возврат</button>\
          <button class="btn btn-uav-small">Кружиться</button>\
          <button class="btn btn-uav-small">Посадить</button>\
        </div>\
      </li>'


            
          var lst="";
          
          glids=[]; 
           emptyArray(glids); 
           for(let i=0;i<feats.length;i++)
           {

             panRealFlyght(feats[i]);
             
          }
          document.getElementById("uav-realtimelist").innerHTML=lst;

          addFlyRealEvent(glids);
          

          function panRealFlyght(feat)
          {
              let glid=feat.getAttribute("globalid");
              let nid=feat.getAttribute("boardnumber");
              
              glids.push([glid,nid]);
              lst=lst+flightrealhtml0;
              lst=lst+"S"+nid;
              lst=lst+flightrealhtml0_1;
              lst=lst+glid;
              lst=lst+flightrealhtml0_1_1;
              lst=lst+"B"+glid;
              lst=lst+flightrealhtml0_1_2;
              /*lst=lst+"F"+nid;
              lst=lst+flightrealhtml0_2;
              lst=lst+"";//nid; */
              lst=lst+flightrealhtml1;
              lst=lst+"C"+glid;                    
              lst=lst+flightrealhtml2;
             
          }
     
        }
        
        function addFlyRealEvent(glids) {
          for (i=0;i<glids.length;i++)
          {
             document
             .getElementById("C"+glids[i][0])
             .addEventListener("click", eventFlyRealSend);
             document
             .getElementById(glids[i][0])
             .addEventListener("click", eventDetailFlyReal);
              apiAircraft= apiData(apiUrl, "/aircraft/"+glids[i][1], token);
              apiAircraft.then(function (response) {
                try{  
                document.getElementById("S"+response.id).innerText=response.aircraft.serialNumber;
                }
                catch{}
              });
          }
          if(idRealDet!="")
          {
            
           let nid="";
            for(let i=0;i<glids.length;i++)
               if(glids[i][0]==idRealDet) nid=glids[i][1];   
               if(nid!="") 
              {   let tm=(new Date()).getTime();
                  let fl=getFlyhtByBoard(nid,tm);
                  if (fl!=null)
                      detalRealFlyght(idRealDet,fl[0],true);
               }
           }
         }
         function eventDetailFlyReal(event)
        {
          let glid= event.target.id;
          if(idRealDet!="" && idRealDet!=glid)
            detalRealFlyght(idRealDet,null,false); 
          let nid="";
          for(let i=0;i<glids.length;i++)
               if(glids[i][0]==glid) nid=glids[i][1];   
          let el= document.getElementById("D"+glid);
          if(nid!="") 
          {   let tm=(new Date()).getTime();
              let fl=getFlyhtByBoard(nid,tm);
              if (fl!=null)
                   detalRealFlyght(glid,fl[0],(el==null));
              if(el!=null) idRealDet="";     
          }
         
      }
      function detalRealFlyght(glid,fl,reg)
      {  lst="";
          console.log(glid);
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
           let data =dataForSend();
           let params = { DATA : data  };
               
                  GEOPROCESSOR.submitJob(params).then(function (jobInfo) {
                  var options = { statusCallback: function (jobInfo1) { progTest(jobInfo1); } };
                  GEOPROCESSOR.waitForJobCompletion(jobInfo.jobId, options).then(function (jobInfo2 ) {  console.log(jobInfo2);                 
                    getResultData(jobInfo2);
                  });
                 });
                 function progTest(value) {
                   console.log(value.jobStatus);
                 }
                 function getResultData(result2) {
                   
                  GEOPROCESSOR.getResultData(result2.jobId,"Result").then(function (result) { console.log(result.value); });
                  } 



        }
         
         function dataForSend()
      {

        let dt=new Float32Array([220,0,0,0,0,0,0]);
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
        bths=bths+bth2s+" 00 00 ";

        let trId=177;
        bytes=getInt32Bytes(trId);
        let bth3=bytesToHexString(bytes);
        let trIds=bth3[0]

        bytes=getInt32Bytes(33);
        let bth4=bytesToHexString(bytes);
        let data="fe "+bth4[0]+" "+trIds+" 00 4c "+bths+"cc cc"

        dt=new Float32Array([0,0,0,0,0,0,0]);
        bths="";
        for (let i=0;i<dt.length;i++)
        {
           let hex = ToHex(dt[i]);
            for (let j=0;j<8;j+=2)
                {
                  bths=bths+hex.substring(j,j+2)+" ";
                } 
        }
        bytes=getInt16Bytes(20);
        bth2=bytesToHexString(bytes);
        bth2s=(bth2.toString()).replaceAll(',', ' ');
        bths=bths+bth2s+" 00 00 ";
        data=data+" fe "+bth4[0]+" "+trIds+" 00 4c "+bths+"cc cc"
        
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

     
     function buildDefinitionQueryReal()/*timeSlider)*/ {   // показывать точки полетов в суточном интервале от установленной даты
    
      let et=timeSlider.timeExtent.end.getTime();
      let st=timeSlider.timeExtent.start.getTime();
      let ett= new Date(); ett.setTime(ett.getTime()+10000)
      let stt= new Date(st); stt.setTime(ett.getTime()-1800000)
      
      let startDt=convertTime(stt);//st;
      let endDt=convertTime(ett);//et
     // console.log(startDt);
     // console.log(endDt);
      let defQuery ="CreateTime >= timestamp'"+ startDt+"' And CreateTime <= timestamp'"+endDt+ "'";
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
     function realPath()
     {
       realAllLayer.definitionExpression=buildDefinitionQueryReal();
       realAllLayer.queryFeatures({ where : buildDefinitionQueryReal(),
       returnGeometry: true,
       //returnZ : true,
       orderByFields : ["BoardNumber","objectid"],
       outFields: ["BoardNumber","objectid","Altitude","CreateTime"]}).then(function(featureSet) {
        // console.log(featureSet.features.length);
         
         makeGeometryRealFlyght(featureSet.features);
         //flyZoneLayer.definitionExpression=buildDefinitionQueryPlan(null);
         //console.log(flyZoneLayer.definitionExpression);
         
        });;
     
     
     
     
     }
     
     function makeGeometryRealFlyght(feats)
     {
       
       bufferLayer.graphics.removeAll();
       //realLayer.graphics.removeAll();  
       if(feats.length==null) return;
       let name="";
       let zon=null;  
       let paths=[];
       let names=[];
       let dt0;
       let pth=[];
       //console.log(feats.length);
       for (let i=0;i<feats.length;i++)
       {
         if (name=="")
         {
           name="unknow"; 
           let el=getFlyhtByBoard(feats[i].getAttribute("BoardNumber"),feats[i].getAttribute("CreateTime"));
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
           pth.push([feats[i].geometry.x,feats[i].geometry.y,z,dt]);
           paths.push([pth,name]);
           
         }
         else
          { 
            let nameNew="unknow";
            let el=getFlyhtByBoard(feats[i].getAttribute("BoardNumber"),feats[i].getAttribute("CreateTime"));
            if(el!=null) nameNew=el[0].id;
            if (name==nameNew)
              {
               z=feats[i].getAttribute("Altitude");  
               dt=feats[i].getAttribute("CreateTime")/1000 -dt0;
               pth.push([feats[i].geometry.x,feats[i].geometry.y,z,dt]);
                 
              }
           else
            { 
             //let el=getFlyhtByBoard(feats[i].getAttribute("BoardNumber"),feats[i].getAttribute("CreateTime"));
               name=nameNew;
               zon=null;
               if (el!=null) 
                  zon=el[1];
             
                paths.push([pth,name]);
                let lin=new POLYLINE({
                     paths :[pth],
                     spatialReference :{wkid:4326}
                    });
                let gg= new GRAPHIC({
                   geometry : lin,
                   symbol : selectSymbol.lineSymbolPigg
                  });
                bufferLayer.add(gg);
                if (zon!=null)
                  bufferLayer.add(zon);
                
          //   console.log("!!   "+pth.length); 
                  emptyArray(pth);
      
                dt=0;
                dt0=feats[i].getAttribute("CreateTime")/1000;            
                pth.push([feats[i].geometry.x,feats[i].geometry.y,z,dt]);
                paths.push([pth,name]);

             }

        }
       }
       // console.log("??  "+pth.length);
       // console.log("name = "+ name);   
       // console.log(zon);
        lin=new POLYLINE({
        paths :[pth],
        spatialReference :{wkid:4326}
      });
       gg= new GRAPHIC({
        geometry : lin,
        symbol : selectSymbol.lineSymbolPigg
       });
           bufferLayer.add(gg);
           if (zon!=null)
            bufferLayer.add(zon);
          
           emptyArray(pth);

     
     
     
     }
     
     function getFlyhtByBoard(bid,btime){
         
     
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
              return null;
     
     }
     function addFlyZone(fid,ind)
     {
      console.log("Zone "+fid); 
      flyZoneLayer.queryFeatures({ where : "flyid = '"+fid+"'",
        returnGeometry: true,
        returnZ : true,
        outFields: ["*"]}).then(function(featureSet) {
           console.log("Zone "+featureSet.features.length);
          if (featureSet.features.length>0){ 
          let gr =new GRAPHIC({
                geometry: featureSet.features[0].geometry,
                attributes :featureSet.features[0].attributes,
                spatialReference :{wkid:4326},
                symbol:selectSymbol.fillSymbolGreen,
                popupTemplate : templatesPopup.templateZoneFly
          }); 
          
          flightsBoard[ind].push(gr);

          }
         });

      /*
      apiAppl= apiData(apiUrl, "/application/"+fid, token);
      apiAppl.then(function (response) {
        //console.log("!!!  "+response.aircraft.serialNumber);  
        if (document.getElementById("F"+flightsBoard[ind][1])!=null)
        document.getElementById("F"+flightsBoard[ind][1]).innerText="Пользователь :"+response.user.user.username;
        if (document.getElementById("T"+flightsBoard[ind][1])!=null)
        document.getElementById("T"+flightsBoard[ind][1]).innerText="Время старта :"+response.application.start.date;
        if (document.getElementById("E"+flightsBoard[ind][1])!=null)
        document.getElementById("E"+flightsBoard[ind][1]).innerText="Время финиша :"+response.application.finish.date;;
        //console.log("????  "+response.aircraft.serialNumber); 
        
        
      });*/
  




     }