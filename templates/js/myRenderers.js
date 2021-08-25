class myRenderers{

    static realMarkerRenderer = {
        type: "simple",
        symbol:   mySymbols.markerSymbolRealAdd 
      };   
      

    static zoneRendererFly = {
        type: "simple",
        symbol: mySymbols.fillCrossSymbolGray
      };

     static lineRendererTable = {
        type: "simple",
        symbol: mySymbols.lineSymbolTable
     };
     
     static zoneRendererTable = {
        type: "simple",
        symbol: mySymbols.fillSymbolSelectZone
      };
      static zoneRendererTen = {
        type: "simple",
        symbol: mySymbols.fillSymbolZoneTen,
      };
    

      static zoneRenderer = {
        type: "simple",
        symbol: mySymbols.fillSymbolZone
      };    

      static lineRenderer = {
        type: "simple",
       symbol: mySymbols.lineSymbolPigg
      };

      static lineRendererRoute = {
        type: "simple",
        symbol: mySymbols.lineSymbolRoute,
      };

     static  unicumRendererZone = {
    type: "unique-value",  // autocasts as new UniqueValueRenderer()
    field: "status",
    defaultSymbol: { type: "simple-fill" },  // autocasts as new SimpleFillSymbol()
    uniqueValueInfos: [{
      // All features with value of "North" will be blue
      value: 3,
      symbol:mySymbols.fillCrossSymbolGray
    }, {
      // All features with value of "East" will be green
      value: 4,
      symbol: mySymbols.fillCrossSymbolGreen
    }, {
      // All features with value of "South" will be red
      value: 6,
      symbol: mySymbols.fillCrossSymbolOrange
    }, {
      // All features with value of "South" will be red
      value: 7,
      symbol: mySymbols.fillCrossSymbolWhite
    }, {
      // All features with value of "West" will be yellow
      value: 5,
      symbol: mySymbols.fillCrossSymbolRed
    }]
  }
}  