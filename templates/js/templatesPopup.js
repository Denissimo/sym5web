class templatesPopup{
    static   templateBuffer = {
   
        title: "Конфликт",
        content: [
          {
            type: "fields",
            
            fieldInfos: [
                {
                    fieldName: "type",
                    label:    "Тип"
                },
                
                    {
                        fieldName: "name",
                        label:    "Наименование"
                    },  
              {
                fieldName: "description",
                label: "Описание"
              }
              ,
              {
                fieldName: "altitude",
                label: "Высота"
              }
              

            ]
          }
        ]
      };
    static  templateBufferRoute = {
   
        title: "Пересечение c полетом",
        returnGeometry : true,
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "start",
                label: "Старт"
              }
              ,
              {
                fieldName: "finish",
                label: "Финиш"
              }/*,
              {
                fieldName: "owner",
                label: "Клиент"
              }*/
            ]
          }
        ]
      };


}