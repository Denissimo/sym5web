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
       labelingInfo: [realLabelClass],
       elevationInfo: {
       mode: "relative-to-ground",   
        }, //350000}//,
       });
   scene.layers.add(realLayer);
}    