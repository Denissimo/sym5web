   class selectSymbol{


     

   static fillSymbol =
       {
        type: "simple-fill", 
        color: [ 0,255, 255, 0.2 ],
        style: "solid",
        outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 0,255, 255 ],
        width: 2
      }

    }
    static fillSymbolGray = {
      type: "simple-fill", // autocasts as SimpleLineSymbol()
      color: [128, 128, 128,0],
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 128,128, 128 ],
        width: 2
      }
      
    };
  static lineSymbol =
       {
        type: "simple-line",
        color: [ 0,255, 255 ],
        style: "solid",
        width: 3
      }
  static lineSymbolGray =
      {
       type: "simple-line",
       color: [ 128,128, 128 ],
       style: "solid",
       width: 3
     }

   static  markerSymbol =
  {
  type: "simple-marker", 
  color: [ 0,255, 255,0.2],
  style: "circle",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 0,255, 255 ],
    width: 2
  }

 }

 static lineSymbolIntersect =
 {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: "red",
    width: 10
 };

static fillSymbolIntersect =
 {
   type: "simple-fill", // autocasts as SimpleLineSymbol()
   color: "red",
   width: 2
 };


 static zoneRendererFly = {
  type: "simple",
  symbol: {

      
    type: "simple-fill", // autocasts as SimpleLineSymbol()
    color: [128, 128, 128],
    style : "cross",
    outline: {  // autocasts as new SimpleLineSymbol()
      color: [ 128,128, 128 ],
      width: 2
       }
    
 }
};   


static emulSymbolRoute = {
 
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "circle",
        material: {
          color: [255, 235, 30], //,0.5]
        },
        width: 60, // the width in m
        height: 60, // the height in m
        cap: "round"//"square", //"round"
      },
    ],
};







static  unicumRendererZone = {
  type: "unique-value",  // autocasts as new UniqueValueRenderer()
  field: "status",
  defaultSymbol: { type: "simple-fill" },  // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [{
    // All features with value of "North" will be blue
    value: 3,
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: [128, 128, 128],
      style : "cross",
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 128,128, 128 ],
        width: 2
         }
    }
  }, {
    // All features with value of "East" will be green
    value: 4,
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: [0, 128, 0],
      style : "cross",
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 128,128,128  ],
        width: 2
         }
    }
  }, {
    // All features with value of "South" will be red
    value: 6,
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: [128, 64, 0],
      style : "cross",
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 128,128, 128 ],
        width: 2
         }
    }
  }, {
    // All features with value of "South" will be red
    value: 7,
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: [255, 255, 255],
      style : "cross",
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 128,128, 128 ],
        width: 2
         }
    }
  }, {
    // All features with value of "West" will be yellow
    value: 5,
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: [128, 0, 0],
      style : "cross",
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 128,128, 128 ],
        width: 2
         }
    }
  }]
}



}