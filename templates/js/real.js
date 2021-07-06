function addReal(FeatureLayer,LabelClass,scene){
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
          const flightrealhtml0 ='<div class="uav-item-header">\
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
          <button class="btn btn-uav-small">Возврат</button>\
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

          //addFlyRealEvent(glids);
          

          function panRealFlyght(feat,glids)
          {
              let glid=feat.getAttribute("globalid");
              glids.push(glid);
              let nid=feat.getAttribute("boardnumber")
              lst=lst+flightrealhtml0;
              lst=lst+nid; 
              lst=lst+flightrealhtml1;
              
              //lst=lst+glid;                    
              
  
          }
     
        }
        /*
        function addFlyRealEvent(glids) {
          for (i=0;i<glids.length;i++)
          {
             document
             .getElementById(glids[i])
             .addEventListener("click", eventFlyRealSend);
          }
         }*/

