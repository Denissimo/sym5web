   class mySymbols{


     
    static webDronActive = {
      type: "web-style", // autocasts as new WebStyleSymbol()
      styleUrl: webPaths.urlDronActive,
       // "https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/bb7b64a19ac9455d97ac219080a0e978/data",
  
      name: "drone_active",
    };
  
    
   static fillSymbolSelect =
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
   static fillSymbolZoneTen = {
      type: "simple-fill",
      color: [128, 128, 128, 0.2],
      style: "solid",
    };


    static fillSymbolGreen = {
      type: "simple-fill", // autocasts as SimpleLineSymbol()
      color: [0, 256, 0],
      style : "cross",
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 128,128, 128 ],
        width: 2
      }
      
    };
    static lineSymbolPigg = {
      type: "simple-line", // autocasts as SimpleLineSymbol()
      color: [255, 0, 197],
      width: 2
     };  
  static lineSymbolSelect =
       {
        type: "simple-line",
        color: [ 0,255, 255 ],
        style: "solid",
        width: 3
      }
  static lineSymbolGray =  //lineSymbol3
      {
       type: "simple-line",
       color: [ 128,128, 128 ],
       style: "solid",
       width: 3
     }

   static  markerSymbolSelect =
  {
  type: "simple-marker", 
  color: [ 0,255, 255,0.2],
  style: "circle",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 0,255, 255 ],
    width: 2
  }

 }

 static  markerSymbolRealAdd =
 {
  size :3, 
  type: "simple-marker", // autocasts as SimpleLineSymbol()
  color: [255, 0, 0],
  style : "circle",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 0,255, 0 ],
    width: 1
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



static fillCrossSymbolGray= {
  type: "simple-fill",  // autocasts as new SimpleFillSymbol()
  color: [128, 128, 128],
  style : "cross",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 128,128, 128 ],
    width: 2
     }
};
static fillCrossSymbolGreen= {
  type: "simple-fill",  // autocasts as new SimpleFillSymbol()
  color: [0, 128, 0],
  style : "cross",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 128,128, 128 ],
    width: 2
     }
};

static fillCrossSymbolOrange= {
  type: "simple-fill",  // autocasts as new SimpleFillSymbol()
  color: [128, 64, 0],
  style : "cross",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 128,128, 128 ],
    width: 2
     }
};
static fillCrossSymbolRed= {
  type: "simple-fill",  // autocasts as new SimpleFillSymbol()
  color: [128, 0, 0],
  style : "cross",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 128,128, 128 ],
    width: 2
     }
};
static fillCrossSymbolWhite= {
  type: "simple-fill",  // autocasts as new SimpleFillSymbol()
  color: [255, 255, 255],
  style : "cross",
  outline: {  // autocasts as new SimpleLineSymbol()
    color: [ 128,128, 128 ],
    width: 2
     }
};


static lineSymbolTable = {
  type: "simple-line", // autocasts as SimpleLineSymbol()
  color: [0, 255, 0],
  width: 2
};

static  fillSymbolSelectZone =
{
  type: "simple-fill", 
  color: [ 255,0, 197, 0.2 ],
  style: "solid",
  outline: {  // autocasts as new SimpleLineSymbol()
        color: [ 0,255, 0 ],
        width: 3
          }
};

static fillSymbolZone = {     //fillSymbol
  type: "simple-fill", // autocasts as SimpleLineSymbol()
   color: [255, 0, 197,0.2],
   width: 2
  };


  static lineSymbolRoute = {
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "circle",
        material: {
          color: [255, 0, 197], //,0.5]
        },
        width: 1, // the width in m
        height: 1, // the height in m
        cap: "round", //"round"
      },
    ],
  };


static  labelTextSymbol= {
                
    type: "text", // autocasts as new TextSymbol3DLayer()
    color: [255, 0, 0] ,
    size: 20 // points
  
}

static labelTextSymbol3D= {
  type: "label-3d", // autocasts as new LabelSymbol3D()
  symbolLayers: [
    {
      type: "text", // autocasts as new TextSymbol3DLayer()
      material: { color: [255, 0, 0] },
      size: 12, // points
    },
  ],
}





}