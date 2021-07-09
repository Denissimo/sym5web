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
  static lineSymbol =
       {
        type: "simple-line",
        color: [ 0,255, 255 ],
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