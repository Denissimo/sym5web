   class selectSymbol{

    static fillSymbolFly =
    {

      
        type: "simple-fill", // autocasts as SimpleLineSymbol()
        color: [128, 128, 128],
        style : "cross",
        outline: {  // autocasts as new SimpleLineSymbol()
          color: [ 128,128, 128 ],
          width: 2
           }
        
     };

     

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
}