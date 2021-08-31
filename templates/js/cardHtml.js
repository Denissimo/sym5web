 class cardHtml{
     


  static panFlyght(flyght)
  {
    var stats= ["Черновик","Шаблон","На утверждении","Подтверждена","Отклонена","Отменена","Выполняется"];
  
    var lst="";
    var flighthtml = [
     '<li class="uav-list-item">\
         <div class="uav-item-header">\
            <span class="uav-item-status">',
            '</span>\
            <button class="btn uav-btn-more" id="',
                                                  '">Подробнее\
            </button>\
         </div>\
         <div class="uav-item-body">',
            '<span class="uav-item-row uav-item-flight">\
                <span class="uav-item-desc">Наименование\
                </span>',
            '</span>\
         </div>\
         <div class="uav-item-body" id="',
                                         '">\
         </div>',
        '<input type="hidden" id="',
                                   '" value="',
                                              '">\
        </input>',
    '</li>'];
    
  
  var  nm=flyght.track.name;
  var glob= flyght.id;       // glob - GUID полета
  var kod=  flyght.status.id;   

   lst=lst+flighthtml[0];
   lst=lst+stats[kod-1];
   lst=lst+flighthtml[1];
   lst=lst+glob;
   lst=lst+flighthtml[2];
   lst=lst+flighthtml[3];
   lst=lst+nm;
  
   lst=lst+flighthtml[4];
   lst=lst+"R"+glob;
   lst=lst+flighthtml[5];

   lst=lst+flighthtml[6];
   lst=lst+"T"+glob;
   lst=lst+flighthtml[7];
   lst=lst+kod; 
   lst=lst+flighthtml[8];
   
   lst=lst+flighthtml[9];
   return lst
}

    
                 static      detalFlyght (response,isOperator) { 

                 var  flightdetal =
                 ['<span class="uav-item-row uav-item-date-start">\
                       <span class="uav-item-desc">Старт</span>',
                  '</span>\
                   <span class="uav-item-row uav-item-date-start">\
                     <span class="uav-item-desc">Финиш</span>',
                  '</span>',
                  '<span class="uav-item-row uav-item-flight" id="',
                                                                    '">\
                     <span class="uav-item-desc">Сер.номер БВС</span>',
                   '<span class="uav-item-row uav-item-flight">\
                     <span class="uav-item-desc">Пользователь</span>',
                  '</span>'];
 
                        
                        let lst="";
                        
                        
                        let sdat=response.application.start.date; //ftfSet.features[i].getAttribute("startdate");
                        let  fdat=response.application.finish.date;//ftfSet.features[i].getAttribute("finishdate");
                           
                         
                          lst=lst+flightdetal[0];
                          lst=lst+sdat;
                          lst=lst+flightdetal[1];
                          lst=lst+fdat;     
                          lst=lst+flightdetal[2];
                          let rnumb="unknow";
                          if ( response.aircraft!= null)
                              rnumb= response.aircraft.serialNumber;
                          if (rnumb==null) rnumb="unknow";
                          lst=lst+flightdetal[3];
                          lst=lst+"F"+response.id;
                          lst=lst+flightdetal[4];
                          lst=lst+rnumb;//
                          if (isOperator)
                          {
                            lst=lst+flightdetal[5];
                            lst=lst+ response.user.user.username
                          }  
                          lst=lst+flightdetal[6];
                        
                          return  lst;
                          }  







       static  panTrack(track){
        var lst="";  
        var stats= ["Зональный круговой","Зональный","Линейный"];    
        var trackhtml =[
             '<li class="uav-list-item">\
                  <div class="uav-item-header">\
                    <span class="uav-item-status">',
                   '</span>\
                         <button class="btn uav-btn-more" id="',
                                                            '">Подробнее\
                         </button>\
                   </div>\
                   <div class="uav-item-body">',
                       '<span class="uav-item-row uav-item-flight">\
                           <span class="uav-item-desc">Наименование</span>',
                       '</span>\
                        <span class="uav-item-row uav-item-date-start">\
                            <span class="uav-item-desc">Дата создания</span>',
                       '</span>\
                   </div>\
                   <div class="uav-item-body" id="',
                                                  '">\
                   </div>',
                  '<input type="hidden" id="',
                                             '" value="',
                                                        '">\
                  </input>',
             '</li>'];

            
                     var rlob=track.id;
                     var nm=track.name;
                     var kod=track.type;
                     let dt=track.createdAt.date;
                     var numb=track.applicationsNumber;
           // rlb.push(rlob) ; 
            lst=lst+trackhtml[0];
            lst=lst+stats[kod];
            lst=lst+trackhtml[1];
            lst=lst+rlob;
            lst=lst+trackhtml[2];
            lst=lst+trackhtml[3];
            lst=lst+nm;
            lst=lst+trackhtml[4];
            lst=lst+dt;
            lst=lst+trackhtml[5];
            lst=lst+"R"+rlob;
            lst=lst+trackhtml[6];
        
             lst=lst+trackhtml[7];
             lst=lst+"T"+rlob;
             lst=lst+trackhtml[8];
             lst=lst+kod; 
             lst=lst+trackhtml[9];
             lst=lst+trackhtml[7];
             lst=lst+"N"+rlob;
             lst=lst+trackhtml[8];
             lst=lst+numb; 
             lst=lst+trackhtml[9];
             lst=lst+trackhtml[10];
            
             return lst;

             }



       
    static trackrdetal(feats,ind)
    {
 
    var trackrdet=[
       [
         '<p    <div >\
                   <label style="width: 50px;font-size:12px;"> Duration</label>\
                   <label style="width: 50px;font-size:12px;">Radius</label>\
                   <label style="width: 50px;font-size:12px;">Zmin</label>\
                   <label style="width: 50px;font-size:12px;">Zmax</label>\
               </div> ',
          '<p   <div >\
               <label style="width: 50px;font-size:12px;"> Duration</label>\
               <label style="width: 50px;font-size:12px;">Zmin</label>\
               <label style="width: 50px;font-size:12px;" >Zmax</label>\
            </div> ',     
          '<p    <div>\
           <label style="width: 10px;font-size:12px;">*</label>\
           <label style="width: 50px;font-size:12px;">  Speed</label>\
           <label style="width: 50px;font-size:12px;"> Z </label>\
           <label style="width: 50px;font-size:12px;"> Zmin </label>\
           <label style="width: 50px;font-size:12px;"> Zmax </label>\
            </div> '],
      ['  <div ','  <div ','  <div '],

      ['>  <input style="width: 50px;font-size:12px;"  type="number" id="',
       '>  <input style="width: 50px;font-size:12px;"  type="number" id="',
       '>  <input style="width: 50px;font-size:12px;"  type="number" id="'],
       ['>  <input style="width: 50px;font-size:12px;"  type="hidden" id="',
       '>  <input style="width: 50px;font-size:12px;"  type="hidden" id="',
       '>  <input style="width: 50px;font-size:12px;"  type="hidden" id="'],

       ['"   value=','"   value=','"   value='],
   
       ['></div>','></div>','></div>']];
 

      var routhtml=['  <div >\
                    <input  type="checkbox" id="',
                                                '" unchecked ',
                    '></div></p></div>'];
       

      let lst=""; 
      let routeid=feats[0].getAttribute("routeid");
      let zmin=feats[0].getAttribute("zmin");
      let zmax=feats[0].getAttribute("zmax");
      var geom=feats[0].geometry;

      lst=lst+trackrdet[0][ind];
      
      lst=lst+trackrdet[1][ind];
      if (ind==2)
      {
             for (let i=0;i<feats.length;i++)
                    { 
                    let zmin=Math.round(feats[i].getAttribute("zmin"));
                    let zmax=Math.round(feats[i].getAttribute("zmax"));
                    let speed=Math.round(feats[i].getAttribute("speed"));
                    let z1=Math.round(feats[i].getAttribute("z1"));
                    lst=lst+trackrdet[1][ind];
                    lst=lst+routhtml[0];
                    lst=lst+i.toString()+"CH"+routeid;
                    lst=lst+routhtml[1];
                    lst=lst+trackrdet[2][ind];
                    lst=lst+i.toString()+"SP"+routeid;
                    lst=lst+trackrdet[4][ind];
                    lst=lst+speed.toString();
                    lst=lst+trackrdet[2][ind];
                    lst=lst+i.toString()+"ZZ"+routeid;
                    lst=lst+trackrdet[4][ind];
                    lst=lst+z1.toString();
                    lst=lst+trackrdet[2][ind];
                    lst=lst+i.toString()+"ZN"+routeid;
                    lst=lst+trackrdet[4][ind];
                    lst=lst+zmin.toString();
                    lst=lst+" readonly";
                    lst=lst+trackrdet[2][ind];
                    lst=lst+i.toString()+"ZX"+routeid;
                    lst=lst+trackrdet[4][ind];
                    lst=lst+zmax.toString();
                    lst=lst+" readonly";
                    if(i<feats.length-1)                                        
                      lst=lst+routhtml[2];
                    
                    }
                    
      } 
      else
      {
        let duration=feats[0].getAttribute("duration");
        let rad=feats[0].getAttribute("radius");
        let lat=geom.centroid.y;
        let lon=geom.centroid.x;
  
      lst=lst+trackrdet[2][ind];
      lst=lst+"DR"+routeid;
      lst=lst+trackrdet[4][ind];
      lst=lst+duration.toString();
      
      
      if (ind==0) 
          lst=lst+trackrdet[2][ind];
      else 
          lst=lst+trackrdet[3][ind];   
      lst=lst+"RD"+routeid;
      lst=lst+trackrdet[4][ind];
      lst=lst+rad.toString();
      
      lst=lst+trackrdet[3][ind];
      lst=lst+"LT"+routeid;
      lst=lst+trackrdet[4][ind];
      lst=lst+lat.toString();
      
      lst=lst+trackrdet[3][ind];
      lst=lst+"LN"+routeid;
      lst=lst+trackrdet[4][ind];
      lst=lst+lon.toString();



      lst=lst+trackrdet[2][ind];
      lst=lst+"ZN"+routeid;
      lst=lst+trackrdet[4][ind];
      lst=lst+zmin.toString();

      lst=lst+trackrdet[2][ind];
      lst=lst+"ZX"+routeid;
      lst=lst+trackrdet[4][ind];
      lst=lst+zmax.toString();
      
      
      }

      lst=lst+trackrdet[5][ind];
      
      return lst;
    }      




  
  
    routhtml=['  <div >\
                    <input  type="checkbox" id="',
                                                '" unchecked ',
                    '></div></p></div>'];
  
  
  







       
      static  panRealFlyght(glid,nid,oldGlids)
          {
            var flightrealhtml =[
              '<li class="uav-list-item">\
                 <div class="uav-item-header">\
                    <span class="uav-item-status">В полёте</span> <span class="uav-item-desc" id="',
                                                                                                   '">',
                   '</span>\
                    <button class="btn uav-btn-more" id="',
                                                           '">Подробнее</button>\
                  </div>\
                  <div class="uav-item-body" id="',
                                                   '">',          
                 '</div>\
                    <div class="uav-item-footer">\
                      <button class="btn btn-uav-small"id="', 
                                                            '">Стоп</button>\
                      <button class="btn btn-uav-small" id="',
                                                            '">Возврат</button>\
                      <button class="btn btn-uav-small" id="',
                                                           '">Кружиться</button>\
                      <button class="btn btn-uav-small" id="',
                                                            '">Посадить</button>\
                   </div>\
                </li>'];
            var  lst="";
              
              lst=lst+flightrealhtml[0];
              lst=lst+"S"+nid;
              lst=lst+flightrealhtml[1];
              
              for (let i=0;i<oldGlids.length;i++)
                  if(oldGlids[i][0]==glid && oldGlids[i].length==3) 
                  lst=lst+oldGlids[i][2];    

              lst=lst+flightrealhtml[2];
              lst=lst+glid;
              lst=lst+flightrealhtml[3];
              lst=lst+"B"+glid;
              lst=lst+flightrealhtml[4];
              lst=lst+flightrealhtml[5];
              lst=lst+"V"+glid;
              lst=lst+flightrealhtml[6];
              lst=lst+"C"+glid;       
              lst=lst+flightrealhtml[7];
              lst=lst+"T"+glid;             
              lst=lst+flightrealhtml[8];
              lst=lst+"L"+glid;             
              lst=lst+flightrealhtml[9];
        
              return lst;
          }

         
          
      static detalRealFlyght(glid,fl,reg)
      {  lst="";
        
          var flightrealdet=[
            '<span class="uav-item-row uav-item-flight">\
               <span class="uav-item-desc">Пользователь: ',  
              '</span>',
            '</span> \
             <span class="uav-item-row uav-item-date-start">\
               <span class="uav-item-desc">Время старта</span>',
            '</span>\
             <span class="uav-item-row uav-item-date-end">\
               <span class="uav-item-desc">Время финиша</span>',
            '</span>',
            '<input type="hidden" id="',
                                        '">\
            </input>'];

       if (reg)
       {
          idRealDet=glid; 
          lst=lst+flightrealdet[0];
          lst=lst+fl.user.user.username;
          lst=lst+flightrealdet[1];
          lst=lst+flightrealdet[2];
          lst=lst+fl.application.start.date;
          lst=lst+flightrealdet[3];
          lst=lst+fl.application.finish.date;
          lst=lst+flightrealdet[4];
          lst=lst+flightrealdet[5];
          lst=lst+"D"+glid;
          lst=lst+flightrealdet[6];
       }   
       return lst;

      }



     

     
        
 }