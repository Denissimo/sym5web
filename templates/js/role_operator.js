console.log('role_operator');
function setTimeSliderWatch()
{
   timeSlider.watch("timeExtent", function () { 
    flyZoneLayer.definitionExpression=buildDefinitionQueryFly();
  });
}

function setFlightSidebar()
{

 var els=document.getElementsByClassName("sidebar-title");
 els[0].innerText="Заявки на полеты";
         document
          .getElementById("createFlight")
          .addEventListener("click", makeNewFlight);
         document
           .getElementById("checkFlight")
           .addEventListener("click", myCheckFlight); 
          
          
                   
  
  //*************************загрузка KML файла
        
          
      idRoute= $.cookie("idRoute");
      if(idRoute==null) idRoute="";
      if (idRoute=="") 
      {
        tableLayer.definitionExpression="objectid < 0";
        tableZoneLayer.definitionExpression="objectid < 0";  
      }
      else
      {
        tableLayer.definitionExpression="routeid = '"+idRoute+"'";
        tableZoneLayer.definitionExpression="routeid = '"+idRoute+"'";
      }
      
       getUserFly();
}