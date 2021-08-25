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
      static      templateZoneFly = {
        
        title: "Полетные зоны",
        returnGeometry : true,
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "sdate",
                label: "Старт"
              }
              ,
              {
                fieldName: "edate",
                label: "Финиш"
              },
              {
                fieldName: "status",
                label: "Статус"
              }
            ]
          }
        ]
      };


      static templateReal = {
        // autocasts as new PopupTemplate()
        title: "{serial}",
        content: [
          {
            // It is also possible to set the fieldInfos outside of the content
            // directly in the popupTemplate. If no fieldInfos is specifically set
            // in the content, it defaults to whatever may be set within the popupTemplate.
            type: "fields",
            fieldInfos: [
              {
                fieldName: "Altitude",
                label: "Высота",
                format: {
                  places: 0,
                  digitSeparator: true,
                },
              },
              {
                fieldName: "Speed",
                label: "Скорость",
                format: {
                  places: 0,
                  digitSeparator: true,
                },
              },
              {
                fieldName: "Heading",
                label: "Курс",
                format: {
                  places: 0,
                  digitSeparator: true,
                },
              },
            ],
          },
        ],
      };


}