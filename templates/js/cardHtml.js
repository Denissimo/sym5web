 class cardHtml{
  static    flighthtml = ['<li class="uav-list-item"><div class="uav-item-header"><span class="uav-item-status">',
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
  static flightdetal =['<span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Старт</span>',
                       '</span><span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Финиш</span>',
                       '</span>',
                       '<span class="uav-item-row uav-item-flight" id="',
                       '"><span class="uav-item-desc">Сер.номер БВС</span>',
                       '<span class="uav-item-desc">Пользователь</span>',
                       '</span>'];

 






  static  trackhtml0 =['<li class="uav-list-item"><div class="uav-item-header">  <span class="uav-item-status">',
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
         

  
          static trackrdetal=[['<p   <div >\
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


  
  
    static routhtml=['  <div >  <input  type="checkbox" id="',
            '" unchecked '];
  
  
  







            static flightrealhtml0 =['<li class="uav-list-item"><div class="uav-item-header">   <span class="uav-item-status">В полёте</span> <span class="uav-item-desc" id="',
         '">Unknow</span> <button class="btn uav-btn-more" id="',
         '">Подробнее</button> </div>  <div class="uav-item-body" id="',
          '">',          
          '</div>   <div class="uav-item-footer">  <button class="btn btn-uav-small">Стоп</button> <button class="btn btn-uav-small" id="',
          '">Возврат</button>   <button class="btn btn-uav-small">Кружиться</button> <button class="btn btn-uav-small">Посадить</button> </div></li>'];




          static  flightrealdet=['<span class="uav-item-row uav-item-flight"><span class="uav-item-desc">Пользователь: ',  
          '</span>',
          '</span> <span class="uav-item-row uav-item-date-start"><span class="uav-item-desc">Время старта</span>',
          '</span>  <span class="uav-item-row uav-item-date-end"><span class="uav-item-desc">Время финиша</span>',
           '</span>',
          '<input type="hidden" id="',
           '"></input>']
 }