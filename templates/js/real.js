var flightsBoard;
var glids;
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
  var     lst="";
  apiIntervalFlights= apiData(apiUrl, "/application/interval/"+stara+"/"+enda, token);
  
  apiIntervalFlights.then(function (response) {
       
    flightsBoard=[];
    
    for (let i=0;i<response.applications.length;i++) {   
                 
      if(response.applications[i].application.start.date >= stDt)
      {
        
        if(response.applications[i].status.id ==4 ||response.applications[i].status.id ==7)
         {
           
          flightsBoard.push([response.applications[i].id,response.applications[i].aircraft.id,response.applications[i].application.start,response.applications[i].application.finish]);
          addFlyZone(response.applications[i].id,flightsBoard.length-1);
         } 
        
      }
    
    }
   // console.log(flightsBoard);
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
        </div>\
        <div class="uav-item-body">\
          <span class="uav-item-row uav-item-flight"><span class="uav-item-desc" id="';  
          const flightrealhtml0_2 ='">Номер полета</span>';
          const flightrealhtml1 ='</span>\
          <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Дата начала полета</span>14.12.2020 16:30</span>\
          <span class="uav-item-row uav-item-date-end"><span class="uav-item-desc">Дата окончания полета</span>14.12.2020 16:30</span>\
        </div>\
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
             console.log(glids);
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
              lst=lst+"B"+glid;
              lst=lst+flightrealhtml0_1_1;
              lst=lst+"F"+nid;
              lst=lst+flightrealhtml0_2;
              lst=lst+"";//nid; 
              lst=lst+flightrealhtml1;
              lst=lst+glid;                    
              lst=lst+flightrealhtml2;
             
          }
     
        }
        
        function addFlyRealEvent(glids) {
          for (i=0;i<glids.length;i++)
          {
             document
             .getElementById(glids[i][0])
             .addEventListener("click", eventFlyRealSend);
             document
             .getElementById("B"+glids[i][0])
             .addEventListener("click", evDetailFlyReal);
              apiAircraft= apiData(apiUrl, "/aircraft/"+glids[i][1], token);
              apiAircraft.then(function (response) {
                try{  
                document.getElementById("S"+response.id).innerText=response.aircraft.serialNumber;
                }
                catch{}
              });
          }
         }
         function eventDetailFlyReal(event)
        {
          let bid= event.target.id;
         /*
          let el= document.getElementById("F"+idFly);
        let reg=false;
        if(el!=null) 
        {
          detalFlyght(null,false,-1,response,oldFly);
        }*/
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
         if (featureSet.features.length>0){ 
         makeGeometryRealFlyght(featureSet.features);
         //flyZoneLayer.definitionExpression=buildDefinitionQueryPlan(null);
         //console.log(flyZoneLayer.definitionExpression);
         }
        });;
     
     
     
     
     }
     
     function makeGeometryRealFlyght(feats)
     {
       bufferLayer.graphics.removeAll();
       //realLayer.graphics.removeAll();  

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
            
           el=getFlyhtByBoard(feats[i].getAttribute("BoardNumber"),feats[i].getAttribute("CreateTime"));
           name=el[0];
           zon=el[4];
           z=feats[i].getAttribute("Altitude");
           dt=0;
           dt0=feats[i].getAttribute("CreateTime")/1000;            
           pth.push([feats[i].geometry.x,feats[i].geometry.y,z,dt]);
           paths.push([pth,name]);
           
         }
         else
         
          if (name==getFlyhtByBoard(feats[i].getAttribute("BoardNumber"),feats[i].getAttribute("CreateTime"))[0])
            {
            z=feats[i].getAttribute("Altitude");  
            dt=feats[i].getAttribute("CreateTime")/1000 -dt0;
            pth.push([feats[i].geometry.x,feats[i].geometry.y,z,dt]);
            
            
            }
          else
           { 
            
           //console.log("name = "+ name);   
           el=getFlyhtByBoard(feats[i].getAttribute("BoardNumber"),feats[i].getAttribute("CreateTime"));
           name=el[0];
           zon=el[4];
           paths.push([pth,name]);
           let lin=new POLYLINE({
             paths :[pth],
             spatialReference :{wkid:4326}
           });
           let gg= new GRAPHIC({
             geometry : lin,
             symbol : selectSymbol.lineSymbolPigg
           })
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
         
     //console.log(flightsBoard);
              for (let i=0;i<flightsBoard.length;i++)
              { 
                tmz=flightsBoard[i][2].timezone_type;
                tm1=flightsBoard[i][2].date;
                tm2=flightsBoard[i][3].date;
     
                let tm=convertTime(new Date(btime+3600000*tmz));
                if (bid==flightsBoard[i][1] && tm1<=tm && tm2>=tm )
                 {
     
                   return flightsBoard[i];
                  }
              }
              return ["unknow","",null,null,null];
     
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

      
      apiAppl= apiData(apiUrl, "/application/"+fid, token);
      apiAppl.then(function (response) {
        //console.log("!!!  "+response.aircraft.serialNumber);  
        if (document.getElementById("F"+flightsBoard[ind][1])!=null)
        document.getElementById("F"+flightsBoard[ind][1]).innerText="Пользователь :"+response.user.user.username;
        //console.log("????  "+response.aircraft.serialNumber); 
        
        
      });
  




     }