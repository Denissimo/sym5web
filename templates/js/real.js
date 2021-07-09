function addReal(FeatureLayer,LabelClass,Geoprocessor,scene){
    const realLabelClass = new LabelClass({
        labelExpressionInfo: {
          expression:
            "$feature.boardNumber+TextFormatting.NewLine +'Скорость :'+ $feature.Speed+TextFormatting.NewLine +'Высота :'+ $feature.Altitude+TextFormatting.NewLine +'Курс :'+ $feature.Heading",
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
     
    var realLayer = new FeatureLayer({
       url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",
       popupTemplate: templateReal,
       title: "Выполняющиеся полеты",
       labelingInfo: [realLabelClass],
       elevationInfo: {
       mode: "relative-to-ground",   
        }, //350000}//,
       });
   scene.layers.add(realLayer);
   
   return realLayer;
}  
function refreshRealLayer(FeatureLayer,scene,tit,isOwner)
{  var lays=[];
   getLayersByTitle(FeatureLayer,scene.allLayers,[tit] ,lays);
   let realLay=lays[0];
   let url=realLay.url;
   let templateReal=realLay.popupTemplate;
   let labInfo=realLay.labelingInfo[0];
   
   let title=realLay.title;
   var newRealLayer;
   if (isOwner)  
    {
      newRealLayer=new FeatureLayer({
      url:url,
      popupTemplate:templateReal,
      title : title,
      labelingInfo:[labInfo],
      spatialReference : {wkid :4326},
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
   

}
function makeRealFlyght(realLayer)
       {
        
        realLayer.queryFeatures({
          where : "",
          returnGeometry: true,
          outFields: ["*"],
        })
        .then(function(featureSet) {
            
          makeListRealFlyght(featureSet.features);

         });
        
          
       }

function makeListRealFlyght(feats)
         {
          const flightrealhtml0 ='<li class="uav-list-item"><div class="uav-item-header">\
          <span class="uav-item-status">В полёте</span>\
          <button class="btn uav-btn-more">Подробнее</button>\
        </div>\
        <div class="uav-item-body">\
          <span class="uav-item-row uav-item-reg">123123123123ABBB</span>\
          <span class="uav-item-row uav-item-flight"><span class="uav-item-desc">Номер полета</span>';
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
          
          var glids=[]
           for(let i=0;i<feats.length;i++)
           {

             panRealFlyght(feats[i],glids);
          }
          document.getElementById("uav-realtimelist").innerHTML=lst;

          addFlyRealEvent(glids);
          

          function panRealFlyght(feat,glids)
          {
              let glid=feat.getAttribute("globalid");
              glids.push(glid);
              let nid=feat.getAttribute("boardnumber")
              lst=lst+flightrealhtml0;
              lst=lst+nid; 
              lst=lst+flightrealhtml1;
              lst=lst+glid;                    
              lst=lst+flightrealhtml2;
  
          }
     
        }
        
        function addFlyRealEvent(glids) {
          for (i=0;i<glids.length;i++)
          {
             document
             .getElementById(glids[i])
             .addEventListener("click", eventFlyRealSend);
          }
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
        console.log(data);
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

         
        

