 class cardHtml{
     flighthtml = ['<li class="uav-list-item"><div class="uav-item-header"><span class="uav-item-status">',
  '</span> <button class="btn uav-btn-more" id="',
  '">Подробнее</button>  </div>  <div class="uav-item-body">',
  '<span class="uav-item-row uav-item-flight"><span class="uav-item-desc">Наименование</span>',
  '</span> <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Старт</span>',
  '</span> <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Финиш</span>', 
  '</span> </div> <div class="uav-item-body" id="',
  '"></div>',
  '<input type="hidden" id="',
  '" value="',
  '"></input>',
  '</li>'];



//detalowner
   flightdetal =['<span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Старт</span>',
                       '</span><span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Финиш</span>',
                       '</span>',
                       '<span class="uav-item-row uav-item-flight" id="',
                       '"><span class="uav-item-desc">Сер.номер БВС</span>',
                       '<span class="uav-item-desc">Пользователь</span>',
                       '</span>'];

 






    trackhtml0 =['<li class="uav-list-item"><div class="uav-item-header">  <span class="uav-item-status">',
          '</span>      <button class="btn uav-btn-more" id="',
          '">Подробнее</button>          </div>          <div class="uav-item-body">',
           '<span class="uav-item-row uav-item-flight"><span class="uav-item-desc">Наименование</span>',
          '</span>  <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Дата создания</span>',
          '</span>               </div>         <div class="uav-item-body" id="',
          '"></div>',
          '<input type="hidden" id="',
          '" value="',
          '"></input>',
          '</li>'];
         

  
       trackrdetal=[['<p   <div >\
   <label style="width: 50px;font-size:12px;"> Duration</label>\
   <label style="width: 50px;font-size:12px;">Zmin</label>\
  <label style="width: 50px;font-size:12px;" >Zmax</label></div> ',
  '<p    <div > <label style="width: 50px;font-size:12px;"> Duration</label>\
   <label style="width: 50px;font-size:12px;">Radius</label>\
   <label style="width: 50px;font-size:12px;">Zmin</label>\
   <label style="width: 50px;font-size:12px;">Zmax</label></div> ',
   '<p    <div><label style="width: 10px;font-size:12px;">*</label>\
    <label style="width: 50px;font-size:12px;">  Speed</label>\
    <label style="width: 50px;font-size:12px;"> Z </label>\
     <label style="width: 50px;font-size:12px;"> Zmin </label>\
     <label style="width: 50px;font-size:12px;"> Zmax </label> </div> '],
    ['  <div ','  <div ','  <div '],
    ['>  <input style="width: 50px;font-size:12px;"  type="number" id="',
    '> <input style="width: 50px;font-size:12px;"  type="hidden" id="',''],
    ['"   value=','"   value=','"   value='],
    ['></div></p></div>','></div></p></div>','></div></p></div>']
    ['></div>','></div>','></div>']];


  
  
    routhtml=['  <div >  <input  type="checkbox" id="',
            '" unchecked '];
  
  
  







       
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
                      <button class="btn btn-uav-small">Стоп</button>\
                      <button class="btn btn-uav-small" id="',
                                                            '">Возврат</button>\
                      <button class="btn btn-uav-small">Кружиться</button>\
                      <button class="btn btn-uav-small">Посадить</button>\
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
              lst=lst+"C"+glid;                    
              lst=lst+flightrealhtml[6];
        
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